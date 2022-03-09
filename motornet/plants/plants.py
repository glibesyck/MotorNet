import numpy as np
import tensorflow as tf
from tensorflow.keras.layers import Lambda
from motornet.plants.skeletons import TwoDofArm, PointMass
from motornet.plants.muscles import CompliantTendonHillMuscle, ReluMuscle


class Plant:

    def __init__(self, skeleton, muscle_type, timestep: float = 0.01, integration_method: str = 'euler', **kwargs):

        self.__name__ = 'Plant'
        self.skeleton = skeleton
        self.dof = self.skeleton.dof
        self.space_dim = self.skeleton.space_dim
        self.state_dim = self.skeleton.state_dim
        self.output_dim = self.skeleton.output_dim
        self.excitation_noise_sd = kwargs.get('excitation_noise_sd', 0.)
        self.dt = timestep
        self.half_dt = self.dt / 2  # to reduce online calculations for RK4 integration
        self.integration_method = integration_method.casefold()  # make string fully in lower case

        # default is no delay
        proprioceptive_delay = kwargs.get('proprioceptive_delay', self.dt)
        visual_delay = kwargs.get('visual_delay', self.dt)
        self.proprioceptive_delay = int(proprioceptive_delay / self.dt)
        self.visual_delay = int(visual_delay / self.dt)

        # handle position & velocity ranges
        pos_lower_bound = kwargs.get('pos_lower_bound', self.skeleton.pos_lower_bound)
        pos_upper_bound = kwargs.get('pos_upper_bound', self.skeleton.pos_upper_bound)
        vel_lower_bound = kwargs.get('vel_lower_bound', self.skeleton.vel_lower_bound)
        vel_upper_bound = kwargs.get('vel_upper_bound', self.skeleton.vel_upper_bound)
        pos_bounds = self._set_state_limit_bounds(lb=pos_lower_bound, ub=pos_upper_bound)
        vel_bounds = self._set_state_limit_bounds(lb=vel_lower_bound, ub=vel_upper_bound)
        self.pos_upper_bound = tf.constant(pos_bounds[:, 1], dtype=tf.float32)
        self.pos_lower_bound = tf.constant(pos_bounds[:, 0], dtype=tf.float32)
        self.vel_upper_bound = tf.constant(vel_bounds[:, 1], dtype=tf.float32)
        self.vel_lower_bound = tf.constant(vel_bounds[:, 0], dtype=tf.float32)

        self.skeleton.build(
            timestep=self.dt,
            pos_upper_bound=self.pos_upper_bound,
            pos_lower_bound=self.pos_lower_bound,
            vel_upper_bound=self.vel_upper_bound,
            vel_lower_bound=self.vel_lower_bound,
            integration_method=self.integration_method)

        # initialize muscle system
        self.muscle = muscle_type
        self.force_index = self.muscle.state_name.index('force')  # column index of muscle state containing output force
        self.MusclePaths = []  # a list of all the muscle paths
        self.n_muscles = 0
        self.input_dim = 0
        self.muscle_name = []
        self.muscle_state_dim = self.muscle.state_dim
        self.geometry_state_dim = 2 + self.skeleton.dof  # musculotendon length & velocity + as many moments as dofs
        self.tobuild__muscle = self.muscle.to_build_dict
        self.tobuild__default = self.muscle.to_build_dict_default

        # these attributes hold numpy versions of the variables, which are easier to manipulate in the `build` method
        self._path_fixation_body = np.empty((1, 1, 0)).astype('float32')
        self._path_coordinates = np.empty((1, self.skeleton.space_dim, 0)).astype('float32')
        self._muscle_index = np.empty(0).astype('float32')
        self._muscle_transitions = None
        self._row_splits = None

        # these attributes will hold the `tf.constant` version of the above
        self.path_fixation_body = None
        self.path_coordinates = None
        self.muscle_index = None
        self.muscle_transitions = None
        self.row_splits = None

        self.default_endpoint_load = tf.constant(
            value=tf.zeros((1, self.skeleton.space_dim), dtype=tf.float32),
            name='default_endpoint_load')
        self.default_joint_load = tf.constant(
            value=tf.zeros((1, self.skeleton.dof), dtype=tf.float32),
            name='default_joint_load')

        # Lambda wraps to avoid memory leaks
        self._get_initial_state_fn = Lambda(lambda x: self._get_initial_state(*x), name='get_initial_state')
        self._get_geometry_fn = Lambda(lambda x: self._get_geometry(x), name='get_geometry')
        self._update_ode_fn = Lambda(lambda x: self._update_ode(*x), name='plant_update_ODE')
        self._draw_randu_states_fn = Lambda(lambda x: self._draw_random_uniform_states(x), name='draw_randu_states')
        self._draw_fixed_states_fn = Lambda(lambda x: self._draw_fixed_states(*x), name='draw_fixed_states')

        self._parse_initial_joint_state_fn = Lambda(
            function=lambda x: self._parse_initial_joint_state(*x),
            name='parse_initial_joint_state')

        self._state2target = Lambda(
            function=lambda x: tf.transpose(tf.repeat(x[0][:, :, tf.newaxis], x[1], axis=-1), [0, 2, 1]),
            name='state2target')

        if self.integration_method == 'euler':
            self._integrate_fn = Lambda(lambda x: self._euler(*x), name='plant_euler_integration')
        elif self.integration_method in ('rk4', 'rungekutta4', 'runge-kutta4', 'runge-kutta-4'):  # tuple faster thn set
            self._integrate_fn = Lambda(lambda x: self._rungekutta4(*x), name='plant_rk4_integration')

    def state2target(self, state, n_timesteps=1):
        return self._state2target((state, n_timesteps))

    def add_muscle(self, path_fixation_body: list, path_coordinates: list, name='', **kwargs):
        path_fixation_body = np.array(path_fixation_body).astype('float32').reshape((1, 1, -1))
        n_points = path_fixation_body.size
        path_coordinates = np.array(path_coordinates).astype('float32').T[np.newaxis, :, :]
        assert path_coordinates.shape[1] == self.skeleton.space_dim
        assert path_coordinates.shape[2] == n_points
        self.n_muscles += 1
        self.input_dim += self.muscle.input_dim

        # path segments & coordinates should be a (batch_size * n_coordinates  * n_segments * (n_muscles * n_points)
        self._path_fixation_body = np.concatenate([self._path_fixation_body, path_fixation_body], axis=-1)
        self._path_coordinates = np.concatenate([self._path_coordinates, path_coordinates], axis=-1)
        self._muscle_index = np.hstack([self._muscle_index, np.tile(np.max(self.n_muscles), [n_points])])
        # indexes where the next item is from a different muscle, to indicate when their difference is meaningless
        self._muscle_transitions = np.diff(self._muscle_index.reshape((1, 1, -1))) == 1.
        # to create the ragged tensors when collapsing each muscle's segment values
        n_total_points = np.array([len(self._muscle_index)])
        self._row_splits = np.concatenate([np.zeros(1), np.diff(self._muscle_index).nonzero()[0] + 1, n_total_points-1])

        self.path_fixation_body = tf.constant(self._path_fixation_body, name='path_fixation_body')
        self.path_coordinates = tf.constant(self._path_coordinates, name='path_coordinates')
        self.muscle_index = tf.constant(self._muscle_index, name='muscle')
        self.muscle_transitions = tf.constant(self._muscle_transitions, name='muscle_transitions')
        self.row_splits = tf.constant(self._row_splits, name='row_splits', dtype=tf.int32)

        # kwargs loop
        for key, val in kwargs.items():
            if key in self.tobuild__muscle:
                self.tobuild__muscle[key].append(val)
        for key, val in self.tobuild__muscle.items():
            # if not added in the kwargs loop
            if len(val) < self.n_muscles:
                # if the muscle object contains a default, use it, else raise error
                if key in self.tobuild__default:
                    self.tobuild__muscle[key].append(self.tobuild__default[key])
                else:
                    raise ValueError('Missing keyword argument ' + key + '.')
        self.muscle.build(timestep=self.dt, integration_method=self.integration_method, **self.tobuild__muscle)

        if name == '':
            name = 'muscle_' + str(self.n_muscles)
        self.muscle_name.append(name)

    def __call__(self, muscle_input, joint_state, muscle_state, geometry_state, **kwargs):
        endpoint_load = kwargs.get('endpoint_load', self.default_endpoint_load)
        joint_load = kwargs.get('joint_load', self.default_joint_load)
        muscle_input += tf.random.normal(tf.shape(muscle_input), stddev=self.excitation_noise_sd)

        new_joint_state, new_muscle_state, new_geometry_state = self.integrate(
            muscle_input, joint_state, muscle_state, geometry_state, endpoint_load, joint_load)

        new_cartesian_state = self.skeleton.joint2cartesian(joint_state=new_joint_state)
        return new_joint_state, new_cartesian_state, new_muscle_state, new_geometry_state

    def integrate(self, muscle_input, joint_state, muscle_state, geometry_state, endpoint_load, joint_load):
        return self._integrate_fn((muscle_input, joint_state, muscle_state, geometry_state, endpoint_load, joint_load))

    def _euler(self, excitation, joint_state, muscle_state, geometry_state, endpoint_load, joint_load):
        states0 = {"joint": joint_state, "muscle": muscle_state, "geometry": geometry_state}
        state_derivative = self.update_ode(excitation, states0, endpoint_load, joint_load)
        states = self.integration_step(self.dt, state_derivative=state_derivative, states=states0)
        return states["joint"], states["muscle"], states["geometry"]

    def _rungekutta4(self, excitation, joint_state, muscle_state, geometry_state, endpoint_load, joint_load):
        states0 = {"joint": joint_state, "muscle": muscle_state, "geometry": geometry_state}
        k1 = self.update_ode(excitation, states=states0, endpoint_load=endpoint_load, joint_load=joint_load)
        states = self.integration_step(self.half_dt, state_derivative=k1, states=states0)
        k2 = self.update_ode(excitation, states=states, endpoint_load=endpoint_load, joint_load=joint_load)
        states = self.integration_step(self.half_dt, state_derivative=k2, states=states)
        k3 = self.update_ode(excitation, states=states, endpoint_load=endpoint_load, joint_load=joint_load)
        states = self.integration_step(self.dt, state_derivative=k3, states=states)
        k4 = self.update_ode(excitation, states=states, endpoint_load=endpoint_load, joint_load=joint_load)
        k = {key: (k1[key] + 2 * (k2[key] + k3[key]) + k4[key]) / 6 for key in k1.keys()}
        states = self.integration_step(self.dt, state_derivative=k, states=states0)
        return states["joint"], states["muscle"], states["geometry"]

    def integration_step(self, dt, state_derivative, states):
        new_states = {
            "muscle": self.muscle.integrate(dt, state_derivative["muscle"], states["muscle"], states["geometry"]),
            "joint": self.skeleton.integrate(dt, state_derivative["joint"], states["joint"])}
        new_states["geometry"] = self.get_geometry(new_states["joint"])
        return new_states

    def _update_ode(self, excitation, states, endpoint_load, joint_load):
        moments = tf.slice(states["geometry"], [0, 2, 0], [-1, -1, -1])
        forces = tf.slice(states["muscle"], [0, self.force_index, 0], [-1, 1, -1])
        generalized_forces = - tf.reduce_sum(forces * moments, axis=-1) + joint_load
        state_derivative = {
            "muscle": self.muscle.update_ode(excitation, states["muscle"]),
            "joint": self.skeleton.update_ode(generalized_forces, states["joint"], endpoint_load=endpoint_load)}
        return state_derivative

    def _get_geometry(self, joint_state):
        # dxy_ddof --> (n_batches, n_dof, n_dof, n_points)
        xy, dxy_dt, dxy_ddof = self.skeleton.path2cartesian(self.path_coordinates, self.path_fixation_body, joint_state)
        diff_pos = xy[:, :, 1:] - xy[:, :, :-1]
        diff_vel = dxy_dt[:, :, 1:] - dxy_dt[:, :, :-1]
        diff_ddof = dxy_ddof[:, :, :, 1:] - dxy_ddof[:, :, :, :-1]

        # length, velocity and moment of each path segment
        # -----------------------
        # segment length is just the euclidian distance between the two points
        segment_len = tf.sqrt(tf.reduce_sum(diff_pos ** 2, axis=1, keepdims=True))
        # segment velocity is trickier: we are not after radial velocity but relative velocity.
        # https://math.stackexchange.com/questions/1481701/time-derivative-of-the-distance-between-2-points-moving-over-time
        # Formally, if segment_len=0 then segment_vel is not defined. We could substitute with 0 here because a
        # muscle segment will never flip backward, so the velocity can only be positive afterwards anyway.
        # segment_vel = tf.where(segment_len == 0, tf.zeros(1), segment_vel)
        segment_vel = tf.reduce_sum(diff_pos * diff_vel / segment_len, axis=1, keepdims=True)
        # for moment arm calculation, see Sherman, Seth, Delp (2013) -- DOI:10.1115/DETC2013-13633
        segment_moments = tf.reduce_sum(diff_ddof * diff_pos[:, :, tf.newaxis], axis=1) / segment_len

        # remove differences between points that don't belong to the same muscle
        segment_len_cleaned = tf.where(self.muscle_transitions, 0., segment_len)
        segment_vel_cleaned = tf.where(self.muscle_transitions, 0., segment_vel)
        segment_mom_cleaned = tf.where(self.muscle_transitions, 0., segment_moments)

        # flip all dimensions to allow making ragged tensors below (you need to do it from the rows)
        segment_len_flipped = tf.transpose(segment_len_cleaned, [2, 1, 0])
        segment_vel_flipped = tf.transpose(segment_vel_cleaned, [2, 1, 0])
        segment_mom_flipped = tf.transpose(segment_mom_cleaned, [2, 1, 0])

        # create ragged tensors, which allows to hold each individual muscle's fixation points on the second dimension
        # in case there is not the same number of fixation point for each muscles
        segment_len_ragged = tf.RaggedTensor.from_row_splits(segment_len_flipped, row_splits=self.row_splits)
        segment_vel_ragged = tf.RaggedTensor.from_row_splits(segment_vel_flipped, row_splits=self.row_splits)
        segment_mom_ragged = tf.RaggedTensor.from_row_splits(segment_mom_flipped, row_splits=self.row_splits)

        # now we can sum all segments' contribution along the ragged dimension, that is along all fixation points for
        # each muscle
        musculotendon_len = tf.reduce_sum(segment_len_ragged, axis=1)
        musculotendon_vel = tf.reduce_sum(segment_vel_ragged, axis=1)
        moments = tf.reduce_sum(segment_mom_ragged, axis=1)

        # pack all this into one state array and flip the dimensions back (batch_size * n_features * n_muscles)
        geometry_state = tf.transpose(tf.concat([musculotendon_len, musculotendon_vel, moments], axis=1), [2, 1, 0])
        return geometry_state

    def _get_initial_state(self, batch_size, joint_state=None):
        if joint_state is not None and tf.shape(joint_state)[0] > 1:
            batch_size = tf.shape(joint_state)[0]

        joint0 = self.parse_initial_joint_state(joint_state=joint_state, batch_size=batch_size)
        cartesian0 = self.skeleton.joint2cartesian(joint_state=joint0)
        geometry0 = self.get_geometry(joint0)
        muscle0 = self.muscle.get_initial_muscle_state(batch_size=batch_size, geometry_state=geometry0)
        return [joint0, cartesian0, muscle0, geometry0]

    def _draw_random_uniform_states(self, batch_size):
        # create a batch of new targets in the correct format for the tensorflow compiler
        sz = (batch_size, self.dof)
        lo = self.pos_lower_bound
        hi = self.pos_upper_bound
        pos = tf.random.uniform(sz, lo, hi)
        vel = tf.zeros(sz)
        return tf.concat([pos, vel], axis=1)

    def _parse_initial_joint_state(self, joint_state, batch_size):
        if joint_state is None:
            joint0 = self.draw_random_uniform_states(batch_size=batch_size)
        else:
            if tf.shape(joint_state)[0] > 1:
                batch_size = 1
            n_state = joint_state.shape[1]
            if n_state == self.state_dim:
                position, velocity = tf.split(joint_state, 2, axis=1)
                joint0 = self.draw_fixed_states(position=position, velocity=velocity, batch_size=batch_size)
            elif n_state == int(self.state_dim / 2):
                joint0 = self.draw_fixed_states(position=joint_state, batch_size=batch_size)
            else:
                raise ValueError

        return joint0

    def _draw_fixed_states(self, position, velocity, batch_size):
        if velocity is None:
            velocity = np.zeros_like(position)
        # in case input is a list, a numpy array or a tensorflow array
        pos = np.array(position)
        vel = np.array(velocity)
        if len(pos.shape) == 1:
            pos = pos.reshape((1, -1))
        if len(vel.shape) == 1:
            vel = vel.reshape((1, -1))

        assert pos.shape == vel.shape
        assert pos.shape[1] == self.dof
        assert len(pos.shape) == 2
        assert np.all(pos >= self.pos_lower_bound)
        assert np.all(pos <= self.pos_upper_bound)
        assert np.all(vel >= self.vel_lower_bound)
        assert np.all(vel <= self.vel_upper_bound)

        pos = tf.cast(pos, dtype=tf.float32)
        vel = tf.cast(vel, dtype=tf.float32)
        states = tf.concat([pos, vel], axis=1)
        return tf.tile(states, [batch_size, 1])

    def _set_state_limit_bounds(self, lb, ub):
        lb = np.array(lb).reshape((-1, 1))  # ensure this is a 2D array
        ub = np.array(ub).reshape((-1, 1))
        bounds = np.hstack((lb, ub))
        bounds = bounds * np.ones((self.dof, 2))  # if one bound pair inputed, broadcast to dof rows
        return bounds

    def get_save_config(self):
        muscle_cfg = self.muscle.get_save_config()
        skeleton_cfg = self.skeleton.get_save_config()
        cfg = {'Muscle': muscle_cfg,
               'Skeleton': skeleton_cfg,
               'dt': self.dt, 'muscle_names': self.muscle_name,
               'excitation_noise_sd': self.excitation_noise_sd, 'n_muscles': self.n_muscles,
               'proprioceptive_delay': self.proprioceptive_delay, 'visual_delay': self.visual_delay}
        return cfg

    def get_geometry(self, joint_state):
        return self._get_geometry_fn(joint_state)

    def update_ode(self, excitation, states, endpoint_load, joint_load):
        return self._update_ode_fn((excitation, states, endpoint_load, joint_load))

    def get_initial_state(self, batch_size=1, joint_state=None):
        return self._get_initial_state(batch_size, joint_state)

    def draw_random_uniform_states(self, batch_size=1):
        return self._draw_randu_states_fn(batch_size)

    def parse_initial_joint_state(self, joint_state, batch_size=1):
        return self._parse_initial_joint_state_fn((joint_state, batch_size))

    def draw_fixed_states(self, position, velocity=None, batch_size=1):
        return self._draw_fixed_states_fn((position, velocity, batch_size))

    def joint2cartesian(self, joint_state):
        return self.skeleton.joint2cartesian(joint_state=joint_state)

    def setattr(self, name: str, value):
        self.__setattr__(name, value)


class RigidTendonArm26(Plant):
    """
    This pre-built plant class is an implementation of a "lumped-muscle" model from Kistemaker et al. (2010),
    J. Neurophysiol. Because lumped-muscle models are functional approximations of biological reality, this class'
    geometry does not rely on the default geometry methods, but on its own, custom-made geometry.
    """

    def __init__(self, muscle_type, skeleton=None, timestep=0.01, **kwargs):
        sho_limit = np.deg2rad([0, 135])  # mechanical constraints - used to be -90 180
        elb_limit = np.deg2rad([0, 155])
        pos_lower_bound = kwargs.pop('pos_lower_bound', (sho_limit[0], elb_limit[0]))
        pos_upper_bound = kwargs.pop('pos_upper_bound', (sho_limit[1], elb_limit[1]))

        if skeleton is None:
            skeleton = TwoDofArm(m1=1.82, m2=1.43, L1g=.135, L2g=.165, I1=.051, I2=.057, L1=.309, L2=.333)

        super().__init__(
            skeleton=skeleton,
            muscle_type=muscle_type,
            timestep=timestep,
            pos_lower_bound=pos_lower_bound,
            pos_upper_bound=pos_upper_bound,
            **kwargs)

        # build muscle system
        self.muscle_state_dim = self.muscle.state_dim
        self.geometry_state_dim = 2 + self.skeleton.dof  # musculotendon length & velocity + as many moments as dofs
        self.n_muscles = 6
        self.input_dim = self.n_muscles
        self.muscle_name = ['pectoralis', 'deltoid', 'brachioradialis', 'tricepslat', 'biceps', 'tricepslong']
        self.muscle.build(
            timestep=self.dt,
            max_isometric_force=[838, 1207, 1422, 1549, 414, 603],
            tendon_length=[0.039, 0.066, 0.172, 0.187, 0.204, 0.217],
            optimal_muscle_length=[0.134, 0.140, 0.092, 0.093, 0.137, 0.127],
            normalized_slack_muscle_length=self.tobuild__default['normalized_slack_muscle_length'])

        a0 = [0.151, 0.2322, 0.2859, 0.2355, 0.3329, 0.2989]
        a1 = [-.03, .03, 0, 0, -.03, .03, 0, 0, -.014, .025, -.016, .03]
        a2 = [0, 0, 0, 0, 0, 0, 0, 0, -4e-3, -2.2e-3, -5.7e-3, -3.2e-3]
        a3 = [np.pi / 2, 0.]
        self.a0 = tf.constant(a0, shape=(1, 1, 6), dtype=tf.float32)
        self.a1 = tf.constant(a1, shape=(1, 2, 6), dtype=tf.float32)
        self.a2 = tf.constant(a2, shape=(1, 2, 6), dtype=tf.float32)
        self.a3 = tf.constant(a3, shape=(1, 2, 1), dtype=tf.float32)

    def _get_geometry(self, joint_state):
        old_pos, old_vel = tf.split(joint_state[:, :, tf.newaxis], 2, axis=1)
        old_pos = old_pos - self.a3
        moment_arm = old_pos * self.a2 * 2 + self.a1
        musculotendon_len = tf.reduce_sum((self.a1 + old_pos * self.a2) * old_pos, axis=1, keepdims=True) + self.a0
        musculotendon_vel = tf.reduce_sum(old_vel * moment_arm, axis=1, keepdims=True)
        return tf.concat([musculotendon_len, musculotendon_vel, moment_arm], axis=1)


class CompliantTendonArm26(RigidTendonArm26):
    """
    This is the compliant-tendon version of the "RigidTendonArm26" class above
    """

    def __init__(self, timestep=0.0002, skeleton=None, **kwargs):
        integration_method = kwargs.pop('integration_method', 'rk4')
        if skeleton is None:
            skeleton = TwoDofArm(m1=2.10, m2=1.65, L1g=.146, L2g=.179, I1=.024, I2=.025, L1=.335, L2=.263)

        super().__init__(
            muscle_type=CompliantTendonHillMuscle(),
            skeleton=skeleton,
            timestep=timestep,
            integration_method=integration_method,
            **kwargs)

        # build muscle system
        self.muscle.build(
            timestep=timestep,
            max_isometric_force=[838, 1207, 1422, 1549, 414, 603],
            tendon_length=[0.070, 0.070, 0.172, 0.187, 0.204, 0.217],
            optimal_muscle_length=[0.134, 0.140, 0.092, 0.093, 0.137, 0.127],
            normalized_slack_muscle_length=self.tobuild__default['normalized_slack_muscle_length'])

        a0 = [0.182, 0.2362, 0.2859, 0.2355, 0.3329, 0.2989]
        self.a0 = tf.constant(a0, shape=(1, 1, 6), dtype=tf.float32)


class ReluPointMass24(Plant):
    def __init__(self, timestep=0.01, **kwargs):
        f = kwargs.pop('max_isometric_force', 500)
        skeleton = PointMass(space_dim=2)
        super().__init__(skeleton=skeleton, muscle_type=ReluMuscle(), timestep=timestep, **kwargs)

        # path coordinates for each muscle
        pc_ur = [[2, 2], [0, 0]]
        pc_ul = [[-2, 2], [0, 0]]
        pc_lr = [[2, -2], [0, 0]]
        pc_ll = [[-2, -2], [0, 0]]

        self.add_muscle(path_fixation_body=[0, 1], path_coordinates=pc_ur, name='UpperRight', max_isometric_force=f)
        self.add_muscle(path_fixation_body=[0, 1], path_coordinates=pc_ul, name='UpperLeft', max_isometric_force=f)
        self.add_muscle(path_fixation_body=[0, 1], path_coordinates=pc_lr, name='LowerRight', max_isometric_force=f)
        self.add_muscle(path_fixation_body=[0, 1], path_coordinates=pc_ll, name='LowerLeft', max_isometric_force=f)
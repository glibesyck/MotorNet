"""
This module implements tensorflow.keras.callbacks.Callback subclasses.
For more information from the tensorflow package on what callbacks are and what they can achieve, feel free to refer to
https://www.tensorflow.org/api_docs/python/tf/keras/callbacks/Callback.
"""

import copy
from tensorflow.keras.callbacks import Callback, LearningRateScheduler
import matplotlib.pyplot as plt
import numpy as np
from IPython.display import clear_output
from tensorflow.python.framework import ops
from tensorflow.python.keras import backend


class BatchLogger(Callback):
    """
    In tensorflow, the default callbacks log performance metrics at the end of each epoch step.
    This callback logs performance metrics at the end of each batch step instead.
    """
    def __init__(self):
        """
        No inputs.
        """
        super().__init__()
        self.history = {}
        self.weights_log = []

    def on_train_begin(self, logs=None):
        """Called at the start of training. This should only be called on train mode.
        Logs the initial model weights.
        """
        # log initial weights
        self.weights_log.append(copy.deepcopy(self.model.weights))

    def on_batch_end(self, batch, logs=None):
        """Called at the end of each batch. This saves all metrics in `logs`, as well as the model weights.
        """
        logs = logs or {}
        for metric, v in logs.items():
            self.history.setdefault(metric, []).append(v)
        self.weights_log.append(copy.deepcopy(self.model.weights))


class TrainingPlotter(Callback):
    def __init__(self, task, plot_freq=20, plot_n_t=100, plot_loss=True, plot_trials=3):
        super().__init__()
        self.task = task
        self.plot_freq = plot_freq
        self.plot_n_t = plot_n_t
        self.plot_loss = plot_loss
        self.plot_trials = plot_trials
        self.logs = []
        self.losses = {}
        self.loss_weights = {task.loss_names[loss] + '_loss': weight for loss, weight in self.task.loss_weights.items()}
        self.last_visited_batch = None
        self.training_stop_history = []

    def on_train_begin(self, logs=None):
        # not in `on_training_end` to allow logging even after user interruption of training
        if self.last_visited_batch is not None:
            if len(self.training_stop_history) > 0:
                self.last_visited_batch += self.training_stop_history[-1]
            self.training_stop_history.append(self.last_visited_batch)

    def on_batch_end(self, batch, logs=None):

        if self.losses == {}:  # initialize the losses dictionary if needed
            self.losses = {name.replace('_', ' '): [] for name in logs.keys() if name.__contains__('loss')}
            self.losses['kernel weight loss'] = []
            self.losses['recurrent weight loss'] = []
            self.losses['output kernel loss'] = []

        for loss, val in logs.items():
            if loss.__contains__('loss'):
                if loss.__contains__('_loss'):
                    weight = self.loss_weights[loss]
                else:
                    weight = 1
                self.losses[loss.replace('_', ' ')].append(np.array(val) * weight)

        self.losses['kernel weight loss'].append(np.array(self.model.losses[0]))
        self.losses['recurrent weight loss'].append(np.array(self.model.losses[1]))
        self.losses['output kernel loss'].append(np.array(self.model.losses[2]))

        self.logs.append(logs)
        self.last_visited_batch = batch

        plot_time = batch % self.plot_freq == 0 or batch == 0
        if plot_time and (self.plot_loss or self.plot_trials > 0):
            clear_output(wait=True)

        if plot_time and self.plot_loss:
            fig = plt.figure(constrained_layout=True)
            gs = fig.add_gridspec(1, 1)
            ax1 = fig.add_subplot(gs[0, 0])
            for loss, val in self.losses.items():
                ax1.plot(val, label=loss)
            for x in self.training_stop_history:
                plt.axvline(x=x, linewidth=0.8, linestyle='--', c=(0.2, 0.2, 0.2))
            ax1.set(xlabel='iteration', ylabel='weighted loss value')
            ax1.legend()
            plt.show()

        if plot_time and self.plot_trials > 0:
            [inputs, targets, init_states] = self.task.generate(batch_size=self.plot_trials, n_timesteps=self.plot_n_t)
            results = self.model([inputs, init_states], training=False)
            if self.task.do_recompute_targets:
                targets = self.task.recompute_targets((inputs, init_states), targets, results)

            for trial in range(self.plot_trials):
                plt.figure(figsize=(14, 2.5)).set_tight_layout(True)

                plt.subplot(141)
                plt.plot(np.array(targets[trial, :, 0]).squeeze(), color='#1f77b4', linestyle='dashed')
                plt.plot(np.array(targets[trial, :, 1]).squeeze(), color='#ff7f0e', linestyle='dashed')
                plt.plot(np.array(results['cartesian position'][trial, :, 0]).squeeze(), color='#1f77b4', label='x')
                plt.plot(np.array(results['cartesian position'][trial, :, 1]).squeeze(), color='#ff7f0e', label='y')
                plt.legend()
                plt.xlabel('time (ms)')
                plt.ylabel('x/y position')

                plt.subplot(142)
                plt.plot(np.array(results['muscle state'][trial, :, 0, :]).squeeze())
                plt.xlabel('time (ms)')
                plt.ylabel('activation (a.u.)')

                plt.subplot(143)
                plt.plot(np.array(results['muscle state'][trial, :, 2, :]).squeeze())
                plt.xlabel('time (ms)')
                plt.ylabel('muscle velocity (m/sec)')

                plt.subplot(144)
                plt.plot(np.array(results['gru_hidden0'][trial, :, :]).squeeze())
                plt.xlabel('time (ms)')
                plt.ylabel('hidden unit activity')

                plt.show()


class CustomLearningRateScheduler(LearningRateScheduler):
    def __init__(self, scheduler, verbose=0):
        super().__init__(scheduler, verbose)

    def on_epoch_begin(self, epoch, logs=None):
        return None
    
    def on_batch_end(self, batch, logs=None):
        if not hasattr(self.model.optimizer, 'lr'):
            raise ValueError('Optimizer must have a "lr" attribute.')
        try:  # new API
            lr = float(backend.get_value(self.model.optimizer.lr))
            lr = self.schedule(batch, lr)
        except TypeError:  # Support for old API for backward compatibility
            lr = self.schedule(batch)
        if not isinstance(lr, (ops.Tensor, float, np.float32, np.float64)):
            raise ValueError('The output of the "schedule" function '
                             'should be float.')
        if isinstance(lr, ops.Tensor) and not lr.dtype.is_floating:
            raise ValueError('The dtype of Tensor should be float')
        backend.set_value(self.model.optimizer.lr, backend.get_value(lr))
        if self.verbose > 0:
            print('\nBatch %05d: LearningRateScheduler reducing learning '
                  'rate to %s.' % (batch + 1, lr))


# See https://github.com/tensorflow/tensorflow/issues/42872
class TensorflowFix(Callback):
    def __init__(self):
        super(TensorflowFix, self).__init__()
        self._supports_tf_logs = True
        self._backup_loss = None

    def on_train_begin(self, logs=None):
        self._backup_loss = {**self.model.loss}

    def on_train_batch_end(self, batch, logs=None):
        self.model.loss = self._backup_loss

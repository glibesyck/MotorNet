Search.setIndex({docnames:["documentation/changelog","documentation/install","documentation/overview","index","modules","motornet","motornet.nets","motornet.nets.callbacks","motornet.nets.layers","motornet.nets.losses","motornet.nets.models","motornet.plants","motornet.plants.muscles","motornet.plants.skeletons","motornet.task","motornet.utils","motornet.utils.plotor","tutorials/build-net","tutorials/build-plant","tutorials/losses","tutorials/muscle-demo","tutorials/states","tutorials/tasks","tutorials/train-net"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,nbsphinx:4,sphinx:56},filenames:["documentation\\changelog.md","documentation\\install.md","documentation\\overview.rst","index.rst","modules.rst","motornet.rst","motornet.nets.rst","motornet.nets.callbacks.rst","motornet.nets.layers.rst","motornet.nets.losses.rst","motornet.nets.models.rst","motornet.plants.rst","motornet.plants.muscles.rst","motornet.plants.skeletons.rst","motornet.task.rst","motornet.utils.rst","motornet.utils.plotor.rst","tutorials\\build-net.rst","tutorials\\build-plant.rst","tutorials\\losses.rst","tutorials\\muscle-demo.rst","tutorials\\states.rst","tutorials\\tasks.rst","tutorials\\train-net.rst"],objects:{"":[[5,0,0,"-","motornet"]],"motornet.nets":[[7,0,0,"-","callbacks"],[8,0,0,"-","layers"],[9,0,0,"-","losses"],[10,0,0,"-","models"]],"motornet.nets.callbacks":[[7,1,1,"","BatchLogger"],[7,1,1,"","BatchwiseLearningRateScheduler"],[7,1,1,"","TensorflowFix"],[7,1,1,"","TrainingPlotter"]],"motornet.nets.callbacks.BatchLogger":[[7,2,1,"","on_batch_end"],[7,2,1,"","on_train_begin"]],"motornet.nets.callbacks.BatchwiseLearningRateScheduler":[[7,2,1,"","on_batch_end"],[7,2,1,"","on_epoch_begin"]],"motornet.nets.callbacks.TensorflowFix":[[7,2,1,"","on_train_batch_end"],[7,2,1,"","on_train_begin"]],"motornet.nets.callbacks.TrainingPlotter":[[7,2,1,"","on_batch_end"],[7,2,1,"","on_train_begin"]],"motornet.nets.layers":[[8,1,1,"","GRUNetwork"],[8,1,1,"","Network"],[8,3,1,"","recttanh"]],"motornet.nets.layers.GRUNetwork":[[8,2,1,"","build"],[8,2,1,"","forward_pass"],[8,2,1,"","get_initial_state"],[8,2,1,"","get_save_config"]],"motornet.nets.layers.Network":[[8,2,1,"","call"],[8,2,1,"","forward_pass"],[8,2,1,"","from_config"],[8,2,1,"","get_base_config"],[8,2,1,"","get_base_initial_state"],[8,2,1,"","get_initial_state"],[8,2,1,"","get_save_config"]],"motornet.nets.losses":[[9,1,1,"","CompoundedLoss"],[9,1,1,"","L2ActivationL1MuscleVelIndLoss"],[9,1,1,"","L2ActivationLoss"],[9,1,1,"","L2ActivationMuscleVelLoss"],[9,1,1,"","L2Regularizer"],[9,1,1,"","L2xDxActivationLoss"],[9,1,1,"","L2xDxRegularizer"],[9,1,1,"","PositionLoss"],[9,1,1,"","RecurrentActivityRegularizer"]],"motornet.nets.models":[[10,1,1,"","DistalTeacher"],[10,1,1,"","MotorNetModel"]],"motornet.nets.models.DistalTeacher":[[10,2,1,"","from_config"],[10,2,1,"","get_config"],[10,2,1,"","save_model"],[10,2,1,"","train_step"]],"motornet.plants":[[12,0,0,"-","muscles"],[11,0,0,"-","plants"],[13,0,0,"-","skeletons"]],"motornet.plants.muscles":[[12,1,1,"","CompliantTendonHillMuscle"],[12,1,1,"","Muscle"],[12,1,1,"","ReluMuscle"],[12,1,1,"","RigidTendonHillMuscle"],[12,1,1,"","RigidTendonHillMuscleThelen"]],"motornet.plants.muscles.Muscle":[[12,2,1,"","activation_ode"],[12,2,1,"","build"],[12,2,1,"","get_initial_muscle_state"],[12,2,1,"","get_save_config"],[12,2,1,"","integrate"],[12,2,1,"","setattr"],[12,2,1,"","update_ode"]],"motornet.plants.muscles.RigidTendonHillMuscle":[[12,2,1,"","build"]],"motornet.plants.muscles.RigidTendonHillMuscleThelen":[[12,2,1,"","build"]],"motornet.plants.plants":[[11,1,1,"","CompliantTendonArm26"],[11,1,1,"","Plant"],[11,1,1,"","ReluPointMass24"],[11,1,1,"","RigidTendonArm26"]],"motornet.plants.plants.Plant":[[11,2,1,"","add_muscle"],[11,2,1,"","draw_fixed_states"],[11,2,1,"","draw_random_uniform_states"],[11,2,1,"","get_geometry"],[11,2,1,"","get_initial_state"],[11,2,1,"","get_muscle_cfg"],[11,2,1,"","get_save_config"],[11,2,1,"","integrate"],[11,2,1,"","integration_step"],[11,2,1,"","joint2cartesian"],[11,2,1,"","print_muscle_wrappings"],[11,2,1,"","setattr"],[11,2,1,"","state2target"],[11,2,1,"","update_ode"]],"motornet.plants.skeletons":[[13,1,1,"","PointMass"],[13,1,1,"","Skeleton"],[13,1,1,"","TwoDofArm"]],"motornet.plants.skeletons.PointMass":[[13,2,1,"","get_save_config"]],"motornet.plants.skeletons.Skeleton":[[13,2,1,"","build"],[13,2,1,"","clip_velocity"],[13,2,1,"","get_base_config"],[13,2,1,"","get_save_config"],[13,2,1,"","integrate"],[13,2,1,"","joint2cartesian"],[13,2,1,"","path2cartesian"],[13,2,1,"","setattr"],[13,2,1,"","update_ode"]],"motornet.plants.skeletons.TwoDofArm":[[13,2,1,"","get_save_config"]],"motornet.tasks":[[14,1,1,"","CentreOutReach"],[14,1,1,"","DelayedReach"],[14,1,1,"","RandomTargetReach"],[14,1,1,"","RandomTargetReachWithLoads"],[14,1,1,"","Task"]],"motornet.tasks.CentreOutReach":[[14,2,1,"","generate"]],"motornet.tasks.DelayedReach":[[14,2,1,"","generate"]],"motornet.tasks.RandomTargetReach":[[14,2,1,"","generate"]],"motornet.tasks.RandomTargetReachWithLoads":[[14,2,1,"","generate"]],"motornet.tasks.Task":[[14,2,1,"","add_loss"],[14,2,1,"","generate"],[14,2,1,"","get_attributes"],[14,2,1,"","get_initial_state"],[14,2,1,"","get_initial_state_layers"],[14,2,1,"","get_input_dict_layers"],[14,2,1,"","get_input_dim"],[14,2,1,"","get_losses"],[14,2,1,"","get_save_config"],[14,2,1,"","print_attributes"],[14,2,1,"","print_losses"],[14,2,1,"","set_training_params"]],"motornet.utils":[[15,0,0,"-","parallelizer"],[16,0,0,"-","plotor"]],"motornet.utils.plotor":[[16,3,1,"","animate_trajectory"],[16,3,1,"","compute_limits"],[16,3,1,"","plot_2dof_arm_over_time"],[16,3,1,"","plot_pos_over_time"]],motornet:[[6,0,0,"-","nets"],[11,0,0,"-","plants"],[14,0,0,"-","tasks"],[15,0,0,"-","utils"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"0":[7,8,10,11,12,13,14,16],"0002":11,"001":12,"00123":[],"00483":[11,12],"01":[11,12],"013193":13,"015":12,"020062":13,"05":[12,14],"051":11,"057":11,"1":[3,7,8,9,10,11,12,13,14,15,16,17,18,20,21,22,23],"10":[9,10,11,12,13,16],"100":7,"1000":13,"1025":9,"1033":9,"1038":9,"104":[11,12],"1115":[12,13],"1152":[11,12],"12":16,"1207":10,"1234":[],"125":12,"12661198":12,"135":11,"13633":13,"15":14,"1531112":12,"155":11,"16":10,"165":11,"18":9,"180496":13,"181479":13,"1992":10,"2":[3,7,8,9,10,11,13,15,16,17,18,20,21,22,23],"20":7,"2003":12,"2010":[11,12],"2013":13,"2015":9,"2022":[0,3],"20884757":[11,12],"25":14,"25905111":13,"26":13,"2985":[11,12],"2d":[11,16],"3":[7,10,14,15,18,20,23],"307":10,"309":[11,13],"31st":[0,3],"333":11,"354":10,"3th":0,"4":[11,13,15,16,20],"4042":9,"42872":7,"43":11,"45":14,"4th":0,"5":8,"50":14,"500":11,"534315":13,"6":[7,11,12,14],"6th":0,"7":[10,12],"70":12,"8":[11,12,14],"82":11,"864572":13,"94":[11,12],"abstract":[3,8,14],"boolean":14,"break":2,"case":[0,11,13],"catch":14,"class":[0,2,3,6,7,8,9,10,11,12,13,14,18,20],"default":[7,8,9,10,11,13,14],"do":[8,11,13,14],"final":[3,18,23],"float":[7,8,9,11,12,13,14,16],"function":[3,7,8,10,11,12,13,15,16],"import":14,"int":[8,11,12,13,16],"long":8,"new":[2,3,7,8,11,12,13,19],"null":11,"return":[2,7,8,10,11,12,13,14,16,21],"true":[7,14],"try":[13,14],"while":[8,11],A:[2,3,5,7,8,9,10,11,12,13,14,16,18],As:7,At:[8,14],Being:2,By:[8,13],For:[1,3,7,8,9,10,11,12,13,14,16],If:[3,7,8,9,11,12,14,15],In:[2,6,7,10,12,17,18],Is:13,It:[3,8,10,12,14,20],Its:[11,16],Not:10,On:[17,18,19,20,21,22,23],The:[2,3,7,8,9,10,11,12,13,14,15,23],Then:[1,11,13,18],There:[1,2,9,11,14],These:[8,11,12,14],To:[3,11,14,17],_:9,ab:9,abc:10,abid:[8,18],about:[2,3,10,14],abov:[2,8,9,11],absolut:10,accord:[9,11,12],accuraci:10,achiev:7,across:13,act:8,activ:[7,8,9,12,14],activation_od:12,activation_weight:9,activity_weight:9,actual:14,actuat:12,ad:[0,11,14],adapt:[1,9],add:[8,11,13,14,16],add_loss:14,add_muscl:[0,11,12],addit:[2,8,10,13,14],address:3,adjust:[2,7,12],adult:12,advanc:3,after:7,ai:3,al:9,algorithm:[3,10],alia:10,all:[2,8,11,12,13,14,20],allevi:3,allow:[0,3,7,10,11,12,13,15],alongsid:11,also:[2,3,11,13,14,17,18,20],altern:14,alwai:[10,11,12],amount:[11,12,15],an:[0,1,2,3,6,7,8,9,10,11,12,13,14,16],anaconda:3,analys:15,analyz:23,angl:13,angular:14,angular_step:14,ani:[2,3,8,12,13,14],animate_trajectori:16,ann:3,anticip:14,anyth:8,api:[2,10],api_doc:7,appl:[0,1],appli:[2,7,8,9,11,13,14],approxim:[3,11],ar:[0,1,2,3,7,8,9,10,11,12,13,14,20,21],arbitrarili:3,architectur:3,arg:[8,10],argument:[0,7,9,10,11,12,13,14],arm210:18,arm26:16,arm:[2,3,11,12,13,16,18],arm_anim:16,around:[2,11,12,14,16],arrai:[1,8,9,10,11,12,14,16],articl:12,artifici:3,ask:[0,14],asm:13,assess:1,assign:[2,14,19],assigned_output:14,associ:[0,11,18],assum:12,attach:[11,13],attr:14,attribut:[0,2,11,12,13,14],aug:13,august:0,author:[],auto:9,automat:[1,13],avail:[1,2,3,14,18],awar:0,axi:[9,16],b:[17,22],backward:[7,8,10,11,13],bar:[],base:[0,2,6,7,8,9,10,11,12,13,14,18],base_lay:8,basic:[18,23],batch:[7,8,11,12,14],batch_siz:[8,11,12,14],batchlogg:7,batchwiselearningrateschedul:7,becaus:[11,13],becom:16,been:[3,7],befor:0,begin:7,behav:12,behaviour:[3,7],being:[0,8,9,11,12,15,16],below:[2,8,13,14],benefit:3,between:[2,8,9,11,14],beyond:3,bia:10,bias:8,bibtex:[],biolog:[3,11],biomech:12,biomechan:[3,11,13,14],bodi:[11,13],bone:[11,13],bool:[7,14],both:9,bound:[11,12,14],boundari:[11,13],bridg:6,brighter:16,build:[3,8,10,11,12,13,14,15,19,22],built:[1,2,3,11,12,18],c:[17,22],calcul:[9,11,13,18],call:[0,1,7,8,10,11,12,13,14,15],callabl:14,callback:[1,4,5,10],callbacklist:10,callbal:14,can:[1,2,3,6,7,8,9,10,11,12,13,14,15,18,19],capabl:[8,10],carri:21,cart_result:16,cartesian:[2,7,8,11,13],catch_trial_perc:14,cell:14,center:[8,11,13,14],centeroutreach:0,centr:[11,14],central:[11,12],centreoutreach:14,chang:[2,11,12,13],changelog:3,check:1,chip:[0,1],choos:18,churchland:9,cite:[],classmethod:[8,10],clip:[12,13],clip_veloc:13,closest:11,cmap:16,code:[3,14],codol2022motornet:[],codol:[],cognit:10,colab:[17,18,19,20,21,22,23],collabor:3,color:16,colormap:16,com:7,come:11,command:[1,2,8,11],commun:11,compar:[9,10],compat:[0,1,7,8,10,11,13,14],compil:10,complex:[3,13,18],compliant:[11,12,20],complianttendonarm26:11,complianttendonhillmuscl:12,composit:9,compound:[2,9,14],compounded_loss:9,compoundedloss:9,comput:[1,2,3,8,11,12,13,14,16],compute_limit:16,concept:3,conceptu:[6,10,13],concis:11,conf:13,config:[8,10],configur:[8,10,11,12,13,14,15,16,18,23],conjunct:[3,11],connect:[8,10],consequ:[2,3],consid:[2,10,13],consol:[10,15],constant:[9,12],constrain:[3,11],consult:3,contact:[],contain:[0,6,7,8,10,11,12,13,14,15,16],content:[4,12,13],contract:12,contribut:[7,9,14],control:[3,7,8,9,10,11,13],conveni:[2,21],convent:[8,9],convert:[2,11],coordin:[2,11,13],core:15,corioli:13,corner:11,correctli:2,correspond:[7,9,11,12,14],cost:[3,11,12],counter:11,coupl:9,cpu:15,creat:[3,8,9,10,11,14,17],creation:8,cue:14,cumbersom:3,current:[1,7,11,13,14,19],curv:20,custom:[3,7,9,10,11,17,18],custom_object:10,d:9,da:[9,11,12],darker:16,data:[7,10,16,23],data_util:14,dataset:16,date:3,de:[10,13],deactiv:12,dec:[11,12],declar:[2,9,10,12,14,15,19],dedic:2,deep:[3,5,8],defin:[3,8,9,10,11,12,14],deg:14,degre:[3,11,13,14,16],delai:[2,8,11,14],delay_rang:14,delayedreach:14,delp:13,dens:8,depend:[0,1,3,11,14,15],deriv:[9,11,12,13,14],deriv_weight:[9,14],descend:12,design:[3,22],desir:[2,10,11,14],desktop:3,despit:3,detail:[2,3,7,8,9,10,11,12,13],detc2013:13,develop:[3,20],developp:12,deviat:[8,11],devic:0,dg:12,dictionari:[7,8,10,11,12,13,14,17,22],dictionnari:13,didder:14,differ:[3,21],differenti:[3,11,12,13],dimens:[8,11,14,16],dimension:[11,12,13,14,16,21],direct:14,directli:12,directori:[10,15],displai:[2,7],distal:10,distalteach:[10,15],distanc:14,distribut:[3,8,11,14],document:[2,7,8,9,10,14],doe:[3,8,9,10,11,12,14,15,18],dof:13,doi:[9,10,11,12,13],done:[11,13],down:2,draw:11,draw_fixed_st:11,draw_random_uniform_st:11,drawn:[11,14],drift:18,drive:[8,12],driven:12,dt:[9,11,12,13],dtype:8,dublin:3,due:0,dure:[1,2,7,9,10,11,14,21],dx:9,dynam:[2,12],e:[8,11,13,14],each:[2,6,7,8,9,11,13,14],earli:16,earlier:16,eas:3,easi:3,effect:13,effector:3,eg:[],either:[7,11],elbow:[11,16],element:[11,12,13,14],email:3,empir:10,emploi:9,empti:7,enabl:[3,10],end:[7,17],endpoint:[11,13,14],endpoint_load:[11,13,14],energi:[11,12],eng:[12,13],engin:[8,10],ensur:[7,14],entri:[8,12,13],entrypoint:14,environ:[1,11],epoch:7,epub:[11,12],equal:[11,12,13,14],equat:[11,12,13],equip:[0,1],equival:11,error:[0,9],essenc:12,essenti:10,establish:3,et:9,eugen:[],euler:[9,11,13],evalu:[9,11,12,13,23],even:7,everi:[7,8,11],evolv:13,exactli:13,exampl:[10,14,18],except:14,excit:[8,11,12],excitation_noise_sd:11,excitatori:8,exist:[3,8],expect:8,extens:[6,10],extra:12,extract:9,f:9,fact:2,fals:[14,16],fashion:2,faster:3,featur:10,feb:12,fed:9,feedback:[2,8,11],feel:[3,7],fetch:9,field:3,figur:2,file:[10,15,23],find:9,first:[1,8,11,13,14,15,18],fit:[11,14],fix:[0,7],fixat:[11,13],flexibl:3,float32:8,flow:[2,21],fo:11,focu:3,follow:[8,11,12,13,23],foo:[],forc:[2,9,11,12,13,18,20],foremost:1,format:[11,12,14],formul:12,forward:[2,3,8,10,11,21],forward_pass:8,four:[6,15],frame:11,framework:3,free:[2,3,7],freedom:[3,11,13,14,16],freeli:1,frequent:7,friendli:3,from:[0,3,7,8,9,10,11,12,13,14,15,16,18,21],from_config:[8,10],full:[3,8,12,13],fulli:18,further:13,g:13,gaussian:[8,11],gener:[2,11,13,14,15,17,22],geometri:[2,8,11,12,18],geometry_st:[11,12],georg:[],get:[3,8,10,11,12,13,14],get_attribut:14,get_base_config:[8,13],get_base_initial_st:8,get_config:[8,10],get_geometri:11,get_initial_muscle_st:12,get_initial_st:[8,11,14],get_initial_state_lay:14,get_input_dict_lay:14,get_input_dim:14,get_loss:14,get_muscle_cfg:[0,11],get_save_config:[8,11,12,13,14],github:[3,7,17,18,19,20,21,22,23],give:[9,11,14,16],given:[7,11,12,13,14,16],global:8,go:[3,14,17,18],go_cue_rang:14,goal:3,goe:[18,19,20,21,22],graviti:13,gribbl:[11,12],group:10,gru:[8,9],gru_regular:9,grunetwork:[8,14],guid:10,guidanc:23,h:9,ha:[3,7,14,16],half:13,handl:[2,8,10,11,14,16,18],hardwar:1,have:[11,12,13,16],held:[2,11,12,13,14],help:7,henc:9,here:[2,7,10,13,21],hidden:[8,9],hidden_noise_sd:8,hierarch:2,hierarchi:2,high:3,higher:3,hill:[12,18,20],histori:[7,23],hold:2,hope:3,how:[2,3,7,10,14,15,17,18,19,21,22,23],howev:[1,3,13],http:[7,9,10],hyperbol:8,i1:[11,13],i2:[11,13],i:[8,11,14,17,18,19,20,21,22,23],idea:3,ident:13,ignor:[7,14],ii:[17,18,19,20,21,22,23],iii:[17,18,20,21,22,23],illustr:[2,18,21],immedi:3,implement:[3,6,7,8,9,10,11,12,13,20,22],impract:3,improv:[3,15],includ:[7,9,10,14],index:[3,7,9,11],indic:[7,9,11,13,14],inertia:13,infer:[2,8,10,11,12,14],inform:[0,2,3,7,8,10,11,14,15,17,21],inher:8,inherit:12,initi:[0,2,3,7,8,10,11,12,13,14,17,20,21,22],initial_joint_st:14,initial_st:14,input:[2,7,8,9,10,11,12,13,14,15,17,22],input_dim:[12,13],input_shap:8,insensit:[0,11,13],inspect:20,instal:[0,3],instanc:[2,3,8,9,10,11,12,13,14,16],instanti:[8,10],instead:[0,7,10,11,13,14],integ:[7,8,11,12,13,14,15,16],integr:[11,12,13,18],integration_method:[11,13],integration_step:[11,13],intellig:3,interest:3,interrupt:7,introduct:[10,17,20,23],ipython:1,ireland:3,isometr:[9,12],issu:[3,7],item:14,iter:[3,15],its:[8,9,10,11,12],itself:[6,9,10,11,23],iv:[18,20,21,23],j:[11,12],jd:[11,12],jn:[11,12],joblib:1,joint2cartesian:[11,13],joint:[2,8,11,13,14],joint_load:11,joint_posit:16,joint_stat:[11,13,14,16],jordan:10,journal:[],json:[0,10,15],jul:10,juli:[0,3],june:0,k:[8,14],kaufman:9,keep:7,kei:[8,11,14],kept:7,kera:[2,7,8,9,10,11,14],kernel:8,kernel_regular:8,keyword:12,kg:[11,13],kistemak:[11,12,20],kutta4:[11,13],kutta:[11,13],kwarg:[8,10,11,12,13,14],l1:[9,11,13],l1g:[11,13],l2:[9,11,13,14],l2_activ:9,l2_activation_muscle_vel:9,l2_regular:9,l2_xdx_activ:9,l2activationl1musclevelindloss:9,l2activationloss:9,l2activationmusclevelloss:9,l2g:[11,13],l2regular:9,l2xdxactivationloss:9,l2xdxregular:9,label:[9,14],larg:15,last:[7,8],later:16,latest:1,layer:[3,4,5,9,10,14],lead:[2,3],learn:[3,7,10,14],learningrateschedul:7,least:[8,14],length:[11,12,13,18],level:[3,11,13,18],librari:3,lighter:16,like:[2,10,13,15],limit:[11,14,16],line:16,linear:[8,12],linewidth:16,list:[8,9,10,11,12,13,14,16],live:2,load:[11,13,14,23],log:7,logic:[8,10,14],look:18,loop:8,loss:[2,3,4,5,7,10,14],loss_weight:[9,14],losses_util:9,lossfunctionwrapp:9,lower:[11,12,13,14,16],lump:11,m1:[0,1,11,13],m2:[11,13],m:[1,9,11,12,13,14],ma:13,machin:[0,1],maco:[0,1],made:[7,11],mai:14,main:11,mainli:1,make:[0,1,3],mani:[3,7,11,12,14,15],map:[8,11,14],margin:16,mass:[11,13],match:[11,12,13,14],matplotlib:[1,16],matrix:1,max_iso_forc:9,max_isometic_forc:11,max_isometric_forc:[11,12],maximum:[9,11,12],mean:[10,12,16],mechan:12,meet:3,memori:2,messag:7,method:[0,3,7,8,9,10,11,12,13,14,18,20,22],metric:[1,7,10],mi:10,might:0,min_activ:12,minim:[11,12],minimum:12,ministep:8,minut:3,miss:11,mitig:3,mn:[0,14],mode:[7,15],model:[0,1,2,3,4,5,7,8,9,11,12,13,14,15,16,21,23],modul:[1,3,4,7,8,9,14,16],modular:3,moment:[2,11,13,18],monitor:7,more:[2,7,9,10,11,13,14,15,18],motion:[2,20],motor:[2,3,5,8,9,11],motornet:[0,1,2,4,17,18,21],motornetmodel:[2,10,22],move:13,movement:[3,8,10,11,12,14,16],mp4:16,ms:8,multi:3,multipl:11,muscl:[2,3,4,5,7,8,9,13,14,18],muscle_input:11,muscle_m:11,muscle_st:[11,12],muscle_typ:[8,11],musculotendon:13,must:[1,2,3,9],my_model_config:10,n:[11,12,13,14],n_batch:[12,13,16],n_dim:16,n_dof:13,n_fixation_point:13,n_hidden_lay:8,n_ministep:8,n_muscl:[8,12],n_state:12,n_timestep:[11,12,14,16],n_unit:[8,14],name:[8,9,10,11,12,13,14],nat:9,naturalist:9,nbsp:[],ndarrai:[0,14,16],necessari:8,need:[8,11,12],neither:14,nervou:[11,12],nest:[2,10,11],net:[4,5,14,15],network:[2,3,5,7,8,9,10,11,14,21],neural:[3,5,8,9,17],neurophysiol:[11,12],neurosci:9,next:11,nightli:7,nn:9,nois:[8,11],non:[8,14],none:[7,8,10,11,14],nor:[8,10],normal:[8,9],normalized_slack_muscle_length:12,note:[11,12,13],notifi:3,notimplementederror:8,now:[0,7],np:9,number:[7,8,11,12,13,14,15],numer:[11,12,13,18],numpi:[0,1,14,16],obei:[8,14],object:[2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22],obtain:[8,11,12],occasion:13,occur:[0,7,14],od:13,oe:[],off:6,offici:[],offlin:[2,23],og:[],older:12,olivi:[],on_batch_end:7,on_epoch_begin:7,on_train_batch_end:[7,10],on_train_begin:7,on_training_end:7,one:[2,8,9,10,11,12,13,14],ongo:7,onli:[7,8,10,12],onlin:[2,3,10],onto:14,open:3,oper:[2,8],oppos:14,optim:[12,14],optimal_muscle_length:12,option:[0,2,7,8,11,12,13,14],order:[2,3,8,9,11,16],ordinari:[11,12,13],org:[7,9,10],organ:2,orient:2,origin:[10,11,12,18],orthogon:11,os:1,other:[2,6,8,11,14],our:[],out:[14,19],output:[1,2,7,8,9,10,11,12,13,14],output_bias_initi:8,output_dim:[12,13],output_kernel_initi:8,output_nam:14,outsid:11,over:[2,3,8,11,15,16,17,18,19,20,21,22],overal:3,overhead:3,overrid:[8,10],overridden:14,overview:[3,21],overwrit:7,overwritten:[8,13],own:[3,7,11,22],packag:[6,7,11,15],page:3,parallel:[1,4,5],param:15,paramet:[2,7,8,9,10,11,12,13,14,15,16,18],parent:[7,8,11,12,13,14],part:[13,14,16],parti:[1,3],particular:12,particularli:15,pass:[2,7,8,9,10,11,12,13,14,15,21],passiv:[12,18],past:[12,13],path2cartesian:[0,13],path:[10,11,13],path_coordin:[11,13],path_fixation_bodi:[11,13],path_nam:16,penal:9,penalti:[2,9,17],per:[8,14],percentag:14,perceptron:3,perfect:10,perform:[2,3,5,7,8,10,11,12,13,14,23],pertain:11,pip:0,pl:[11,12],placehold:10,planar:[3,13,16],plant:[0,2,3,4,5,6,8,9,10,14,16,21],platform:[1,3],pleas:1,plot:[1,7,9,14,16],plot_2dof_arm_over_tim:16,plot_freq:7,plot_loss:7,plot_n_t:7,plot_pos_over_tim:16,plot_trial:7,plotor:[1,4,5],pmc4404026:13,pmcid:13,pmid:[11,12,13],po:13,point:[11,13],point_mass:13,pointmass:13,polynomi:11,popular:3,pos_lower_bound:[11,13],pos_upper_bound:[11,13],posit:[7,9,11,12,13,14,16],positionloss:9,possibl:[3,11],poster:3,potenti:[3,7,8],power:[3,5],pre:[11,12,14,18],preprint:[],present:[2,3,14],previou:7,print:[0,9,11,14,19],print_attribut:14,print_loss:14,print_muscle_wrap:11,proc:13,proce:11,procedur:8,process:[3,8],produc:[2,10,11,12,14,15],product:9,progress:3,project:3,propag:10,properti:[2,11,13,20],proport:16,propos:9,propriocept:[8,11],proprioceptive_delai:11,proprioceptive_noise_sd:8,provid:[3,7,8,9,11,12,14,20],pull:12,purpos:[6,10,14],push:12,py:[0,1],pypi:3,python3:1,python:[1,2,3,5,7,8,9,10,14,15],qualifi:11,quiet:7,rais:[0,8,11,14,15],random:[8,11,14],randomli:[11,14],randomtargetreach:14,randomtargetreachwithload:14,rang:[14,16],rate:7,re:23,reach:[14,16],reaching_dist:14,readabl:[11,14],readi:3,realist:3,realiti:11,receiv:11,recent:1,recommend:11,recomput:[2,10],rectifi:[8,12],recttanh:8,recurr:[8,9],recurrent_act:9,recurrent_regular:8,recurrent_weight:9,recurrentactivityregular:9,reduce_mean:9,reduct:9,reductionv2:9,redund:8,refer:[7,9,10,11,12,13],regardless:12,regular:[8,9],reinforc:3,relat:14,relationship:2,releas:3,relev:3,reli:[1,2,3,11,12],relu:20,relumuscl:[11,12],relupointmass24:[11,14],remain:3,remov:[0,9],repositori:3,repres:[8,11,16],represent:[2,10,21],reproduc:[2,10,21],request:2,requir:[0,3,11,14],research:3,respect:[11,13,16],result:[0,13],retain:2,retriev:14,return_sequ:14,revers:[8,10],rigid:12,rigidtendonarm26:11,rigidtendonhillmuscl:12,rigidtendonhillmusclethelen:12,rk4:[11,13],rnn:14,round:11,routin:[1,2,7,11,23],rumelhart:10,run:[1,15],rung:[11,13],rungekutta4:[11,13],runtim:[2,21],s15516709cog1603_1:10,s:[1,3,7,8,9,10,11,12,13,14,15,16],same:[2,8,10,11,12,13,14],sampl:10,save:[0,7,8,9,10,13,14,15,23],save_anim:16,save_model:[10,15],scalar:9,scale:[9,12],schedul:7,scienc:10,scratch:18,script:[1,15],scructur:12,search:3,sec:[11,13,14],second:[12,13,15],section:10,see:[2,7,8,9,10,11,13,14,15],segment:16,send:2,sensibl:2,sep:[11,12],sequenc:14,seri:[6,11],serial:0,serializ:0,serv:[10,13],session:[7,16],set:[7,8,11,12,13,14,16],set_training_param:14,set_weight:[8,10],setattr:[11,12,13],seth:13,setup:[0,1],sever:[2,3,8,9,12],shape:[0,14],share:3,sherman:13,should:[7,8,10,11,12,13,14,15,16],shoulder:[11,16],show:23,signal:[8,11,12],significantli:15,silicon:1,simpl:[1,12,13,17],simul:[3,7,8,12,16,20,21],sinc:[10,12,16],singl:[8,9,11,12,13,14],sitemap:3,six:[2,3],size:[8,9,11,12,13,14,16],skeleton:[0,2,4,5,12,14,16],sl:13,slow:3,so:[2,8,10,11,12,13],societi:3,softwar:[1,3],solut:9,solv:[0,1],some:[0,1,2,7,10,11,13,20],sourc:3,space:[11,13,14,16],space_dim:[13,14],specif:[8,11,13,14],specifi:[11,13,14],speed:[3,15],split:9,stand:11,standalon:3,standard:[1,8,11],star:3,start:[3,7,12,14],start_posit:14,state2target:11,state:[0,2,3,8,9,11,12,13,14,17,20,22],state_deriv:[11,12,13],state_dim:13,state_f:14,state_i:14,step:[2,8,10,11,12,13],stochast:11,str:[9,11,12,13,14,16],strictli:11,string:[8,9,10,11,12,13,14,15,16],structur:[2,3,8,10,17,18,19,20,22,23],studi:3,subclass:[2,6,7,8,9,10,11,12,13,14,17,18,22],subloss:9,submodul:6,subpackag:4,subplot:7,subsequ:7,sum:9,summar:[2,21],supervis:10,support:[1,16],sure:1,sussillo:9,synthet:10,system:[11,12,18],take:[7,8,11,12,13,15],taken:13,tangent:8,target:[2,10,11,14,17,22],task:[0,2,3,4,7,10,15,17,19,21],tau_activ:12,tau_deactiv:12,teacher:10,team:3,tech:13,technic:11,tendon:[11,12,20],tendon_length:12,tensoflow:9,tensor:[1,3,8,10,11,12,13,14,17],tensorflow:[0,1,2,3,5,6,7,8,9,10,11,14,17],tensorflowfix:7,tensorshap:8,term:11,termin:15,test:[7,14,15],tf:[7,8,9,10,14],th:14,than:12,thei:[2,3,7,8,9,11,19,21,22],thelen:[12,20],them:[0,11],therefor:[3,8,12,14],thi:[0,2,3,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],third:[1,3,16],those:[12,14],through:[3,8,10,11],tile:11,time:[7,8,11,12,13,14,16],timestep:[7,8,9,11,12,13,14],titl:[],toggl:7,toolbox:[1,2,3,5,20],top:13,torqu:13,total:[7,14,15],touch:3,track:7,train:[1,2,3,5,7,8,9,10,11,14,15,16],train_step:10,trainingplott:7,trajectori:16,transform:13,trial:[2,7,14],tupl:[9,11,13,14],tutori:[2,10,17,18,19,20,21,22,23],two:[3,11,13,14,16],two_dof_arm:13,twodofarm:[0,11,13,16],type:[11,12,14,15,18,20,21],typeerror:11,typic:[3,6,8,10,11,13],typo:0,u:1,uniform:[11,14],union:[9,11,13,14],unit:[7,8,9],unlik:12,up:[3,11,15],updat:[3,7,8,11,12],update_od:[11,12,13],upon:0,upper:[11,12,13,14,16],ur:13,us:[1,2,3,7,8,9,10,11,12,13,14,15,16,17,18,20,21,22],user:[0,1,2,3,7,8,9,13,15],usual:[10,11,12,13,14],util:[1,4,5,9,14],v:[20,21,23],valid:14,valu:[2,7,8,9,10,11,12,13,14,16],valueerror:[11,14,15],vari:11,variabl:[2,8,9],variou:[15,16],vector:[11,12,13],vel:13,vel_lower_bound:[11,13],vel_upper_bound:[11,13],veloc:[7,9,11,13,16],verbos:7,veri:[8,14],version:[1,11,12,20],vi:23,via:[1,3,11,12,14,19],vii:23,viridi:16,virtual:8,viscos:13,visit:7,visual:[8,11,18],visual_delai:11,visual_noise_sd:8,volum:[],wa:[0,3,7,9,11,14],wait:14,want:[2,8,10,13,14],warn:0,watch:3,we:[3,9,10,11,13,16,17,18],websit:3,weight:[2,7,8,9,10,14],well:[2,7,10,13],what:[2,3,7,10,11,13,14,21],when:[0,1,2,3,10,14],where:[2,14],whether:[1,7,14,15],which:[0,2,7,8,10,11,12,13,14,18],whose:[2,8,10],width:16,window:14,within:[3,11],without:[10,14],wong:[11,12],word:6,work:[1,3,22],worldspac:[11,13,14],would:[9,10,11,13,16],wrap:[2,9,11,12,18],wrapper:[12,13],www:[7,10],x:[8,9,11,16],xdx:9,xp:9,xy:13,y:[9,16],y_true:14,year:[],yield:12,you:[1,3],your:[1,22],yp:9,zero:11},titles:["Changelog","How to Install","Functional Overview","MotorNet","&lt;no title&gt;","MotorNet","motornet.nets","motornet.nets.callbacks","motornet.nets.layers","motornet.nets.losses","motornet.nets.models","motornet.plants","motornet.plants.muscles","motornet.plants.skeletons","motornet.task","motornet.utils","motornet.utils.plotor","Build a Network","Build a Plant","Create a Custom Loss","How Muscle Objects Work","Structure of State Tensors","Create a Custom Task","Train a Network"],titleterms:{"0":0,"1":0,"2":0,"4":0,"function":2,anaconda:1,api:3,build:[17,18],callback:[6,7],changelog:0,content:[5,6,11,15],creat:[19,22],custom:[19,22],develop:0,document:3,font:0,how:[1,20],indic:3,instal:1,layer:[6,8],loss:[6,9,19],manual:3,model:[6,10],modul:[5,6,11,15],motornet:[3,5,6,7,8,9,10,11,12,13,14,15,16],muscl:[11,12,20],net:[6,7,8,9,10],network:[17,23],object:20,overview:2,parallel:15,pip:1,plant:[11,12,13,18],plotor:[15,16],refer:3,releas:0,requir:1,size:0,skeleton:[11,13],state:21,structur:21,subpackag:5,tabl:3,task:[5,14,22],tensor:21,train:23,tutori:3,util:[15,16],version:0,work:20}})
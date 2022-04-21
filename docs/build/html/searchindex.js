Search.setIndex({docnames:["index","install","modules","motornet","motornet.nets","motornet.nets.callbacks","motornet.nets.layers","motornet.nets.losses","motornet.nets.models","motornet.plants","motornet.plants.muscles","motornet.plants.skeletons","motornet.task","motornet.utils","motornet.utils.plotor","tutorial1","tutorial2"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["index.rst","install.rst","modules.rst","motornet.rst","motornet.nets.rst","motornet.nets.callbacks.rst","motornet.nets.layers.rst","motornet.nets.losses.rst","motornet.nets.models.rst","motornet.plants.rst","motornet.plants.muscles.rst","motornet.plants.skeletons.rst","motornet.task.rst","motornet.utils.rst","motornet.utils.plotor.rst","tutorial1.rst","tutorial2.rst"],objects:{"":[[3,0,0,"-","motornet"]],"motornet.nets":[[5,0,0,"-","callbacks"],[6,0,0,"-","layers"],[7,0,0,"-","losses"],[8,0,0,"-","models"]],"motornet.nets.callbacks":[[5,1,1,"","BatchLogger"],[5,1,1,"","BatchwiseLearningRateScheduler"],[5,1,1,"","TensorflowFix"],[5,1,1,"","TrainingPlotter"]],"motornet.nets.callbacks.BatchLogger":[[5,2,1,"","on_batch_end"],[5,2,1,"","on_train_begin"]],"motornet.nets.callbacks.BatchwiseLearningRateScheduler":[[5,2,1,"","on_batch_end"],[5,2,1,"","on_epoch_begin"]],"motornet.nets.callbacks.TensorflowFix":[[5,2,1,"","on_train_batch_end"],[5,2,1,"","on_train_begin"]],"motornet.nets.callbacks.TrainingPlotter":[[5,2,1,"","on_batch_end"],[5,2,1,"","on_train_begin"]],"motornet.nets.layers":[[6,1,1,"","GRUNetwork"],[6,3,1,"","recttanh"]],"motornet.nets.layers.GRUNetwork":[[6,2,1,"","build"],[6,2,1,"","call"],[6,2,1,"","from_config"],[6,2,1,"","get_base_config"],[6,2,1,"","get_initial_state"],[6,2,1,"","get_save_config"]],"motornet.nets.losses":[[7,1,1,"","L2ActivationLoss"],[7,1,1,"","L2ActivationMuscleVelLoss"],[7,1,1,"","L2Regularizer"],[7,1,1,"","L2xDxActivationLoss"],[7,1,1,"","L2xDxRegularizer"],[7,1,1,"","PositionLoss"],[7,1,1,"","RecurrentActivityRegularizer"]],"motornet.nets.models":[[8,1,1,"","MotorNetModel"]],"motornet.nets.models.MotorNetModel":[[8,2,1,"","from_config"],[8,2,1,"","get_config"],[8,2,1,"","save_model"],[8,2,1,"","train_step"]],"motornet.plants":[[10,0,0,"-","muscles"],[9,0,0,"-","plants"],[11,0,0,"-","skeletons"]],"motornet.plants.muscles":[[10,1,1,"","CompliantTendonHillMuscle"],[10,1,1,"","Muscle"],[10,1,1,"","ReluMuscle"],[10,1,1,"","RigidTendonHillMuscle"],[10,1,1,"","RigidTendonHillMuscleThelen"]],"motornet.plants.muscles.CompliantTendonHillMuscle":[[10,2,1,"","muscle_ode"]],"motornet.plants.muscles.Muscle":[[10,2,1,"","activation_ode"],[10,2,1,"","build"],[10,2,1,"","get_initial_muscle_state"],[10,2,1,"","get_save_config"],[10,2,1,"","integrate"],[10,2,1,"","setattr"],[10,2,1,"","update_ode"]],"motornet.plants.muscles.RigidTendonHillMuscle":[[10,2,1,"","build"]],"motornet.plants.muscles.RigidTendonHillMuscleThelen":[[10,2,1,"","build"]],"motornet.plants.plants":[[9,1,1,"","CompliantTendonArm26"],[9,1,1,"","Plant"],[9,1,1,"","ReluPointMass24"],[9,1,1,"","RigidTendonArm26"]],"motornet.plants.plants.Plant":[[9,2,1,"","add_muscle"],[9,2,1,"","draw_fixed_states"],[9,2,1,"","draw_random_uniform_states"],[9,2,1,"","get_geometry"],[9,2,1,"","get_initial_state"],[9,2,1,"","get_save_config"],[9,2,1,"","integrate"],[9,2,1,"","integration_step"],[9,2,1,"","joint2cartesian"],[9,2,1,"","setattr"],[9,2,1,"","state2target"],[9,2,1,"","update_ode"]],"motornet.plants.skeletons":[[11,1,1,"","PointMass"],[11,1,1,"","Skeleton"],[11,1,1,"","TwoDofArm"]],"motornet.plants.skeletons.PointMass":[[11,2,1,"","get_save_config"]],"motornet.plants.skeletons.Skeleton":[[11,2,1,"","build"],[11,2,1,"","clip_velocity"],[11,2,1,"","get_base_config"],[11,2,1,"","get_save_config"],[11,2,1,"","integrate"],[11,2,1,"","joint2cartesian"],[11,2,1,"","path2cartesian"],[11,2,1,"","setattr"],[11,2,1,"","update_ode"]],"motornet.plants.skeletons.TwoDofArm":[[11,2,1,"","get_save_config"]],"motornet.tasks":[[12,1,1,"","CentreOutReach"],[12,1,1,"","DelayedReach"],[12,1,1,"","RandomTargetReach"],[12,1,1,"","RandomTargetReachWithLoads"],[12,1,1,"","Task"]],"motornet.tasks.CentreOutReach":[[12,2,1,"","generate"]],"motornet.tasks.DelayedReach":[[12,2,1,"","generate"]],"motornet.tasks.RandomTargetReach":[[12,2,1,"","generate"]],"motornet.tasks.RandomTargetReachWithLoads":[[12,2,1,"","generate"]],"motornet.tasks.Task":[[12,2,1,"","add_loss"],[12,2,1,"","generate"],[12,2,1,"","get_initial_state"],[12,2,1,"","get_initial_state_layers"],[12,2,1,"","get_input_dict_layers"],[12,2,1,"","get_input_dim"],[12,2,1,"","get_losses"],[12,2,1,"","get_save_config"],[12,2,1,"","set_training_params"]],"motornet.utils":[[13,0,0,"-","parallelizer"],[14,0,0,"-","plotor"]],"motornet.utils.plotor":[[14,3,1,"","animate_arm_trajectory"],[14,3,1,"","compute_limits"],[14,3,1,"","plot_arm26_over_time"],[14,3,1,"","plot_opensim"],[14,3,1,"","plot_pos_over_time"]],motornet:[[4,0,0,"-","nets"],[9,0,0,"-","plants"],[12,0,0,"-","tasks"],[13,0,0,"-","utils"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"0":[5,8,9,10,11,12,14],"0002":9,"001":10,"00483":9,"01":[9,10],"013193":11,"015":10,"020062":11,"05":10,"051":9,"057":9,"1":[5,6,7,9,10,11,12,13,14],"10":[7,9,11,14],"100":5,"1000":11,"1025":7,"1033":7,"1038":7,"104":9,"1115":11,"1152":9,"12":14,"135":9,"13633":11,"155":9,"165":9,"18":7,"180496":11,"181479":11,"2":[5,7,8,9,11,13,14],"20":5,"2003":10,"2006":10,"2010":9,"2013":11,"2015":7,"20884757":9,"25905111":11,"26":11,"2985":9,"2d":[9,14],"3":[5,11,13],"309":[9,11],"333":9,"4":[9,11,13,14],"4042":7,"42872":5,"43":9,"500":9,"534315":11,"6":[5,9],"640x480":14,"7":8,"8":9,"82":9,"864572":11,"94":9,"abstract":12,"case":[9,11],"class":[4,5,6,7,8,9,10,11,12],"default":[5,7,8,9,11],"do":[0,9,11],"float":[5,7,9,11,12,14],"function":[5,8,9,10,11,13,14],"int":[5,9,11,14],"new":[5,9,11],"null":9,"return":[5,6,8,9,11,14],"true":5,"try":11,A:[6,7,8,9,10,11,12,14],By:11,For:[5,7,8,9,11,14],If:[5,7,9,13],In:[4,5,8,9,15,16],Is:11,It:[6,8],Its:[9,14],The:[5,7,8,9,11,12,13],Then:[9,11],There:9,These:9,To:9,_:7,__init__:5,ab:7,abc:8,abov:[],absolut:8,ac:[15,16],accord:[7,9],accumsan:[15,16],accuraci:8,achiev:5,action:[],activ:[5,7,10],activation_od:10,active_forc:10,activity_weight:7,ad:9,adapt:7,add:[9,11,14],add_loss:12,add_muscl:9,addit:[8,11],adipisc:[15,16],adjust:5,aenean:[15,16],after:5,aggreg:[],al:[7,10],alia:[],aliquam:[15,16],aliquet:[15,16],all:[5,9,11],allow:[5,8,10,11,13],alongsid:9,also:11,altogeth:8,alwai:[8,9],amet:[15,16],amount:[9,13],an:[4,5,7,8,9,11,14],analys:13,analyt:[],angl:11,ani:11,animate_arm_trajectori:14,ant:[15,16],api:8,api_doc:5,appli:[5,7,9,11],approxim:9,ar:[5,7,8,9,11],arcu:[15,16],arg:[6,8],argument:[5,8,9,10,11],arm26:14,arm:[9,11,14],arm_anim:14,around:[9,14],arrai:[7,12,14],asm:11,assigned_output:12,attach:[9,11],attribut:[9,11],auctor:[15,16],aug:11,augu:[15,16],auto:7,automat:11,avoid:8,ax:14,axi:7,backward:[5,11],bar:0,base:[4,5,6,7,8,9,10,11,12],base_lay:6,batch:[5,9],batch_script:2,batch_siz:[6,9,10,12],batchlogg:5,batchwiselearningrateschedul:5,becaus:[9,11],becom:14,been:5,begin:5,behaviour:5,being:[7,9,13,14],below:11,between:[6,7,9],bia:8,bibendum:[15,16],biolog:9,biomechan:[9,11],block:[],bodi:[9,11],bone:[9,11],bool:5,both:7,bound:[9,12],boundari:[9,11],bridg:4,brighter:14,build:[6,9,10,11,13],built:9,calcul:[7,9,11],call:[5,6,8,9,10,11,13],callback:[2,3,8],callbacklist:8,caller:[],can:[4,5,6,9,10,11,13],capabl:[6,8],cart_result:14,cartesian:[5,9,11],center:[9,11],centr:9,central:9,centreoutreach:12,cfg:[],chang:[9,11],churchland:7,classmethod:[6,8],clip:11,clip_veloc:11,closest:9,cmap:14,code:[],color:14,colormap:14,com:5,come:9,command:9,commodo:[15,16],commun:9,compar:[7,8],compat:[5,8,11],compil:8,complex:11,compliant:9,complianttendonarm26:9,complianttendonhillmuscl:10,comput:[9,11,14],compute_limit:14,conceptu:[4,11],condimentum:[15,16],conf:11,config:[6,8],configur:[8,9,11,13,14],congu:[15,16],conjunct:9,connect:[6,8],consectetur:[15,16],consequat:[15,16],consid:11,consol:[8,13],constrain:9,contain:[4,5,8,9,11,13,14],content:[2,11],contribut:5,control:[5,7,9,11],conval:[15,16],convent:7,convert:9,coordin:[9,11],copi:[],core:13,corioli:11,corner:9,correspond:[5,9],cost:9,counter:9,coupl:7,cpu:13,cra:[15,16],creat:[6,8,9],creation:6,curabitur:[15,16],current:[5,9,11],cursu:[15,16],custom:[7,8,9],custom_object:8,customlearningrateschedul:[],d:7,d_tanh:[],da:[7,9],dapibu:[15,16],darker:14,data:[5,8,14],data_util:12,dataset:14,de:[9,11],dec:9,declar:[7,8,13],defin:[7,9],degre:[9,11,14],delai:[9,12],delay_rang:12,delayedreach:12,delp:11,depend:[9,13],deriv:[7,9,11],deriv_weight:7,descript:6,desir:[8,9],detail:[5,7,8,11],detc2013:11,determin:[],deviat:9,diam:[15,16],dict:[5,8],dictionari:[6,8,9,11],dictum:[15,16],differenti:[9,11],dignissim:[15,16],dimens:[9,14],dimension:[9,11,14],directli:10,directori:[8,13],displai:5,distribut:[9,12],document:[7,8],doe:[6,7,8,9,13],dof:11,doi:[7,9,11],dolor:[15,16],donec:[15,16],draw:9,draw_fixed_st:9,draw_random_uniform_st:9,drawn:[9,12],dt:[7,9,10,11],dtype:6,dui:[15,16],dur:[],dure:[5,7,8,9,11],dx:7,dxy_da:[],dxy_dt:[],e:[9,11],each:[4,5,7,9,11],earli:14,earlier:14,effect:11,egesta:[15,16],eget:[15,16],elbow:[9,14],eleifend:[15,16],element:[9,11],elit:[15,16],empir:8,emploi:7,empti:5,enabl:8,end:5,endpoint:[9,11],endpoint_load:[9,11,12],energi:9,eng:11,engin:[6,8],enim:[15,16],ensur:5,entri:11,environ:9,epoch:5,epub:9,equal:11,equat:[9,11],erat:[15,16],ero:[15,16],error:7,essenti:8,est:[15,16],et:[7,10,15,16],etiam:[15,16],eu:[15,16],euismod:[15,16],euler:[7,9,11],evalu:[7,9,11],even:5,everi:[5,9],evolv:11,ex:[15,16],exactli:11,exampl:8,excit:[9,10],excitation_noise_sd:9,expect:6,extens:[4,8],extract:7,f:7,facto:9,fame:[15,16],faucibu:[15,16],featur:8,fed:7,feedback:9,feel:5,feli:[15,16],fermentum:[15,16],fetch:7,feugiat:[15,16],figur:14,file:[8,13],find:7,finibu:[15,16],first:[9,11,13],fit:9,fix:5,fixat:[9,11],float32:6,follow:[9,11],foo:0,forc:[7,9,11],format:9,forward:9,four:[4,13],frame:9,free:5,freedom:[9,11,14],fresh:[],from:[5,6,7,8,9,11,12,13,14],from_config:[6,8],full:11,further:11,fusc:[15,16],futur:[],g:11,gaussian:9,gcf:[],gener:[9,11,12,13],geometri:9,geometry_st:[9,10],get:[8,9,11],get_base_config:[6,11],get_config:[6,8],get_geometri:9,get_initial_muscle_st:10,get_initial_st:[6,9,12],get_initial_state_lay:12,get_input_dict_lay:12,get_input_dim:12,get_loss:12,get_save_config:[6,9,10,11,12],github:5,give:[7,9,14],given:[5,9,11,14],gravida:[15,16],graviti:11,greater:[],gribbl:9,group:8,gru:7,gru_regular:7,grunetwork:6,guarante:[],h:7,ha:[5,14],habit:[15,16],half:11,handl:[6,8,9,14],have:[9,10,11,14],held:[9,11],hello:[],help:5,henc:7,here:[5,6,8,11],hidden:7,highlight:[],hill:10,histori:5,how:[0,5,8,13],howev:11,http:[5,7],i1:[9,11],i2:[9,11],i:9,iaculi:[15,16],id:[15,16],ident:11,ignor:5,ihsbfkshdjfb:[],imperdiet:[15,16],implement:[4,5,6,7,9,10,11],improv:13,includ:[5,7,8],index:[0,5,7,9],indic:[5,7,9,11,12],inertia:11,infer:[8,9],inform:[5,13],ingmov:[],initi:[5,8,9,11],initial_joint_st:12,input:[5,6,7,8,9,10,11,13],input_dim:[10,11],input_shap:6,insensit:[9,11],inspect:10,instal:0,instanc:[6,7,8,9,11,14],instanti:[6,8],instead:[5,8,9,11],integ:[5,9,11,13,14,15,16],integr:[9,10,11],integration_method:[9,11],integration_step:9,interdum:[15,16],interrupt:5,ipsum:1,isometr:7,issu:5,item:12,iter:[12,13],its:[6,7,8,9],itself:[4,5,7,8,9],j:9,jd:9,jn:9,joint2cartesian:[9,11],joint:[9,11],joint_load:9,joint_posit:14,joint_result:[],joint_stat:[9,11,12,14],json:[8,13],justo:[15,16],kaufman:7,keep:5,kei:9,kept:5,kera:[5,6,7,8,12],keyword:8,kg:[9,11],kistemak:[9,10],kjsbdksdjbg:[],ksjbdksdjgb:[],kutta4:[9,11],kutta:[9,11],kwarg:[6,8,9,10,11,12,14],l1:[7,9,11],l1g:[9,11],l2:[7,9,11],l2_activ:7,l2_activation_loss:[],l2_activation_muscle_vel:7,l2_activation_muscle_vel_loss:[],l2_regular:7,l2_xdx_activ:7,l2_xdx_activation_loss:[],l2_xdx_regular:[],l2activationloss:7,l2activationmusclevelloss:7,l2g:[9,11],l2regular:7,l2xdxactivationloss:7,l2xdxregular:7,label:7,lacinia:[15,16],lacu:[15,16],laoreet:[15,16],larg:13,last:5,later:14,layer:[2,3,7,8],learn:5,learningrateschedul:5,lectu:[15,16],length:[9,11],leo:[15,16],level:[9,11],libero:[15,16],lighter:14,ligula:[15,16],like:[8,11,13],limit:[9,14],line:14,linear:10,linewidth:14,list:[6,7,8,9,11,12,14],load:[9,11],loborti:[15,16],log:5,logger:[],logic:8,lorem:1,loss:[2,3,5,8,12],loss_weight:12,losses_util:7,lossfunctionwrapp:7,lower:[9,11,14],lump:9,m1:[9,11],m2:[9,11],m:[7,9,11],ma:11,made:9,magna:[15,16],mai:[],main:9,make:[],malesuada:[15,16],mani:[5,9,13],map:9,margin:14,mass:[9,11],match:[9,11],matplotlib:14,matti:[15,16],mauri:[15,16],max_iso_forc:7,max_isometic_forc:9,max_isometric_forc:[9,10],maximu:[15,16],maximum:[7,9,12],mean:14,messag:5,meth:[],method:[5,6,7,8,9,11],metric:[5,8],metu:[15,16],mi:[15,16],min_activ:10,minim:9,minimum:12,miss:[8,9],mode:[5,13],model:[2,3,5,6,7,9,11,13],modifi:[],modul:[0,2,5,7,14],molesti:[15,16],molli:[15,16],moment:[9,11],monitor:5,morbi:[15,16],more:[5,7,8,11,13],motor:[7,9],motornet:2,motornetmodel:[8,13],move:11,movement:[8,9,14],mp4:14,multipl:9,muscl:[2,3,5,7,11],muscle_input:9,muscle_len_n:10,muscle_loss:[],muscle_m:9,muscle_od:10,muscle_st:[9,10],muscle_typ:9,musculotendon:11,must:7,my_model_config:8,n:[9,11],n_batch:14,n_dim:14,n_timestep:[9,12,14],nam:[15,16],name:[7,8,9,10,11],nat:7,naturalist:7,ndarrai:14,nec:[15,16],need:[6,9],nequ:[15,16],nervou:9,nest:[8,9],net:[2,3,13],netu:[15,16],network:[5,6,7,8,9,12],neural:7,neurophysiol:9,neurosci:7,next:9,nibh:[15,16],nightli:5,nisi:[15,16],nisl:[15,16],nn:7,nois:9,non:[15,16],none:[5,6,8,9,12],nor:[6,8],normal:7,notabl:8,notat:7,note:[5,7,9,11],now:5,np:7,nulla:[15,16],nullam:[15,16],number:[5,9,11,13],numer:[9,11],numpi:[12,14],nunc:[15,16],object:[4,5,7,8,9,10,11,13,14],obtain:9,occasion:11,occur:5,od:11,odio:[15,16],off:4,on_batch_end:5,on_epoch_begin:5,on_train_batch_end:[5,8],on_train_begin:5,on_training_end:5,one:[6,7,8,9,11,13],ongo:5,onli:[5,8,10],onlin:8,option:[6,9,11],orci:[15,16],order:[7,9,14],ordinari:[9,11],org:[5,7],origin:[8,9],ornar:[15,16],orthogon:9,other:[4,9],output:[5,6,7,8,9,10,11],output_dim:[10,11],outsid:9,over:[9,13,14],overrid:[6,8],overwrit:5,overwritten:11,own:9,packag:5,page:0,parallel:3,param:[6,9,13],paramet:[5,6,7,8,9,11,12,13,14],parent:[5,9,11],parse_initial_joint_st:[],part:[11,14],particularli:13,pass:[5,7,8,9,11,13],past:11,path2cartesian:11,path:[8,11],path_coordin:[9,11],path_fixation_bodi:[9,11],path_nam:14,pellentesqu:[15,16],penal:7,penalti:7,per:6,perform:[5,9,11],pertain:9,pharetra:[15,16],pl:9,place:[9,11],placehold:[],placerat:[15,16],planar:[11,14],plant:[2,3,4,7,8,14],pleas:7,plot:[5,14],plot_arm26_over_tim:14,plot_arm_over_tim:[],plot_freq:5,plot_line_collect:[],plot_loss:5,plot_n_t:5,plot_opensim:14,plot_pos_over_tim:14,plot_trial:5,plotor:[2,3],plt:[],pmc4404026:11,pmcid:11,pmid:[9,11],po:11,point:[9,11],point_mass:11,pointmass:11,polynomi:9,porta:[15,16],porttitor:[15,16],pos_lower_bound:[9,11],pos_upper_bound:[9,11],posit:[5,7,9,10,11,12,14],position_loss:[],positionloss:7,posuer:[15,16],potenti:[15,16],pre:9,present:8,pretium:[15,16],previou:5,print:7,proc:11,proce:9,produc:[8,9,13],product:7,proin:[15,16],properti:[9,11],proport:14,propos:7,propriocept:9,proprioceptive_delai:9,provid:9,purpos:[4,8],puru:[15,16],python:[5,6,7,8,13],qualifi:9,quam:[15,16],qui:[15,16],quiet:5,quisqu:[15,16],r:[],rais:[9,13],random:[9,12],randomli:[9,12],randomtargetreach:12,randomtargetreachwithload:12,rang:14,rate:5,reach:[12,14],realiti:9,receiv:9,recomput:8,rectifi:10,recttanh:6,recurr:7,recurrent_act:7,recurrent_activity_loss:[],recurrent_weight:7,recurrentactivityregular:7,reduce_mean:7,reduct:7,reductionv2:7,refer:[5,9],regular:7,reinstanti:[],reli:9,relumuscl:[9,10],relupointmass24:9,repres:[9,14],reproduc:8,requir:9,respect:[9,11,14],result:[11,14],results_to_line_collect:[],revers:[6,8],rigidtendonarm26:9,rigidtendonhillmuscl:10,rigidtendonhillmusclethelen:10,risu:[15,16],rk4:[9,11],round:9,routin:[5,9],run:13,rung:[9,11],rungekutta4:[9,11],rutrum:[15,16],s:[5,7,8,9,11,13,14],sagitti:[15,16],same:[6,8,11],sampl:8,sapien:[15,16],save:[5,7,8,11,13],save_model:[8,13],save_path:14,scalar:7,scale:7,scale_activ:[],scelerisqu:[15,16],schedul:5,script:13,sdfsd:[],sdfsdgsg:[],search:0,sec:[9,11],second:[11,13],sed:[15,16],see:[5,7,8,11,13],segment:14,self:11,sem:[15,16],semper:[15,16],senectu:[15,16],sep:9,sequenc:12,seri:[4,9],serializ:[],serv:11,session:[5,14],set:[5,9,11,14],set_training_param:12,set_weight:[6,8],setattr:[9,10,11],seth:11,sherman:11,should:[5,8,9,11,13,14],shoulder:[9,14],signal:9,significantli:13,simpl:11,simul:[5,14],sinc:[8,14],singl:[7,9,11],sit:[15,16],size:[7,9,11,14],skdjb:[],skeleton:[2,3,14],skjdbg:[],sl:11,small:14,so:[8,9,11],sollicitudin:[15,16],solut:7,some:[5,9,11],space:[9,11,14],space_dim:11,specif:[9,11],specifi:[9,11],speed:13,split:7,stand:9,standard:9,start:[5,12],state2target:9,state:[6,7,9,11],state_deriv:[9,10,11],state_dim:11,step:[5,6,8,9,11],steps_per_execut:[],stochast:9,str:[7,9,10,11,14],string:[7,8,9,11,13,14],structur:8,sub:[],subclass:[4,5,6,8,9,11],submodul:4,subpackag:2,subsequ:5,support:14,suscipit:[15,16],suspendiss:[15,16],sussillo:7,synthet:8,system:9,take:[5,9,11,13],taken:11,target:[8,9,12],task:[2,5,8,13],tau_activ:10,tau_deactiv:10,tech:11,tellu:[15,16],tempor:[15,16],tempu:[15,16],tendon:9,tensor:[8,9,11],tensorflow:[4,5,7,8],tensorflowfix:5,tensorshap:6,term:9,termin:13,test:[5,13],testest:[],tf:[5,6,7,8],thei:[5,6,7,8,9],thelen:10,thi:[4,5,6,7,8,9,10,11,13,14],third:14,three:[],tile:9,time:[5,9,11,14],timer:12,timestep:[5,7,9,10,11],tincidunt:[15,16],toggl:5,torqu:11,total:[5,13],track:5,train:[5,7,8,9,13,14],train_step:8,trainingplott:5,trajectori:14,transform:11,trial:5,tristiqu:[15,16],tupl:[9,11],turpi:[15,16],two:[9,11,12,14],two_dof_arm:11,twodofarm:[9,11],type:[9,10,11,13],typeerror:9,typic:[4,6,8,9,11],ullamcorp:[15,16],ultric:[15,16],ultrici:[15,16],uniform:[9,12],union:[9,11],unit:[5,7],unpack:[],until:[],up:[9,13],updat:[5,9],update_od:[9,10,11],upper:[9,11,14],urna:[15,16],us:[5,6,7,8,9,11,13,14],user:[5,7,11,13],usual:[8,9,11],ut:[15,16],util:[2,3,7,12],valu:[5,7,8,9,10,11,12,14],valueerror:13,vari:9,variabl:[6,7],variou:[13,14],vector:[9,11],vehicula:[15,16],vel:[11,15,16],vel_lower_bound:[9,11],vel_upper_bound:[9,11],velit:[15,16],veloc:[5,7,9,11,14],venenati:[15,16],verbos:5,version:9,vestibulum:[15,16],via:9,viridi:14,viscos:11,visit:5,visual:9,visual_delai:9,vita:[15,16],vivamu:[15,16],viverra:[15,16],volutpat:[15,16],vulput:[15,16],wa:[5,7],want:[8,11],we:[7,8,9,11,14],weight:[5,6,7,8],well:[5,8,11],what:[5,8,9,11],when:[8,10],whether:[5,13],which:[5,9,11],whose:8,width:14,wil:5,within:[],without:8,wong:9,word:4,world:[],worldspac:9,would:[7,8,9,11,14],wrap:[9,10],www:5,x1:7,x2:7,x:[6,7,9,14],xdx:7,xy:11,y:[7,14],y_pred:[],y_true:[],you:[],your:[],zero:9},titles:["Welcome to MotorNet\u2019s documentation!","How to install","&lt;no title&gt;","MotorNet","motornet.nets","motornet.nets.callbacks","motornet.nets.layers","motornet.nets.losses","motornet.nets.models","motornet.plants","motornet.plants.muscles","motornet.plants.skeletons","motornet.task","motornet.utils","motornet.utils.plotor","How to do foo","How to do bar"],titleterms:{"do":[1,15,16],Then:1,bar:[1,16],batch_script:[],callback:[4,5],content:[3,4,9,13],document:0,foo:[1,15],how:[1,15,16],indic:0,instal:1,ipsum:[15,16],layer:[4,6],lorem:[15,16],loss:[4,7],manual:0,model:[4,8],modul:[3,4,9,13],motornet:[0,3,4,5,6,7,8,9,10,11,12,13,14],muscl:[9,10],net:[4,5,6,7,8],parallel:13,plant:[9,10,11],plotor:[13,14],refer:0,s:0,skeleton:[9,11],subpackag:3,tabl:0,task:[3,12],tutori:0,util:[13,14],welcom:0}})
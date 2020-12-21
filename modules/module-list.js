(function(){
    //-------------------------------------------------------------------------------------
    var set_prefix=function(prefix, modules){
        for(m in modules){ 
            if($vm.module_list[prefix+m]!=undefined) alert(m+" is existed"); 
            else{
                $vm.module_list[prefix+m]=modules[m];
                $vm.module_list[prefix+m].prefix=prefix;
            }
        }
    }
    //-------------------------------------------------------------------------------------
    var prefix='';
    var $H=$vm.hosting_path+"/modules";
    var modules={
        "new-starter-data":{
            title:"New starter records",
            url:$H+"/new-starter/record/data.html",
            Table:"new-starter",
            form_module:"new-starter-form", 
            
            task_unikey_module:prefix+'new-starter-task-unikey',
            task_unikey_table:"new-starter-task-unikey",
            task_access_card_module:prefix+'new-starter-task-access-card',
            task_access_card_table:"new-starter-task-access-card",
            follow_up_module:prefix+'new-starter-follow-up-data',
            follow_up_table:"new-starter-follow-up",
            
            description:"New starter records",
            router:1,
        },
        "new-starter-form":{
            title:"New starter form",
            url:$H+"/new-starter/record/form.html",
            Table:"new-starter",
            description:"New starter form",
            router:1,
        },
        "new-starter-task-unikey":{
            url:$H+"/new-starter/task-forms/unikey.html",
            Table:"new-starter-task-unikey",
            parent_table:"new-starter"
        },
        "new-starter-task-access-card":{
            url:$H+"/new-starter/task-forms/access-card.html",
            Table:"new-starter-task-access-card",
            parent_table:"new-starter"
        },
        "new-starter-follow-up-data":{
            url:$H+"/new-starter/follow-up/data.html",
            Table:"new-starter-follow-up",
            form_module:"new-starter-follow-up-form", 
            parent_table:"new-starter",
            description:"Communal ordering data"
        },
        "new-starter-follow-up-form":{
            url:$H+"/new-starter/follow-up/form.html",
            Table:"new-starter-follow-up",
            parent_table:"new-starter",
            description:"Communal ordering form",
        },
    }
    set_prefix(prefix,modules);
    //-------------------------------------------------------------------------------------
})();

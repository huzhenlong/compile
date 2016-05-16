(function ()
{var _WORKFLOW = function () {};
_WORKFLOW.prototype.getListWorkFlowUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow", "sid", XREWIN.getSid());
};

_WORKFLOW.prototype.listWorkFlow = function (func) {
    var list = [];
    if(func == null){
        var ret = XREWIN.ajaxGetSync(WORKFLOW.getListWorkFlowUrl(), function (data) {
            var mesg = data;
            data = mesg.data;
            $.each(data, function (i, n) {
                list.push(n);
            });
        });
        return list;
    }else{
        XREWIN.ajaxGet(WORKFLOW.getListWorkFlowUrl(), func);
    }

};

_WORKFLOW.prototype.getGetByNameWorkFlowUrl = function (name) {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow?name="+name, "sid", XREWIN.getSid());
};

_WORKFLOW.prototype.getByNameWorkFlow = function (name,func) {
    dataVar = {};
    dataVar["name"] = name;
    if(func == null){
        var dataRet;
        var ret = XREWIN.ajaxGetSync(WORKFLOW.getGetByNameWorkFlowUrl(name), function (data) {
            var mesg = data;
            dataRet = mesg.data;
        });
        return dataRet;
    }else{
        XREWIN.ajaxGet(WORKFLOW.getGetByNameWorkFlowUrl(), func);
    }
};

_WORKFLOW.prototype.getGetByIdWorkFlowUrl = function (id) {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/"+id, "sid", XREWIN.getSid());
};

_WORKFLOW.prototype.getByIdWorkFlow = function (id,func) {
    if(func == null){
        var dataRet;
        var ret = XREWIN.ajaxGetSync(WORKFLOW.getGetByIdWorkFlowUrl(id), function (data) {
            var mesg = data;
            dataRet = mesg.data;
        });
        return dataRet;
    }else{
        XREWIN.ajaxGet(WORKFLOW.getGetByIdWorkFlowUrl(id), func);
    }
};

_WORKFLOW.prototype.addWorkFlowUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow", "sid", XREWIN.getSid());
};

_WORKFLOW.prototype.addWorkFlow = function (fd,func) {
    if(func == null){
        var dataRet;
        var ret = XREWIN.ajaxPostSync(WORKFLOW.addWorkFlowUrl(),fd,false,false, function (data) {
            var mesg = data;
            dataRet = mesg.data;
        });
        return dataRet;
    }else{
        XREWIN.ajaxPostSync(WORKFLOW.addWorkFlowUrl(),fd,true,false, func);
    }
};

_WORKFLOW.prototype.updateByKeyWorkFlowUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow", "sid", XREWIN.getSid());
};

_WORKFLOW.prototype.updateByKeyWorkFlow = function (fd,func) {
    if(func == null){
        var dataRet;
        var ret = XREWIN.ajaxPutSync(WORKFLOW.updateByKeyWorkFlowUrl(),fd, function (data) {
            var mesg = data;
            dataRet = mesg.data;
        });
        return dataRet;
    }else{
        XREWIN.ajaxPutSync(WORKFLOW.updateByKeyWorkFlowUrl(),fd, func);
    }
};

_WORKFLOW.prototype.delWorkFlowUrl = function (id) {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/"+id, "sid", XREWIN.getSid());
};

_WORKFLOW.prototype.delWorkFlow = function (id,func) {
    if(func == null){
        var dataRet;
        var ret = XREWIN.ajaxDelSync(WORKFLOW.delWorkFlowUrl(id), function (data) {
            var mesg = data;
            dataRet = mesg.data;
        });
        return dataRet;
    }else{
        XREWIN.ajaxDelSync(WORKFLOW.delWorkFlowUrl(id), func);
    }
};

_WORKFLOW.prototype.getListWorkFlowUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow", "sid", XREWIN.getSid());
};

_WORKFLOW.prototype.getListTableWorkFlow = function (tableName) {
    var tableVal =$('#'+tableName).DataTable({
        "scrollX": true,
        "stateSave": true,
        "tableTools": {
            "sSwfPath": "js/plugins/dataTables/swf/copy_csv_xls_pdf.swf"
        },
        
                    
                    "dom":"<'row'<'col-sm-12'<'#toolbox'>>>" +
                    "<'row'<'col-sm-12'tr>>" +
                    "<'row'<'col-sm-5'i><'col-sm-7'p>>",
                
                
        language: {
            url: '/localisation/dataTables/zh-cn.json'
        },
        "ajax": {"url": WORKFLOW.getListWorkFlowUrl(), "dataSrc": "data"
        
        },
        "columns": [
            
            
            
                
                    
                        {"title":"名称","data":"name"}
                        
                            ,
                        
                    
                
            
                
                    
                        {"title":"状态","data":"status.text"}
                        
                            ,
                        
                    
                
            
                
                    
                        {"title":"开始时间","data":"startTime",
                        "render": function (data, type, row) {
                            
                        
                        if (data == undefined || data == ""){
                            return "未运行"
                        }
                        return data;
                    
                    
                        }}
                        
                            ,
                        
                    
                
            
                
                    
                        {"title":"运行时间","data":"runTime",
                        "render": function (data, type, row) {
                            
                        
                        if (data == ""){
                            return "未运行"
                        }
                        return data;
                    
                    
                        }}
                        
                            ,
                        
                    
                
            
                
                    
                        {"title":"创建时间","data":"createdTime"}
                        
                            ,
                        
                    
                
            
                
                    
                        {"title":"更新时间","data":"updatedTime"}
                        
                            ,
                        
                    
                
            
                
            
                
            
                
            
                
                    
                        {"title":"操作","data":"",
                        "render": function (data, type, row) {
                            
                        
                    var url = XREWIN.appendSid("/workflow.html");
                    url = XREWIN.appendParam(url, "key", row.key);
                    url = XREWIN.appendParam(url, "name",  row.name);
                    url = XREWIN.appendParam(url, "from", "marketingProcess");
                    var edit = '<a title="编辑" style="margin-right:5px;" class="btn btn-white btn-xs editList" ' +
                            'href="' + url + '"' +
                            'style="margin-right: 5px;" target="_block"><i class="fa fa-edit"></i></a>';
                    var editName = '<a title="重命名" style="margin-right:5px;" name="addSidHref" href="#" class="btn btn-white btn-xs ableDownLoad" ' +
                            'onclick="echoData(\'' + row.name + '\',\'' + row.brandKey + '\',\'' + row.key + '\',\'' + row.publicFlag + '\')" ' +
                            ' data-toggle="modal" data-target="#myModal3" ' +
                            'style="margin-right: 5px;"><i class="fa fa-pencil"></i></a>';
                    var run = '<a title="开始" style="margin-right:5px;" href="#" class="btn btn-white btn-xs startList" ' +
                            'onclick="runWorkFlow(\'' + row.key + '\')" style="margin-right: 5px;"><i class="fa fa-play"></i></a>';
                    var pause = '<a title="暂停" style="margin-right:5px;" href="#" class="btn btn-white btn-xs pauseList" ' +
                            'onclick="" style="margin-right: 5px;"><i class="fa fa-pause"></i></a>';
                    var stop = '<a title="停止" name="addSidHref" href="#" class="btn btn-white btn-xs stopList" ' +
                            'onclick="stopWorkFlow(\'' + row.key + '\')" style="margin-right: 5px;"><i class="fa fa-stop"></i></a>';
                    var deleteStr = '<a title="删除" style="margin-right:5px;" name="addSidHref" href="#" class="btn btn-white btn-xs delList"' +
                            ' onclick="deleteData(\'' + row.key + '\')" style="margin-right: 5px;"><i class="fa fa-trash "></i></a>';
                    var copy = '<a title="复制"  href="#" class="btn btn-white btn-xs startList" ' +
                            'onclick="" style="margin-right: 5px;"><i class="fa fa-copy"></i></a>';
                    var publish = '<a title="发布" style="margin-right:5px;" href="#" class="btn btn-white btn-xs publishList" ' +
                            'onclick="publishWorkFlow(\'' + row.key + '\')" style="margin-right: 5px;"><i class="fa fa-volume-up"></i></a>';


                    return edit + editName + run + pause +  stop + deleteStr +copy;
                    
                    
                        }}
                        
                    
                
            
        ]
    });
    return tableVal;
};




_WORKFLOW.prototype.SaveFigureUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/SaveFigure", "sid", XREWIN.getSid());
};

_WORKFLOW.prototype.SaveFigure = function (fd,func) {
    if(func == null){
        var dataRet;
        
        var ret = XREWIN.ajaxPostSyncCheck(WORKFLOW.SaveFigureUrl(),fd,false,false, function (data) {
        
            
            dataRet = data;
            
        });
        return dataRet;
    }else{
        
        XREWIN.ajaxPostCheck(WORKFLOW.SaveFigureUrl(),fd, func);
        
    }

};

_WORKFLOW.prototype.RunUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/Run", "sid", XREWIN.getSid());
};

_WORKFLOW.prototype.Run = function (fd,func) {
    if(func == null){
        var dataRet;
        
        var ret = XREWIN.ajaxPostSyncCheck(WORKFLOW.RunUrl(),fd,false,false, function (data) {
        
            
            dataRet = data;
            
        });
        return dataRet;
    }else{
        
        XREWIN.ajaxPostCheck(WORKFLOW.RunUrl(),fd, func);
        
    }

};

_WORKFLOW.prototype.PublishUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/Publish", "sid", XREWIN.getSid());
};

_WORKFLOW.prototype.Publish = function (fd,func) {
    if(func == null){
        var dataRet;
        
        var ret = XREWIN.ajaxPostSyncCheck(WORKFLOW.PublishUrl(),fd,false,false, function (data) {
        
            
            dataRet = data;
            
        });
        return dataRet;
    }else{
        
        XREWIN.ajaxPostCheck(WORKFLOW.PublishUrl(),fd, func);
        
    }

};

_WORKFLOW.prototype.StopUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/Stop", "sid", XREWIN.getSid());
};

_WORKFLOW.prototype.Stop = function (fd,func) {
    if(func == null){
        var dataRet;
        
        var ret = XREWIN.ajaxPostSyncCheck(WORKFLOW.StopUrl(),fd,false,false, function (data) {
        
            
            dataRet = data;
            
        });
        return dataRet;
    }else{
        
        XREWIN.ajaxPostCheck(WORKFLOW.StopUrl(),fd, func);
        
    }

};

_WORKFLOW.prototype.RemoveUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/Remove", "sid", XREWIN.getSid());
};

_WORKFLOW.prototype.Remove = function (fd,func) {
    if(func == null){
        var dataRet;
        
        var ret = XREWIN.ajaxPostSyncCheck(WORKFLOW.RemoveUrl(),fd,false,false, function (data) {
        
            
            dataRet = data;
            
        });
        return dataRet;
    }else{
        
        XREWIN.ajaxPostCheck(WORKFLOW.RemoveUrl(),fd, func);
        
    }

};

if (!window.WORKFLOW) {
window.WORKFLOW = new _WORKFLOW();
}
})();
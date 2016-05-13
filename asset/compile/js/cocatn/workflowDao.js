(function () 
{var _WORKFLOW = function () {};
/*
列表WorkFlow
@:return list
"""

*/
_WORKFLOW.prototype.listWorkFlow = function () {
    var list = [];
    var dataVar = null;
    var funcVar = null;
    var checkVar = true;
    if(arguments.length <= 2 && typeof(arguments[0])=="object"){
        dataVar = arguments[0];
        if(arguments.length == 2 && typeof(arguments[1])=="function"){
            funcVar = arguments[1];
        }
    }else{
        dataVar = {};

        if(arguments.length == 1){ 
           if(typeof(arguments[0]) == "function"){
               funcVar = arguments[0]
           }
       }
       if(arguments.length == 2){ 
           checkVar=arguments[1];
       }

    }
    if(checkVar){
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSyncCheck(WORKFLOW.getListWorkFlowUrl(), dataVar ,false,null,function () {
                var mesg = this;
                data = mesg.data;
                $.each(data, function (i, n) {
                    list.push(n);
                });
            });
            if (ret == -1) {
                return undefined;
            }
            return list;
        }else{
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getListWorkFlowUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(WORKFLOW.getListWorkFlowUrl(), dataVar ,false,null,function () {
                var mesg = this;
                data = mesg.data;
                $.each(data, function (i, n) {
                    list.push(n);
                });
            });
            if (ret == -1) {
                return undefined;
            }
            return list;
        }else{
            XREWIN.ajaxPostSync(WORKFLOW.getListWorkFlowUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加inst
@:return int
"""

*/
_WORKFLOW.prototype.addInst = function () {
    var retCode = undefined;
    var dataVar = null;
    var funcVar = null;
    var checkVar = true;
    if(arguments.length <= 2 && typeof(arguments[0])=="object"){
        dataVar = arguments[0];
        if(arguments.length == 2 && typeof(arguments[1])=="function"){
            funcVar = arguments[1];
        }
    }else{
        dataVar = {};
        dataVar.wk = arguments[0];
        dataVar.ckListStr = arguments[1];
        if(arguments.length == 3){ 
           if(typeof(arguments[2]) == "function"){
               funcVar = arguments[2]
           }
       }
       if(arguments.length == 4){ 
           checkVar=arguments[3];
       }

    }
    if(checkVar){
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSyncCheck(WORKFLOW.getAddInstUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                if(data == "0"){
                    retCode = false;
                }else{
                    retCode = true;
                }
            });
            return retCode;
        }else{
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getAddInstUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(WORKFLOW.getAddInstUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                if(data == "0"){
                    retCode = false;
                }else{
                    retCode = true;
                }
            });
            return retCode;
        }else{
            XREWIN.ajaxPostSync(WORKFLOW.getAddInstUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加WorkFlow
@:form-data
@:return str
"""

*/
_WORKFLOW.prototype.addAndUpdateWorkFlow = function () {
    var str = undefined;
    var dataVar = null;
    var funcVar = null;
    var checkVar = true;
    if(arguments.length <= 2 && typeof(arguments[0])=="object"){
        dataVar = arguments[0];
        if(arguments.length == 2 && typeof(arguments[1])=="function"){
            funcVar = arguments[1];
        }
    }else{
        dataVar = {};

        if(arguments.length == 1){ 
           if(typeof(arguments[0]) == "function"){
               funcVar = arguments[0]
           }
       }
       if(arguments.length == 2){ 
           checkVar=arguments[1];
       }

    }
    if(checkVar){
        if(funcVar == null){
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getAddAndUpdateWorkFlowUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getAddAndUpdateWorkFlowUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(WORKFLOW.getAddAndUpdateWorkFlowUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(WORKFLOW.getAddAndUpdateWorkFlowUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
工作流对应load和save方法
@:return str
"""

*/
_WORKFLOW.prototype.updateDiagram = function () {
    var str = undefined;
    var dataVar = null;
    var funcVar = null;
    var checkVar = true;
    if(arguments.length <= 2 && typeof(arguments[0])=="object"){
        dataVar = arguments[0];
        if(arguments.length == 2 && typeof(arguments[1])=="function"){
            funcVar = arguments[1];
        }
    }else{
        dataVar = {};
        dataVar.diagram = arguments[0];
        dataVar.name = arguments[1];
        dataVar.key = arguments[2];
        if(arguments.length == 4){ 
           if(typeof(arguments[3]) == "function"){
               funcVar = arguments[3]
           }
       }
       if(arguments.length == 5){ 
           checkVar=arguments[4];
       }

    }
    if(checkVar){
        if(funcVar == null){
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getUpdateDiagramUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getUpdateDiagramUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(WORKFLOW.getUpdateDiagramUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(WORKFLOW.getUpdateDiagramUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
发布工作流
@:return int
"""
if WorkFlowPublish.isPublish(isPublish):
return self.retJson(RetCode.ERROR_PUBLISHED)
"""
if smartGroupKey is not None and len(smartGroupKey) > 0:
# 第一次保存
wobj = WorkFlowObj()
wobj.setKey(workFlowKey)
if smartGroupKey is not None and len(smartGroupKey) > 0:
wobj.setSmartgroupKey(smartGroupKey)
self.workFlowDao.updateByKey(wobj)
"""

*/
_WORKFLOW.prototype.publish = function () {
    var retCode = undefined;
    var dataVar = null;
    var funcVar = null;
    var checkVar = true;
    if(arguments.length <= 2 && typeof(arguments[0])=="object"){
        dataVar = arguments[0];
        if(arguments.length == 2 && typeof(arguments[1])=="function"){
            funcVar = arguments[1];
        }
    }else{
        dataVar = {};
        dataVar.key = arguments[0];
        if(arguments.length == 2){ 
           if(typeof(arguments[1]) == "function"){
               funcVar = arguments[1]
           }
       }
       if(arguments.length == 3){ 
           checkVar=arguments[2];
       }

    }
    if(checkVar){
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSyncCheck(WORKFLOW.getPublishUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                if(data == "0"){
                    retCode = false;
                }else{
                    retCode = true;
                }
            });
            return retCode;
        }else{
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getPublishUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(WORKFLOW.getPublishUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                if(data == "0"){
                    retCode = false;
                }else{
                    retCode = true;
                }
            });
            return retCode;
        }else{
            XREWIN.ajaxPostSync(WORKFLOW.getPublishUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
运行工作流
@:return int
"""

*/
_WORKFLOW.prototype.run = function () {
    var retCode = undefined;
    var dataVar = null;
    var funcVar = null;
    var checkVar = true;
    if(arguments.length <= 2 && typeof(arguments[0])=="object"){
        dataVar = arguments[0];
        if(arguments.length == 2 && typeof(arguments[1])=="function"){
            funcVar = arguments[1];
        }
    }else{
        dataVar = {};
        dataVar.key = arguments[0];
        if(arguments.length == 2){ 
           if(typeof(arguments[1]) == "function"){
               funcVar = arguments[1]
           }
       }
       if(arguments.length == 3){ 
           checkVar=arguments[2];
       }

    }
    if(checkVar){
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSyncCheck(WORKFLOW.getRunUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                if(data == "0"){
                    retCode = false;
                }else{
                    retCode = true;
                }
            });
            return retCode;
        }else{
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getRunUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(WORKFLOW.getRunUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                if(data == "0"){
                    retCode = false;
                }else{
                    retCode = true;
                }
            });
            return retCode;
        }else{
            XREWIN.ajaxPostSync(WORKFLOW.getRunUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
返回工作流是否提交
@:return int
"""

*/
_WORKFLOW.prototype.stop = function () {
    var retCode = undefined;
    var dataVar = null;
    var funcVar = null;
    var checkVar = true;
    if(arguments.length <= 2 && typeof(arguments[0])=="object"){
        dataVar = arguments[0];
        if(arguments.length == 2 && typeof(arguments[1])=="function"){
            funcVar = arguments[1];
        }
    }else{
        dataVar = {};
        dataVar.key = arguments[0];
        if(arguments.length == 2){ 
           if(typeof(arguments[1]) == "function"){
               funcVar = arguments[1]
           }
       }
       if(arguments.length == 3){ 
           checkVar=arguments[2];
       }

    }
    if(checkVar){
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSyncCheck(WORKFLOW.getStopUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                if(data == "0"){
                    retCode = false;
                }else{
                    retCode = true;
                }
            });
            return retCode;
        }else{
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getStopUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(WORKFLOW.getStopUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                if(data == "0"){
                    retCode = false;
                }else{
                    retCode = true;
                }
            });
            return retCode;
        }else{
            XREWIN.ajaxPostSync(WORKFLOW.getStopUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
清空工作流中数据
@:return int
"""

*/
_WORKFLOW.prototype.remove = function () {
    var retCode = undefined;
    var dataVar = null;
    var funcVar = null;
    var checkVar = true;
    if(arguments.length <= 2 && typeof(arguments[0])=="object"){
        dataVar = arguments[0];
        if(arguments.length == 2 && typeof(arguments[1])=="function"){
            funcVar = arguments[1];
        }
    }else{
        dataVar = {};
        dataVar.key = arguments[0];
        if(arguments.length == 2){ 
           if(typeof(arguments[1]) == "function"){
               funcVar = arguments[1]
           }
       }
       if(arguments.length == 3){ 
           checkVar=arguments[2];
       }

    }
    if(checkVar){
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSyncCheck(WORKFLOW.getRemoveUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                if(data == "0"){
                    retCode = false;
                }else{
                    retCode = true;
                }
            });
            return retCode;
        }else{
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getRemoveUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(WORKFLOW.getRemoveUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                if(data == "0"){
                    retCode = false;
                }else{
                    retCode = true;
                }
            });
            return retCode;
        }else{
            XREWIN.ajaxPostSync(WORKFLOW.getRemoveUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
删除WorkFlow
@:return int
"""

*/
_WORKFLOW.prototype.delWorkFlow = function () {
    var retCode = undefined;
    var dataVar = null;
    var funcVar = null;
    var checkVar = true;
    if(arguments.length <= 2 && typeof(arguments[0])=="object"){
        dataVar = arguments[0];
        if(arguments.length == 2 && typeof(arguments[1])=="function"){
            funcVar = arguments[1];
        }
    }else{
        dataVar = {};
        dataVar.id = arguments[0];
        if(arguments.length == 2){ 
           if(typeof(arguments[1]) == "function"){
               funcVar = arguments[1]
           }
       }
       if(arguments.length == 3){ 
           checkVar=arguments[2];
       }

    }
    if(checkVar){
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSyncCheck(WORKFLOW.getDelWorkFlowUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                if(data == "0"){
                    retCode = false;
                }else{
                    retCode = true;
                }
            });
            return retCode;
        }else{
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getDelWorkFlowUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(WORKFLOW.getDelWorkFlowUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                if(data == "0"){
                    retCode = false;
                }else{
                    retCode = true;
                }
            });
            return retCode;
        }else{
            XREWIN.ajaxPostSync(WORKFLOW.getDelWorkFlowUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
显示roi报表
@:return obj
"""
file_metas=self.getReq().files['file']
for meta in file_metas:
filename=meta['filename']
filepath=os.path.join(Consts.confPath,filename)
with open(filepath,'wb') as up:      #有些文件需要已二进制的形式存储，实际中可以更改
up.write(meta['body'])
return 'finished!'
'''

*/
_WORKFLOW.prototype.roiReport = function () {
    var dataRet = undefined;
    var dataVar = null;
    var funcVar = null;
    var checkVar = true;
    if(arguments.length <= 2 && typeof(arguments[0])=="object"){
        dataVar = arguments[0];
        if(arguments.length == 2 && typeof(arguments[1])=="function"){
            funcVar = arguments[1];
        }
    }else{
        dataVar = {};

        if(arguments.length == 1){ 
           if(typeof(arguments[0]) == "function"){
               funcVar = arguments[0]
           }
       }
       if(arguments.length == 2){ 
           checkVar=arguments[1];
       }

    }
    if(checkVar){
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSyncCheck(WORKFLOW.getRoiReportUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getRoiReportUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(WORKFLOW.getRoiReportUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(WORKFLOW.getRoiReportUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表WorkFlow
@:return list
"""

*/
_WORKFLOW.prototype.listWorkFlowRet = function () {
    var list = [];
    var dataVar = null;
    var funcVar = null;
    var checkVar = true;
    if(arguments.length <= 2 && typeof(arguments[0])=="object"){
        dataVar = arguments[0];
        if(arguments.length == 2 && typeof(arguments[1])=="function"){
            funcVar = arguments[1];
        }
    }else{
        dataVar = {};

        if(arguments.length == 1){ 
           if(typeof(arguments[0]) == "function"){
               funcVar = arguments[0]
           }
       }
       if(arguments.length == 2){ 
           checkVar=arguments[1];
       }

    }
    if(checkVar){
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSyncCheck(WORKFLOW.getListWorkFlowRetUrl(), dataVar ,false,null,function () {
                var mesg = this;
                data = mesg.data;
                $.each(data, function (i, n) {
                    list.push(n);
                });
            });
            if (ret == -1) {
                return undefined;
            }
            return list;
        }else{
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getListWorkFlowRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(WORKFLOW.getListWorkFlowRetUrl(), dataVar ,false,null,function () {
                var mesg = this;
                data = mesg.data;
                $.each(data, function (i, n) {
                    list.push(n);
                });
            });
            if (ret == -1) {
                return undefined;
            }
            return list;
        }else{
            XREWIN.ajaxPostSync(WORKFLOW.getListWorkFlowRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得WorkFlow
@:return int
"""

*/
_WORKFLOW.prototype.existByNameWorkFlow = function () {
    var retCode = undefined;
    var dataVar = null;
    var funcVar = null;
    var checkVar = true;
    if(arguments.length <= 2 && typeof(arguments[0])=="object"){
        dataVar = arguments[0];
        if(arguments.length == 2 && typeof(arguments[1])=="function"){
            funcVar = arguments[1];
        }
    }else{
        dataVar = {};
        dataVar.name = arguments[0];
        if(arguments.length == 2){ 
           if(typeof(arguments[1]) == "function"){
               funcVar = arguments[1]
           }
       }
       if(arguments.length == 3){ 
           checkVar=arguments[2];
       }

    }
    if(checkVar){
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSyncCheck(WORKFLOW.getExistByNameWorkFlowUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                if(data == "0"){
                    retCode = false;
                }else{
                    retCode = true;
                }
            });
            return retCode;
        }else{
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getExistByNameWorkFlowUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(WORKFLOW.getExistByNameWorkFlowUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                if(data == "0"){
                    retCode = false;
                }else{
                    retCode = true;
                }
            });
            return retCode;
        }else{
            XREWIN.ajaxPostSync(WORKFLOW.getExistByNameWorkFlowUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得WorkFlow
@:return obj
"""

*/
_WORKFLOW.prototype.getByNameWorkFlow = function () {
    var dataRet = undefined;
    var dataVar = null;
    var funcVar = null;
    var checkVar = true;
    if(arguments.length <= 2 && typeof(arguments[0])=="object"){
        dataVar = arguments[0];
        if(arguments.length == 2 && typeof(arguments[1])=="function"){
            funcVar = arguments[1];
        }
    }else{
        dataVar = {};
        dataVar.name = arguments[0];
        if(arguments.length == 2){ 
           if(typeof(arguments[1]) == "function"){
               funcVar = arguments[1]
           }
       }
       if(arguments.length == 3){ 
           checkVar=arguments[2];
       }

    }
    if(checkVar){
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSyncCheck(WORKFLOW.getGetByNameWorkFlowUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getGetByNameWorkFlowUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(WORKFLOW.getGetByNameWorkFlowUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(WORKFLOW.getGetByNameWorkFlowUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得WorkFlow
@:return obj
"""

*/
_WORKFLOW.prototype.getByIdWorkFlow = function () {
    var dataRet = undefined;
    var dataVar = null;
    var funcVar = null;
    var checkVar = true;
    if(arguments.length <= 2 && typeof(arguments[0])=="object"){
        dataVar = arguments[0];
        if(arguments.length == 2 && typeof(arguments[1])=="function"){
            funcVar = arguments[1];
        }
    }else{
        dataVar = {};
        dataVar.id = arguments[0];
        if(arguments.length == 2){ 
           if(typeof(arguments[1]) == "function"){
               funcVar = arguments[1]
           }
       }
       if(arguments.length == 3){ 
           checkVar=arguments[2];
       }

    }
    if(checkVar){
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSyncCheck(WORKFLOW.getGetByIdWorkFlowUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getGetByIdWorkFlowUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(WORKFLOW.getGetByIdWorkFlowUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(WORKFLOW.getGetByIdWorkFlowUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加WorkFlow
@:form-data
@:return str
"""

*/
_WORKFLOW.prototype.addWorkFlow = function () {
    var str = undefined;
    var dataVar = null;
    var funcVar = null;
    var checkVar = true;
    if(arguments.length <= 2 && typeof(arguments[0])=="object"){
        dataVar = arguments[0];
        if(arguments.length == 2 && typeof(arguments[1])=="function"){
            funcVar = arguments[1];
        }
    }else{
        dataVar = {};

        if(arguments.length == 1){ 
           if(typeof(arguments[0]) == "function"){
               funcVar = arguments[0]
           }
       }
       if(arguments.length == 2){ 
           checkVar=arguments[1];
       }

    }
    if(checkVar){
        if(funcVar == null){
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getAddWorkFlowUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getAddWorkFlowUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(WORKFLOW.getAddWorkFlowUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(WORKFLOW.getAddWorkFlowUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
更新WorkFlow
@:return str
"""

*/
_WORKFLOW.prototype.updateWorkFlow = function () {
    var str = undefined;
    var dataVar = null;
    var funcVar = null;
    var checkVar = true;
    if(arguments.length <= 2 && typeof(arguments[0])=="object"){
        dataVar = arguments[0];
        if(arguments.length == 2 && typeof(arguments[1])=="function"){
            funcVar = arguments[1];
        }
    }else{
        dataVar = {};

        if(arguments.length == 1){ 
           if(typeof(arguments[0]) == "function"){
               funcVar = arguments[0]
           }
       }
       if(arguments.length == 2){ 
           checkVar=arguments[1];
       }

    }
    if(checkVar){
        if(funcVar == null){
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getUpdateWorkFlowUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(WORKFLOW.getUpdateWorkFlowUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(WORKFLOW.getUpdateWorkFlowUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(WORKFLOW.getUpdateWorkFlowUrl(),dataVar,true,null, funcVar);
        }
    }
};

_WORKFLOW.prototype.getListTableWorkFlow = function (tableName) {
    var tableVal =$('#'+tableName).DataTable({
        "scrollX": true,
        "responsive": true,
        "stateSave": true,
        "tableTools": {
            "sSwfPath": "js/plugins/dataTables/swf/copy_csv_xls_pdf.swf"
        },
        
        language: {
            url: '../localisation/dataTables/zh-cn.json'
        },
        "ajax": {"url": WORKFLOW.getListWorkFlowUrl(), "dataSrc": "data"},
        "columns": [
            {"title":"名称","data":"name"},
            {"title":"状态","data":"status.text"},
            {"title":"开始时间","data":"startTime",
            "render": function (data, type, row) {
            if (data == undefined || data == ""){
                            return "未运行"
                        }
                        return data;}
            },
            {"title":"运行时间","data":"runTime",
            "render": function (data, type, row) {
            if (data == ""){
                            return "未运行"
                        }
                        return data;}
            },
            {"title":"创建时间","data":"createdTime"},
            {"title":"更新时间","data":"updatedTime"},
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


                    return edit + editName + run + pause +  stop + deleteStr +copy;}
            }
        ]
    });
    return tableVal;
};

_WORKFLOW.prototype.getListWorkFlowUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/listWorkFlow", "sid", XREWIN.getSid());
};
_WORKFLOW.prototype.getAddInstUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/addInst", "sid", XREWIN.getSid());
};
_WORKFLOW.prototype.getAddAndUpdateWorkFlowUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/addAndUpdateWorkFlow", "sid", XREWIN.getSid());
};
_WORKFLOW.prototype.getUpdateDiagramUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/updateDiagram", "sid", XREWIN.getSid());
};
_WORKFLOW.prototype.getPublishUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/publish", "sid", XREWIN.getSid());
};
_WORKFLOW.prototype.getRunUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/run", "sid", XREWIN.getSid());
};
_WORKFLOW.prototype.getStopUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/stop", "sid", XREWIN.getSid());
};
_WORKFLOW.prototype.getRemoveUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/remove", "sid", XREWIN.getSid());
};
_WORKFLOW.prototype.getDelWorkFlowUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/delWorkFlow", "sid", XREWIN.getSid());
};
_WORKFLOW.prototype.getRoiReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/roiReport", "sid", XREWIN.getSid());
};
_WORKFLOW.prototype.getListWorkFlowRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/listWorkFlowRet", "sid", XREWIN.getSid());
};
_WORKFLOW.prototype.getExistByNameWorkFlowUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/existByNameWorkFlow", "sid", XREWIN.getSid());
};
_WORKFLOW.prototype.getGetByNameWorkFlowUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/getByNameWorkFlow", "sid", XREWIN.getSid());
};
_WORKFLOW.prototype.getGetByIdWorkFlowUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/getByIdWorkFlow", "sid", XREWIN.getSid());
};
_WORKFLOW.prototype.getAddWorkFlowUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/addWorkFlow", "sid", XREWIN.getSid());
};
_WORKFLOW.prototype.getUpdateWorkFlowUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.WORKFLOW + "/WorkFlow/updateWorkFlow", "sid", XREWIN.getSid());
};
if (!window.WORKFLOW) {
window.WORKFLOW = new _WORKFLOW();
}
})();
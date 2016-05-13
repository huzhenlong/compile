(function () 
{var _SMARTGROUP = function () {};
/*
添加智能分组
@:form-data
@:return str
"""

*/
_SMARTGROUP.prototype.addSmartGroup = function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddSmartGroupUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddSmartGroupUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(SMARTGROUP.getAddSmartGroupUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getAddSmartGroupUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
加载智能分组
@:param data key
@:return obj
"""

*/
_SMARTGROUP.prototype.getSmartGroup = function () {
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
        dataVar.data = arguments[0];
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetSmartGroupUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetSmartGroupUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getGetSmartGroupUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getGetSmartGroupUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
更新智能分组
@:param
@:return str
"""

*/
_SMARTGROUP.prototype.updateSmartGroup = function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getUpdateSmartGroupUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getUpdateSmartGroupUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(SMARTGROUP.getUpdateSmartGroupUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getUpdateSmartGroupUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
删除智能分组
@:param data 要删除的key
@:return null
"""

*/
_SMARTGROUP.prototype.delSmartGroup = function () {
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
        dataVar.data = arguments[0];
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getDelSmartGroupUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getDelSmartGroupUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getDelSmartGroupUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getDelSmartGroupUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }
};
/*
刷新smartgroup的接口
@:param groupKey
@:return null
"""

*/
_SMARTGROUP.prototype.refreshSG = function () {
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
        dataVar.groupKey = arguments[0];
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getRefreshSGUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getRefreshSGUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getRefreshSGUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getRefreshSGUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }
};
/*
列表SmartGroup
@:return list
"""

*/
_SMARTGROUP.prototype.listSmartGroup = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListSmartGroupUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListSmartGroupUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getListSmartGroupUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getListSmartGroupUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表SmartGroup
@:return list
"""

*/
_SMARTGROUP.prototype.listSmartGroupRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListSmartGroupRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListSmartGroupRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getListSmartGroupRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getListSmartGroupRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得SmartGroup
@:return int
"""

*/
_SMARTGROUP.prototype.existByNameSmartGroup = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getExistByNameSmartGroupUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getExistByNameSmartGroupUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getExistByNameSmartGroupUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getExistByNameSmartGroupUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得SmartGroup
@:return obj
"""

*/
_SMARTGROUP.prototype.getByNameSmartGroup = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetByNameSmartGroupUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetByNameSmartGroupUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getGetByNameSmartGroupUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getGetByNameSmartGroupUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得SmartGroup
@:return obj
"""

*/
_SMARTGROUP.prototype.getByIdSmartGroup = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetByIdSmartGroupUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetByIdSmartGroupUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getGetByIdSmartGroupUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getGetByIdSmartGroupUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加SmartGroup
@:form-data
@:return str
"""

*/
_SMARTGROUP.prototype.addAndUpdateSmartGroup = function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddAndUpdateSmartGroupUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddAndUpdateSmartGroupUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(SMARTGROUP.getAddAndUpdateSmartGroupUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getAddAndUpdateSmartGroupUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
增加智能分组节点
@:param smartgroupKey  只能分组的key
@:form-data
@:return str  返回成功的主键
"""

*/
_SMARTGROUP.prototype.addSmartGroupNode = function () {
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
        dataVar.groupKey = arguments[0];
        dataVar.parentId = arguments[1];
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddSmartGroupNodeUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddSmartGroupNodeUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(SMARTGROUP.getAddSmartGroupNodeUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getAddSmartGroupNodeUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
删除节点操作
@:param data  当前结点的key
@:return null
"""

*/
_SMARTGROUP.prototype.delSmartGroupNode = function () {
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
        dataVar.data = arguments[0];
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getDelSmartGroupNodeUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getDelSmartGroupNodeUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getDelSmartGroupNodeUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getDelSmartGroupNodeUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }
};
/*
清除所有节点
@:param data  smartgroupkey
@:return null
"""

*/
_SMARTGROUP.prototype.clear = function () {
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
        dataVar.data = arguments[0];
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getClearUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getClearUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getClearUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getClearUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }
};
/*
刷新节点
@:param data 要统计的节点key串
@:return list
"""

*/
_SMARTGROUP.prototype.reCount = function () {
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
        dataVar.data = arguments[0];
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getReCountUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getReCountUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getReCountUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getReCountUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
刷新所有节点
@:param smartgroupkey
@:return null
"""

*/
_SMARTGROUP.prototype.resertStaticts = function () {
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
        dataVar.data = arguments[0];
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getResertStatictsUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getResertStatictsUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getResertStatictsUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getResertStatictsUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }
};
/*
列表SmartGroupNode
@:return list
"""

*/
_SMARTGROUP.prototype.listSmartGroupNode = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListSmartGroupNodeUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListSmartGroupNodeUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getListSmartGroupNodeUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getListSmartGroupNodeUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表SmartGroupNode
@:return list
"""

*/
_SMARTGROUP.prototype.listSmartGroupNodeRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListSmartGroupNodeRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListSmartGroupNodeRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getListSmartGroupNodeRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getListSmartGroupNodeRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得SmartGroupNode
@:return int
"""

*/
_SMARTGROUP.prototype.existByNameSmartGroupNode = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getExistByNameSmartGroupNodeUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getExistByNameSmartGroupNodeUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getExistByNameSmartGroupNodeUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getExistByNameSmartGroupNodeUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得SmartGroupNode
@:return obj
"""

*/
_SMARTGROUP.prototype.getByNameSmartGroupNode = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetByNameSmartGroupNodeUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetByNameSmartGroupNodeUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getGetByNameSmartGroupNodeUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getGetByNameSmartGroupNodeUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得SmartGroupNode
@:return obj
"""

*/
_SMARTGROUP.prototype.getByIdSmartGroupNode = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetByIdSmartGroupNodeUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetByIdSmartGroupNodeUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getGetByIdSmartGroupNodeUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getGetByIdSmartGroupNodeUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加SmartGroupNode
@:form-data
@:return str
"""

*/
_SMARTGROUP.prototype.addAndUpdateSmartGroupNode = function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddAndUpdateSmartGroupNodeUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddAndUpdateSmartGroupNodeUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(SMARTGROUP.getAddAndUpdateSmartGroupNodeUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getAddAndUpdateSmartGroupNodeUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
更新SmartGroupNode
@:return str
"""

*/
_SMARTGROUP.prototype.updateSmartGroupNode = function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getUpdateSmartGroupNodeUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getUpdateSmartGroupNodeUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(SMARTGROUP.getUpdateSmartGroupNodeUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getUpdateSmartGroupNodeUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获取地区
@:return list
"""

*/
_SMARTGROUP.prototype.areas = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAreasUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAreasUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getAreasUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getAreasUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获取省
@:return list
"""

*/
_SMARTGROUP.prototype.provinces = function () {
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
        dataVar.areas = arguments[0];
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getProvincesUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getProvincesUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getProvincesUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getProvincesUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获取城市
@:return list
"""

*/
_SMARTGROUP.prototype.cities = function () {
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
        dataVar.provinces = arguments[0];
        dataVar.areas = arguments[1];
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getCitiesUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getCitiesUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getCitiesUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getCitiesUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表FixGroup
@:return list
"""
resultList = self.fixGroupDao.getJson(filters=filterList, fields=[FixGroupDao.COLUMN_KEY],isJson=False)
for r in resultList:
GroupService.freshSG(r["key"])
'''

*/
_SMARTGROUP.prototype.listFixGroup = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListFixGroupUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListFixGroupUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getListFixGroupUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getListFixGroupUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加FixGroup
@:form-data
@:return str
"""

*/
_SMARTGROUP.prototype.addFixGroup = function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddFixGroupUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddFixGroupUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(SMARTGROUP.getAddFixGroupUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getAddFixGroupUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
删除FixGroup
@:return null
"""

*/
_SMARTGROUP.prototype.delFixGroup = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getDelFixGroupUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getDelFixGroupUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getDelFixGroupUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getDelFixGroupUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }
};
/*
列表FixGroup
@:return list
"""

*/
_SMARTGROUP.prototype.listFixGroupRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListFixGroupRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListFixGroupRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getListFixGroupRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getListFixGroupRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得FixGroup
@:return int
"""

*/
_SMARTGROUP.prototype.existByNameFixGroup = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getExistByNameFixGroupUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getExistByNameFixGroupUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getExistByNameFixGroupUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getExistByNameFixGroupUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得FixGroup
@:return obj
"""

*/
_SMARTGROUP.prototype.getByNameFixGroup = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetByNameFixGroupUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetByNameFixGroupUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getGetByNameFixGroupUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getGetByNameFixGroupUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得FixGroup
@:return obj
"""

*/
_SMARTGROUP.prototype.getByIdFixGroup = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetByIdFixGroupUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetByIdFixGroupUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getGetByIdFixGroupUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getGetByIdFixGroupUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加FixGroup
@:form-data
@:return str
"""

*/
_SMARTGROUP.prototype.addAndUpdateFixGroup = function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddAndUpdateFixGroupUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddAndUpdateFixGroupUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(SMARTGROUP.getAddAndUpdateFixGroupUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getAddAndUpdateFixGroupUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
更新FixGroup
@:return str
"""

*/
_SMARTGROUP.prototype.updateFixGroup = function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getUpdateFixGroupUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getUpdateFixGroupUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(SMARTGROUP.getUpdateFixGroupUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getUpdateFixGroupUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表SmartGroup
@:return list
"""

*/
_SMARTGROUP.prototype.listGroup = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListGroupUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListGroupUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getListGroupUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getListGroupUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表FixGroup
@:param key 固定分组的主键
@:return list
"""

*/
_SMARTGROUP.prototype.listGroupMember = function () {
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
        dataVar.mobile = arguments[0];
        dataVar.nick = arguments[1];
        dataVar.email = arguments[2];
        dataVar.groupKey = arguments[3];
        if(arguments.length == 5){ 
           if(typeof(arguments[4]) == "function"){
               funcVar = arguments[4]
           }
       }
       if(arguments.length == 6){ 
           checkVar=arguments[5];
       }

    }
    if(checkVar){
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListGroupMemberUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListGroupMemberUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getListGroupMemberUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getListGroupMemberUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
新增会员
@:form-data
@:return str
"""

*/
_SMARTGROUP.prototype.addMember = function () {
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
        dataVar.fixGroupListKey = arguments[0];
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddMemberUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddMemberUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(SMARTGROUP.getAddMemberUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getAddMemberUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
将会员移除固定分组
@:return null
"""

*/
_SMARTGROUP.prototype.removeFixGroup = function () {
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
        dataVar.fixGroupKey = arguments[0];
        dataVar.memberKey = arguments[1];
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getRemoveFixGroupUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getRemoveFixGroupUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getRemoveFixGroupUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getRemoveFixGroupUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }
};
/*
加入分组
@:form-data
@:return str
"""

*/
_SMARTGROUP.prototype.joinFixGroup = function () {
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
        dataVar.oldJoinFixGroupKey = arguments[0];
        dataVar.newJoinFixGroupKey = arguments[1];
        dataVar.joinFixGroupMemberKey = arguments[2];
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getJoinFixGroupUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getJoinFixGroupUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(SMARTGROUP.getJoinFixGroupUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getJoinFixGroupUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
变更分组
@:form-data
@:return str
"""

*/
_SMARTGROUP.prototype.changeFixGroup = function () {
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
        dataVar.oldChangeFixGroupKey = arguments[0];
        dataVar.newChangeFixGroupKey = arguments[1];
        dataVar.changeFixGroupMemberKey = arguments[2];
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getChangeFixGroupUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getChangeFixGroupUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(SMARTGROUP.getChangeFixGroupUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getChangeFixGroupUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
列表GroupMember
@:return list
"""

*/
_SMARTGROUP.prototype.listGroupMemberRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListGroupMemberRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getListGroupMemberRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getListGroupMemberRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getListGroupMemberRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得GroupMember
@:return int
"""

*/
_SMARTGROUP.prototype.existByNameGroupMember = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getExistByNameGroupMemberUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getExistByNameGroupMemberUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getExistByNameGroupMemberUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getExistByNameGroupMemberUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得GroupMember
@:return obj
"""

*/
_SMARTGROUP.prototype.getByNameGroupMember = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetByNameGroupMemberUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetByNameGroupMemberUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getGetByNameGroupMemberUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getGetByNameGroupMemberUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得GroupMember
@:return obj
"""

*/
_SMARTGROUP.prototype.getByIdGroupMember = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetByIdGroupMemberUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getGetByIdGroupMemberUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getGetByIdGroupMemberUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getGetByIdGroupMemberUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
删除GroupMember
@:return int
"""

*/
_SMARTGROUP.prototype.delGroupMember = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(SMARTGROUP.getDelGroupMemberUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getDelGroupMemberUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(SMARTGROUP.getDelGroupMemberUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(SMARTGROUP.getDelGroupMemberUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加GroupMember
@:form-data
@:return str
"""

*/
_SMARTGROUP.prototype.addAndUpdateGroupMember = function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddAndUpdateGroupMemberUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddAndUpdateGroupMemberUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(SMARTGROUP.getAddAndUpdateGroupMemberUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getAddAndUpdateGroupMemberUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
添加GroupMember
@:form-data
@:return str
"""

*/
_SMARTGROUP.prototype.addGroupMember = function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddGroupMemberUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getAddGroupMemberUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(SMARTGROUP.getAddGroupMemberUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getAddGroupMemberUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
更新GroupMember
@:return str
"""

*/
_SMARTGROUP.prototype.updateGroupMember = function () {
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
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getUpdateGroupMemberUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(SMARTGROUP.getUpdateGroupMemberUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(SMARTGROUP.getUpdateGroupMemberUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(SMARTGROUP.getUpdateGroupMemberUrl(),dataVar,true,null, funcVar);
        }
    }
};

_SMARTGROUP.prototype.getListTableSmartGroup = function (tableName) {
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
        "ajax": {"url": SMARTGROUP.getListSmartGroupUrl(), "dataSrc": "data","data": function () {
                
                //添加额外的参数传给服务器
                    var extra = {};
                    extra.groupType = "normal";
                    return extra;
                
            }},
        "columns": [
            {"title":"名称","data":"name"},
            {"title":"创建时间","data":"createdTime"},
            {"title":"更新时间","data":"updatedTime",
            "render": function (data, type, row) {
            if (data == undefined){
                            return ""
                        }
                        return data;}
            },
            {"title":"人数","data":"count",
            "render": function (data, type, row) {
            if (data == -1){
                            return 0;
                        }
                        return data}
            },
            {"title":"操作","data":"key",
            "render": function (data, type, row) {
            var name = row["name"];
                        var render = '<a style="margin-right:5px;" class="btn btn-white btn-xs editList" href="/smartgroup.html" target="_block"  '
                                + ' name="addSidHref" data-data-id="' + data + '" data-data-name="' + name
                                + '" title="编辑" ><i class="fa fa-edit"></i>' + '</a>';
                        render += '<a class="btn btn-white btn-xs checkList" href="/FixGroupMembers.html" name="smartGroupCheck" data-data-id="' + data + '" '
                                + 'data-data-name="' + row["name"] + '" title="查看" style="margin-right:5px;"><i class="fa fa-binoculars"></i>' + '</a>';
                        render += '<button class="btn btn-white btn-xs delList" name="btnOp" data-data-id="' + data + '" '
                                + 'data-data-name="' + row["name"] + '" title="删除分组" ><i class="fa fa-trash"></i>' + '</button>';
                        return render;}
            }
        ]
    });
    return tableVal;
};


_SMARTGROUP.prototype.getListTableFixGroup = function (tableName) {
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
        "ajax": {"url": SMARTGROUP.getListFixGroupUrl(), "dataSrc": "data"},
        "columns": [
            {"title":"名称","data":"name"},
            {"title":"创建时间","data":"createdTime",
            "render": function (data, type, row) {
            if (data == undefined){
                            return ""
                        }
                        return data;}
            },
            {"title":"更新时间","data":"updatedTime",
            "render": function (data, type, row) {
            if (data == undefined){
                            return ""
                        }
                        return data;}
            },
            {"title":"人数","data":"count",
            "render": function (data, type, row) {
            if (data == -1 || data == undefined){
                            return 0;
                        }
                        return data}
            },
            {"title":"操作","data":"key",
            "render": function (data, type, row) {
            var name = row["name"];
                        var key = row["key"];

                        var render = '<a style="margin-right:5px;" class="btn btn-white btn-xs checkList" href="/FixGroupMembers.html" target="_block"  '
                                + ' name="addSidHref" data-data-id="' + key + '" data-data-name="' + name
                                + '" title="查看" ><i class="fa fa-binoculars"></i>' + '</a>';
                        render += '<button style="margin-right:5px;"  class="btn btn-white btn-xs delList" name="btnOp" data-data-id="' + data + '" '
                                + 'data-data-name="' + row["name"] + '" title="删除分组" ><i class="fa fa-trash"></i>' + '</button>';

                        render += '<button class="btn btn-white btn-xs importList" name="importMember" data-data-id="' + data +
                        '" data-data-name="' + row['nick'] + '" title="导入" onclick="fnClickImport();"><i class="fa fa-upload"></i>' + '</button>';
                        return render;}
            }
        ]
    });
    return tableVal;
};


_SMARTGROUP.prototype.getListTableGroupMember = function (tableName) {
    var tableVal =$('#'+tableName).DataTable({
        "scrollX": true,
        "responsive": true,
        "stateSave": true,
        "tableTools": {
            "sSwfPath": "js/plugins/dataTables/swf/copy_csv_xls_pdf.swf"
        },
        "dom":"<'row'<'col-sm-12'<'#toolbox'>>>" +
                    "<'row'<'col-sm-12'tr>>" +
                    "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        language: {
            url: '../localisation/dataTables/zh-cn.json'
        },
        "ajax": {"url": SMARTGROUP.getListGroupMemberUrl(), "dataSrc": "data","data": function () {
                
                //添加额外的参数传给服务器
                    var extra = {};
                    var formSearch = $("#form_search_tool");
                    extra.nick = formSearch.find("input[name='nick']").val();
                    extra.email = formSearch.find("input[name='email']").val();
                    extra.mobile = formSearch.find("input[name='mobile']").val();
                    extra.groupKey = formSearch.find("input[name='fixGroupKey']").val();
                    return extra;
                
            }},
        "columns": [
            {"title":"会员号","data":"number",
            "render": function (data, type, row) {
            if (data == undefined){
                            return ""
                        }
                        return data;}
            },
            {"title":"昵称","data":"nick",
            "render": function (data, type, row) {
            if (data == undefined){
                            return ""
                        }
                        return data;}
            },
            {"title":"邮箱","data":"email",
            "render": function (data, type, row) {
            if (data == undefined){
                            return ""
                        }
                        return data;}
            },
            {"title":"手机","data":"mobile",
            "render": function (data, type, row) {
            if (data == undefined){
                            return ""
                        }
                        return data;}
            },
            {"title":"会员等级","data":"level",
            "render": function (data, type, row) {
            if (data == undefined){
                            return ""
                        }
                        return data;}
            },
            {"title":"会员类型","data":"type",
            "render": function (data, type, row) {
            if (data == undefined){
                            return ""
                        }
                        return data;}
            },
            {"title":"客单价","data":"perTransaction",
            "render": function (data, type, row) {
            if (data == undefined){
                            return ""
                        }
                        return data;}
            },
            {"title":"最后购买时间","data":"lastBuyTime",
            "render": function (data, type, row) {
            if (data == undefined){
                            return ""
                        }
                        return data;}
            },
            {"title":"操作","data":"key",
            "render": function (data, type, row) {
            var nick = row['nick'];
                        var render = '<button style="margin-right:5px;"  class="btn btn-white btn-xs checkList" name="btnShowOp"' +
                                'data-data-id="' + data + '" title="查看" onclick="memberCon();"><i class="fa fa-binoculars"></i>' + '</button>';
                         return render;}
            }
        ]
    });
    return tableVal;
};

_SMARTGROUP.prototype.getAddSmartGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroup/addSmartGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getGetSmartGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroup/getSmartGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getUpdateSmartGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroup/updateSmartGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getDelSmartGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroup/delSmartGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getRefreshSGUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroup/refreshSG", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getListSmartGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroup/listSmartGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getListSmartGroupRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroup/listSmartGroupRet", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getExistByNameSmartGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroup/existByNameSmartGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getGetByNameSmartGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroup/getByNameSmartGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getGetByIdSmartGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroup/getByIdSmartGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getAddAndUpdateSmartGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroup/addAndUpdateSmartGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getAddSmartGroupNodeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroupNode/addSmartGroupNode", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getDelSmartGroupNodeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroupNode/delSmartGroupNode", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getClearUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroupNode/clear", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getReCountUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroupNode/reCount", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getResertStatictsUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroupNode/resertStaticts", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getListSmartGroupNodeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroupNode/listSmartGroupNode", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getListSmartGroupNodeRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroupNode/listSmartGroupNodeRet", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getExistByNameSmartGroupNodeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroupNode/existByNameSmartGroupNode", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getGetByNameSmartGroupNodeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroupNode/getByNameSmartGroupNode", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getGetByIdSmartGroupNodeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroupNode/getByIdSmartGroupNode", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getAddAndUpdateSmartGroupNodeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroupNode/addAndUpdateSmartGroupNode", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getUpdateSmartGroupNodeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroupNode/updateSmartGroupNode", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getAreasUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroupArea/areas", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getProvincesUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroupArea/provinces", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getCitiesUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/SmartGroupArea/cities", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getListFixGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/FixGroup/listFixGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getAddFixGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/FixGroup/addFixGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getDelFixGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/FixGroup/delFixGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getListFixGroupRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/FixGroup/listFixGroupRet", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getExistByNameFixGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/FixGroup/existByNameFixGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getGetByNameFixGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/FixGroup/getByNameFixGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getGetByIdFixGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/FixGroup/getByIdFixGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getAddAndUpdateFixGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/FixGroup/addAndUpdateFixGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getUpdateFixGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/FixGroup/updateFixGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getListGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/Group/listGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getListGroupMemberUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/GroupMember/listGroupMember", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getAddMemberUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/GroupMember/addMember", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getRemoveFixGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/GroupMember/removeFixGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getJoinFixGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/GroupMember/joinFixGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getChangeFixGroupUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/GroupMember/changeFixGroup", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getListGroupMemberRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/GroupMember/listGroupMemberRet", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getExistByNameGroupMemberUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/GroupMember/existByNameGroupMember", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getGetByNameGroupMemberUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/GroupMember/getByNameGroupMember", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getGetByIdGroupMemberUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/GroupMember/getByIdGroupMember", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getDelGroupMemberUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/GroupMember/delGroupMember", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getAddAndUpdateGroupMemberUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/GroupMember/addAndUpdateGroupMember", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getAddGroupMemberUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/GroupMember/addGroupMember", "sid", XREWIN.getSid());
};
_SMARTGROUP.prototype.getUpdateGroupMemberUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.SMARTGROUP + "/GroupMember/updateGroupMember", "sid", XREWIN.getSid());
};
if (!window.SMARTGROUP) {
window.SMARTGROUP = new _SMARTGROUP();
}
})();
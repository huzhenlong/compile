(function () 
{var _PLAT = function () {};
/*
列表Customer
@:return list
"""

*/
_PLAT.prototype.listCustomer = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListCustomerUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListCustomerUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListCustomerUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListCustomerUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表Customer
@:return list
"""

*/
_PLAT.prototype.listCustomerRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListCustomerRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListCustomerRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListCustomerRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListCustomerRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Customer
@:return obj
"""

*/
_PLAT.prototype.getByNameCustomer = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameCustomerUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameCustomerUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByNameCustomerUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByNameCustomerUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Customer
@:return obj
"""

*/
_PLAT.prototype.getByIdCustomer = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdCustomerUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdCustomerUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByIdCustomerUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByIdCustomerUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得User
@:return obj
"""

*/
_PLAT.prototype.getUser = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetUserUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetUserUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetUserUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetUserUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表User
@:return list
"""

*/
_PLAT.prototype.listUser = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListUserUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListUserUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListUserUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListUserUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表User
@:return list
"""

*/
_PLAT.prototype.listUserRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListUserRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListUserRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListUserRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListUserRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得User
@:return int
"""

*/
_PLAT.prototype.existByNameUser = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameUserUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameUserUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getExistByNameUserUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PLAT.getExistByNameUserUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得User
@:return obj
"""

*/
_PLAT.prototype.getByNameUser = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameUserUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameUserUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByNameUserUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByNameUserUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得User
@:return obj
"""

*/
_PLAT.prototype.getByIdUser = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdUserUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdUserUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByIdUserUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByIdUserUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
删除User
@:return int
"""

*/
_PLAT.prototype.delUser = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getDelUserUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getDelUserUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getDelUserUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PLAT.getDelUserUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加User
@:form-data
@:return str
"""

*/
_PLAT.prototype.addAndUpdateUser = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateUserUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateUserUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateUserUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateUserUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
添加User
@:form-data
@:return str
"""

*/
_PLAT.prototype.addUser = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddUserUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddUserUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddUserUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddUserUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
更新User
@:return str
"""

*/
_PLAT.prototype.updateUser = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateUserUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateUserUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getUpdateUserUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getUpdateUserUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
下载失败的会员
@:param 接收发送邮件的参数
@:return null
"""

*/
_PLAT.prototype.failMemsDowload = function () {
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
        dataVar.campaignKey = arguments[0];
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getFailMemsDowloadUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getFailMemsDowloadUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getFailMemsDowloadUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(PLAT.getFailMemsDowloadUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }
};
/*
http://127.0.0.1:8119/MailDetailReport/getTotalReport?key=9c1f852107131cb84acbfed707224462
获取总体情况的信息
@:return obj
"""

*/
_PLAT.prototype.getTotalReport = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetTotalReportUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetTotalReportUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetTotalReportUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetTotalReportUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
http://127.0.0.1:8119/MailDetailReport/clickReport?key=9c1f852107131cb84acbfed707224462
获取点击情况的信息
@:return obj
"""

*/
_PLAT.prototype.clickReport = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getClickReportUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getClickReportUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getClickReportUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getClickReportUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
http://192.168.1.5:8119/MailDetailReport/getClickTemplate?key=9c1f852107131cb84acbfed707224462
获取普通的模板
@:return obj
"""

*/
_PLAT.prototype.getClickTemplate = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetClickTemplateUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetClickTemplateUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetClickTemplateUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetClickTemplateUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
http://127.0.0.1:8119/MailDetailReport/getClickTemplateForIndividuation?key=9c1f852107131cb84acbfed707224462
@:form-data
获取个性化的模板
@:return obj
"""

*/
_PLAT.prototype.getClickTemplateForIndividuation = function () {
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
        dataVar.tel = arguments[0];
        dataVar.email = arguments[1];
        dataVar.key = arguments[2];
        dataVar.sid = arguments[3];
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetClickTemplateForIndividuationUrl(),dataVar,false,false, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetClickTemplateForIndividuationUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetClickTemplateForIndividuationUrl(),dataVar,false,false, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetClickTemplateForIndividuationUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
http://192.168.1.5:8119/MailDetailReport/gotoPagePreview?reviewKey=c1d096b3421c08de5adf964c22337c1b&pageSize=2&curPage=1
@:form-data
预览
@:return obj
"""

*/
_PLAT.prototype.gotoPagePreview = function () {
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
        dataVar.reviewKey = arguments[0];
        dataVar.curPage = arguments[1];
        dataVar.pageSize = arguments[2];
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGotoPagePreviewUrl(),dataVar,false,false, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGotoPagePreviewUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGotoPagePreviewUrl(),dataVar,false,false, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGotoPagePreviewUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
http://127.0.0.1:8119/MailDetailReport/getPeriodStatistics?key=9c1f852107131cb84acbfed707224462
分时段统计
@:return obj
"""

*/
_PLAT.prototype.getPeriodStatistics = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetPeriodStatisticsUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetPeriodStatisticsUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetPeriodStatisticsUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetPeriodStatisticsUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
http://127.0.0.1:8119/MailDetailReport/getCustomerStatistics?key=9c1f852107131cb84acbfed707224462
获取客户端的统计
@:return obj
"""

*/
_PLAT.prototype.getCustomerStatistics = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetCustomerStatisticsUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetCustomerStatisticsUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetCustomerStatisticsUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetCustomerStatisticsUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表Campaign
@:return list
"""

*/
_PLAT.prototype.listMailDetailReport = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListMailDetailReportUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListMailDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListMailDetailReportUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListMailDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表Campaign
@:return list
"""

*/
_PLAT.prototype.listMailDetailReportRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListMailDetailReportRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListMailDetailReportRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListMailDetailReportRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListMailDetailReportRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Campaign
@:return int
"""

*/
_PLAT.prototype.existByNameMailDetailReport = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameMailDetailReportUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameMailDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getExistByNameMailDetailReportUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PLAT.getExistByNameMailDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Campaign
@:return obj
"""

*/
_PLAT.prototype.getByNameMailDetailReport = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameMailDetailReportUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameMailDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByNameMailDetailReportUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByNameMailDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Campaign
@:return obj
"""

*/
_PLAT.prototype.getByIdMailDetailReport = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdMailDetailReportUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdMailDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByIdMailDetailReportUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByIdMailDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
删除Campaign
@:return int
"""

*/
_PLAT.prototype.delMailDetailReport = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getDelMailDetailReportUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getDelMailDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getDelMailDetailReportUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PLAT.getDelMailDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加Campaign
@:form-data
@:return str
"""

*/
_PLAT.prototype.addAndUpdateMailDetailReport = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateMailDetailReportUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateMailDetailReportUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateMailDetailReportUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateMailDetailReportUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
添加Campaign
@:form-data
@:return str
"""

*/
_PLAT.prototype.addMailDetailReport = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddMailDetailReportUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddMailDetailReportUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddMailDetailReportUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddMailDetailReportUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
更新Campaign
@:return str
"""

*/
_PLAT.prototype.updateMailDetailReport = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateMailDetailReportUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateMailDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getUpdateMailDetailReportUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getUpdateMailDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
view
@:return list
"""

*/
_PLAT.prototype.listMailSmsViewMailDetailReport = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListMailSmsViewMailDetailReportUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListMailSmsViewMailDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListMailSmsViewMailDetailReportUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListMailSmsViewMailDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
http://127.0.0.1:8119/MailDetailReport/getTotalReportForSms?key=90edd75e778e44aef653dc76fed39c94
获取短信总体情况的信息
@:return obj
"""

*/
_PLAT.prototype.getTotalReportForSms = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetTotalReportForSmsUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetTotalReportForSmsUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetTotalReportForSmsUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetTotalReportForSmsUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表Campaign
@:return list
"""

*/
_PLAT.prototype.listSmsDetailReport = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListSmsDetailReportUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListSmsDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListSmsDetailReportUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListSmsDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表Campaign
@:return list
"""

*/
_PLAT.prototype.listSmsDetailReportRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListSmsDetailReportRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListSmsDetailReportRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListSmsDetailReportRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListSmsDetailReportRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Campaign
@:return int
"""

*/
_PLAT.prototype.existByNameSmsDetailReport = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameSmsDetailReportUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameSmsDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getExistByNameSmsDetailReportUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PLAT.getExistByNameSmsDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Campaign
@:return obj
"""

*/
_PLAT.prototype.getByNameSmsDetailReport = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameSmsDetailReportUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameSmsDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByNameSmsDetailReportUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByNameSmsDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Campaign
@:return obj
"""

*/
_PLAT.prototype.getByIdSmsDetailReport = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdSmsDetailReportUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdSmsDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByIdSmsDetailReportUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByIdSmsDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
删除Campaign
@:return int
"""

*/
_PLAT.prototype.delSmsDetailReport = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getDelSmsDetailReportUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getDelSmsDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getDelSmsDetailReportUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PLAT.getDelSmsDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加Campaign
@:form-data
@:return str
"""

*/
_PLAT.prototype.addAndUpdateSmsDetailReport = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateSmsDetailReportUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateSmsDetailReportUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateSmsDetailReportUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateSmsDetailReportUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
添加Campaign
@:form-data
@:return str
"""

*/
_PLAT.prototype.addSmsDetailReport = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddSmsDetailReportUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddSmsDetailReportUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddSmsDetailReportUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddSmsDetailReportUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
更新Campaign
@:return str
"""

*/
_PLAT.prototype.updateSmsDetailReport = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateSmsDetailReportUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateSmsDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getUpdateSmsDetailReportUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getUpdateSmsDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
view
@:return list
"""

*/
_PLAT.prototype.listMailSmsViewSmsDetailReport = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListMailSmsViewSmsDetailReportUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListMailSmsViewSmsDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListMailSmsViewSmsDetailReportUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListMailSmsViewSmsDetailReportUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加等级
@:form-data
@:return str
http://127.0.0.1:8119/CustomerSetting/addLevel?baseDataValue=%E9%93%B6%E7%89%8C%E4%BC%9A%E5%91%98&desc=%E9%93%B6%E7%89%8C%E4%BC%9A%E5%91%98
"""

*/
_PLAT.prototype.addLevel = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddLevelUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddLevelUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddLevelUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddLevelUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
http://127.0.0.1:8119/CustomerSetting/updateLevel?key=c92f516cef2bf70e588bae22372d6f6c&baseDataValue=%E9%93%B6%E7%89%8C%E4%BC%9A%E5%91%98&desc=%E9%93%B6%E7%89%8C%E4%BC%9A%E5%91%98123
@:form-data
更新BaseData
@:return str
"""

*/
_PLAT.prototype.updateLevel = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateLevelUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateLevelUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getUpdateLevelUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getUpdateLevelUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
http://127.0.0.1:8119/CustomerSetting/delLevel?key=c92f516cef2bf70e588bae22372d6f6c
删除BaseData
@:return str
"""

*/
_PLAT.prototype.delLevel = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getDelLevelUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getDelLevelUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getDelLevelUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getDelLevelUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
http://127.0.0.1:8119/CustomerSetting/listLevel
等级list
@:return list
"""

*/
_PLAT.prototype.listLevel = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListLevelUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListLevelUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListLevelUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListLevelUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
http://192.168.1.5:8119/CustomerSetting/orderLevel?levelKeys=c92f516cef2bf70e588bae22372d6f6c,f20c4eadd912e6815adfd6a2ef831982
等级排序
@:return null
"""

*/
_PLAT.prototype.orderLevel = function () {
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
        dataVar.levelKeys = arguments[0];
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getOrderLevelUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getOrderLevelUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getOrderLevelUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(PLAT.getOrderLevelUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }
};
/*
http://127.0.0.1:8119/CustomerSetting/getLevelSetting?key=f20c4eadd912e6815adfd6a2ef831982
获得levelSettingJson
@:return list
"""

*/
_PLAT.prototype.getLevelSetting = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetLevelSettingUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getGetLevelSettingUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetLevelSettingUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getGetLevelSettingUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
http://127.0.0.1:8119/CustomerSetting/getBrandListByLevel?key=d2b5ca216aaea7dd090b14a3d2b29b72
获得品牌的列表
@:return list
"""

*/
_PLAT.prototype.getBrandListByLevel = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetBrandListByLevelUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getGetBrandListByLevelUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetBrandListByLevelUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getGetBrandListByLevelUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
http://127.0.0.1:8119/CustomerSetting/getGroupKeyByLevel?key=f20c4eadd912e6815adfd6a2ef831982&brandKeys=1
获得智能分组的key
@:form-data
@:return str
"""

*/
_PLAT.prototype.getGroupKeyByLevel = function () {
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
        dataVar.key = arguments[0];
        dataVar.brandKeys = arguments[1];
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
            XREWIN.ajaxPostSyncCheck(PLAT.getGetGroupKeyByLevelUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetGroupKeyByLevelUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getGetGroupKeyByLevelUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetGroupKeyByLevelUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
http://127.0.0.1:8119/CustomerSetting/removeLevelSetting?key=f20c4eadd912e6815adfd6a2ef831982&brandKeys=1
移除等级
@:form-data
@:return null
"""

*/
_PLAT.prototype.removeLevelSetting = function () {
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
        dataVar.brandKeys = arguments[1];
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getRemoveLevelSettingUrl(),dataVar,false,false, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getRemoveLevelSettingUrl(),dataVar,true,false, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getRemoveLevelSettingUrl(),dataVar,false,false, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(PLAT.getRemoveLevelSettingUrl(),dataVar,true,false, funcVar);
        }
        return true;
    }
};
/*
列表CustomerSetting
@:return list
"""

*/
_PLAT.prototype.listCustomerSetting = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListCustomerSettingUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListCustomerSettingUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListCustomerSettingUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListCustomerSettingUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表CustomerSetting
@:return list
"""

*/
_PLAT.prototype.listCustomerSettingRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListCustomerSettingRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListCustomerSettingRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListCustomerSettingRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListCustomerSettingRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得CustomerSetting
@:return int
"""

*/
_PLAT.prototype.existByNameCustomerSetting = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameCustomerSettingUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameCustomerSettingUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getExistByNameCustomerSettingUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PLAT.getExistByNameCustomerSettingUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得CustomerSetting
@:return obj
"""

*/
_PLAT.prototype.getByNameCustomerSetting = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameCustomerSettingUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameCustomerSettingUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByNameCustomerSettingUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByNameCustomerSettingUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得CustomerSetting
@:return obj
"""

*/
_PLAT.prototype.getByIdCustomerSetting = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdCustomerSettingUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdCustomerSettingUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByIdCustomerSettingUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByIdCustomerSettingUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
删除CustomerSetting
@:return int
"""

*/
_PLAT.prototype.delCustomerSetting = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getDelCustomerSettingUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getDelCustomerSettingUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getDelCustomerSettingUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PLAT.getDelCustomerSettingUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加CustomerSetting
@:form-data
@:return str
"""

*/
_PLAT.prototype.addAndUpdateCustomerSetting = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateCustomerSettingUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateCustomerSettingUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateCustomerSettingUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateCustomerSettingUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
添加CustomerSetting
@:form-data
@:return str
"""

*/
_PLAT.prototype.addCustomerSetting = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddCustomerSettingUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddCustomerSettingUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddCustomerSettingUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddCustomerSettingUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
更新CustomerSetting
@:return str
"""

*/
_PLAT.prototype.updateCustomerSetting = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateCustomerSettingUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateCustomerSettingUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getUpdateCustomerSettingUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getUpdateCustomerSettingUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
暂停正在上传的数据
@:param 要暂停的key
@:return null
"""

*/
_PLAT.prototype.parseUpload = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getParseUploadUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getParseUploadUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getParseUploadUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(PLAT.getParseUploadUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }
};
/*
开始正在上传的数据
@:param key  要开始任务的key
@:param type  要开始任务的类型
@:return null
"""

*/
_PLAT.prototype.startUpload = function () {
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
        dataVar.type = arguments[0];
        dataVar.key = arguments[1];
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getStartUploadUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getStartUploadUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getStartUploadUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(PLAT.getStartUploadUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }
};
/*
列表Campaign
@:return list
"""

*/
_PLAT.prototype.listCampaign = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListCampaignUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListCampaignUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListCampaignUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListCampaignUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表Campaign
@:return list
"""

*/
_PLAT.prototype.listCampaignRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListCampaignRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListCampaignRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListCampaignRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListCampaignRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Campaign
@:return int
"""

*/
_PLAT.prototype.existByNameCampaign = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameCampaignUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameCampaignUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getExistByNameCampaignUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PLAT.getExistByNameCampaignUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Campaign
@:return obj
"""

*/
_PLAT.prototype.getByNameCampaign = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameCampaignUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameCampaignUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByNameCampaignUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByNameCampaignUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Campaign
@:return obj
"""

*/
_PLAT.prototype.getByIdCampaign = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdCampaignUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdCampaignUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByIdCampaignUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByIdCampaignUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
删除Campaign
@:return int
"""

*/
_PLAT.prototype.delCampaign = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getDelCampaignUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getDelCampaignUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getDelCampaignUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PLAT.getDelCampaignUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加Campaign
@:form-data
@:return str
"""

*/
_PLAT.prototype.addAndUpdateCampaign = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateCampaignUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateCampaignUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateCampaignUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateCampaignUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
添加Campaign
@:form-data
@:return str
"""

*/
_PLAT.prototype.addCampaign = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddCampaignUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddCampaignUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddCampaignUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddCampaignUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
更新Campaign
@:return str
"""

*/
_PLAT.prototype.updateCampaign = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateCampaignUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateCampaignUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getUpdateCampaignUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getUpdateCampaignUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
view
@:return list
"""

*/
_PLAT.prototype.listMailSmsViewCampaign = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListMailSmsViewCampaignUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListMailSmsViewCampaignUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListMailSmsViewCampaignUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListMailSmsViewCampaignUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表MailSmsView
@:return list
"""

*/
_PLAT.prototype.listMailSmsViewMailSmsView = function () {
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
        dataVar.brandKey = arguments[0];
        dataVar.endTime = arguments[1];
        dataVar.campaignTaskName = arguments[2];
        dataVar.campaignActType = arguments[3];
        dataVar.startTime = arguments[4];
        if(arguments.length == 6){ 
           if(typeof(arguments[5]) == "function"){
               funcVar = arguments[5]
           }
       }
       if(arguments.length == 7){ 
           checkVar=arguments[6];
       }

    }
    if(checkVar){
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListMailSmsViewMailSmsViewUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListMailSmsViewMailSmsViewUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListMailSmsViewMailSmsViewUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListMailSmsViewMailSmsViewUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表Campaign
@:return list
"""

*/
_PLAT.prototype.listMailSmsView = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListMailSmsViewUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListMailSmsViewUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListMailSmsViewUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListMailSmsViewUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表Campaign
@:return list
"""

*/
_PLAT.prototype.listMailSmsViewRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListMailSmsViewRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListMailSmsViewRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListMailSmsViewRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListMailSmsViewRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Campaign
@:return int
"""

*/
_PLAT.prototype.existByNameMailSmsView = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameMailSmsViewUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameMailSmsViewUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getExistByNameMailSmsViewUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PLAT.getExistByNameMailSmsViewUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Campaign
@:return obj
"""

*/
_PLAT.prototype.getByNameMailSmsView = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameMailSmsViewUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameMailSmsViewUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByNameMailSmsViewUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByNameMailSmsViewUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Campaign
@:return obj
"""

*/
_PLAT.prototype.getByIdMailSmsView = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdMailSmsViewUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdMailSmsViewUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByIdMailSmsViewUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByIdMailSmsViewUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
删除Campaign
@:return int
"""

*/
_PLAT.prototype.delMailSmsView = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getDelMailSmsViewUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getDelMailSmsViewUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getDelMailSmsViewUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PLAT.getDelMailSmsViewUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加Campaign
@:form-data
@:return str
"""

*/
_PLAT.prototype.addAndUpdateMailSmsView = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateMailSmsViewUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateMailSmsViewUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateMailSmsViewUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateMailSmsViewUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
添加Campaign
@:form-data
@:return str
"""

*/
_PLAT.prototype.addMailSmsView = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddMailSmsViewUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddMailSmsViewUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddMailSmsViewUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddMailSmsViewUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
更新Campaign
@:return str
"""

*/
_PLAT.prototype.updateMailSmsView = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateMailSmsViewUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateMailSmsViewUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getUpdateMailSmsViewUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getUpdateMailSmsViewUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
导入会员
@:param 导入会员的数据
@:form-data
@:return null  导入成功的结果
"""

*/
_PLAT.prototype.importMembers = function () {
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
        dataVar.memberName = arguments[1];
        dataVar.numberBind = arguments[2];
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getImportMembersUrl(),dataVar,false,false, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getImportMembersUrl(),dataVar,true,false, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getImportMembersUrl(),dataVar,false,false, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(PLAT.getImportMembersUrl(),dataVar,true,false, funcVar);
        }
        return true;
    }
};
/*
获取会员列表
@:param scanTool 扫描数据库的参数
@:param mobile  要查询的手机条件
@:param nick  昵称
@:param email 邮件
@:return list 返回1000条数据
"""
daoUtil = "hbase"
if mobile is not None and len(mobile) > 0:
daoUtil = "impala"
else:
mobile = None
if nick is not None and len(nick) > 0:
daoUtil = "impala"
else:
nick = None
if email is not None and len(email) > 0:
daoUtil = "impala"
else:
email = None
'''

*/
_PLAT.prototype.listMember = function () {
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
        dataVar.scanTool = arguments[1];
        dataVar.email = arguments[2];
        dataVar.nick = arguments[3];
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListMemberUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListMemberUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListMemberUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListMemberUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
删除会员
@:param key 删除会员的key
@:param scantool  扫描数据库的类型
@:return null
"""

*/
_PLAT.prototype.delMember = function () {
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
        dataVar.scanTool = arguments[0];
        dataVar.key = arguments[1];
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getDelMemberUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getDelMemberUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getDelMemberUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(PLAT.getDelMemberUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }
};
/*
列表Member
@:return list
"""

*/
_PLAT.prototype.listMemberRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListMemberRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListMemberRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListMemberRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListMemberRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Member
@:return int
"""

*/
_PLAT.prototype.existByNameMember = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameMemberUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameMemberUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getExistByNameMemberUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PLAT.getExistByNameMemberUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Member
@:return obj
"""

*/
_PLAT.prototype.getByNameMember = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameMemberUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameMemberUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByNameMemberUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByNameMemberUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Member
@:return obj
"""

*/
_PLAT.prototype.getByIdMember = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdMemberUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdMemberUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByIdMemberUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByIdMemberUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加Member
@:form-data
@:return str
"""

*/
_PLAT.prototype.addAndUpdateMember = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateMemberUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateMemberUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateMemberUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateMemberUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
添加Member
@:form-data
@:return str
"""

*/
_PLAT.prototype.addMember = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddMemberUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddMemberUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddMemberUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddMemberUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
更新Member
@:return str
"""

*/
_PLAT.prototype.updateMember = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateMemberUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateMemberUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getUpdateMemberUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getUpdateMemberUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
导入订单
@:param 导入订单的数据
@:form-data
@:return null
'''

*/
_PLAT.prototype.imporTrades = function () {
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
        dataVar.tradeFile = arguments[0];
        dataVar.numberBind = arguments[1];
        dataVar.tradeName = arguments[2];
        dataVar.scanTool = arguments[3];
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getImporTradesUrl(),dataVar,false,false, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getImporTradesUrl(),dataVar,true,false, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getImporTradesUrl(),dataVar,false,false, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(PLAT.getImporTradesUrl(),dataVar,true,false, funcVar);
        }
        return true;
    }
};
/*
@:param scantool 扫描数据库的类型
@:return list
'''

*/
_PLAT.prototype.listTrade = function () {
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
        dataVar.scanTool = arguments[0];
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListTradeUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListTradeUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListTradeUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListTradeUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
删除订单
@:param key  要删除的key
@:param scantool 要扫描数据库的类型
@:return null
'''

*/
_PLAT.prototype.delTrade = function () {
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
        dataVar.scanTool = arguments[0];
        dataVar.key = arguments[1];
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getDelTradeUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getDelTradeUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getDelTradeUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(PLAT.getDelTradeUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }
};
/*
列表Trade
@:return list
"""

*/
_PLAT.prototype.listTradeRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListTradeRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListTradeRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListTradeRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListTradeRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Trade
@:return int
"""

*/
_PLAT.prototype.existByNameTrade = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameTradeUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameTradeUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getExistByNameTradeUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PLAT.getExistByNameTradeUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Trade
@:return obj
"""

*/
_PLAT.prototype.getByNameTrade = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameTradeUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameTradeUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByNameTradeUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByNameTradeUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Trade
@:return obj
"""

*/
_PLAT.prototype.getByIdTrade = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdTradeUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdTradeUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByIdTradeUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByIdTradeUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加Trade
@:form-data
@:return str
"""

*/
_PLAT.prototype.addAndUpdateTrade = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateTradeUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateTradeUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateTradeUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateTradeUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
添加Trade
@:form-data
@:return str
"""

*/
_PLAT.prototype.addTrade = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddTradeUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddTradeUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddTradeUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddTradeUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
更新Trade
@:return str
"""

*/
_PLAT.prototype.updateTrade = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateTradeUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateTradeUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getUpdateTradeUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getUpdateTradeUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
http://127.0.0.1:8118/Brand/listBrand
列表Brand
@:return list
"""

*/
_PLAT.prototype.listBrand = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListBrandUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListBrandUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListBrandUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListBrandUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表Brand
@:return list
"""

*/
_PLAT.prototype.listBrandRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getListBrandRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getListBrandRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getListBrandRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PLAT.getListBrandRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Brand
@:return int
"""

*/
_PLAT.prototype.existByNameBrand = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameBrandUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getExistByNameBrandUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getExistByNameBrandUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PLAT.getExistByNameBrandUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Brand
@:return obj
"""

*/
_PLAT.prototype.getByNameBrand = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameBrandUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByNameBrandUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByNameBrandUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByNameBrandUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得Brand
@:return obj
"""

*/
_PLAT.prototype.getByIdBrand = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdBrandUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getGetByIdBrandUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getGetByIdBrandUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PLAT.getGetByIdBrandUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
删除Brand
@:return int
"""

*/
_PLAT.prototype.delBrand = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PLAT.getDelBrandUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getDelBrandUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PLAT.getDelBrandUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PLAT.getDelBrandUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加Brand
@:form-data
@:return str
"""

*/
_PLAT.prototype.addAndUpdateBrand = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateBrandUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddAndUpdateBrandUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateBrandUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddAndUpdateBrandUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
添加Brand
@:form-data
@:return str
"""

*/
_PLAT.prototype.addBrand = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getAddBrandUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getAddBrandUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getAddBrandUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getAddBrandUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
更新Brand
@:return str
"""

*/
_PLAT.prototype.updateBrand = function () {
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
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateBrandUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PLAT.getUpdateBrandUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PLAT.getUpdateBrandUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PLAT.getUpdateBrandUrl(),dataVar,true,null, funcVar);
        }
    }
};

_PLAT.prototype.getListTableCampaign = function (tableName) {
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
        "ajax": {"url": PLAT.getListCampaignUrl(), "dataSrc": "data","data": function () {
                
                //添加额外的参数传给服务器
                    var extra = {};
                    var formSearch = $("#toolbox");
                    extra.nick = formSearch.find("input[name='type']").val();
                    extra.email = formSearch.find("input[name='taskName']").val();
                    extra.actType = 3;
                    return extra;
                
            }},
        "columns": [
            {"title":"任务名称","data":"taskName"},
            {"title":"创建时间","data":"createdTime"},
            {"title":"总量","data":"sendCount"},
            {"title":"已完成量","data":"submitCount"},
            {"title":"成功数量","data":"successCount"},
            {"title":"失败数量","data":"failCount"},
            {"title":"当前进度","data":"key",
            "render": function (data, type, row) {
            var widthVal = row['submitCount'] / row['sendCount'] * 100;
                        var barVal = widthVal.toFixed(0);
                        var barNumber;
                        if (barVal == "NaN" || barVal == 0) {
                            barNumber = ""
                        } else {
                            barNumber = barVal + "%";
                        }
                        return '<div class="progress progress-striped active" style="margin-bottom: 0">' +
                            '<div style="width: ' + widthVal + '%" aria-valuemax="100" aria-valuemin="0" ' +
                            'aria-valuenow="' + widthVal + '" role="progressbar" class="progress-bar progress-bar-default">' +
                            '<span class="sr-only proBar">' + barNumber + '</span>' +
                            '</div>' +
                            '</div>';}
            },
            {"title":"操作","data":"key",
            "render": function (data, type, row) {
            var text, name, title,className = "";
                        var status = row["status"].code;
                        status = parseInt(status);
                        switch (status) {
                            case 0:
                                name = 'wait';
                                title = '等待';
                                text = '<i class="fa fa-spinner"></i>';
                                className = "waitList";
                                break;
                            case 1:
                                name = 'pause';
                                title = '暂停';
                                text = '<i class="fa fa-pause"></i>';
                                className = "pauseList";
                                break;
                            case 2:
                                name = 'finish';
                                title = '完成';
                                text = '<i class="fa fa-angellist"></i>';
                                className = "finishList";
                                break;
                            case 3:
                                name = 'start';
                                title = '开始';
                                text = '<i class="fa fa-play"></i>';
                                className = "startList";
                                break;
                            default:
                                title = '失败';
                                text = '<i class="fa fa-exclamation-triangle"></i>';
                                className = "failList";
                                break;
                        }

                        return '<button class="btn btn-white btn-xs checkList" data-data-name="' + row["taskName"] +
                            '" name="check_task" data-data-id="' + data + '" title="查看" style="margin-right:5px;"><i class="fa fa-binoculars"></i>' + '</button>' +
                            '<button title="' + title + '" class="btn btn-white btn-xs ' + className + '" name="' + name + '" style="margin-right:5px;" data-data-id="' + data + '" ' +
                            'data-data-name="' + name + '" >' + text + '</button>' +
                            '<button class="btn btn-white btn-xs ' + (row["failCount"] > 0 ? "ableDownLoad" : "downLoadList")
                            + '" data-count="' + row["failCount"] +
                            '" name="downLoad_task" data-data-id="' + data + '" title="下载失败数量"><i class="fa fa-download"></i>' + '</button>';}
            }
        ]
    });
    return tableVal;
};


_PLAT.prototype.getListTableMailSmsView = function (tableName) {
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
        "ajax": {"url": PLAT.getListMailSmsViewMailSmsViewUrl(), "dataSrc": "data","data": function () {
                
                //添加额外的参数传给服务器
                    var extra = {};
                    var formSearch = $("#form_search_tool");
                    extra.campaignActType = $("body").data("job-type");
                    extra.campaignTaskName = formSearch.find("input[name='campaignTaskName']").val();
                    extra.brandKey = formSearch.find("select[name='brandKey']").val();
                    extra.startTime = formSearch.find("input[name='startTime']").val();
                    extra.endTime = formSearch.find("input[name='endTime']").val();
                    return extra;
                
            }},
        "columns": [
            {"title":"任务名称","data":"taskNameCampaign"},
            {"title":"任务类型","data":"typeCampaign.text"},
            {"title":"任务状态","data":"statusCampaign.text"},
            {"title":"品牌名称","data":"nameBrand"},
            {"title":"活动类型","data":"actTypeCampaign.text"},
            {"title":"分组名称","data":"groupKeyCampaign",
            "render": function (data, type, row) {
            if (data != null){
                            if (data.indexOf("s")>=0){
                                return  row['nameSmartGroup'];
                            }
                            else if(data.indexOf("f")>=0){
                                return row['nameFixGroup'];
                            }
                            else{
                            return ""
                            }
                        }}
            },
            {"title":"总量","data":"submitCountCampaign"},
            {"title":"发送数量","data":"sendCountCampaign"},
            {"title":"成功数量","data":"successCountCampaign"},
            {"title":"无效数量","data":"invalidCountCampaign"},
            {"title":"拒收数量","data":"rejectCountCampaign"},
            {"title":"过滤数量","data":"filterCountCampaign"},
            {"title":"打开数量","data":"openCountCampaign"},
            {"title":"点击数量","data":"clickCountCampaign"},
            {"title":"创建时间","data":"createdTimeCampaign"},
            {"title":"操作","data":"keyCampaign",
            "render": function (data, type, row) {
            var render = '<button style="margin-right:5px;" class="btn btn-white btn-xs checkList"'
                                + ' name="checkReport" title="查看报告" data-data-id="'+ data +'" data-type="'+row["typeCampaign"]["code"]+'"><i class="fa fa-line-chart"></i>' + '</button>';
                        return render;}
            }
        ]
    });
    return tableVal;
};


_PLAT.prototype.getListTableMember = function (tableName) {
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
        "ajax": {"url": PLAT.getListMemberUrl(), "dataSrc": "data","data": function () {
                
                //添加额外的参数传给服务器
                    var extra = {};
                    var formSearch = $("#form_search_tool");
                    extra.nick = formSearch.find("input[name='nick']").val();
                    extra.email = formSearch.find("input[name='email']").val();
                    extra.mobile = formSearch.find("input[name='mobile']").val();
                    extra.scanTool = formSearch.find("select[name='scanTool']").val();
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
            var render = '<button style="margin-right:5px;"  class="btn btn-white btn-xs checkList" name="btnShowOp"' +
                                'data-data-id="' + data + '" title="查看" onclick="memberCon();"><i class="fa fa-binoculars"></i>' + '</button>';
                        render += '<button class="btn btn-white btn-xs delList" name="btnDelOp" data-data-id="' + data +
                                '" data-data-name="' + row['nick'] + '" title="删除" ><i class="fa fa-trash"></i>' + '</button>';

                        return render;}
            }
        ]
    });
    return tableVal;
};

_PLAT.prototype.getListCustomerUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Customer/listCustomer", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListCustomerRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Customer/listCustomerRet", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByNameCustomerUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Customer/getByNameCustomer", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByIdCustomerUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Customer/getByIdCustomer", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetUserUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/User/getUser", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListUserUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/User/listUser", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListUserRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/User/listUserRet", "sid", XREWIN.getSid());
};
_PLAT.prototype.getExistByNameUserUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/User/existByNameUser", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByNameUserUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/User/getByNameUser", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByIdUserUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/User/getByIdUser", "sid", XREWIN.getSid());
};
_PLAT.prototype.getDelUserUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/User/delUser", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddAndUpdateUserUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/User/addAndUpdateUser", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddUserUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/User/addUser", "sid", XREWIN.getSid());
};
_PLAT.prototype.getUpdateUserUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/User/updateUser", "sid", XREWIN.getSid());
};
_PLAT.prototype.getFailMemsDowloadUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Dowload/failMemsDowload", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetTotalReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailDetailReport/getTotalReport", "sid", XREWIN.getSid());
};
_PLAT.prototype.getClickReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailDetailReport/clickReport", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetClickTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailDetailReport/getClickTemplate", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetClickTemplateForIndividuationUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailDetailReport/getClickTemplateForIndividuation", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGotoPagePreviewUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailDetailReport/gotoPagePreview", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetPeriodStatisticsUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailDetailReport/getPeriodStatistics", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetCustomerStatisticsUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailDetailReport/getCustomerStatistics", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListMailDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailDetailReport/listCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListMailDetailReportRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailDetailReport/listCampaignRet", "sid", XREWIN.getSid());
};
_PLAT.prototype.getExistByNameMailDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailDetailReport/existByNameCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByNameMailDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailDetailReport/getByNameCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByIdMailDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailDetailReport/getByIdCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getDelMailDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailDetailReport/delCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddAndUpdateMailDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailDetailReport/addAndUpdateCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddMailDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailDetailReport/addCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getUpdateMailDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailDetailReport/updateCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListMailSmsViewMailDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailDetailReport/listMailSmsViewCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetTotalReportForSmsUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/SmsDetailReport/getTotalReportForSms", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListSmsDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/SmsDetailReport/listCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListSmsDetailReportRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/SmsDetailReport/listCampaignRet", "sid", XREWIN.getSid());
};
_PLAT.prototype.getExistByNameSmsDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/SmsDetailReport/existByNameCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByNameSmsDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/SmsDetailReport/getByNameCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByIdSmsDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/SmsDetailReport/getByIdCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getDelSmsDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/SmsDetailReport/delCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddAndUpdateSmsDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/SmsDetailReport/addAndUpdateCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddSmsDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/SmsDetailReport/addCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getUpdateSmsDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/SmsDetailReport/updateCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListMailSmsViewSmsDetailReportUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/SmsDetailReport/listMailSmsViewCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddLevelUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/addLevel", "sid", XREWIN.getSid());
};
_PLAT.prototype.getUpdateLevelUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/updateLevel", "sid", XREWIN.getSid());
};
_PLAT.prototype.getDelLevelUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/delLevel", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListLevelUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/listLevel", "sid", XREWIN.getSid());
};
_PLAT.prototype.getOrderLevelUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/orderLevel", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetLevelSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/getLevelSetting", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetBrandListByLevelUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/getBrandListByLevel", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetGroupKeyByLevelUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/getGroupKeyByLevel", "sid", XREWIN.getSid());
};
_PLAT.prototype.getRemoveLevelSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/removeLevelSetting", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListCustomerSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/listCustomerSetting", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListCustomerSettingRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/listCustomerSettingRet", "sid", XREWIN.getSid());
};
_PLAT.prototype.getExistByNameCustomerSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/existByNameCustomerSetting", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByNameCustomerSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/getByNameCustomerSetting", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByIdCustomerSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/getByIdCustomerSetting", "sid", XREWIN.getSid());
};
_PLAT.prototype.getDelCustomerSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/delCustomerSetting", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddAndUpdateCustomerSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/addAndUpdateCustomerSetting", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddCustomerSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/addCustomerSetting", "sid", XREWIN.getSid());
};
_PLAT.prototype.getUpdateCustomerSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/CustomerSetting/updateCustomerSetting", "sid", XREWIN.getSid());
};
_PLAT.prototype.getParseUploadUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Campaign/parseUpload", "sid", XREWIN.getSid());
};
_PLAT.prototype.getStartUploadUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Campaign/startUpload", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListCampaignUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Campaign/listCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListCampaignRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Campaign/listCampaignRet", "sid", XREWIN.getSid());
};
_PLAT.prototype.getExistByNameCampaignUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Campaign/existByNameCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByNameCampaignUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Campaign/getByNameCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByIdCampaignUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Campaign/getByIdCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getDelCampaignUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Campaign/delCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddAndUpdateCampaignUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Campaign/addAndUpdateCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddCampaignUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Campaign/addCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getUpdateCampaignUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Campaign/updateCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListMailSmsViewCampaignUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Campaign/listMailSmsViewCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListMailSmsViewMailSmsViewUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailSmsView/listMailSmsViewCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListMailSmsViewUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailSmsView/listCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListMailSmsViewRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailSmsView/listCampaignRet", "sid", XREWIN.getSid());
};
_PLAT.prototype.getExistByNameMailSmsViewUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailSmsView/existByNameCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByNameMailSmsViewUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailSmsView/getByNameCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByIdMailSmsViewUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailSmsView/getByIdCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getDelMailSmsViewUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailSmsView/delCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddAndUpdateMailSmsViewUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailSmsView/addAndUpdateCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddMailSmsViewUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailSmsView/addCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getUpdateMailSmsViewUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/MailSmsView/updateCampaign", "sid", XREWIN.getSid());
};
_PLAT.prototype.getImportMembersUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Member/importMembers", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListMemberUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Member/listMember", "sid", XREWIN.getSid());
};
_PLAT.prototype.getDelMemberUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Member/delMember", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListMemberRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Member/listMemberRet", "sid", XREWIN.getSid());
};
_PLAT.prototype.getExistByNameMemberUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Member/existByNameMember", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByNameMemberUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Member/getByNameMember", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByIdMemberUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Member/getByIdMember", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddAndUpdateMemberUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Member/addAndUpdateMember", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddMemberUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Member/addMember", "sid", XREWIN.getSid());
};
_PLAT.prototype.getUpdateMemberUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Member/updateMember", "sid", XREWIN.getSid());
};
_PLAT.prototype.getImporTradesUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Trade/imporTrades", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListTradeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Trade/listTrade", "sid", XREWIN.getSid());
};
_PLAT.prototype.getDelTradeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Trade/delTrade", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListTradeRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Trade/listTradeRet", "sid", XREWIN.getSid());
};
_PLAT.prototype.getExistByNameTradeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Trade/existByNameTrade", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByNameTradeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Trade/getByNameTrade", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByIdTradeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Trade/getByIdTrade", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddAndUpdateTradeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Trade/addAndUpdateTrade", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddTradeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Trade/addTrade", "sid", XREWIN.getSid());
};
_PLAT.prototype.getUpdateTradeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Trade/updateTrade", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListBrandUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Brand/listBrand", "sid", XREWIN.getSid());
};
_PLAT.prototype.getListBrandRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Brand/listBrandRet", "sid", XREWIN.getSid());
};
_PLAT.prototype.getExistByNameBrandUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Brand/existByNameBrand", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByNameBrandUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Brand/getByNameBrand", "sid", XREWIN.getSid());
};
_PLAT.prototype.getGetByIdBrandUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Brand/getByIdBrand", "sid", XREWIN.getSid());
};
_PLAT.prototype.getDelBrandUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Brand/delBrand", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddAndUpdateBrandUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Brand/addAndUpdateBrand", "sid", XREWIN.getSid());
};
_PLAT.prototype.getAddBrandUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Brand/addBrand", "sid", XREWIN.getSid());
};
_PLAT.prototype.getUpdateBrandUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PLAT + "/Brand/updateBrand", "sid", XREWIN.getSid());
};
if (!window.PLAT) {
window.PLAT = new _PLAT();
}
})();
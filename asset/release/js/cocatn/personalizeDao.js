(function () 
{var _PERSONALIZE = function () {};
/*
增加个性化规则节点
@:form-data
@:param individuationSettingKey  个性化的主键
@:param filterData  筛选条件\
@:param nodeValue
@:return str  成功返回key和count
"""

*/
_PERSONALIZE.prototype.addIndividuationSettingNode = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddIndividuationSettingNodeUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddIndividuationSettingNodeUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getAddIndividuationSettingNodeUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getAddIndividuationSettingNodeUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
修改个性化节点
@:param nodeKey 节点的key
@:form-data
@:param filterData 筛选的条件
@:return obj key和count组成的obj
"""
nodeObj = self.individuationsettingnodedao.getObjByKey(nodeKey)
code = self.checkObj(nodeObj)
if code>0:
self.individuationsettingnodedao.updateByKey(dict2Obj)
returnDict = {}
returnDict["key"] = nodeObj.getKey()
jsonStr = json.dumps(returnDict)
'''
def checkNode(self):
查看规则条件
@:param filterData 传入的规则条件
@:param individuationSettingKey  个性化的主键
@:return str 返回条件数量的json
filterData
individuationSettingKey
code = self.checkDatas(filterData,individuationSettingKey)
jsonStr =None
if code > 0:
try:
indivObj = self.individuationSettingDao.getObjByKey(individuationSettingKey)
code = self.checkObj(indivObj)
if code >0:
groupKey = indivObj.getGroupKey()
scanTools = IndividuaNodeUtil.getScantools(groupKey)
sql = IndividuaNodeUtil.buildSql(groupKey,filterData)
count = IndividuaNodeUtil.getCount(str(sql),scanTools)
returnDict = {}
returnDict["count"]=count
jsonStr = json.dumps(returnDict)
except Exception:
LogUtil.error("无法拼装，请联系管理员"+str(traceback.format_exc()))
code = RetCode.NOINVALID_DATA
return self.retJson(code, jsonStr)
'''

*/
_PERSONALIZE.prototype.updateIndividuationSettingNode = function () {
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
        dataVar.individuationSettingKey = arguments[0];
        dataVar.filterData = arguments[1];
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getUpdateIndividuationSettingNodeUrl(),dataVar,false,false, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getUpdateIndividuationSettingNodeUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getUpdateIndividuationSettingNodeUrl(),dataVar,false,false, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getUpdateIndividuationSettingNodeUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
列表IndividuationSettingNode
@:return list
"""

*/
_PERSONALIZE.prototype.listIndividuationSettingNode = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListIndividuationSettingNodeUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListIndividuationSettingNodeUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getListIndividuationSettingNodeUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getListIndividuationSettingNodeUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表IndividuationSettingNode
@:return list
"""

*/
_PERSONALIZE.prototype.listIndividuationSettingNodeRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListIndividuationSettingNodeRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListIndividuationSettingNodeRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getListIndividuationSettingNodeRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getListIndividuationSettingNodeRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得IndividuationSettingNode
@:return int
"""

*/
_PERSONALIZE.prototype.existByNameIndividuationSettingNode = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getExistByNameIndividuationSettingNodeUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getExistByNameIndividuationSettingNodeUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getExistByNameIndividuationSettingNodeUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getExistByNameIndividuationSettingNodeUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得IndividuationSettingNode
@:return obj
"""

*/
_PERSONALIZE.prototype.getByNameIndividuationSettingNode = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByNameIndividuationSettingNodeUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByNameIndividuationSettingNodeUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getGetByNameIndividuationSettingNodeUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getGetByNameIndividuationSettingNodeUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得IndividuationSettingNode
@:return obj
"""

*/
_PERSONALIZE.prototype.getByIdIndividuationSettingNode = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByIdIndividuationSettingNodeUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByIdIndividuationSettingNodeUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getGetByIdIndividuationSettingNodeUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getGetByIdIndividuationSettingNodeUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
删除IndividuationSettingNode
@:return int
"""

*/
_PERSONALIZE.prototype.delIndividuationSettingNode = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getDelIndividuationSettingNodeUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getDelIndividuationSettingNodeUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getDelIndividuationSettingNodeUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getDelIndividuationSettingNodeUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加IndividuationSettingNode
@:form-data
@:return str
"""

*/
_PERSONALIZE.prototype.addAndUpdateIndividuationSettingNode = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddAndUpdateIndividuationSettingNodeUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddAndUpdateIndividuationSettingNodeUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getAddAndUpdateIndividuationSettingNodeUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getAddAndUpdateIndividuationSettingNodeUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
添加个性化
@:param data  添加的个性化的信息
@:form-data
需要的参数：GroupKey  SettingType  TemplateType  TemplateKey
@:return str 成功返回key的信息
"""
self.checkDatas(dict2Obj.getSettingType(),
dict2Obj.getTemplateType(),
dict2Obj.getTemplateKey())
'''

*/
_PERSONALIZE.prototype.addIndividuationSetting = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddIndividuationSettingUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddIndividuationSettingUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getAddIndividuationSettingUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getAddIndividuationSettingUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
删除个性化
@data  要删除的key
@:return str 删除成功返回成功json
"""

*/
_PERSONALIZE.prototype.delIndividuationSetting = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getDelIndividuationSettingUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getDelIndividuationSettingUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getDelIndividuationSettingUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getDelIndividuationSettingUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
更新个性化
@:param data  要更新的数据信息
@:form-data
@:return str 成功返回key的json
"""

*/
_PERSONALIZE.prototype.updateIndividuationSetting = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getUpdateIndividuationSettingUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getUpdateIndividuationSettingUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getUpdateIndividuationSettingUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getUpdateIndividuationSettingUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
刷新节点
@:param individuationSettingKey  个性化的主键
@:return obj 返回总数 和各个条件的数量的数组
"""

*/
_PERSONALIZE.prototype.refresh = function () {
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
        dataVar.individuationSettingKey = arguments[0];
        dataVar.groupKey = arguments[1];
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getRefreshUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getRefreshUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getRefreshUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getRefreshUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获取个性化列表
@:param data 邮件模板的key
@:return list 返回个性化数组的json
"""

*/
_PERSONALIZE.prototype.listIndividuationSetting = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListIndividuationSettingUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListIndividuationSettingUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getListIndividuationSettingUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getListIndividuationSettingUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获取个性化
@:param data  个性化节点的key
@:return obj  返回个性化的json
"""

*/
_PERSONALIZE.prototype.getIndividuationSetting = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetIndividuationSettingUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetIndividuationSettingUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getGetIndividuationSettingUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getGetIndividuationSettingUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表IndividuationSetting
@:return list
"""

*/
_PERSONALIZE.prototype.listIndividuationSettingRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListIndividuationSettingRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListIndividuationSettingRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getListIndividuationSettingRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getListIndividuationSettingRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得IndividuationSetting
@:return int
"""

*/
_PERSONALIZE.prototype.existByNameIndividuationSetting = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getExistByNameIndividuationSettingUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getExistByNameIndividuationSettingUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getExistByNameIndividuationSettingUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getExistByNameIndividuationSettingUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得IndividuationSetting
@:return obj
"""

*/
_PERSONALIZE.prototype.getByNameIndividuationSetting = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByNameIndividuationSettingUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByNameIndividuationSettingUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getGetByNameIndividuationSettingUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getGetByNameIndividuationSettingUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得IndividuationSetting
@:return obj
"""

*/
_PERSONALIZE.prototype.getByIdIndividuationSetting = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByIdIndividuationSettingUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByIdIndividuationSettingUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getGetByIdIndividuationSettingUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getGetByIdIndividuationSettingUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加IndividuationSetting
@:form-data
@:return str
"""

*/
_PERSONALIZE.prototype.addAndUpdateIndividuationSetting = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddAndUpdateIndividuationSettingUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddAndUpdateIndividuationSettingUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getAddAndUpdateIndividuationSettingUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getAddAndUpdateIndividuationSettingUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
保存邮件模板左边列表
@:param data 要保存的数据
@:return str 保存成功的key
"""

*/
_PERSONALIZE.prototype.addMailTemplatePart = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddMailTemplatePartUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddMailTemplatePartUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getAddMailTemplatePartUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getAddMailTemplatePartUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
更新邮件模板左边列表
@:param data 要更新的数据
@:return str 成功的key
"""

*/
_PERSONALIZE.prototype.updateMailTemplatePart = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getUpdateMailTemplatePartUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getUpdateMailTemplatePartUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getUpdateMailTemplatePartUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getUpdateMailTemplatePartUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
模板左边列表
@:return list
"""

*/
_PERSONALIZE.prototype.listMailTemplatePart = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListMailTemplatePartUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListMailTemplatePartUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getListMailTemplatePartUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getListMailTemplatePartUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
删除MailTemplatePart
@:return null
"""

*/
_PERSONALIZE.prototype.delMailTemplatePart = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getDelMailTemplatePartUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getDelMailTemplatePartUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getDelMailTemplatePartUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getDelMailTemplatePartUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }
};
/*
列表MailTemplatePart
@:return list
"""

*/
_PERSONALIZE.prototype.listMailTemplatePartRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListMailTemplatePartRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListMailTemplatePartRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getListMailTemplatePartRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getListMailTemplatePartRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得MailTemplatePart
@:return int
"""

*/
_PERSONALIZE.prototype.existByNameMailTemplatePart = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getExistByNameMailTemplatePartUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getExistByNameMailTemplatePartUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getExistByNameMailTemplatePartUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getExistByNameMailTemplatePartUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得MailTemplatePart
@:return obj
"""

*/
_PERSONALIZE.prototype.getByNameMailTemplatePart = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByNameMailTemplatePartUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByNameMailTemplatePartUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getGetByNameMailTemplatePartUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getGetByNameMailTemplatePartUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得MailTemplatePart
@:return obj
"""

*/
_PERSONALIZE.prototype.getByIdMailTemplatePart = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByIdMailTemplatePartUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByIdMailTemplatePartUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getGetByIdMailTemplatePartUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getGetByIdMailTemplatePartUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加MailTemplatePart
@:form-data
@:return str
"""

*/
_PERSONALIZE.prototype.addAndUpdateMailTemplatePart = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddAndUpdateMailTemplatePartUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddAndUpdateMailTemplatePartUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getAddAndUpdateMailTemplatePartUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getAddAndUpdateMailTemplatePartUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
发送邮件
@:param 接收发送邮件的参数
@:form-data
@:return str 成功的key
"""

*/
_PERSONALIZE.prototype.sendMail = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getSendMailUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getSendMailUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getSendMailUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getSendMailUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
保邮件模板
@:param  保存模板的参数
@:form-data
@:return str 保存成功的key
"""

*/
_PERSONALIZE.prototype.addMailTemplate = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddMailTemplateUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddMailTemplateUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getAddMailTemplateUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getAddMailTemplateUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
更新邮件模板
@:param data 更新的参数
@:form-data
@:return str 更新成功的key
"""

*/
_PERSONALIZE.prototype.updateMailTemplate = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getUpdateMailTemplateUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getUpdateMailTemplateUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getUpdateMailTemplateUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getUpdateMailTemplateUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
获取模板数据
@:param data 模板的key
@:return obj
"""

*/
_PERSONALIZE.prototype.getMailTemplate = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetMailTemplateUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetMailTemplateUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getGetMailTemplateUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getGetMailTemplateUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
删除邮件模板列表
@:param data 删除成功的key
@:return null 删除成功的
"""

*/
_PERSONALIZE.prototype.delMailTemplate = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getDelMailTemplateUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getDelMailTemplateUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getDelMailTemplateUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getDelMailTemplateUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }
};
/*
#http://127.0.0.1:8118/MailTemplate/previewMail?key=7035c68d9616f127aaaa140a9af34c51&groupKey=d329cd3869e1528552cfa840cfb88bcef
预览接口
@:form-data
@:return obj
"""

*/
_PERSONALIZE.prototype.previewMail1 = function () {
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
        dataVar.key = arguments[1];
        dataVar.groupKey = arguments[2];
        dataVar.email = arguments[3];
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getPreviewMail1Url(),dataVar,false,false, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getPreviewMail1Url(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getPreviewMail1Url(),dataVar,false,false, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getPreviewMail1Url(),dataVar,true,false, funcVar);
        }
    }
};
/*
#http://127.0.0.1:8118/MailTemplate/previewMail?key=7035c68d9616f127aaaa140a9af34c51&groupKey=d329cd3869e1528552cfa840cfb88bcef
预览接口
@:form-data
@:return obj
"""

*/
_PERSONALIZE.prototype.previewMail = function () {
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
        dataVar.email = arguments[0];
        dataVar.tel = arguments[1];
        dataVar.key = arguments[2];
        dataVar.groupKey = arguments[3];
        dataVar.sid = arguments[4];
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getPreviewMailUrl(),dataVar,false,false, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getPreviewMailUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getPreviewMailUrl(),dataVar,false,false, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getPreviewMailUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
预览接口
@:form-data
@:return obj
"""

*/
_PERSONALIZE.prototype.gotoPagePreview = function () {
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
        dataVar.curPage = arguments[0];
        dataVar.key = arguments[1];
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGotoPagePreviewUrl(),dataVar,false,false, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGotoPagePreviewUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getGotoPagePreviewUrl(),dataVar,false,false, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getGotoPagePreviewUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
列表MailTemplate
@:return list
"""

*/
_PERSONALIZE.prototype.listMailTemplate = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListMailTemplateUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListMailTemplateUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getListMailTemplateUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getListMailTemplateUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表MailTemplate
@:return list
"""

*/
_PERSONALIZE.prototype.listMailTemplateRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListMailTemplateRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListMailTemplateRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getListMailTemplateRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getListMailTemplateRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得MailTemplate
@:return int
"""

*/
_PERSONALIZE.prototype.existByNameMailTemplate = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getExistByNameMailTemplateUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getExistByNameMailTemplateUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getExistByNameMailTemplateUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getExistByNameMailTemplateUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得MailTemplate
@:return obj
"""

*/
_PERSONALIZE.prototype.getByNameMailTemplate = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByNameMailTemplateUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByNameMailTemplateUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getGetByNameMailTemplateUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getGetByNameMailTemplateUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得MailTemplate
@:return obj
"""

*/
_PERSONALIZE.prototype.getByIdMailTemplate = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByIdMailTemplateUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByIdMailTemplateUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getGetByIdMailTemplateUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getGetByIdMailTemplateUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加MailTemplate
@:form-data
@:return str
"""

*/
_PERSONALIZE.prototype.addAndUpdateMailTemplate = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddAndUpdateMailTemplateUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddAndUpdateMailTemplateUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getAddAndUpdateMailTemplateUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getAddAndUpdateMailTemplateUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
发送邮件
@:param 接收发送邮件的参数
@:form-data
@:return str 成功的key
"""

*/
_PERSONALIZE.prototype.sendSms = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getSendSmsUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getSendSmsUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getSendSmsUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getSendSmsUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
保邮件模板
@:param  保存模板的参数
@:form-data
@:return str 保存成功的key
"""
"""
return super(MailTemplate,self).listMailTemplate()
code = RetCode.SUCCESS
fieldList = MailTemplateDao.getField(MailTemplateDao.COLUMN_TEMPLATE_NAME, MailTemplateDao.COLUMN_CREATED_TIME,
MailTemplateDao.COLUMN_KEY)
filterList = self.getFilter()
JsonStr = self.mailTemplateDao.getJson(fields=fieldList, filters=filterList)
code = self.checkData(JsonStr)
if code > 0:
return JsonStr
else:
return self.retJson(code)
'''

*/
_PERSONALIZE.prototype.addSmsTemplate = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddSmsTemplateUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddSmsTemplateUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getAddSmsTemplateUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getAddSmsTemplateUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
获取短信数据
@:param data 模板的key
@:return obj
"""

*/
_PERSONALIZE.prototype.getSmsTemplate = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetSmsTemplateUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetSmsTemplateUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getGetSmsTemplateUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getGetSmsTemplateUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
删除邮件模板列表
@:param data 删除成功的key
@:return null 删除成功的
"""

*/
_PERSONALIZE.prototype.delSmsTemplate = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getDelSmsTemplateUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getDelSmsTemplateUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getDelSmsTemplateUrl(),dataVar,false,null, function () {
                mesg = this;
            });
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getDelSmsTemplateUrl(),dataVar,true,null, funcVar);
        }
        return true;
    }
};
/*
更新邮件模板
@:form-data
@:return str 更新成功的key
"""
dict2_obj = self.smsTemplateDao.getObjByKey(dict2_obj.getKey())
filters = IndividuationSettingDao.getfilters(IndividuationSettingDao.COLUMN_TEMPLATE_KEY,sms_template_tey)
individuationsettingobj = IndividuationSettingDao.getEmptyObj()
individuationsettingobj.setGroupKey(dict2_obj.getGroupKey())
self.individuationSettingDao.update(individuationsettingobj,filters)
'''

*/
_PERSONALIZE.prototype.updateSmsTemplate = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getUpdateSmsTemplateUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getUpdateSmsTemplateUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getUpdateSmsTemplateUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getUpdateSmsTemplateUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
列表SmsTemplate
@:return list
"""

*/
_PERSONALIZE.prototype.listSmsTemplate = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListSmsTemplateUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListSmsTemplateUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getListSmsTemplateUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getListSmsTemplateUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表SmsTemplate
@:return list
"""

*/
_PERSONALIZE.prototype.listSmsTemplateRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListSmsTemplateRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListSmsTemplateRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getListSmsTemplateRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getListSmsTemplateRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得SmsTemplate
@:return int
"""

*/
_PERSONALIZE.prototype.existByNameSmsTemplate = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getExistByNameSmsTemplateUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getExistByNameSmsTemplateUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getExistByNameSmsTemplateUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getExistByNameSmsTemplateUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得SmsTemplate
@:return obj
"""

*/
_PERSONALIZE.prototype.getByNameSmsTemplate = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByNameSmsTemplateUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByNameSmsTemplateUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getGetByNameSmsTemplateUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getGetByNameSmsTemplateUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得SmsTemplate
@:return obj
"""

*/
_PERSONALIZE.prototype.getByIdSmsTemplate = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByIdSmsTemplateUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByIdSmsTemplateUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getGetByIdSmsTemplateUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getGetByIdSmsTemplateUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加SmsTemplate
@:form-data
@:return str
"""

*/
_PERSONALIZE.prototype.addAndUpdateSmsTemplate = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddAndUpdateSmsTemplateUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddAndUpdateSmsTemplateUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getAddAndUpdateSmsTemplateUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getAddAndUpdateSmsTemplateUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
http://127.0.0.1:8118/IndividuationTactics/addIndividuationTactics?templateType=1&individuationTacticsName=1&tacticsType=1&nonNodeValue=1&tacticsJson=1
添加IndividuationTactics
@:form-data
@:return str
"""

*/
_PERSONALIZE.prototype.addIndividuationTactics = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddIndividuationTacticsUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddIndividuationTacticsUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getAddIndividuationTacticsUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getAddIndividuationTacticsUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
删除IndividuationTactics
@:return int
"""

*/
_PERSONALIZE.prototype.delIndividuationTactics = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getDelIndividuationTacticsUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getDelIndividuationTacticsUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getDelIndividuationTacticsUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getDelIndividuationTacticsUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表IndividuationTactics
@:return list
"""

*/
_PERSONALIZE.prototype.listIndividuationTactics = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListIndividuationTacticsUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListIndividuationTacticsUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getListIndividuationTacticsUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getListIndividuationTacticsUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
列表IndividuationTactics
@:return list
"""

*/
_PERSONALIZE.prototype.listIndividuationTacticsRet = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListIndividuationTacticsRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getListIndividuationTacticsRetUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getListIndividuationTacticsRetUrl(), dataVar ,false,null,function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getListIndividuationTacticsRetUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得IndividuationTactics
@:return int
"""

*/
_PERSONALIZE.prototype.existByNameIndividuationTactics = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getExistByNameIndividuationTacticsUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getExistByNameIndividuationTacticsUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getExistByNameIndividuationTacticsUrl(),dataVar,false,null, function () {
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
            XREWIN.ajaxPostSync(PERSONALIZE.getExistByNameIndividuationTacticsUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得IndividuationTactics
@:return obj
"""

*/
_PERSONALIZE.prototype.getByNameIndividuationTactics = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByNameIndividuationTacticsUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByNameIndividuationTacticsUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getGetByNameIndividuationTacticsUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getGetByNameIndividuationTacticsUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
获得IndividuationTactics
@:return obj
"""

*/
_PERSONALIZE.prototype.getByIdIndividuationTactics = function () {
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
            var ret = XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByIdIndividuationTacticsUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getGetByIdIndividuationTacticsUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            var ret = XREWIN.ajaxPostSync(PERSONALIZE.getGetByIdIndividuationTacticsUrl(),dataVar,false,null, function () {
                var mesg = this;
                dataRet = mesg.data;
            });
            return dataRet;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getGetByIdIndividuationTacticsUrl(),dataVar,true,null, funcVar);
        }
    }
};
/*
添加IndividuationTactics
@:form-data
@:return str
"""

*/
_PERSONALIZE.prototype.addAndUpdateIndividuationTactics = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddAndUpdateIndividuationTacticsUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getAddAndUpdateIndividuationTacticsUrl(),dataVar,true,false, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getAddAndUpdateIndividuationTacticsUrl(),dataVar,false,false, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getAddAndUpdateIndividuationTacticsUrl(),dataVar,true,false, funcVar);
        }
    }
};
/*
更新IndividuationTactics
@:return str
"""

*/
_PERSONALIZE.prototype.updateIndividuationTactics = function () {
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
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getUpdateIndividuationTacticsUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSyncCheck(PERSONALIZE.getUpdateIndividuationTacticsUrl(),dataVar,true,null, funcVar);
        }
    }else{
        if(funcVar == null){
            XREWIN.ajaxPostSync(PERSONALIZE.getUpdateIndividuationTacticsUrl(),dataVar,false,null, function () {
                mesg = this;
                data = mesg.data;
                str = data;
            });
            return str;
        }else{
            XREWIN.ajaxPostSync(PERSONALIZE.getUpdateIndividuationTacticsUrl(),dataVar,true,null, funcVar);
        }
    }
};

_PERSONALIZE.prototype.getListTableMailTemplate = function (tableName) {
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
        "ajax": {"url": PERSONALIZE.getListMailTemplateUrl(), "dataSrc": "data"},
        "columns": [
            {"title":"模版名称","data":"templateName"},
            {"title":"创建时间","data":"createdTime"},
            {"title":"操作","data":"key",
            "render": function (data, type, row) {
            var render = '<button style="margin-right: 5px;" class="btn btn-white btn-xs checkList" name="btnShowOp" data-data-id="' + data +
                        '" title="查看" ><i class="fa fa-binoculars"></i>' + '</button>';
                    render += '<button style="margin-right: 5px;" class="btn btn-white btn-xs editList" name="btnEditOp" data-data-id="' + data +
                                '" data-data-name="' + row['templateName'] + '" title="编辑" ><i class="fa fa-edit"></i>' + '</button>';
                    render += '<button style="margin-right: 5px;" class="btn btn-white btn-xs delList" name="btnDelOp" data-data-id="' + data +
                                '" data-data-name="' + row['templateName'] + '" title="删除" ><i class="fa fa-trash"></i>' + '</button>';
                    render += '<button style="margin-right: 5px;" class="btn btn-white btn-xs sendList" name="btnSendEmailOp" data-data-id="' + data +
                                '" data-data-name="' + row['templateName'] + '" title="发送" ><i class="fa fa-paper-plane-o"></i>' + '</button>';
                        return render;}
            }
        ]
    });
    return tableVal;
};


_PERSONALIZE.prototype.getListTableSmsTemplate = function (tableName) {
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
        "ajax": {"url": PERSONALIZE.getListSmsTemplateUrl(), "dataSrc": "data"},
        "columns": [
            {"title":"模版名称","data":"templateName"},
            {"title":"创建时间","data":"createdTime"},
            {"title":"操作","data":"key",
            "render": function (data, type, row) {
            var render = '<button style="margin-right: 5px;" class="btn btn-white btn-xs checkList" name="btnShowOp" data-data-id="' + data +
                        '" title="查看" ><i class="fa fa-binoculars"></i>' + '</button>';
                    render += '<button style="margin-right: 5px;" class="btn btn-white btn-xs editList" name="btnEditOp" data-data-id="' + data +
                                '" data-data-name="' + row['templateName'] + '" title="编辑" ><i class="fa fa-edit"></i>' + '</button>';
                    render += '<button style="margin-right: 5px;" class="btn btn-white btn-xs delList" name="btnDelOp" data-data-id="' + data +
                                '" data-data-name="' + row['templateName'] + '" title="删除" ><i class="fa fa-trash"></i>' + '</button>';
                    render += '<button style="margin-right: 5px;" class="btn btn-white btn-xs sendList" name="btnSendEmailOp" data-data-id="' + data +
                                '" data-data-name="' + row['templateName'] + '" title="发送" ><i class="fa fa-paper-plane-o"></i>' + '</button>';
                        return render;}
            }
        ]
    });
    return tableVal;
};


_PERSONALIZE.prototype.getListTableIndividuationTactics = function (tableName) {
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
        "ajax": {"url": PERSONALIZE.getListIndividuationTacticsUrl(), "dataSrc": "data"},
        "columns": [
            {"title":"策略名称","data":"individuationTacticsName"},
            {"title":"创建时间","data":"createdTime"},
            {"title":"操作","data":"key",
            "render": function (data, type, row) {
            var render = '<button style="margin-right: 5px;" class="btn btn-white btn-xs checkList" name="btnShowOp" data-data-id="' + data +
                            '" title="查看" ><i class="fa fa-binoculars"></i>' + '</button>';
                        render += '<button style="margin-right: 5px;" class="btn btn-white btn-xs editList" name="btnEditOp" data-data-id="' + data +
                            '" data-data-name="' + row['individuationTacticsName'] + '" title="编辑" ><i class="fa fa-edit"></i>' + '</button>';
                        render += '<button style="margin-right: 5px;" class="btn btn-white btn-xs delList" name="btnDelOp" data-data-id="' + data +
                            '" data-data-name="' + row['individuationTacticsName'] + '" title="删除" ><i class="fa fa-trash"></i>' + '</button>';
                        return render;}
            }
        ]
    });
    return tableVal;
};

_PERSONALIZE.prototype.getAddIndividuationSettingNodeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSettingNode/addIndividuationSettingNode", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getUpdateIndividuationSettingNodeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSettingNode/updateIndividuationSettingNode", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getListIndividuationSettingNodeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSettingNode/listIndividuationSettingNode", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getListIndividuationSettingNodeRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSettingNode/listIndividuationSettingNodeRet", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getExistByNameIndividuationSettingNodeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSettingNode/existByNameIndividuationSettingNode", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getGetByNameIndividuationSettingNodeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSettingNode/getByNameIndividuationSettingNode", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getGetByIdIndividuationSettingNodeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSettingNode/getByIdIndividuationSettingNode", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getDelIndividuationSettingNodeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSettingNode/delIndividuationSettingNode", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getAddAndUpdateIndividuationSettingNodeUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSettingNode/addAndUpdateIndividuationSettingNode", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getAddIndividuationSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSetting/addIndividuationSetting", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getDelIndividuationSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSetting/delIndividuationSetting", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getUpdateIndividuationSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSetting/updateIndividuationSetting", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getRefreshUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSetting/refresh", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getListIndividuationSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSetting/listIndividuationSetting", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getGetIndividuationSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSetting/getIndividuationSetting", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getListIndividuationSettingRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSetting/listIndividuationSettingRet", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getExistByNameIndividuationSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSetting/existByNameIndividuationSetting", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getGetByNameIndividuationSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSetting/getByNameIndividuationSetting", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getGetByIdIndividuationSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSetting/getByIdIndividuationSetting", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getAddAndUpdateIndividuationSettingUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationSetting/addAndUpdateIndividuationSetting", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getAddMailTemplatePartUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplatePart/addMailTemplatePart", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getUpdateMailTemplatePartUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplatePart/updateMailTemplatePart", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getListMailTemplatePartUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplatePart/listMailTemplatePart", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getDelMailTemplatePartUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplatePart/delMailTemplatePart", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getListMailTemplatePartRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplatePart/listMailTemplatePartRet", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getExistByNameMailTemplatePartUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplatePart/existByNameMailTemplatePart", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getGetByNameMailTemplatePartUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplatePart/getByNameMailTemplatePart", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getGetByIdMailTemplatePartUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplatePart/getByIdMailTemplatePart", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getAddAndUpdateMailTemplatePartUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplatePart/addAndUpdateMailTemplatePart", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getSendMailUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplate/sendMail", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getAddMailTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplate/addMailTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getUpdateMailTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplate/updateMailTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getGetMailTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplate/getMailTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getDelMailTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplate/delMailTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getPreviewMail1Url = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplate/previewMail1", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getPreviewMailUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplate/previewMail", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getGotoPagePreviewUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplate/gotoPagePreview", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getListMailTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplate/listMailTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getListMailTemplateRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplate/listMailTemplateRet", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getExistByNameMailTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplate/existByNameMailTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getGetByNameMailTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplate/getByNameMailTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getGetByIdMailTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplate/getByIdMailTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getAddAndUpdateMailTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/MailTemplate/addAndUpdateMailTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getSendSmsUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/SmsTemplate/sendSms", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getAddSmsTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/SmsTemplate/addSmsTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getGetSmsTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/SmsTemplate/getSmsTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getDelSmsTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/SmsTemplate/delSmsTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getUpdateSmsTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/SmsTemplate/updateSmsTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getListSmsTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/SmsTemplate/listSmsTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getListSmsTemplateRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/SmsTemplate/listSmsTemplateRet", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getExistByNameSmsTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/SmsTemplate/existByNameSmsTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getGetByNameSmsTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/SmsTemplate/getByNameSmsTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getGetByIdSmsTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/SmsTemplate/getByIdSmsTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getAddAndUpdateSmsTemplateUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/SmsTemplate/addAndUpdateSmsTemplate", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getAddIndividuationTacticsUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationTactics/addIndividuationTactics", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getDelIndividuationTacticsUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationTactics/delIndividuationTactics", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getListIndividuationTacticsUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationTactics/listIndividuationTactics", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getListIndividuationTacticsRetUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationTactics/listIndividuationTacticsRet", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getExistByNameIndividuationTacticsUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationTactics/existByNameIndividuationTactics", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getGetByNameIndividuationTacticsUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationTactics/getByNameIndividuationTactics", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getGetByIdIndividuationTacticsUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationTactics/getByIdIndividuationTactics", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getAddAndUpdateIndividuationTacticsUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationTactics/addAndUpdateIndividuationTactics", "sid", XREWIN.getSid());
};
_PERSONALIZE.prototype.getUpdateIndividuationTacticsUrl = function () {
    var services = XREWIN.config.services;
    return XREWIN.appendParam(services.PERSONALIZE + "/IndividuationTactics/updateIndividuationTactics", "sid", XREWIN.getSid());
};
if (!window.PERSONALIZE) {
window.PERSONALIZE = new _PERSONALIZE();
}
})();
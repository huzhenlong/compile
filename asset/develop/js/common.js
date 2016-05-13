/**
 * Created by Bigdata02 on 2015/11/19.
 */

(function () {
    var _COMMON = function () {
    };

    _COMMON.prototype.getLableAndCheckBoxHtml = function (lableName, checkName, checkVal, isCheck) {
        var str = "<lable>" + lableName + ":</lable>";
        str += COMMON.getCheckBoxHtml(checkName, checkVal, isCheck);
        str += "&nbsp;";
        return str;
    };

    _COMMON.prototype.getCheckBoxHtml = function (checkName, checkVal, isCheck) {
        if (isCheck == undefined) {
            return "<input type='checkbox' id='" + checkName + "' name='" + checkName + "' value='" + checkVal + "'>";
        }
        if (isCheck) {
            return "<input type='checkbox' id='" + checkName + "' name='" + checkName + "' value='" + checkVal + "' checked>";
        } else {
            return "<input type='checkbox' id='" + checkName + "' name='" + checkName + "' value='" + checkVal + "'>";
        }
    };

    _COMMON.prototype.getTextHtml = function (textName, val) {
        return "<input type='text' id='" + textName + "' name='" + textName + "' value='" + val + "'>";
    };

    _COMMON.prototype.getLableTextHtml = function (lableText, textName, val) {
        var str = "<lable>" + lableText + ":</lable>";
        str += COMMON.getTextHtml(textName, val);
        return str;
    };

    _COMMON.prototype.getSelectHtml = function (selectName, list, val) {
        var str = "<select id='" + selectName + "' name='" + selectName + "'>";
        $.each(list, function (i, n) {
            ns = n.split(":");
            if(ns.length != 2){
                ns[0] = n;
                ns[1] = n;
            }
            if (val != undefined && val.length > 0 && val == ns[0]) {
                str += "<option value='" + ns[0] + "' selected>" + ns[1] + "</option>";
            } else {
                str += "<option value='" + ns[0] + "' >" + ns[1] + "</option>";
            }
        });
        str += "</select>";
        return str;
    };

    _COMMON.prototype.getTimeObj = function (radioName, param1, param2, selectRadio, selectParam1, selectParam2, isRange) {

        var str = "";
        if (selectRadio == undefined || selectRadio.length == 0) {
            str = "<input type='radio' name='" + radioName + "' id='" + radioName + "' value='relative' checked />";
            str += "等待";
            str += "<input type='text' name='" + param1 + "' id='" + param1 + "' scope='relative' value='" + selectParam1 + "' />";
            str += "天";
            str += "<input type='text' name='" + param2 + "' id='" + param2 + "' scope='relative' value='" + selectParam2 + "' />";
            str += "小时";
        } else {
            if (selectRadio == "relative") {
                str = "<input type='radio' name='" + radioName + "' id='" + radioName + "' value='relative' checked />";
                str += "等待";
                str += "<input type='text' name='" + param1 + "' id='" + param1 + "' scope='relative' value='" + selectParam1 + "' />";
                str += "天";
                str += "<input type='text' name='" + param2 + "' id='" + param2 + "' scope='relative' value='" + selectParam2 + "' />";
                str += "小时";
            } else {
                str = "<input type='radio' name='" + radioName + "' id='" + radioName + "' value='relative' />";
                str += "等待";
                str += "<input type='text' name='" + param1 + "' id='" + param1 + "' scope='relative' disabled />";
                str += "天";
                str += "<input type='text' name='" + param2 + "' id='" + param2 + "' scope='relative' disabled />";
                str += "小时";
            }
        }

        str += "</br>";

        if (selectRadio == "absolute") {
            str += "<input type='radio' name='" + radioName + "' id='" + radioName + "' value='absolute' checked />";
            str += "等待";
            str += "<input type='text' name='" + param1 + "' id='" + param1 + "' scope='absolute' value='" + selectParam1 + "' />";
            str += "天后";
            str += "<input type='text' name='" + param2 + "' id='" + param2 + "' scope='absolute' value='" + selectParam2 + "' />";
            str += "时";
        } else {
            str += "<input type='radio' name='" + radioName + "' id='" + radioName + "' value='absolute' />";
            str += "等待";
            str += "<input type='text' name='" + param1 + "' id='" + param1 + "' scope='absolute' disabled/>";
            str += "天后";
            str += "<input type='text' name='" + param2 + "' id='" + param2 + "' scope='absolute' disabled/>";
            str += "时";
        }
        str += "</br>";

        if (selectRadio == "unitizerelative") {
            str += "<input type='radio' name='" + radioName + "' id='" + radioName + "' value='unitizerelative' checked />";
            str += "等待";
            str += "<input type='date' name='" + param1 + "' id='" + param1 + "' scope='unitizerelative' value='" + selectParam1 + "' />";
            str += "天后";
            str += "<input type='time' name='" + param2 + "' id='" + param2 + "' scope='unitizerelative' value='" + selectParam2 + "' />";
            str += "为止";
        } else {
            str += "<input type='radio' name='" + radioName + "' id='" + radioName + "' value='unitizerelative' />";
            str += "等待";
            str += "<input type='date' name='" + param1 + "' id='" + param1 + "' scope='unitizerelative' disabled/>";
            str += "天后";
            str += "<input type='time' name='" + param2 + "' id='" + param2 + "' scope='unitizerelative' disabled/>";
            str += "为止";
        }
        if (isRange != undefined || isRange) {
            if (selectRadio == "range") {
                str += "<br/>等待时间段(请选择一天内的时间段)";
                str += "<br/><input type='radio' name='" + radioName + "' id='" + radioName + "' value='range' checked />";
                str += "只在当天";
                str += "<input type='time' name='" + param1 + "' id='" + param1 + "' scope='range' value='" + selectParam1 + "' />";
                str += "-";
                str += "<input type='time' name='" + param2 + "' id='" + param2 + "' scope='range' value='" + selectParam2 + "' />";
                str += "执行";
            } else {
                str += "<br/>等待时间段(请选择一天内的时间段)";
                str += "<br/><input type='radio' name='" + radioName + "' id='" + radioName + "' value='range' />";
                str += "只在当天";
                str += "<input type='time' name='" + param1 + "' id='" + param1 + "' scope='range' disabled/>";
                str += "-";
                str += "<input type='time' name='" + param2 + "' id='" + param2 + "' scope='range' disabled/>";
                str += "执行";
            }
        }


        str += "</br>";
        var obj = $("<div>" + str + "</div>");
        var radioVar = obj.find("input[name=" + radioName + "]");
        radioVar.unbind();
        radioVar.bind("click", function () {
            var clickVal = $(this).val();
            $("input[name='" + param1 + "']").each(function () {
                if ($(this).attr("scope") == clickVal) {
                    $(this).attr("disabled", false);
                } else {
                    $(this).attr("disabled", true);
                }
            });
            $("input[name='" + param2 + "']").each(function () {
                if ($(this).attr("scope") == clickVal) {
                    $(this).attr("disabled", false);
                } else {
                    $(this).attr("disabled", true);
                }
            });
        });
        return obj;
    };

    _COMMON.prototype.getCheckTableHtml = function (tableName, checkName, list, selectMap) {
        if (list == undefined || list.length == 0) {
            return "";
        }
        var str = "<table id='" + tableName + "' name='" + tableName + "'>";
        str += "<tr>";
        var title = list[0];
        var ns = title.split(";");
        str += "<td>";
        str += ns[0];
        str += "</td>";
        str += "<td>";
        str += ns[1];
        str += "</td>";
        str += "</tr>";
        list = list.slice(1);
        $.each(list, function (i, n) {
            str += "<tr>";
            ns = n.split(";");
            if (selectMap.hasOwnProperty(ns[0]) == true) {
                str += "<td><input name='" + checkName + "' id='" + checkName + "' type='checkbox' value='" + ns[0] + "' checked/></td>";
            } else {
                str += "<td><input name='" + checkName + "' id='" + checkName + "' type='checkbox' value='" + ns[0] + "' /></td>";
            }
            ns = ns.slice(1);
            $.each(ns, function (j, col) {
                str += "<td>";
                str += col;
                str += "</td>";
            });
            str += "</tr>";
        });

        str += "</table>";
        return str;
    };

    if (!window.COMMON) {
        window.COMMON = new _COMMON();
    }
})();
/**
 * Created by HZL on 2016/2/25.
 */
(function ($) {
    var conditon = function () {
    };

    //刷选条件内容
    var filterCon = MemberFilters;

    //不同类型的条件体
    conditon.prototype.combination = function (content) {
        var inputBox = '<input type="text" class="content">';
        var numberBox = '<input type="number" min="0" class="content">';
        var numberRange = '<input type="number" class="contentBegin">-<input type="number" class="contentEnd">';
        var dataBox = '<input type="date" class="content">';
        var dataRange = '<input type="date" class="contentBegin">-<input type="date" class="contentEnd">';
        var operationOne = '<select name="operate" class="operate"><option value="like">包含</option>' +
            '<option value="notLike">不包含</option>'
            + '<option value="equal">等于</option><option value="notEqual">不等于</option></select>';
        var operationTwo = '<select name="operate" class="operate"><option value="in">属于</option>' +
            '<option value="notIn">不属于</option></select>';
        var operationThree = '<select name="operate" class="operate"><option value="equal">等于</option>' +
            '<option value="lessThan">小于</option><option value="moreThan">大于</option>' +
            '<option value="moreThanOrEqual">大于等于</option>' +
            '<option value="lessThanOrEqual">小于等于</option></select>';
        var operationFour = '<select name="operate" class="operate timeType"><option value="year">年</option>'
            + '<option value="month">月</option><option value="day">日</option><option value="hour">小时</option></select>';
        var operationFive = '<select name="operate" class="operate actionType"><option value="">-请选择-</option><option value="sms">短信</option>'
            + '<option value="email">邮件</option></select><select class="content action" name="content"><option value="">-请选择-</option></select>';
        var operation = '';
        switch (content.type) {
            case CONTENT_TYPE.INPUT:
                operation = operationOne + inputBox;
                break;
            case  CONTENT_TYPE.LIST:
                var areaOption = '<select class="multipleSelect"></select>';
                operation = operationTwo + areaOption;
                break;
            case CONTENT_TYPE.SELECT:
                var $sel = $('<select style="width: 50%;padding: 4px;" class="content">' +
                    '<option value="">-请选择-</option></select>');
                if (content.dataCon) {
                    XREWIN.addOptions(content.dataCon, "value", "text", $sel);
                } else {
                    $sel.empty().append('<option value="' + content.content + '" selected>' + content.text + '</option></select>');
                }
                operation = $sel[0].outerHTML;
                break;
            case CONTENT_TYPE.NUMBER:
                operation = operationThree + numberBox;
                break;
            case CONTENT_TYPE.NUMBER_RANGE:
                operation = numberRange;
                break;
            case CONTENT_TYPE.DATE:
                operation = operationThree + dataBox;
                break;
            case CONTENT_TYPE.DATE_RANGE:
                operation = dataRange;
                break;
            case CONTENT_TYPE.RELATIVE_TIME:
                operation = numberBox + operationFour;
                break;
            case CONTENT_TYPE.CASCADE:
                operation = operationFive;
                break;
        }
        return $("<span class='operateCon'></span>").append(operation);
    };

    //级联条件
    conditon.prototype.uplinkCondition = function () {
        var removeOperateCon = function (obj) {
            obj.find(".operateCon").remove();
        };

        //生成条件体
        $(".filterConditon").each(function () {
            var that = $(this);
            that.find(".filterType").on("change", function () {
                var table = $(this).find("option:selected").text();
                var rowSelect = that.find(".vipType");
                rowSelect.empty().append("<option value=''>请选择</option>");
                removeOperateCon(that);
                for (var i = 0; i < filterCon.length; i++) {
                    //创建列
                    if (table == filterCon[i].name) {
                        var ro = filterCon[i].buttons;
                        that.data("row", JSON.stringify(ro));
                        rowSelect.empty().append("<option value=''>请选择</option>");
                        //添加options
                        XREWIN.addOptions(ro, "column", "text", rowSelect, "table");
                        rowSelect.off().on("change", function () {
                            var rowVal = $(this).val();
                            if (rowVal == "") {
                                removeOperateCon(that);
                            }
                            var row = JSON.parse(that.data("row"));
                            for (var k = 0; k < row.length; k++) {
                                if (rowVal == row[k].column) {
                                    var content = row[k].content;
                                    removeOperateCon(that);
                                    that.append(new conditon().combination(content));
                                    rowSelect.attr("type", content.type);
                                    //追加地域内容
                                    if (content.type == CONTENT_TYPE.LIST) {
                                        var obj = content.urls[content.urls.length - 1];
                                        if (obj.url) {
                                            //获取地域内容
                                            $.ajax({
                                                url: obj.url,
                                                dataType: 'json',
                                                type: "GET",
                                                cache: true,
                                                success: function (data) {
                                                    var selArea = $(".multipleSelect", that);
                                                    XREWIN.addOptions(data.data, "key", "name", selArea);
                                                }
                                            })
                                        } else {
                                            if (obj.dataCon) {
                                                var selArea = $(".multipleSelect", that);
                                                XREWIN.addOptions(obj.dataCon, "id", "text", selArea);
                                            }
                                        }
                                    } else if (content.type == CONTENT_TYPE.CASCADE) {
                                        //营销行为
                                        that.find(".actionType").on("change", function () {
                                            var sel = that.find(".action");
                                            if ($(this).val() == "sms") {
                                                sel.empty().append('<option value="sendSuccess">发送成功</option>'
                                                    + '<option value="invalidTel">无效手机号</option><option value="click">点击</option>');
                                            }
                                            else if ($(this).val() == "email") {
                                                sel.empty().append('<option value="sendSuccess">发送成功</option>' +
                                                    '<option value="open">打开</option><option value="click">点击</option>' +
                                                    '<option value="filterCount">过滤数量</option><option value="formatError">格式错误</option>' +
                                                    '<option value="onceSubmitRepeat">单次提交中重复</option><option value="sendUnreg">以往发送退订</option>' +
                                                    '<option value="sendInvalid">以往发送无效</option><option value="backEmail">退回邮件</option>' +
                                                    '<option value="emailAddressInvalid">邮箱地址无效</option><option value="serverReject">服务器拒收</option>' +
                                                    '<option value="unreg">退订</option>'
                                                );
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    }
                }
            });
        });
    };

    //获取条件内容
    conditon.prototype.getConditionContent = function (obj) {
        var conditionCon = [];
        //遍历条件列表
        obj.find(".filterConditon").each(function () {
            var that = $(this);
            var conData = {};
            conData.select1 = that.find(".filterType").val();
            conData.table = that.find(".vipType option:selected").attr("extend");
            conData.column = that.find(".vipType").val();
            conData.columnText = that.find(".vipType option:selected").text();
            var type = that.find(".vipType").attr("type");
            conData.type = type;
            var specialData = {};
            switch (type) {
                case CONTENT_TYPE.INPUT:
                case CONTENT_TYPE.NUMBER:
                case CONTENT_TYPE.DATE:
                    conData.operate = that.find(".operate").val();
                    conData.content = that.find(".content").val();
                    break;
                case CONTENT_TYPE.DATE_RANGE:
                    break;
                case CONTENT_TYPE.NUMBER_RANGE:
                    specialData.beginNumber = that.find(".contentBegin").val();
                    specialData.endNumber = that.find(".contentEnd").val();
                    conData.content = JSON.stringify(specialData);
                    break;
                case CONTENT_TYPE.LIST:
                    conData.operate = that.find(".operate").val();
                    conData.content = that.find(".multipleSelect").val();
                    conData.text = that.find(".multipleSelect option:selected").text();
                    break;
                case CONTENT_TYPE.SELECT:
                    conData.content = that.find(".content").val();
                    conData.text = that.find(".content option:selected").text();
                    break;
                case CONTENT_TYPE.RELATIVE_TIME:
                    specialData.timeInterval = that.find(".content").val();
                    specialData.timeType = that.find(".timeType").val();
                    conData.content = JSON.stringify(specialData);
                    break;
                case CONTENT_TYPE.CASCADE:
                    specialData.actionType = that.find(".actionType").val();
                    specialData.action = that.find(".action").val();
                    specialData.text = that.find(".action option:selected").text();
                    conData.content = JSON.stringify(specialData);
                    break;

            }
            conditionCon.push(conData);
        });
        return JSON.stringify(conditionCon);
    };

    //创建条件
    conditon.prototype.createConditon = function () {
        var conditonwrap = document.createElement("div");
        conditonwrap.className = "filterConditon";
        var conditonCon = '<a href="javascript:void(0);" class="delConditon">删除</a>' +
            '<select name="filterType" class="filterType">' +
            '<option value="">请选择</option>' +
            '</select>' +
            '<select name="vipType" class="vipType">' +
            '<option value="">请选择</option>' +
            '</select>';
        $(conditonwrap).append(conditonCon);
        //添加options
        XREWIN.addOptions(filterCon, "value", "name", $(conditonwrap).find('select[name="filterType"]'));
        return conditonwrap.outerHTML;
    };

    //加载不同类型条件体
    conditon.prototype.loadCondition = function (data,conBox) {

        var conditionCon = JSON.parse(data.condition);
        for (var j = 0; j < conditionCon.length; j++) {
            var conwrap = $(new conditon().createConditon());
            var curConData = conditionCon[j];
            var conTable = conwrap.find(".filterType");
            conTable.val(curConData.select1?curConData.select1:curConData.table).attr("disabled", true).css("background", "#eee");
            var type = curConData.type;
            var colText = curConData.columnText;
            var opCo = $(new conditon().combination(curConData));
            var conWr = conwrap.appendTo(conBox);
            var vipType = conwrap.find(".vipType");
            vipType.append('<option value="' + curConData.column + '" selected extend="' + curConData.table + '">' + colText + '</option>');
            vipType.attr({
                "disabled": true,
                "type": type
            }).css("background", "#eee");
            conWr.append(opCo);
            var conditonContent;
            switch (type) {
                case CONTENT_TYPE.INPUT:
                case CONTENT_TYPE.NUMBER:
                case CONTENT_TYPE.DATE:
                    conWr.find(".operate").val(curConData.operate);
                    conWr.find(".content").val(curConData.content);
                    break;
                case CONTENT_TYPE.DATE_RANGE:
                    break;
                case CONTENT_TYPE.NUMBER_RANGE:
                    conditonContent = JSON.parse(curConData.content);
                    conWr.find(".contentBegin").val(conditonContent.beginNumber);
                    conWr.find(".contentEnd").val(conditonContent.endNumber);
                    break;
                case CONTENT_TYPE.LIST:
                    conWr.find(".operate").val(curConData.operate);
                    $(".multipleSelect", conWr).append('<option value="' + curConData.content + '" selected>' +
                        curConData.text + '</option>').attr("disabled", true).css("background", "#eee");
                    break;
                case CONTENT_TYPE.SELECT:
                    break;
                case CONTENT_TYPE.RELATIVE_TIME:
                    conditonContent = JSON.parse(curConData.content);
                    conWr.find(".content").val(conditonContent.timeInterval);
                    conWr.find(".timeType").val(conditonContent.timeType);
                    break;
                case CONTENT_TYPE.CASCADE:
                    conditonContent = JSON.parse(curConData.content);
                    conWr.find(".actionType").val(conditonContent.actionType).attr("disabled", true).css("background", "#eee");
                    conWr.find(".action").empty().append('<option value="' + conditonContent.action + '" selected>' +
                        conditonContent.text + '</option>').attr("disabled", true).css("background", "#eee");
                    break;
            }
        }



    };

    if (!window.individuationCondition) {
        window.individuationCondition = new conditon()
    }
})(jQuery);
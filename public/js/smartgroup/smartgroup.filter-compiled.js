'use strict';

/**
 * Created by hzl on 2015/10/10.
 */
(function ($, window, document, undefined) {
    $.fn.smartGroupFilter = function (setting) {
        var plugin = this;
        //region 初始化设置
        var options = {};
        //继承smartgroup的options
        if (setting && setting.smartGroup) {
            options = $.extend({}, setting.smartGroup.options, setting);
        } else {
            options = $.extend({}, setting);
        }
        plugin.options = options;
        //endregion

        //region 按钮及类型

        //按钮组数据
        var filterButtons = MemberFilters;
        //endregion

        //region 生成按钮
        //获取按钮的文本text
        var getObjectValue = function getObjectValue(obj, name, defaultValue) {
            if (typeof obj == 'undefined' || typeof obj[name] == 'undefined') {
                return defaultValue;
            }
            return obj[name];
        };

        //创建form
        var getFilterElements = function getFilterElements(content, column) {
            var inputBox = '<input class="inputBox validator" type="text" value=""  name="content">';
            var numberBox = '<input class="numberBox validator" type="number" value="" min="0" name="content">';
            var numberRange = '<input class="beginNumber validator" type="number">' + '-<input class="endNumber validator" type="number">';
            var dataBox = '<input class="dataBox validator" type="date" value="" name="content">';
            var dataRange = '<input class="beginData validator" type="date" value="" name="beginTime">' + '-<input class="endData validator" type="date" value="" name="endTime">';
            var operationOne = '<select name="operate" class="operate"><option value="like">' + TxtContent.like + '</option><option value="notLike">' + TxtContent.noLike + '</option>' + '<option value="equal">' + TxtContent.equal + '</option><option value="notEqual">' + TxtContent.noEqual + '</option></select>';
            var operationTwo = '<select name="operate" class="operate"><option value="in">' + TxtContent.in + '</option><option value="notIn">' + TxtContent.noIn + '</option></select>';
            var operationThree = '<select name="operate" class="operate"><option value="equal">' + TxtContent.equal + '</option>' + '<option value="lessThan">' + TxtContent.lessThan + '</option><option value="moreThan">' + TxtContent.moreThan + '</option>' + '<option value="moreThanOrEqual">' + TxtContent.moreThanOrEqual + '</option><option value="lessThanOrEqual">' + TxtContent.lessThanOrEqual + '</option></select>';
            var operationFour = '<select class="operate timeType"><option value="year">' + TxtContent.year + '</option>' + '<option value="month">' + TxtContent.month + '</option><option value="day">' + TxtContent.day + '</option><option value="hour">' + TxtContent.hour + '</option></select>';
            var operationFive = '<select class="operate validator actionType"><option value="">' + TxtContent.sel + '</option><option value="sms">' + TxtContent.sms + '</option>' + '<option value="email">' + TxtContent.mail + '</option></select><select class="behavior operate validator action"><option value="">' + TxtContent.sel + '</option></select>';
            var operation = '';
            switch (content.type) {
                case CONTENT_TYPE.INPUT:
                    operation = operationOne + inputBox;
                    break;
                case CONTENT_TYPE.LIST:
                    operationTwo += '<span class="select-group">';
                    $.each(content.urls, function (i, url) {
                        operationTwo += '<select data-type="' + url.type + '" data-filter-name="' + encodeURIComponent(url.filter_name) + '" style="width:200px;display:block;" data-text="' + encodeURIComponent(url.text) + '" data-url="' + encodeURIComponent(url.url) + '" data-idname="' + url.idName + '" data-textname="' + url.textName + '" data-name="' + encodeURIComponent(url.name) + '" data-datacon=' + JSON.stringify(url.dataCon) + '></select>';
                    });
                    operationTwo += "</span>";
                    operation = operationTwo;
                    break;
                case CONTENT_TYPE.SELECT:
                    var $sel = $('<select style="width: 100%;padding: 4px;" name="' + content.name + '" class="selVal validator">' + '<option value="">' + TxtContent.sel + '</option></select>');
                    XREWIN.addOptions(content.dataCon, "value", "text", $sel);
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
                    operation = '<input class="numberBox validator timeInterval" type="number" min="0">' + operationFour;
                    break;
                case CONTENT_TYPE.CASCADE:
                    operation = operationFive;
                    break;
            }
            return '<form data-bv-message="This value is not valid" onkeydown="if(event.keyCode==13){return false;}"' + 'id="formData' + column + '" class="formAllData" data-contentType="' + content.type + '">' + operation + '<input name="column" value="' + column + '" hidden></form>';
        };

        //创建弹出框内容
        var getContent = function getContent(button) {
            var btnText = getObjectValue(button, "text", "属性");
            var content = '<div><div class="btn-group filter-types">';
            content += '<button class="btn btn-success" data-iclass="fa-filter" title="' + TxtContent.filter + '"><i class="fa fa-filter"></i></button>';
            content += '<button class="btn btn-white" data-iclass="fa-plus" title="' + TxtContent.plus + '"><i class="fa fa-plus"></i></button>';
            content += '<button class="btn btn-white" data-iclass="fa-minus" title="' + TxtContent.minus + '"><i class="fa fa-minus"></i></button>' + '<span class="filterName">' + btnText + '</span></div>';
            content += '<div style="padding: 5px 0 10px;">';
            content += getFilterElements(button.content, button.column);
            content += '</div>';
            content += '<div class="sm-popover-buttons">';
            content += '<button class="btn btn-primary confirm">' + TxtContent.confirm + '</button>';
            content += '<button class="btn btn-white cancel">' + TxtContent.cancel + '</button>';
            content += '</div>';
            return content;
        };

        //组建按钮
        var buildBtn = function buildBtn(row) {
            var content = '';
            for (var i = 0; i < row.buttons.length; i++) {
                var button = row.buttons[i];
                content += '<button data-filter-table="' + button.table + '" data-filter-column="' + button.column + '" ';
                content += 'class="btn btn-outline btn-white sm-row-button"';
                content += 'data-container="body" data-toggle="popover" data-placement="auto bottom"';
                content += "data-content='" + getContent(button) + "'";
                content += 'data-original-title="" title="">' + button.text + '</button>';
            }
            return content;
        };

        //创建按钮组
        var getRowButtons = function getRowButtons(row) {
            var content = '<tr class="popover-options">';
            content += '<td style="vertical-align: text-top;"><label class="sm-row-name">' + row.name + '：</label></td><td>';
            content += buildBtn(row);
            content += '</td></tr>';
            return content;
        };

        //创建tab标题
        var createTabTitle = function createTabTitle(row) {
            return '<li><a data-toggle="tab" href="#' + row.value + '" aria-expanded="false">' + row.name + '</a></li>';
        };

        //创建tab内容
        var createTabContent = function createTabContent(row) {
            var content = '<div id="' + row.value + '" class="tab-pane"><div class="panel-body sg-body">';
            content += buildBtn(row);
            content += '</div></div>';
            return content;
        };

        //多级下拉框
        var select2Func = function select2Func(select, parent) {

            var url = decodeURIComponent(select.data('url'));
            var name = decodeURIComponent(select.data('filter-name'));
            var dataCon = select.data('datacon');
            //地区级联
            if (name != "undefined") {
                var names = parent.data("names");

                if (names) {
                    for (var keyName in names) {
                        if (keyName && typeof keyName == 'string') {
                            if (names.hasOwnProperty(keyName)) {
                                url = XREWIN.appendParam(url, keyName, names[keyName].join(','));
                            }
                        }
                    }
                }
                var key = XREWIN.getUrlParam("key");
                url = XREWIN.append;
                Param(url, "group_key", key);
            }
            var text = decodeURIComponent(select.data('text'));
            var selectedData = select.data("selected_data");
            if (url != "undefined") {
                XREWIN.ajaxGetJsonByCache(url, null, function (data) {
                    select.off("select2:select select2:unselect");
                    select.empty();
                    var selectData = DataUtil.selectData(data.data, select.data('idname'), select.data('textname'));
                    select.select2({
                        data: selectData,
                        multiple: true,
                        placeholder: text,
                        tag: true
                    });

                    if (name) {
                        if (selectedData && selectedData.length > 0) {
                            var selectIds = [];
                            for (var i = 0; i < selectedData.length; i++) {
                                selectIds.push(selectedData[i].id);
                            }
                            select.val(selectIds).trigger("change");
                        }
                        select.on("select2:select select2:unselect", function (e) {
                            var changed = $(this);
                            var dict = parent.data("names");
                            if (!dict) {
                                dict = {};
                            }
                            dict[name] = [];
                            $.each(changed.select2('data'), function (i, n) {
                                dict[name].push(n.id);
                            });
                            parent.data("names", dict);
                            changed.data("selected_data", changed.select2('data'));

                            var selects = changed.nextAll("select");
                            selects.each(function () {
                                var that = $(this);
                                select2Func(that, parent);
                            });
                        });
                    }
                });
            } else {
                if (dataCon) {
                    select.select2({
                        data: dataCon,
                        multiple: true,
                        placeholder: text,
                        tag: true
                    });
                }
            }
        };
        //endregion

        var filtering = null;
        //初始化
        var init = function init(groupKey) {
            //判断应用场景
            var scene = plugin.options.scene;
            if (scene == 'modal') {
                var tabUl = $('<ul class="nav nav-tabs"></ul>');
                var tabContent = $('<div class="tab-content"></div>');
                for (var i = 0; i < filterButtons.length; i++) {
                    //tab标题
                    tabUl.append(createTabTitle(filterButtons[i]));
                    //tab内容
                    tabContent.append(createTabContent(filterButtons[i]));
                }
                tabUl.find('li:first').addClass('active').attr('aria-expanded', true);
                tabContent.find('.tab-pane:first').addClass('active');
                var tabs = $('<div class="tabs-container sg-tabs-container"></div>').append(tabUl, tabContent);
                $(plugin).append(tabs);
            } else {
                //把按钮追加到页面中
                var table = $(document.createElement("table")).appendTo(plugin);
                for (var i = 0; i < filterButtons.length; i++) {
                    $(getRowButtons(filterButtons[i])).appendTo(table);
                }
            }

            //把内容添加到按钮上
            var pops = plugin.find("button").popover({ html: true, trigger: 'click' });

            //关闭弹框
            var closePop = function closePop() {
                if (filtering == null) {
                    console.log("closePop.filtering is null");
                    return;
                }
                filtering.removeClass("btn-success").addClass("btn-white");
                filtering.click();
                filtering = null;
            };

            plugin.closePopFun = closePop;

            //点击同一个按钮
            pops.on("click", function () {
                if ($(this).attr("byClick")) {
                    filtering = null;
                    $(this).removeAttr("byClick");
                } else {
                    $(this).attr("byClick", "byClick");
                }
            });

            //显示弹框时显示
            pops.on("shown.bs.popover", function () {
                var $pop = $(this);
                //data里的数据用小写
                var table = $pop.data("filter-table");
                var column = $pop.data("filter-column");
                //判断点击不同的按钮
                if (filtering) {
                    if (filtering.data("filter-table") == table && filtering.data("filter-column") == column) {
                        console.debug("click same button");
                    } else {
                        filtering.removeClass("btn-success").addClass("btn-white");
                        filtering.click();
                    }
                }

                filtering = $pop;
                //按钮选中样式
                $pop.removeClass("btn-white").addClass("btn-success");
                var filterClass = 'fa-filter';
                //选中节点数据
                var objData = {
                    iClass: filterClass,
                    table: table,
                    column: column
                };
                //获取弹框数据
                var obj = $pop.data("bs.popover");
                //获取弹框html
                var tip = obj.tip();

                //营销行为
                tip.find(".actionType").on("change", function () {
                    var sel = tip.find(".action");
                    if ($(this).val() == "sms") {
                        sel.empty().append('<option value="sendSuccess">' + TxtContent.sendSuccess + '</option>' + '<option value="invalidTel">' + TxtContent.invalidTel + '</option><option value="click">' + TxtContent.click + '</option>');
                    } else if ($(this).val() == "email") {
                        sel.empty().append('<option value="sendSuccess">' + TxtContent.sendSuccess + '</option>' + '<option value="open">' + TxtContent.open + '</option><option value="click">' + TxtContent.click + '</option>' + '<option value="filterCount">' + TxtContent.filterCount + '</option><option value="formatError">' + TxtContent.formatError + '</option>' + '<option value="onceSubmitRepeat">' + TxtContent.onceSubmitRepeat + '</option><option value="sendUnreg">' + TxtContent.sendUnreg + '</option>' + '<option value="sendInvalid">' + TxtContent.sendInvalid + '</option><option value="backEmail">' + TxtContent.backEmail + '</option>' + '<option value="emailAddressInvalid">' + TxtContent.emailAddressInvalid + '</option><option value="serverReject">' + TxtContent.serverReject + '</option>' + '<option value="unreg">' + TxtContent.unreg + '</option>');
                    }
                });

                //省市级联动
                tip.find(".select-group").each(function () {
                    var parent = $(this);
                    var selects = parent.find("select");
                    selects.each(function () {
                        var that = $(this);
                        select2Func(that, parent);
                        tip.find('select[name="operate"]').css("width", "100%");
                    });
                });

                //点击取消
                tip.find(".cancel").unbind("click.smg.filter").bind("click.smg.filter", function () {
                    closePop();
                });

                //点击筛选按钮
                tip.find(".filter-types button").bind("click", function () {
                    $(this).parent().find("button.btn-success").removeClass("btn-success").addClass("btn-white");
                    $(this).removeClass("btn-white").addClass("btn-success");
                    objData.iClass = $(this).data("iclass");
                });

                tip.unbind("keydown").bind("keydown", function (e) {
                    if (event.keyCode == 13) {
                        tip.find(".confirm").trigger("click");
                        e.stopPropagation();
                    }
                });

                //点击确定按钮
                tip.find(".confirm").unbind("click.smg.filter").bind("click.smg.filter", function () {
                    XREWIN.skipPrompt(TxtContent.skipPrompt);
                    var formId = tip.find("form").attr("id");
                    var curNodeId = "";
                    var conType = tip.find("form");
                    if (options.smartGroup) {
                        curNodeId = options.smartGroup.getFatherId();
                    }
                    var contentType = conType.attr("data-contentType");
                    //formData数据
                    var fd = new FormData(document.getElementById(formId));
                    //追加数据
                    fd.append("tableName", table);
                    fd.append("relationType", objData.iClass);
                    fd.append("type", contentType);
                    fd.append("groupKey", groupKey);
                    var dataContent = { "mark": true };
                    switch (contentType) {
                        case "relative-time":
                            dataContent.timeInterval = tip.find(".timeInterval").val();
                            dataContent.timeType = tip.find(".timeType").val();
                            delete dataContent.mark;
                            break;
                        case "cascade":
                            dataContent.actionType = tip.find(".actionType").val();
                            dataContent.action = tip.find(".action").val();
                            delete dataContent.mark;
                            break;
                        case "number-range":
                            dataContent.beginNumber = tip.find(".beginNumber").val();
                            dataContent.endNumber = tip.find(".endNumber").val();
                            delete dataContent.mark;
                            break;
                    }
                    if (!dataContent.mark) {
                        fd.append("content", JSON.stringify(dataContent));
                    }

                    var nameText = tip.find(".filterName").text();
                    var operation = tip.find('select[name="operate"]').find("option:selected").text();
                    //组建文本
                    var produceText = "";
                    switch (contentType) {
                        case "input":
                            var inputVal = tip.find(".inputBox").val();
                            produceText += '<b>' + nameText + '</b><em>' + operation + '</em>' + inputVal;
                            break;
                        case "list":
                            tip.find('.select-group select').each(function () {
                                var sel = $(this);
                                var arrayVal = sel.select2("data");
                                var objArray = [];
                                for (var i = 0; i < arrayVal.length; i++) {
                                    objArray.push(arrayVal[i].text);
                                }
                                if (objArray) {
                                    var stringVal = objArray.join('&&');
                                    produceText += '<b>' + decodeURIComponent(sel.data("text")) + '</b><em>' + operation + '</em>' + stringVal + '<br/>';
                                }
                            });
                            break;
                        case "date":
                            var dataVal = tip.find(".dataBox").val();
                            produceText += '<b>' + nameText + '</b><em>' + operation + '</em>' + dataVal;
                            break;
                        case "date-range":
                            var beginData = tip.find(".beginData").val();
                            var endData = tip.find(".endData").val();
                            produceText += '<b>' + nameText + '</b><em>' + TxtContent.from + '</em>' + beginData + '<em>' + TxtContent.to + '</em>' + endData;
                            break;
                        case "number":
                            var numVal = tip.find(".numberBox").val();
                            produceText += '<b>' + nameText + '</b><em>' + operation + '</em>' + numVal;
                            break;
                        case "select-str":
                            var selVal = tip.find(".selVal").val();
                            produceText += '<b>' + nameText + '</b><em>' + TxtContent.be + '</em>' + selVal;
                            break;
                        case "relative-time":
                            var day = tip.find(".numberBox").val();
                            var type = tip.find(".timeType option:selected").text();
                            produceText += '<b>' + nameText + '</b><em>' + TxtContent.be + '</em>' + day + type;
                            break;
                        case "cascade":
                            var sendType = tip.find(".actionType option:selected").text();
                            var behavior = tip.find(".action option:selected").text();
                            produceText += '<b>' + nameText + '</b><em>' + sendType + '-</em>' + behavior;
                            break;
                        case "number-range":
                            var beginNumber = tip.find(".beginNumber").val();
                            var endNumber = tip.find(".endNumber").val();
                            produceText += '<b>' + nameText + '</b><em>' + TxtContent.from + '</em>' + beginNumber + '<em>' + TxtContent.to + '</em>' + endNumber;
                            break;
                    }

                    var stringVal,
                        zoneList = {};
                    tip.find('.select-group select').each(function () {
                        var sel_group = $(this);
                        var selName = sel_group.data("name");
                        var arrayVal = sel_group.select2("val");
                        if (arrayVal) {

                            if (sel_group.data("type") == "int") {
                                stringVal = arrayVal.join();
                            } else if (sel_group.data("type") == "zone") {
                                zoneList[selName] = "'" + arrayVal.join("','") + "'";
                                stringVal = JSON.stringify(zoneList);
                            } else {
                                stringVal = "'" + arrayVal.join("','") + "'";
                            }
                        }
                    });

                    if (stringVal) {
                        fd.append("content", stringVal);
                    }

                    //判断table的智能分组
                    if (typeof plugin.options.func == "function") {
                        var row = {
                            'iClass': objData.iClass,
                            'text': produceText
                        };
                        plugin.options.func(fd, row);
                        closePop(filtering);
                        return false;
                    } else {
                        XREWIN.loadingType = "toast";
                        if (XREWIN.loading) {
                            return false;
                        }
                        fd.append("parentId", curNodeId || 'parentId');

                        //添加节点数据
                        var addNode = function addNode(fd) {
                            if (options.smartGroup) {
                                options.smartGroup.addNode(fd, function () {
                                    var data = this.split(',');
                                    options.smartGroup.addBlock({
                                        "iClass": objData.iClass,
                                        "id": data[0],
                                        "text": produceText,
                                        "count": data[1] || -1
                                    });
                                });
                            }
                        };

                        //判断input的值是否为空
                        var inputCon = conType.find(".validator").val();
                        var area = conType.find(".select2-selection__rendered").text();
                        if (!inputCon) {
                            conType.find(".validator").css({ "border": "1px solid red", "padding-left": "5px" }).attr("placeholder", TxtContent.dataIsNull);
                            if (area) {
                                //添加节点
                                addNode(fd);
                                closePop(filtering);
                            } else {
                                conType.find(".select2-selection__rendered").text(TxtContent.dataIsNull).css("padding", "5px");
                            }
                        } else {
                            //添加节点

                            addNode(fd);
                            closePop(filtering);
                        }
                        XREWIN.loadingType = "";
                    }
                });
                return $pop;
            });
        };

        //初始化
        init(plugin.options.groupKey || '');

        return plugin;
    };
})(jQuery, window, document);

//# sourceMappingURL=smartgroup.filter-compiled.js.map
/**
 * Created by HZL on 2016/1/7.
 */

var _settingSpan, _mark;
var $smsPersonalityModal = $("#smsPersonalityModal");
//短信个性化弹窗
var smsPersonalityModal = function (selTxt, id) {

    //获取编辑区焦点
    $("#editArea_" + id).focus();
    var element = document.getSelection().baseNode.parentElement;
    _mark = id;
    if ((selTxt && $("#editArea_editModal:contains(" + selTxt + ")")) && element.tagName != "MARK"
        || $(element).data("nav")) {
        $smsPersonalityModal.show();
        $("#modal_" + id).hide();
    } else {
        selTxt ? swal(TxtContent.selConNoeditor, "", "warning") : swal(TxtContent.selConEditor, "", "warning");

        return false;
    }
    var boxArea = $("#boxeArea");
    boxArea.empty();

    boxArea.append(createEle());
    //删除第一个条件
    $(".settingJson").remove();

    if (element.tagName != 'NAV') {
        //标出编辑内容
        var tempId = "temp_" + (new Date()).getTime();
        var creSpan = document.createElement('nav');
        creSpan.className = 'smsEditorTxt';
        creSpan.setAttribute("id", tempId);

        if (selTxt) {
            creSpan.innerHTML = selTxt;
            var _span = element.innerHTML.replace(selTxt, creSpan.outerHTML);
            element.innerHTML = _span;

            if (element.className == "smsEditorTxt") {
                creSpan.innerHTML = selTxt;
                var test = element.parentElement.outerHTML.replace(selTxt, creSpan.outerHTML);
                element.parentElement.innerHTML = test;
            }
            $("#spanText").val(selTxt);
        }

        _settingSpan = document.getElementById(tempId);
        if (_settingSpan) {
            _settingSpan.removeAttribute("id");
        }
    } else {
        var kId = element.getAttribute("data-nav");
        _settingSpan = element;
        if (kId && kId.indexOf('temp_') == -1) {
            //加载数据
            var data = PERSONALIZE.getIndividuationSetting({"data": kId});
            urlGroupKey = data.groupKey;
            loadIndividuation(data);
        }
    }

    //刷新会员数
    $("#refreshCount").off().on("click", function () {

        var refreshNav = _settingSpan;
        //刷新前保存所有节点
        var ruleNode = $(".settingJson");
        ruleNode.each(function () {
            var that = $(this);
            var curNodeId = that.attr("id");
            if (!curNodeId) {
                that.find(".saveCondition").trigger("click");
            }
        });

        //只有所有节点全被保存才执行刷新
        for (var i = 0; i < ruleNode.length; i++) {
            var nodeId = $(ruleNode[i]).attr("id");
            if (!nodeId) {
                return false;
            }
        }

        //调用刷新接口
        PERSONALIZE.refresh({
            "individuationSettingKey": refreshNav.getAttribute("data-nav"),
            "groupKey": $("#vipGroup").val()
        }, function () {
            var obj = this.data;
            $(".filterVipCount").text(obj.total);
            $(".settingJson").each(function () {
                var that = $(this);
                var ruleId = that.attr("id");
                that.find(".matchCount").text(obj[ruleId]);
            });
            //判断调用添加接口还是更新接口
            judgePort();
        });
    });

    //添加新规则
    $("#addsettingJson").unbind().bind("click", function () {
        createRule();
        appendOption();
    });

    //离开页面时执行
    $(window).on("beforeunload", function () {
        return TxtContent.skipPrompt;
    });

    //region 加载会员分组
    //添加option
    var addMemberOption = function (obj) {
        var member = $("#vipGroup");
        //添加options
        XREWIN.addOptions(obj, "key", "name", member, "count");
        member.on("change", function () {
            var that = $(this);
            var count = that.find("option:selected").attr("count");
            $(".filterVipCount").text(count);
        });

    };

    //加载智能分组接口
    var addMemberGroup = function () {
        SMARTGROUP.listGroup(function () {
            addMemberOption(this.data);
        });
    };
    //执行加载会员分组
    if (urlGroupKey) {
        SMARTGROUP.listGroup(function () {
            var obj = this.data;
            var member = $("#vipGroup");
            //添加options
            XREWIN.addOptions(obj, "key", "name", member, "count");
            member.find("option").each(function () {
                var that = $(this);

                var opVal = that.attr("value");
                if (opVal == urlGroupKey) {
                    that.attr("selected", "selected");
                    member.select2().val(opVal);
                    $(".filterVipCount").text(that.attr("count"));
                }
            });
            var groupNav = _settingSpan;
            if (!groupNav.getAttribute("data-nav")) {
                addSettings(createIndividuationData(), groupNav);
            }
        });
    } else {
        addMemberGroup();
    }
    //endregion

    //添加personalitySetting


    if (_settingSpan) {
        var markId = _settingSpan.getAttribute("data-nav");
        if (!markId) {
            addSettings(createIndividuationData(), _settingSpan);
        }
        $('#vipGroup').select2();
    }
};

//设置个性化
var settingSmsPersonality = function (modalId) {
    var fd = XREWIN.FormData({"sms": $("#editArea_" + modalId).html()}, "form_" + modalId);
    var $form = $("#form_" + modalId);
    var state = $form.find('[name="smsState"]');
    if (!state.val()) {
        PERSONALIZE.addSmsTemplate(fd, function () {
            $form.find('[name="smsState"]').val(this.data);
            $form.find('[name="templateName"]').attr("readonly", true);
            //弹出个性化弹窗
            if (getSelectTxt()) {
                smsPersonalityModal(getSelectTxt(), modalId);
                state.val(this.data);
            }
        });
    } else {
        smsPersonalityModal(getSelectTxt(), modalId);
    }
};

//取消个性化
var cancelSmsPersonality = function (key, id) {
    //region 删除数据
    var delData = function (spanId) {
        PERSONALIZE.delIndividuationSetting({"data": spanId}, function () {
            var fd = new FormData();
            fd.append("key", key);
            fd.append("sms", $("#editArea_" + id).html());

            PERSONALIZE.updateSmsTemplate(fd);
        });
    };
    //endregion

    //region 删除标记
    var element = document.getSelection().baseNode.parentElement;
    if (element.className == "smsEditorTxt") {
        var dsId = element.getAttribute("data-nav");
        //删除数据
        delData(dsId);
        var txtVal = element.innerHTML;
        var rep = element.outerHTML;
        var result = $(element).parents('div[contenteditable=true]')[0].innerHTML.replace(rep, txtVal);
        $("#editArea_" + id).html(result);
    }
    //endregion
};

//获取选中文字
var getSelectTxt = function () {
    var txt = '';
    if (document.selection) {
        txt = document.selection.createRange().text;
    } else {
        txt = document.getSelection();
    }
    return txt.toString();
};


//region 创建弹窗内容
var urlGroupKey;
//创建id

//获取个性化数据
var createIndividuationData = function () {
    var individuationData = {};

    individuationData.settingType = "string";

    individuationData.groupKey = $("#vipGroup").val();
    individuationData.nonNodeValue = $("#spanText").val();
    var nonCount = $(".filterVipCount").text();
    individuationData.nonCount = nonCount || 0;
    //新规则数据
    individuationData.settingJson = [];
    var $set = $(".settingJson");
    var ruleCount = $set.length;
    for (var i = 0; i < ruleCount; i++) {
        var rData = {};
        rData.matchVipCount = $($set[i]).find(".matchCount").text();

        rData.con = $($set[i]).find(".indivTxt").find(".txtImg").val();


        rData.condition = getConditionCon($($set[i]));
        rData.id = $($set[i]).attr('id');
        individuationData.settingJson.push(rData);
    }
    return individuationData;
};

//判断调用添加接口还是更新接口
var judgePort = function () {
    var parentNode, sId;
    if (_settingSpan) {
        parentNode = _settingSpan;
        sId = parentNode.getAttribute("data-nav");
        if (sId) {
            //更新数据
            updateSetting(createIndividuationData(), parentNode);
        } else {
            //添加数据
            addSettings(createIndividuationData(), parentNode);
        }
    }
};

//级联条件
var appendOption = individuationCondition.uplinkCondition;

//获取条件内容
var getConditionCon = individuationCondition.getConditionContent;

//创建条件
var createConditon = individuationCondition.createConditon;

//创建个性化内容
var createIndiv = function () {
    var inCon = document.createElement("div");
    inCon.className = "indivCon";
    var txt = $("<div class='indivTxt'></div>").append("<label>文字</label>" +
        "<input type='text' class='txtImg' style='margin-left: 10px;width: 40%;'>");
    return $(inCon).append(txt);
};

//创建筛选结果盒子
var createFilter = function () {
    var $wrap;
    var titConditon = "<p style='border-top: none;position: relative;'>"+TxtContent.ckeitor.ruleCondition+"：" +
        "<a href='#' class='addConditon'>" +
        "<span class='glyphicon'>"+TxtContent.ckeitor.add+"</span>" +
        "</a>" +
        "<span class='saveCondition'>"+TxtContent.save+"</span>" +
        "</p>";
    var condition = createConditon();
    $wrap = $("<div class='conditionWrap'></div>");
    var conditionBox = $wrap.append(condition);
    var titVip = "<p>"+TxtContent.ckeitor.des+"：<span class='matchCount' style='margin-right: 5px'>" +
        "<span class='matchVipCount'>0</span></span>" +
        "</p>";
    var titCon = "<p>"+TxtContent.ckeitor.content+"：</p>";
    var indiv = createIndiv();
    var delRule = "<a href='javascript:void(0);' class='DelRule'>"+TxtContent.del+"</a>";
    return $("<div class='settingJson'></div>").append(titConditon, conditionBox, titVip, titCon, indiv, delRule);
};

//创建弹窗
var createEle = function () {

    //弹窗盒子
    var Box = document.createElement("div");
    Box.className = "filterBox";

    //分组盒子
    var groupCon = "<lable>"+TxtContent.ckeitor.group+"：</lable>" +
        "<select name='smartgroupKey' id='vipGroup' style='display: block;padding: 6px 12px;" +
        "width: 100%;margin-top: 5px;height: 30px;'>" +
        "<option value='' count=''>所有会员</option>" +
        "</select>";
    var groupBox = $("<div class='groupKey'></div><hr class='one'/>").append(groupCon);

    //不符合条件的vip
    var filterVip =
        "<p id='spanCon'>"+TxtContent.ckeitor.content+"：<input id='spanText'></p>" +
        "<p id='filterVip'>"+TxtContent.ckeitor.nonRuleCount+"：" +
        "<span class='filterVipCount'></span></p>" +
        "<a id='addsettingJson'>"+TxtContent.ckeitor.addRule+"</a><hr class='one'>";

    //创建筛选结果盒子
    var settingJsonBox = createFilter();
    var settingJsonWrap = $("<div class='ruleWrap'></div>").append(settingJsonBox);
    settingJsonWrap.css({"overflow": "auto", "height": "500px"});

    //把内容盒子放到弹窗盒子里
    $(Box).append(groupBox, filterVip, settingJsonWrap);
    return Box.outerHTML;
};

//创建新规则
var createRule = function () {
    var filterRule = createFilter();
    var settingJsonWrap = $(filterRule).appendTo($(".ruleWrap"));
    var cWrap = settingJsonWrap.find(".conditionWrap");

    //删除条件
    $(".delConditon", settingJsonWrap).unbind().bind("click", function () {
        $(this).parent().remove();
        var delCon = $(".delConditon", settingJsonWrap);
        if (delCon.length == 1) {
            delCon.hide();
        }
    });

    $(".delConditon", settingJsonWrap).length == 1 && $(".delConditon", settingJsonWrap).hide();

    //添加条件
    settingJsonWrap.find(".addConditon").unbind().bind("click", function () {
        var creCon = createConditon();
        var conWrap = $(creCon).appendTo(cWrap);
        var $delBut = conWrap.find(".delConditon");

        //联动添加options
        appendOption();

        //删除条件
        $delBut.unbind().bind("click", function () {
            $(this).parent().remove();
            var delCon = $(".delConditon", settingJsonWrap);

            if (delCon.length == 1) {
                delCon.hide();
            } else {
                delCon.show();
            }
        });
        $(".delConditon", settingJsonWrap).show();
    });

    //删除规则
    settingJsonWrap.find(".DelRule").unbind().bind("click", function () {
        var that = $(this);
        //删除规则接口
        var delRulePort = function (key) {
            if (key) {
                PERSONALIZE.delIndividuationSettingNode({"id": key}, function () {
                    delRuleSuc();
                });

            } else {
                that.parent().remove();
            }
        };

        //删除规则
        var delRuleSuc = function () {
            that.parent().remove();
            //判断调用添加接口还是更新接口
            judgePort();
        };

        //调用删除规则
        delRulePort(settingJsonWrap.attr("id"));

    });

    //保存条件
    settingJsonWrap.find(".saveCondition").off().on("click", function () {

        var addNav = _settingSpan;
        //获取nodeValue
        var getNodeValue = function () {
            return settingJsonWrap.find(".indivTxt").find(".txtImg").val();
        };

        //添加条件接口
        var addConPort = function (data) {
            var fd = new FormData();
            fd.append("filterData", data);
            fd.append("individuationSettingKey", addNav.getAttribute('data-nav'));
            fd.append("nodeValue", getNodeValue());
            PERSONALIZE.addIndividuationSettingNode(fd, function () {
                addConSuc(this.data);
            });

        };

        //更新条件接口
        var uptateConPort = function (data, key) {
            var fd = new FormData();
            fd.append("nodeKey", key);
            fd.append("filterData", data);
            fd.append("nodeValue", getNodeValue());
            PERSONALIZE.updateIndividuationSettingNode(fd, function () {
                updateConSuc(this.data);
            });

        };

        //添加条件成功
        var addConSuc = function (obj) {
            var msg = obj;
            if (msg.count) {
                settingJsonWrap.find(".matchCount").text(msg.count);
            }
            settingJsonWrap.attr("id", msg.key);
            //判断调用添加接口还是更新接口
            judgePort();
        };

        //更新条件成功
        var updateConSuc = function (obj) {
            settingJsonWrap.find(".matchCount").text(obj.count);
            //判断调用添加接口还是更新接口
            judgePort();
        };

        if ($(".filterType", settingJsonWrap).val() && $(".vipType", settingJsonWrap).val()) {
            //规则的id
            var ruleBoxId = settingJsonWrap.attr("id");
            if (ruleBoxId) {
                //调用更新接口
                uptateConPort(getConditionCon(settingJsonWrap), ruleBoxId);
            } else {
                //调用添加条件
                addConPort(getConditionCon(settingJsonWrap));
            }
        } else {
            swal("请选择条件", "", "warning");
        }
    });

    return filterRule;
};
//endregion

//region 获取并加载数据内容

//加载个性化
var loadIndividuation = function (obj) {
    //加载个性化数据
    var indivData = obj;
    if (indivData) {
        $(".filterVipCount").text(indivData.nonCount);
        $("#spanText").val(indivData.nonNodeValue);
        var nRData = JSON.parse(indivData.settingJson);
        var ruleNum = nRData.length;
        for (var k = 0; k < ruleNum; k++) {
            var settingJsonCon = createRule();

            $(settingJsonCon).attr("id", nRData[k].id);
            var conBox = $(settingJsonCon).find(".conditionWrap");
            conBox.empty();
            $(settingJsonCon).find(".matchVipCount").text(nRData[k].matchVipCount);

            $(settingJsonCon).find(".indivTxt").find(".txtImg").val(nRData[k].con);

            //加载不同类型条件体
            individuationCondition.loadCondition(nRData[k], conBox);

            //绑定删除条件
            var conditionBox = $(settingJsonCon).find(".conditionWrap");
            conditionBox.find(".delConditon").each(function () {
                var that = $(this);
                that.off().on("click", function () {
                    that.parent().remove();
                    var delCon = conditionBox.find(".delConditon");
                    if (delCon.length == 1) {
                        delCon.hide();
                    } else {
                        delCon.show();
                    }
                });
            });

            if (conditionBox.find(".delConditon").length == 1) {
                $(".delConditon", conditionBox).hide();
            }
        }
    }
};
//endregion

//region 更新数据

//更新setting接口
var update = function (data, settingSpan) {
    PERSONALIZE.updateIndividuationSetting(data, function () {
        var updateData = new FormData();
        updateData.append("sms", $(settingSpan).parents("form").find("[contenteditable]").html());
        updateData.append("key", $(settingSpan).parents("form").find('[name="smsState"]').val());
        PERSONALIZE.updateSmsTemplate(updateData);
    });
};

//更新数据
var updateSetting = function (individuationData, settingSpan) {
    var id;
    if (settingSpan) {
        id = settingSpan.getAttribute("data-nav");
    }
    if (id) {
        var formData = new FormData();
        formData.append("settingType", individuationData.settingType);
        formData.append("settingJson", JSON.stringify(individuationData.settingJson));
        formData.append("nonCount", individuationData.nonCount);
        formData.append("key", id);
        formData.append("groupKey", $("#vipGroup").val());

        //更新接口
        update(formData, settingSpan);
    }
};
//endregion

//设置spanId
var setSpanId = function (msg, settingSpan) {
    settingSpan.setAttribute("data-nav", msg);
};

//region 添加数据

//添加数据
var addPort = function (data, settingSpan) {
    PERSONALIZE.addIndividuationSetting(data, function () {
        setSpanId(this.data, settingSpan);
        var updateData = new FormData();
        updateData.append("sms", $(settingSpan).parents("form").find("[contenteditable]").html());
        updateData.append("key", $(settingSpan).parents("form").find('[name="smsState"]').val());

        PERSONALIZE.updateSmsTemplate(updateData);
    });
};

//添加数据
var addSettings = function (individuationData, settingSpan) {
    if (settingSpan) {
        var formData = new FormData();
        formData.append("templateKey", $(settingSpan).parents("form").find('[name="smsState"]').val());
        formData.append("templateType", "email");
        formData.append("settingType", individuationData.settingType);
        formData.append("settingJson", JSON.stringify(individuationData.settingJson));
        formData.append("nonCount", individuationData.nonCount);
        formData.append("nonNodeValue", individuationData.nonNodeValue);
        //添加
        addPort(formData, settingSpan);
    }
};
//endregion

//取消
$("#smsCancel,#smsClose").click(function () {
    $("#modal_" + _mark).show();
    $smsPersonalityModal.hide();
});

//确定
$("#smsConfirm").click(function () {
    judgePort();
    $("#modal_" + _mark).show();
    $smsPersonalityModal.hide();
});

//保存策略
$("#saveStrategy").on("click", function () {
    new FormModal({
        "id": "saveStrategy",
        "title": TxtContent.strategyCon,
        "elements": [
            {
                "require": true,
                "labelName": TxtContent.strategyName,
                "type": "text",
                "name": "individuationTacticsName"
            }
        ],
        "submitBindFunc": function () {
            var tacticsData = XREWIN.FormData({
                "templateType": "email",
                "tacticsType": "string",
                "nonNodeValue": createIndividuationData().nonNodeValue,
                "tacticsJson": JSON.stringify(createIndividuationData().settingJson)
            }, "form_saveStrategy");
            PERSONALIZE.addIndividuationTactics(tacticsData);
        },
        "clear": true,
        "submitBtn": TxtContent.confirm,
        "cancelBtn": TxtContent.close
    }).show();
});






 angular.module("sms", [])
            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('{[{');
                $interpolateProvider.endSymbol('}]}');
            })
            .controller("smsPer", function ($scope) {
                $scope.confirm = TxtContent.confirm;
                $scope.close = TxtContent.close;
                $scope.refresh = TxtContent.refresh;
                $scope.personalitySms = TxtContent.personalitySms;
                $scope.saveStrategy = TxtContent.saveStrategy;
                $scope.import = TxtContent.import;
                $scope.smsTemplate = TxtContent.smsTemplate;
            });


(function () {

    //执行弹窗
    CKEDITOR.dialog.add('individuationDialog', function (editor) {

        //region 创建弹窗内容
        var element;
        //创建id
        var divId = "box" + editor.element.getId();

        //获取浏览器groupKey
        var urlGroupKey;

        //获取groupKey
        var getGroupKey = function () {
            return $("#vipGroup").val();
        };

        //获取个性化数据
        var createIndividuationData = function () {
            var nonJumpHrefData;
            var individuationData = {};
            var personalityVal = $("#spanText").val();
            if ($(".extendPersonality").is(":visible")) {
                nonJumpHrefData = {};
                if (element.getName() == "img") {
                    nonJumpHrefData.src = personalityVal;
                } else {
                    nonJumpHrefData.text = personalityVal;
                }
                nonJumpHrefData.href = $(".nonJumpHref").val();
            } else {
                nonJumpHrefData = personalityVal;
            }

            individuationData.nonNodeValue = JSON.stringify(nonJumpHrefData);
            individuationData.settingType = element.getName() == "img" ? "img" : "string";
            individuationData.groupKey = getGroupKey();
            individuationData.nonCount = $(".filterVipCount").text() || 0;
            //新规则数据
            individuationData.settingJson = [];
            var $set = $(".settingJson");
            for (var i = 0; i < $set.length; i++) {
                var rData = {};
                var $box = $($set[i]);
                rData.matchVipCount = $box.find(".matchCount").text();
                if (individuationData.settingType == "img") {
                    var $url = $box.find(".indivUrl");
                    rData.con = $url.find(".txtImg").val();
                    rData.href = $url.find(".jumpHref").val();
                } else {
                    var $txt = $box.find(".indivTxt");
                    rData.con = $txt.find(".txtImg").val();
                    rData.href = $txt.find(".jumpHref").val();
                }

                rData.condition = getConditionCon($box);
                rData.id = $box.attr('id');
                individuationData.settingJson.push(rData);
            }
            return individuationData;
        };

        //判断调用添加setting接口还是更新setting接口
        var judgePort = function () {
            var parentNode;
            if (_settingSpan) {
                parentNode = _settingSpan;
                if (parentNode.getAttribute("data-nav")) {
                    //更新数据
                    updateSetting(createIndividuationData(), parentNode);
                } else {
                    //添加数据
                    addSettings(createIndividuationData(), parentNode);
                }
            }
        };

        //添加a标签
        var addATag = function () {
            if (_settingSpan) {
                var innerHtml = _settingSpan.getHtml();
                var begin = '<a href="#" class="editorImg" target="_blank">';
                if (innerHtml.indexOf(begin) == -1) {
                    _settingSpan.setHtml(begin + innerHtml + '</a>');
                }
            }
        };

        //删除a标签
        var delATag = function () {
            if (_settingSpan) {
                var innerHtml = _settingSpan.getHtml();
                var begin = '<a href="#" class="editorImg" target="_blank">';
                _settingSpan.setHtml(innerHtml.replace(begin, '').replace('</a>', ''));
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
            var txt = $("<div class='indivTxt'></div>").append("<label style='display: inline-block;width: 50px;text-align: center;'>" + TxtContent.txt + "</label>" +
                "<input type='text' class='txtImg' style='margin-left: 10px;width: 75%;'>" +
                "<div class='extendPersonality' style='margin-top: 10px;'><label style='display: inline-block;width: 50px;text-align: center;'>" + TxtContent.ckeitor.skipHref + "</label>" +
                "<input type='text' class='jumpHref' style='margin-left: 10px;width: 75%;'></div>");
            var link = $("<div class='indivUrl'></div>").append(
                "<div class='linkBox'>" +
                "<label style='width: 80px;text-align: right;display:inline-block;'>" + TxtContent.ckeitor.href + "：</label>" +
                "<input type='text' class='txtImg' style='width: 71%;'>" +
                "</div>" +
                "<label style='width: 80px;text-align: right;display:inline-block;position: relative;top: -33px;'>" + TxtContent.ckeitor.img + "：</label><div class='imgBox'>" +
                "<img class='previewImg'/>" +
                "</div>" +
                "<div class='extendPersonality' style='margin-top: 10px;'><label style='width: 80px;text-align: right;display:inline-block;'>" + TxtContent.ckeitor.skipHref + "：</label><input type='text' class='jumpHref' style='width: 71%'></div>"
            );
            return $(inCon).append(txt, link);
        };

        //创建筛选结果盒子
        var createFilter = function () {
            var $wrap;
            var titConditon = "<p style='border-top: none;position: relative;'>" + TxtContent.ckeitor.ruleCondition + "：" +
                "<a href='#' class='addConditon'>" +
                "<span class='glyphicon glyphicon-plus'>" + TxtContent.ckeitor.add + "</span>" +
                "</a>" +
                "<span class='saveCondition'>" + TxtContent.ckeitor.save + "</span>" +
                "</p>";
            var condition = createConditon();
            $wrap = $("<div class='conditionWrap'></div>");
            var conditionBox = $wrap.append(condition);
            var titVip = "<p>" + TxtContent.ckeitor.des + "：<span class='matchCount' style='margin-right: 5px'>" +
                "<span class='matchVipCount'>0</span></span>" +
                "</p>";
            var titCon = "<p>" + TxtContent.ckeitor.content + "：</p>";
            var indiv = createIndiv();
            var delRule = "<a href='javascript:void(0);' class='DelRule'>" + TxtContent.del + "</a>";
            return $("<div class='settingJson'></div>").append(titConditon, conditionBox, titVip, titCon, indiv, delRule);
        };

        //创建弹窗
        var createEle = function () {

            //弹窗盒子
            var Box = document.createElement("div");
            Box.setAttribute("id", divId);
            Box.className = "filterBox";

            //分组盒子
            var groupCon = "<lable>" + TxtContent.ckeitor.group + "：</lable>" +
                "<select name='smartgroupKey' id='vipGroup' style='display: block;padding: 6px 12px;" +
                "width: 100%;margin-top: 5px;height: 30px;'>" +
                "<option value='' count=''>所有会员</option>" +
                "</select>";
            var groupBox = $("<div class='groupKey'></div><hr class='one'/>").append(groupCon);

            //不符合条件的vip
            var filterVip = "<p id='spanCon'>" + TxtContent.ckeitor.defCon + "：<input id='spanText'></p>" +
                "<p id='filterVip'>" + TxtContent.ckeitor.nonRuleCount + "：" +
                "<span class='filterVipCount' style='margin-right: 5px;'></span>" +
                "<a id='extendHref' href='javascript:void(0);' style='color:#23C6C8;margin-left: 20px;display: none;'>" + TxtContent.ckeitor.extendHref + "</a>" +
                "</p>" +
                '<div class="extendPersonality" style="margin-top: 10px;"><label style="margin-left: 20px;font-size: 14px;">' + TxtContent.ckeitor.defSkipHref + '：</label>' +
                '<input type="text" class="nonJumpHref" style="width: 80%"></div>' +
                "<a id='addsettingJson'>" + TxtContent.ckeitor.addRule + "</a>" +
                '<hr class="one">';

            //创建筛选结果盒子
            var settingJsonBox = createFilter();
            var settingJsonWrap = $("<div class='ruleWrap'></div>").append(settingJsonBox);
            settingJsonWrap.css({"overflow": "auto", "height": "500px"});

            //把内容盒子放到弹窗盒子里
            $(Box).append(groupBox, filterVip, settingJsonWrap);
            return Box.outerHTML;
        };

        //删除父元素
        var removeParentEle = function (obj) {
            obj.parent().remove();
        };

        //创建新规则
        var createRule = function () {
            var filterRule = createFilter();
            //预览count
            var settingJsonWrap = $(filterRule).appendTo($(".ruleWrap"));
            var cWrap = settingJsonWrap.find(".conditionWrap");
            if (element) {
                var $iCon = settingJsonWrap.find(".indivCon");
                if (element.getName() == "img") {
                    $iCon.find(".indivTxt").hide();
                    $iCon.find(".indivUrl").show();
                    $iCon.find(".indivUrl").find(".txtImg").bind("change", function () {
                        var urlVal = $iCon.find(".indivUrl").find(".txtImg").val();
                        $iCon.find(".previewImg").attr("src", urlVal);
                    });
                } else {
                    $iCon.find(".indivUrl").hide();
                    $iCon.find(".indivTxt").show();
                }
            }

            //删除条件
            $(".delConditon", settingJsonWrap).unbind().bind("click", function () {
                removeParentEle($(this));

                var delCon = $(".delConditon", settingJsonWrap);
                if (delCon.length == 1) {
                    delCon.hide();
                }
            });

            //添加条件
            settingJsonWrap.find(".addConditon").unbind().bind("click", function () {

                var conWrap = $(createConditon()).appendTo(cWrap);
                var $delBut = conWrap.find(".delConditon");

                //联动添加options
                appendOption();

                //删除条件
                $delBut.unbind().bind("click", function () {
                    removeParentEle($(this));
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
                var key = settingJsonWrap.attr("id");
                if (key) {
                    PERSONALIZE.delIndividuationSettingNode({"id": key}, function () {
                        removeParentEle(that);
                        //判断调用添加接口还是更新接口
                        judgePort();
                    });
                } else {
                    removeParentEle(that);
                }
            });

            //保存条件
            settingJsonWrap.find(".saveCondition").off().on("click", function () {

                //获取nodeValue
                var getNodeValue = function () {
                    var nodeValue = {};
                    if (element.getName() == "img") {
                        nodeValue['src'] = settingJsonWrap.find(".indivUrl").find(".txtImg").val();
                        nodeValue['href'] = settingJsonWrap.find(".indivUrl").find(".jumpHref").val();
                    } else {
                        nodeValue["text"] = settingJsonWrap.find(".indivTxt").find(".txtImg").val();
                        nodeValue["href"] = settingJsonWrap.find(".indivTxt").find(".jumpHref").val();
                    }
                    if (nodeValue["href"]) {
                        if (!localStorage["addLink"]) {
                            localStorage["addLink"] = nodeValue["href"];
                        }
                        addATag();
                    } else {
                        delATag();
                    }
                    return JSON.stringify(nodeValue);
                };

                if ($(".filterType", settingJsonWrap).val() && $(".vipType", settingJsonWrap).val()) {
                    //规则的id
                    var ruleBoxId = settingJsonWrap.attr("id");
                    if (ruleBoxId) {
                        //调用更新接口
                        var formData = XREWIN.FormData({
                            "key": ruleBoxId,
                            "filterData": getConditionCon(settingJsonWrap),
                            "nodeValue": getNodeValue()
                        });

                        PERSONALIZE.updateIndividuationSettingNode(formData, function () {
                            settingJsonWrap.find(".matchCount").text(this.data.count);
                            //判断调用添加接口还是更新接口
                            judgePort();
                        });
                    } else {
                        //调用添加条件
                        var formData = XREWIN.FormData({
                            "filterData": getConditionCon(settingJsonWrap),
                            "individuationSettingKey": _settingSpan.getAttribute('data-nav'),
                            "nodeValue": getNodeValue()
                        });

                        PERSONALIZE.addIndividuationSettingNode(formData, function () {
                            var msg = this.data;
                            if (msg.count) {
                                settingJsonWrap.find(".matchCount").text(msg.count);
                            }
                            settingJsonWrap.attr("id", msg.key);
                            //判断调用添加接口还是更新接口
                            judgePort();
                        });
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
                var nonNodeVal;
                var hasJump = false;
                var isImg = (indivData["settingType"] == "img");
                $(".filterVipCount").text(indivData.nonCount);
                var nonNodeValData = JSON.parse(indivData['nonNodeValue']);
                if (typeof  nonNodeValData == "string") {
                    nonNodeVal = nonNodeValData;
                } else {
                    hasJump = true;
                    var personalityJson = nonNodeValData;
                    if (isImg) {
                        nonNodeVal = personalityJson.src;
                    } else {
                        nonNodeVal = personalityJson.text;
                    }
                    $(".nonJumpHref").val(personalityJson["href"]);
                    $(".extendPersonality").show();
                    addATag();
                }
                var personalityContent = $("#spanText").val(nonNodeVal);
                if (isImg) {
                    $("#addsettingJson").after('<div style="text-align: center;margin-top: 8px;color: #ed5565;">"+TxtContent.ckeitor.condition+" </div>');
                    personalityContent.after('<button id="checkImg" data-container="body" ' +
                        'data-toggle="popover" data-placement="bottom" ' +
                        'data-content="<img src=' + nonNodeVal + '>" style="margin-left:5px;' +
                        'color: #23C6C8;">"+TxtContent.check+"</button>');
                }

                var nRData = JSON.parse(indivData.settingJson);
                for (var k = 0; k < nRData.length; k++) {
                    var settingJsonCon = $(createRule());
                    var jumpHref = null;
                    settingJsonCon.attr("id", nRData[k].id);
                    var conBox = settingJsonCon.find(".conditionWrap");
                    conBox.empty();
                    settingJsonCon.find(".matchVipCount").text(nRData[k].matchVipCount);
                    if (isImg) {
                        var $url = settingJsonCon.find(".indivUrl");
                        $url.find(".previewImg").attr("src", nRData[k].con);
                        $url.find(".txtImg").val(nRData[k].con);
                        jumpHref = $url.find(".jumpHref");
                    } else {
                        var $txt = settingJsonCon.find(".indivTxt");
                        $txt.find(".txtImg").val(nRData[k].con);
                        jumpHref = $txt.find(".jumpHref");
                    }
                    if (hasJump) {
                        jumpHref.val(nRData[k].href);
                    }

                    //加载不同类型条件体
                    individuationCondition.loadCondition(nRData[k], conBox);
                    //绑定删除条件
                    var conditionBox = settingJsonCon.find(".conditionWrap");
                    conditionBox.find(".delConditon").each(function () {
                        var that = $(this);
                        that.on("click", function () {
                            removeParentEle(that);
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

                var $checkImg = $("#checkImg");
                $checkImg.popover({html: true, trigger: 'click'});
                $checkImg.on("show.bs.popover", function () {
                    var that = $(this);
                    that.data("bs.popover").tip().css({"position": "absolute", "z-index": 99999});
                    setTimeout(function () {
                        that.click();
                    }, 2000)
                });

                if (hasJump) {
                    $(".extendPersonality").show();
                }
                else {
                    $(".extendPersonality").hide();
                }
            }
        };
        //endregion

        //region 更新数据

        //更新数据
        var updateSetting = function (individuationData, settingSpan) {
            var id = settingSpan.getAttribute("data-nav");
            if (id) {
                var formData = XREWIN.FormData({
                    "settingType": individuationData.settingType,
                    "settingJson": JSON.stringify(individuationData.settingJson),
                    "nonCount": individuationData.nonCount,
                    "key": id,
                    "nonNodeValue": individuationData.nonNodeValue,
                    "groupKey": getGroupKey()
                });
                //更新接口
                PERSONALIZE.updateIndividuationSetting(formData);
            }
        };
        //endregion

        //设置spanId
        var setSpanId = function (msg, settingSpan) {
            settingSpan.setAttribute("data-nav", msg);
        };

        //region 添加数据

        //添加
        var addSettings = function (individuationData, settingSpan) {
            var fd = XREWIN.FormData({
                "templateKey": XREWIN.getUrlParam("key"),
                "templateType": "email",
                "settingType": individuationData.settingType,
                "settingJson": JSON.stringify(individuationData.settingJson),
                "nonCount": individuationData.nonCount,
                "nonNodeValue": individuationData.nonNodeValue
            });

            //添加
            PERSONALIZE.addIndividuationSetting(fd, function () {
                setSpanId(this.data, settingSpan);
            });
        };
        //endregion

        var _settingSpan = null;

        return {
            //region 弹窗布局
            title: TxtContent.ckeitor.title,
            resizable: CKEDITOR.DIALOG_RESIZE_BOTH,
            minWidth: 650,
            minHeight: 600,
            //自定义按钮
            buttons: [{
                type: 'button',
                id: 'saveStrategy',
                label: TxtContent.saveStrategy,
                style: 'border-color: #62a60a #62a60a #4d9200;position:absolute;left:-285%;',
                onClick: function () {
                    new FormModal({
                        "id": "saveStrategy",
                        "title": TxtContent.strategyCon,
                        "elements": [{
                            "require": true,
                            "labelName": TxtContent.strategyName,
                            "type": "text",
                            "name": "individuationTacticsName"
                        }],
                        "submitBindFunc": function () {
                            var tacticsData = XREWIN.FormData({
                                "templateType": "email",
                                "tacticsType": element.getName() == "img" ? "img" : "string",
                                "nonNodeValue": createIndividuationData().nonNodeValue,
                                "tacticsJson": JSON.stringify(createIndividuationData().settingJson)
                            }, "form_saveStrategy");
                            PERSONALIZE.addIndividuationTactics(tacticsData);
                        },
                        "clear": true,
                        "submitBtn": TxtContent.confirm,
                        "cancelBtn": TxtContent.close
                    }).show();
                }
            },
                CKEDITOR.dialog.okButton,
                CKEDITOR.dialog.cancelButton,
                {
                    type: 'button',
                    id: 'saveRule',
                    label: TxtContent.refresh,
                    style: 'border-color: #62a60a #62a60a #4d9200;',
                    onClick: function () {
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
                        var refreshNode = function () {
                            for (var i = 0; i < ruleNode.length; i++) {
                                var nodeId = $(ruleNode[i]).attr("id");
                                if (!nodeId) {
                                    return false;
                                }
                            }

                            PERSONALIZE.refresh({
                                "individuationSettingKey": _settingSpan.getAttribute("data-nav"),
                                "groupKey": getGroupKey()
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
                        };
                        //节点保存成功后刷新
                        setTimeout(refreshNode(), 3000);
                    }
                }
            ],
            //内容区域
            contents: [{
                id: 'condition',
                label: '',
                title: '',
                elements: [{
                    type: 'html',
                    html: '<div id=' + divId + '></div>'
                }]
            }],
            //endregion

            //region 窗口显示时事件
            onShow: function () {
                var ele = this.getElement().getDocument().getById(divId);
                ele.setHtml("");
                ele.getParent().setHtml(createEle());
                //删除第一个条件
                $(".settingJson").remove();
                var selection = editor.getSelection();
                var selTxt = selection.getSelectedText();

                element = selection.getStartElement();

                if (!$(element.getParent().$).data("nav") && !$(element.$).data("nav") && !element.hasClass("editorImg")) {
                    //标出编辑内容
                    var tempId = "temp_" + (new Date()).getTime();
                    var creSpan = editor.document.createElement('nav');
                    creSpan.addClass("specific");
                    creSpan.addClass("marker");
                    creSpan.setAttribute("id", tempId);

                    if (selTxt && element) {
                        if (element.getName() == 'td'
                            || element.getName() == 'p'
                            || element.getName() == 'span'
                            || element.getName() == 'strong'
                            || element.getName() == 'h3'
                            || element.getName() == 'li'
                            || element.getName() == 'div') {
                            creSpan.setText(selTxt);
                            var _span = element.getOuterHtml().replace(selTxt, creSpan.getOuterHtml());
                            element.setHtml(_span);
                        }
                        if (element.hasClass("specific")) {
                            creSpan.setText(selTxt);
                            test = element.getParent().getOuterHtml().replace(selTxt, creSpan.getOuterHtml());
                            element.getParent().setHtml(test);
                        }
                        $("#spanText").val(selTxt);
                        $(".nonJumpHref").val($(element.$).attr("href"));
                    }

                    if (element) {
                        if (element.getName() == 'img') {
                            $(".nonJumpHref").val($(element.$).parent("a").attr("href"));
                            if (!element.getParent().hasClass("specific")) {
                                var fTd = element.getParent();
                                element.addClass("editorImg");
                                creSpan.setStyle('display', 'block');
                                var childEle = element.appendTo(creSpan);
                                var test = element.getOuterHtml();
                                var repEle = test.replace(test, childEle.getOuterHtml());
                                //解决点击确定bug
                                $(fTd.$).append(repEle);
                            }
                            var $spanVal = $("#spanText");
                            var srcVal = element.getAttribute("src");

                            $spanVal.val(srcVal).after('<button id="checkImg" data-container="body" ' +
                                'data-toggle="popover" data-placement="bottom" ' +
                                'data-content="<img src=' + srcVal + '>" style="margin-left:5px;' +
                                'color: #23C6C8;">' + TxtContent.check + '</button>');
                            $("#addsettingJson").after('<div style="text-align: center;margin-top: 8px;color: #ed5565;">' + TxtContent.ckeitor.condition + '</div>');

                        } else {
                            if (!selTxt) {
                                selTxt = element.getText();
                                creSpan.setText(selTxt);
                                test = element.getParent().getOuterHtml().replace(selTxt, creSpan.getOuterHtml());
                                element.getParent().setHtml(test);
                            } else if (selTxt && element.getName() == 'a') {
                                creSpan.setText(selTxt);
                                test = element.getParent().getOuterHtml().replace(selTxt, creSpan.getOuterHtml());
                                element.getParent().setHtml(test);
                            }
                        }
                        _settingSpan = editor.document.getById(tempId);
                        if (_settingSpan) {
                            _settingSpan.removeAttribute("id");
                        }

                        judgePort();
                    }
                } else {
                    var span = element;
                    if (element.getName() == "img") {
                        span = span.getParent();
                    }
                    if (span.getName() == "a") {
                        span = span.getParent();
                    }
                    var kId = span.getAttribute("data-nav");
                    _settingSpan = span;

                    if (kId && kId.indexOf('temp_') == -1) {
                        //加载数据
                        var data = PERSONALIZE.getIndividuationSetting({"data": kId});
                        urlGroupKey = data.groupKey;
                        loadIndividuation(data);
                    }
                }

                var $checkImg = $("#checkImg");
                $checkImg.popover({html: true, trigger: 'click'});
                $checkImg.on("show.bs.popover", function () {
                    var that = $(this);
                    that.data("bs.popover").tip().css({"position": "absolute", "z-index": 99999});
                    setTimeout(function () {
                        that.click();
                    }, 2000)
                });

                //扩展链接
                $("#extendHref").on("click", function () {
                    var $extendPersonality = $(".extendPersonality").show();
                    if ($extendPersonality.is(":visible")) {
                        addATag();
                    } else {
                        delATag();
                    }
                }).trigger("click");

                //添加新规则
                $("#addsettingJson").unbind().bind("click", function () {
                    var state = $(".extendPersonality").css("display");
                    var rule = $(createRule());
                    var currentExtend = rule.find(".extendPersonality");
                    if (state == "none") {
                        currentExtend.css("display", "none");
                    } else {
                        currentExtend.css("display", "block");
                    }
                    appendOption();

                    $(".delConditon", rule).hide();
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
                        var count = that.find("option:selected").attr("extend");
                        $(".filterVipCount").text(count == "-1" ? 0 : count);
                    });

                };
                //执行加载会员分组
                if (urlGroupKey || localStorage["group_key"]) {
                    SMARTGROUP.listGroup(function () {
                        var obj = this.data;
                        var member = $("#vipGroup");
                        //添加options
                        XREWIN.addOptions(obj, "key", "name", member, "count");
                        member.find("option").each(function () {
                            var that = $(this);
                            var opVal = that.attr("value");
                            if (opVal == (urlGroupKey || localStorage["group_key"])) {
                                that.attr("selected", "selected");
                                $(".filterVipCount").text(that.attr("extend"));
                            }
                        });
                        urlGroupKey = '';
                    });
                } else {
                    SMARTGROUP.listGroup(function () {
                        addMemberOption(this.data);
                    });
                }

                //endregion
            },
            //endregion
            onOk: function () {
                judgePort();
                //刷新前保存所有节点
                var ruleNode = $(".settingJson");
                ruleNode.each(function () {
                    var that = $(this);
                    var curNodeId = that.attr("id");
                    if (!curNodeId) {
                        that.find(".saveCondition").trigger("click");
                    }
                });
                if (!$(".nonJumpHref").val() && !localStorage["addLink"]) {
                    delATag();
                    localStorage["addLink"] = '';
                }
            }
        };
    });
})();
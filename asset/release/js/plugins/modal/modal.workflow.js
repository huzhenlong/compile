/**
 * Created by zw on 2016/1/6.
 */
(function ($, window, document, undefined) {
    var nodeList = {
        base: {
            type: "base",
            text: TxtContent.workFlow.base.text,
            icon: "fa-diamond",
            active: true,
            nodes: [{
                type: 'begin',
                icon: '\ue66d',
                desc: TxtContent.workFlow.base.text,
                ports: [TxtContent.workFlow.base.ports],
                modal: {
                    "title": TxtContent.workFlow.base.sel,
                    "buttons": [{
                        text: TxtContent.workFlow.base.new,
                        click: function () {
                            var that = this;
                            var addSmartGroupModal = new FormModal({
                                "title": TxtContent.workFlow.base.addGroup,
                                "elements": [
                                    {
                                        "require": true,
                                        "labelName": TxtContent.workFlow.base.name,
                                        "type": "text",
                                        "name": "name"

                                    },
                                    {
                                        "type": "hidden",
                                        "name": "publicFlag",
                                        "checkOptions": [{value: "1", text: "是否公开"}],
                                        "defaultValue": '1'
                                    }
                                ],
                                "submitBindFunc": function (form) {
                                    var fd = new FormData(form[0]);
                                    //添加数据
                                    var group_key = SMARTGROUP.addSmartGroup(fd);
                                    XREWIN.addAtBodyData("smartGroupKey", group_key);
                                    var okFunc = function () {
                                        that.$modal.modal('show');
                                        that.refreshValue("group");
                                        that.setValue("group", XREWIN.getAtBodyData("smartGroupKey"));
                                    };
                                    new SGTableModal({
                                        modalOkFunc: okFunc,
                                        groupKey: XREWIN.getAtBodyData("smartGroupKey"),
                                        btnCancelModalHide: that.$modal
                                    }).show();
                                },
                                "autoDestroy": true,
                                "submitBtn": TxtContent.workFlow.base.add,
                                "cancelBtn": TxtContent.workFlow.base.close
                            });

                            //隐藏原有modal
                            that.$modal.modal('hide');

                            //显示增加智能分组modal
                            addSmartGroupModal.show();
                        }
                    }],
                    "elements": [
                        {
                            "require": true,
                            "type": "select",
                            "name": "group",
                            "labelName": TxtContent.workFlow.select.selGroup,
                            "selectOptions": {
                                "url": SMARTGROUP.getListGroupUrl(),
                                "textName": "name",
                                "valueName": "key",
                                "multiple": true,
                                "templateResult": function (state) {

                                    if (state.element) {
                                        var groupData = $(state.element).data("elementData");
                                        var strKey = groupData.key;
                                        var type = strKey.charAt(strKey.length - 1);
                                        var iconImg, typeTxt;
                                        if (type == "s") {
                                            iconImg = '<i class="icon">&#xe6f6;</i>  ';
                                            typeTxt = TxtContent.workFlow.select.smartGroup;
                                        } else if (type == "f") {
                                            iconImg = '<i class="icon">&#xe6f7;</i>  ';
                                            typeTxt = TxtContent.workFlow.select.importGroup;
                                        }
                                        return $('<span class="select" title="' + typeTxt + '">' + iconImg + groupData.name + '<span style="float: right;">' + groupData.count + '</span></span>');
                                    }
                                    return state.text;
                                }
                            },
                            "display": "block"
                        }

                    ],
                    "valueNames": ["group"],
                    "clear": true
                }
            }, {
                type: 'end',
                icon: '\ue65f',
                desc: TxtContent.workFlow.end,
                ports: [],
                modal: null,
                display: false
            }]
        },
        event: {
            type: "event",
            text: TxtContent.workFlow.event.emit,
            icon: "fa-cogs",
            nodes: [{
                type: 'event-register',
                icon: '\ue619',
                desc: TxtContent.workFlow.event.memberRegister,
                ports: [TxtContent.workFlow.event.memberRegister],
                modal: {
                    "title": TxtContent.workFlow.event.memberRegisterTime,
                    "elements": [
                        {
                            "labelName": TxtContent.workFlow.event.controlTime,
                            "type": "radio-date",
                            "name": "wait",
                            "radioList": [
                                1, 2, 3, 4
                            ],
                            "prompt": TxtContent.workFlow.event.prompt
                        }
                    ],
                    "valueNames": ["wait"],
                    "clear": true
                }
            }, {
                type: 'event-trade',
                icon: '\ue6a4',
                desc: TxtContent.workFlow.trade.tradeState,
                ports: [TxtContent.workFlow.trade.emit],
                modal: {
                    "title": TxtContent.workFlow.trade.tradeState,
                    "elements": [
                        {
                            "require": true,
                            "labelName": TxtContent.workFlow.trade.selTradeState,
                            "type": "select",
                            "name": "event",
                            "selectOptions": [{
                                text: TxtContent.workFlow.trade.orders,
                                value: "TRADE_ORDER"
                            }, {text: TxtContent.workFlow.trade.pay, value: "TRADE_PAY"}]
                        },
                        {
                            "labelName": TxtContent.workFlow.trade.waitOverTime,
                            "type": "radio-date",
                            "name": "wait",
                            "radioList": [
                                1, 2, 3
                            ],
                            "prompt": TxtContent.workFlow.trade.prompt
                        }
                    ],
                    "valueNames": ["template", "event", "wait"],
                    "clear": true
                }
            }, {
                type: 'event-email',
                icon: '\ue66a',
                desc: TxtContent.workFlow.email.response,
                ports: [TxtContent.workFlow.email.emit],
                modal: {
                    "title": TxtContent.workFlow.email.responseEvent,
                    "elements": [
                        {
                            "require": true,
                            "labelName": TxtContent.workFlow.email.selEmail,
                            "type": "select",
                            "name": "template",
                            "selectOptions": {
                                "url": PERSONALIZE.getListMailTemplateUrl(),
                                "textName": "templateName",
                                "valueName": "key"
                            }
                        },
                        {
                            "require": true,
                            "labelName": TxtContent.workFlow.email.selEvent,
                            "type": "select",
                            "name": "event",
                            "selectOptions": [{text: TxtContent.workFlow.email.open, value: "OPENED_EMAIL"}, {
                                text: TxtContent.workFlow.email.href,
                                value: "CLICKED_LINK"
                            }]
                        },
                        {
                            "labelName": TxtContent.workFlow.email.waitTime,
                            "type": "radio-date",
                            "name": "wait",
                            "radioList": [
                                1, 2, 3
                            ],
                            "prompt": TxtContent.workFlow.email.prompt
                        }
                    ],
                    "valueNames": ["template", "event", "wait"],
                    "clear": true
                }
            }, {
                type: 'event-level',
                icon: '\ue6ed',
                desc: TxtContent.workFlow.level.res,
                ports: [TxtContent.workFlow.level.emit],
                modal: {
                    "title": TxtContent.workFlow.level.resTime,
                    "elements": [
                        {
                            "labelName": TxtContent.workFlow.level.sysTime,
                            "type": "radio-date",
                            "name": "wait",
                            "radioList": [
                                1, 2, 3
                            ],
                            "prompt": TxtContent.workFlow.level.prompt
                        }
                    ],
                    "valueNames": ["wait"],
                    "clear": true
                }
            }]
        },
        marketing: {
            type: "marketing",
            text: TxtContent.workFlow.marketing.text,
            icon: "fa-shopping-cart",
            nodes: [{
                type: 'marketing-sms',
                icon: '\ue6f3',
                desc: TxtContent.workFlow.marketing.desc,
                ports: [TxtContent.workFlow.marketing.ports],
                modal: {
                    "title": TxtContent.workFlow.marketing.desc,
                    "elements": [
                        {
                            "require": true,
                            "labelName": TxtContent.workFlow.marketing.selTem,
                            "type": "select",
                            "name": "template",
                            "selectOptions": {
                                "url": PERSONALIZE.getListSmsTemplateUrl(),
                                "textName": "templateName",
                                "valueName": "key"
                            },
                            "change": function (modal) {
                                var tpKey = $(this).val();
                                if (tpKey) {
                                    var obj = PERSONALIZE.getByIdSmsTemplate(tpKey);
                                    modal.setValue("subject", obj.subject);
                                }
                            }
                        },
                        {
                            "require": true,
                            "type": "text",
                            "name": "subject",
                            "labelName": TxtContent.workFlow.marketing.smsTitle
                        },
                        {
                            "require": true,
                            "labelName": TxtContent.workFlow.marketing.sendAccount,
                            "type": "select",
                            "name": "customer",
                            "selectOptions": {
                                "url": PLAT.getListCustomerUrl(),
                                "textName": "customerName",
                                "valueName": "key"
                            }
                        },
                        {
                            "labelName": TxtContent.workFlow.marketing.overTime,
                            "type": "radio-date",
                            "name": "wait",
                            "radioList": [
                                1, 2, 3
                            ],
                            "defaultValue": [1, "5", "0"]
                        }
                    ],
                    "valueNames": ["template", "subject", "senderChinese", "sender", "customer", "wait"],
                    "clear": true
                }
            }, {
                type: 'marketing-mail',
                icon: '\ue61a',
                desc: TxtContent.workFlow.marketingMail.sendEmail,
                ports: [TxtContent.workFlow.marketingMail.sendEmail],
                modal: {
                    "title": TxtContent.workFlow.marketingMail.sendEmail,
                    "elements": [
                        {
                            "require": true,
                            "labelName": TxtContent.workFlow.marketingMail.selTem,
                            "type": "select",
                            "name": "template",
                            "selectOptions": {
                                "url": PERSONALIZE.getListMailTemplateUrl(),
                                "textName": "templateName",
                                "valueName": "key"
                            },
                            "change": function (modal) {
                                var tpKey = $(this).val();
                                if (tpKey) {
                                    var obj = PERSONALIZE.getByIdMailTemplate(tpKey);
                                    modal.setValue("subject", obj.subject);
                                    modal.setValue("sender", obj.sender);
                                    modal.setValue("senderChinese", obj.senderChinese);
                                }
                            }
                        },
                        {
                            "require": true,
                            "type": "text",
                            "name": "subject",
                            "labelName": TxtContent.workFlow.marketingMail.emailTitle
                        },
                        {
                            "require": true,
                            "type": "text",
                            "name": "senderChinese",
                            "labelName": TxtContent.workFlow.marketingMail.sender
                        },
                        {
                            "require": true,
                            "type": "text",
                            "name": "sender",
                            "labelName": TxtContent.workFlow.marketingMail.sendAddress
                        },
                        {
                            "require": true,
                            "labelName": TxtContent.workFlow.marketingMail.sendAccount,
                            "type": "select",
                            "name": "customer",
                            "selectOptions": {
                                "url": PLAT.getListCustomerUrl(),
                                "textName": "customerName",
                                "valueName": "key"
                            }
                        },
                        {
                            "labelName": TxtContent.workFlow.marketingMail.overTime,
                            "type": "radio-date",
                            "name": "wait",
                            "radioList": [
                                1, 2, 3
                            ],
                            "defaultValue": [1, "5", "0"]
                        }
                    ],
                    "valueNames": ["template", "subject", "senderChinese", "sender", "customer", "wait"],
                    "clear": true
                }
            }, {
                type: 'marketing-wechat',
                icon: '\ue6f9',
                desc: TxtContent.workFlow.wechat.desc,
                ports: ["微信"],
                modal: {
                    "title": TxtContent.workFlow.wechat.info,
                    "elements": [],
                    "clear": true
                }
            }, {
                type: 'marketing-app',
                icon: '\ue6f8',
                desc: TxtContent.workFlow.wechat.mobile,
                ports: [TxtContent.workFlow.wechat.mobile],
                modal: {
                    "title": TxtContent.workFlow.wechat.mobileInfo,
                    "elements": [],
                    "clear": true
                }
            }]
        },
        wait: {
            type: "wait",
            text: TxtContent.workFlow.wait.text,
            icon: "fa-clock-o",
            nodes: [{
                type: 'wait-open',
                desc: TxtContent.workFlow.wait.emailOpen,
                icon: '\ue620',
                ports: ["打开", "时间到"],
                modal: {
                    "title": TxtContent.workFlow.wait.waitOpen,
                    "elements": [
                        {
                            "require": true,
                            "labelName": TxtContent.workFlow.wait.selEmail,
                            "type": "select",
                            "name": "template",
                            "selectOptions": {
                                "url": PERSONALIZE.getListMailTemplateUrl(),
                                "textName": "templateName",
                                "valueName": "key"
                            }
                        },
                        {
                            "labelName": TxtContent.workFlow.wait.overTime,
                            "type": "radio-date",
                            "name": "wait",
                            "radioList": [
                                1, 2, 3
                            ],
                            "prompt": TxtContent.workFlow.wait.prompt
                        }
                    ],
                    "valueNames": ["template", "wait"],
                    "clear": true
                }
            }, {
                type: 'wait-click',
                desc: TxtContent.workFlow.waitClick.desc,
                icon: '\ue65e',
                ports: [TxtContent.workFlow.waitClick.click, TxtContent.workFlow.waitClick.time],
                modal: {
                    "title": TxtContent.workFlow.waitClick.desc,
                    "elements": [
                        {
                            "require": true,
                            "labelName": TxtContent.workFlow.waitClick.selEmail,
                            "type": "select",
                            "name": "template",
                            "selectOptions": {
                                "url": PERSONALIZE.getListMailTemplateUrl(),
                                "textName": "templateName",
                                "valueName": "key"
                            }
                        },
                        {
                            "labelName": TxtContent.workFlow.waitClick.overTime,
                            "type": "radio-date",
                            "name": "wait",
                            "radioList": [
                                1, 2, 3
                            ],
                            "prompt": TxtContent.workFlow.waitClick.prompt
                        }
                    ],
                    "valueNames": ["template", "wait"],
                    "clear": true
                }
            }, {
                type: 'wait-sms-click',
                desc: TxtContent.workFlow.waitSmsClick.desc,
                icon: '\ue695',
                ports: ["点击", "时间到"],
                modal: {
                    "title": TxtContent.workFlow.waitSmsClick.emailClick,
                    "elements": [
                        {
                            "require": true,
                            "labelName": TxtContent.workFlow.waitSmsClick.waitSms,
                            "type": "select",
                            "name": "template",
                            "selectOptions": {
                                "url": PERSONALIZE.getListSmsTemplateUrl(),
                                "textName": "templateName",
                                "valueName": "key"
                            }
                        },
                        {
                            "labelName": TxtContent.workFlow.waitSmsClick.overTime,
                            "type": "radio-date",
                            "name": "wait",
                            "radioList": [
                                1, 2, 3
                            ],
                            "prompt": TxtContent.workFlow.waitSmsClick.prompt
                        }
                    ],
                    "valueNames": ["template", "wait"],
                    "clear": true
                }
            }, {
                type: 'wait-take',
                desc: TxtContent.workFlow.waitTake.take,
                icon: '\ue656',
                ports: [TxtContent.workFlow.waitTake.take, TxtContent.workFlow.waitTake.time],
                modal: {
                    "title": TxtContent.workFlow.waitTake.take,
                    "elements": [
                        {
                            "labelName": TxtContent.workFlow.waitTake.overTime,
                            "type": "radio-date",
                            "name": "wait",
                            "radioList": [
                                1, 2, 3
                            ],
                            "prompt": TxtContent.workFlow.waitTake.prompt
                        }
                    ],
                    "valueNames": ["wait"],
                    "clear": true
                }
            }, {
                type: 'wait-order',
                desc: TxtContent.workFlow.waitOrder.order,
                icon: '\ue641',
                ports: [TxtContent.workFlow.waitOrder.order, TxtContent.workFlow.waitOrder.time],
                modal: {
                    "title": TxtContent.workFlow.waitOrder.order,
                    "elements": [
                        {
                            "labelName": TxtContent.workFlow.waitOrder.overTime,
                            "type": "radio-date",
                            "name": "wait",
                            "radioList": [
                                1, 2, 3
                            ],
                            "prompt": TxtContent.workFlow.waitOrder
                        }
                    ],
                    "valueNames": ["wait"],
                    "clear": true
                }
            }, {
                type: 'wait-pay',
                desc: TxtContent.workFlow.waitPay.pay,
                icon: '\ue603',
                ports: [TxtContent.workFlow.waitPay.pay, TxtContent.workFlow.waitPay.time],
                modal: {
                    "title": TxtContent.workFlow.waitPay.setOverTime,
                    "elements": [
                        {
                            "labelName": TxtContent.workFlow.waitPay.overTime,
                            "type": "radio-date",
                            "name": "wait",
                            "radioList": [
                                1, 2, 3
                            ]
                        }
                    ],
                    "valueNames": ["wait"],
                    "clear": true
                }
            }, {
                type: 'wait-evaluate',
                desc: TxtContent.workFlow.evaluate.eva,
                icon: '\ue696',
                ports: [TxtContent.workFlow.evaluate.eva, TxtContent.workFlow.evaluate.time],
                modal: {
                    "title": TxtContent.workFlow.evaluate.waitEva,
                    "elements": [
                        {
                            "labelName": TxtContent.workFlow.evaluate.setOverTime,
                            "type": "radio-date",
                            "name": "wait",
                            "radioList": [
                                1, 2, 3
                            ],
                            "prompt": TxtContent.workFlow.evaluate.prompt
                        }
                    ],
                    "valueNames": ["wait"],
                    "clear": true
                }
            }, {
                type: 'wait-cus',
                desc: TxtContent.workFlow.waitCus.cus,
                icon: '\ue690',
                ports: [TxtContent.workFlow.waitCus.emit, TxtContent.workFlow.waitCus.time],
                modal: {
                    "id": "modal_date",
                    "title": TxtContent.workFlow.waitCus.eventWait,
                    "elements": [
                        {
                            "labelName": TxtContent.workFlow.waitCus.setSysOverTime,
                            "type": "radio-date",
                            "name": "wait",
                            "radioList": [
                                1, 2, 3
                            ],
                            "prompt": ""
                        },
                        {
                            "require": true,
                            "type": "checkbox",
                            "name": "action",
                            "checkOptions": [
                                {value: "click", text: TxtContent.workFlow.waitCus.emailClick},
                                {value: "open", text: TxtContent.workFlow.waitCus.emailOpen}
                            ]
                        }
                    ],
                    "valueNames": ["wait", "action"],
                    "clear": true
                }
            }]
        },
        history: {
            type: "history",
            text: TxtContent.workFlow.history.loop,
            icon: "fa-history",
            nodes: []
        },
        advanced: {
            type: "advanced",
            text: TxtContent.workFlow.history.operate,
            icon: "fa-gear",
            nodes: [{
                type: 'advanced-time',
                desc: TxtContent.workFlow.history.setTime,
                icon: '\ue67e',
                ports: [TxtContent.workFlow.history.time],
                modal: {
                    "title": TxtContent.workFlow.history.setTime,
                    "elements": [
                        {
                            "labelName": TxtContent.workFlow.history.setSysTime,
                            "type": "radio-date",
                            "name": "wait",
                            "radioList": [
                                1, 2, 3, 4
                            ],
                            "prompt": TxtContent.workFlow.history.prompt
                        }
                    ],
                    "valueNames": ["wait"],
                    "clear": true
                }
            }, {
                type: 'advanced-level',
                desc: TxtContent.workFlow.advancedLevel.ediMem,
                icon: '\ue68f',
                ports: ["完成"],
                modal: {
                    "title": TxtContent.workFlow.advancedLevel.ediMem,
                    "elements": [
                        {
                            "require": true,
                            "labelName": TxtContent.workFlow.advancedLevel.selEdit,
                            "type": "select",
                            "name": "param",
                            "selectOptions": WorkflowMemberColumns
                        },
                        {
                            "require": true,
                            "labelName": TxtContent.workFlow.advancedLevel.ediCon,
                            "type": "text",
                            "name": "value"
                        }
                    ],
                    "valueNames": ["param", "value"],
                    "clear": true
                }
            }, {
                type: 'advanced-group-in',
                desc: TxtContent.workFlow.groupIn.addGroup,
                icon: '\ue6f2',
                ports: [TxtContent.workFlow.groupIn.finish],
                modal: {
                    "title": TxtContent.workFlow.groupIn.addGroup,
                    "elements": [
                        {
                            "require": true,
                            "labelName": TxtContent.workFlow.groupIn.selGroup,
                            "type": "select",
                            "name": "group",
                            "selectOptions": {
                                "url": SMARTGROUP.getListFixGroupUrl(),
                                "textName": "name",
                                "valueName": "key"
                            }
                        }
                    ],
                    "valueNames": ["group"],
                    "clear": true
                }
            }, {
                type: 'advanced-group-out',
                desc: TxtContent.workFlow.groupOut.out,
                icon: '\ue6f1',
                ports: [TxtContent.workFlow.groupOut.finish],
                modal: {
                    "title": TxtContent.workFlow.groupOut.in,
                    "elements": [
                        {
                            "require": true,
                            "labelName": TxtContent.workFlow.groupOut.selGroup,
                            "type": "select",
                            "name": "group",
                            "selectOptions": {
                                "url": SMARTGROUP.getListFixGroupUrl(),
                                "textName": "name",
                                "valueName": "key"
                            }
                        }
                    ],
                    "valueNames": ["group"],
                    "clear": true
                }
            }, {
                type: 'advanced-ABTest',
                desc: TxtContent.workFlow.ABTest.AB,
                icon: '\ue69f',
                ports: [TxtContent.workFlow.ABTest.A, TxtContent.workFlow.ABTest.B],
                modal: {
                    "title": TxtContent.workFlow.ABTest.ABFlow,
                    "elements": [
                        {
                            "require": true,
                            "type": "text",
                            "name": "rate",
                            "labelName": TxtContent.workFlow.ABTest.scale
                        },
                        {
                            "type": "label",
                            "labelName": TxtContent.workFlow.ABTest.label
                        }
                    ],
                    "valueNames": ["rate"],
                    "clear": true
                }
            }, {
                type: 'advanced-group-flow',
                desc: TxtContent.workFlow.advancedGroupFlow.memberFlow,
                icon: '\ue6b6',
                ports: [],
                selectPorts: "group",
                modal: {
                    "id": "advanced_group_flow",
                    "title": TxtContent.workFlow.advancedGroupFlow.selGroup,
                    "elements": [
                        {
                            "require": true,
                            "type": "checkbox",
                            "name": "group",
                            "labelName": TxtContent.workFlow.advancedGroupFlow.groupName,
                            "checkOptions": {
                                "url": SMARTGROUP.getListGroupUrl(),
                                "textName": "name",
                                "valueName": "key"
                            },
                            "display": "block"
                        }

                    ],
                    "valueNames": ["group"],
                    "clear": true
                }
            }]
        }
    };

    var defaultOptions = {};

    var WorkflowNodeModal = function (opts) {
        var that = this;
        if (!(that instanceof WorkflowNodeModal)) {
            that = new WorkflowNodeModal();
        }
        that.init(opts);
        return that;
    };

    //region 一般方法
    var buildTabNode = function (type, element) {
        var elementId = "tab-" + type + "-" + ( element.id || element.type);
        var temp = [];
        var style = "";
        if (element.color) {
            style = 'style="color: ' + element.color + '"';
        }
        else {
            if (element.display === false) {
                style = 'style="visibility:hidden;overflow: hidden;width :0px; height: 0px;"';
            }
        }
        temp.push('<dl id="' + elementId + '" data-id="' + elementId + '" ' + style + ' class="workflow-node">');
        temp.push('<dt>');
        temp.push('<i class="icon">' + element.icon + '</i>');
        temp.push('</dt><dt><span>');
        temp.push(element.desc + '</span></dt></dl>');
        return temp.join('');
    };

    var buildModal = function (obj) {
        if (!(obj instanceof WorkflowNodeModal)) {
            return '';
        }
        var modalHtml = [];
        var activeClass = "";
        modalHtml.push('<div class="modal fade in" id="workflowNodeModal" tabindex="-1" role="dialog"  aria-hidden="true">');
        modalHtml.push('<div class="modal-dialog">');
        modalHtml.push('<div class="modal-content">');
        modalHtml.push('<div class="modal-header">');
        modalHtml.push('<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>');
        modalHtml.push('<h4 class="modal-title">' + TxtContent.workFlow.clickSel + '</h4>');
        modalHtml.push('</div>');
        modalHtml.push('<div class="modal-body">');
        //body-begin
        modalHtml.push('<div class="tabs-container">');
        modalHtml.push('<ul class="nav nav-tabs">');
        for (var type in nodeList) {
            if (nodeList.hasOwnProperty(type)) {
                activeClass = "";
                type = nodeList[type];
                if (type.active) {
                    activeClass = "active";
                }
                var href = "tab-" + type.type;
                modalHtml.push('<li class="' + activeClass + '" title="' + type.text +
                    '"><a data-toggle="tab" href="#' + href +
                    '" aria-expanded="true"> <i class="fa ' + type.icon + '"></i></a></li>');
            }
        }
        modalHtml.push('</ul>');
        modalHtml.push('<div class="tab-content">');
        for (var node in nodeList) {
            if (nodeList.hasOwnProperty(node)) {
                activeClass = "";
                node = nodeList[node];
                if (node.active) {
                    activeClass = "active";
                }
                var id = "tab-" + node.type;
                modalHtml.push('<div id="' + id + '" class="tab-pane ' + activeClass + '">');
                modalHtml.push('<div class="panel-body">');
                node.nodes.forEach(function (element) {
                    modalHtml.push(buildTabNode(node.type, element));
                    obj.node_dic[id + "-" + element.type] = element;
                });
                modalHtml.push('</div>');
                modalHtml.push('</div>');
                activeClass = ""
            }
        }

        modalHtml.push('</div>');
        modalHtml.push('<div class="form-control"><span id="spanDescNode" style="color:red;"></span></div>');
        modalHtml.push('</div>');
        //body-end
        modalHtml.push('</div>');
        modalHtml.push('<div class="modal-footer">');
        modalHtml.push('<button type="button" class="btn btn-white" data-dismiss="modal">' + TxtContent.workFlow.cancel + '</button>');
        modalHtml.push('</div>');
        modalHtml.push('</div>');
        modalHtml.push('</div>');
        modalHtml.push('</div>');

        return modalHtml.join('');
    };

    var buildThumbnailModal = function () {
        var modalHtml = [];
        modalHtml.push('<div class="modal fade in" id="workflowThumbnailModal" tabindex="-1" role="dialog"  aria-hidden="true">');
        modalHtml.push('<div class="modal-dialog">');
        modalHtml.push('<div class="modal-content">');
        modalHtml.push('<div class="modal-header">');
        modalHtml.push('<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>');
        modalHtml.push('<h4 class="modal-title">' + TxtContent.workFlow.checkImg + '</h4>');
        modalHtml.push('</div>');
        modalHtml.push('<div class="modal-body">');
        //body-begin
        modalHtml.push('<img id="workflowThumbnailImg" src="" style="width: 300px;background-color: white;">');
        //body-end
        modalHtml.push('</div>');
        modalHtml.push('<div class="modal-footer">');
        modalHtml.push('<button type="button" class="btn btn-white" data-dismiss="modal">' + TxtContent.workFlow.close + '</button>');
        modalHtml.push('</div>');
        modalHtml.push('</div>');
        modalHtml.push('</div>');
        modalHtml.push('</div>');

        return modalHtml.join('');
    };

    var onClickNode = function (node, modal) {
        var source = modal.getOption("source");
        var workflow = modal.getOption("workflow");
        var clickFunc = modal.getOption("onClickNode");
        var onClickFunc = function (clickNode) {
            if (clickFunc) {
                clickFunc.call(workflow, clickNode);
            }
        };
        if ($.isArray(source)) {
            var nodes = [];
            source.forEach(function (nodeSource) {
                nodes.push($.extend({}, node, nodeSource));
            });
            onClickFunc(nodes);
        }
        else {
            var clickNode = $.extend({}, node, source);
            onClickFunc(clickNode);
        }
    };

    var onSaveNode = function (name, values, modal) {
        if (modal.getOption("onSaveNode")) {
            modal.getOption("onSaveNode").call(modal.getOption("workflow"), name, values);
        }
    };
    //endregion

    WorkflowNodeModal.prototype.init = function (opts) {
        var that = this;
        var body = $('body');
        $("#workflowNodeModal").remove();
        $("#workflowThumbnailModal").remove();
        that.options = $.extend({}, defaultOptions, opts);
        that.node_dic = {};
        that.$modal = $(buildModal(that)).appendTo(body);
        that.$thumbnailModal = $(buildThumbnailModal(that)).appendTo(body);
        that.refresh();
    };

    WorkflowNodeModal.prototype.setOption = function (key, value) {
        if (!this.options) {
            this.options = {};
        }
        this.options[key] = value;
    };

    WorkflowNodeModal.prototype.getOption = function (key) {
        if (key in this.options) {
            return this.options[key];
        }
        return null;
    };

    WorkflowNodeModal.prototype.show = function (source) {
        this.setOption("source", source);
        this.$modal.modal("show");
    };

    WorkflowNodeModal.prototype.addWorkflowNode = function (source, nodeId) {
        this.setOption("source", source);
        this.$modal.find("#" + nodeId).click();
    };

    WorkflowNodeModal.prototype.generateNodeModal = function (nodeId) {
        var that = this;
        var node = that.getNode(nodeId);
        if (node.modal) {
            if (!(node.modal instanceof FormModal)) {
                if (node.modal.elements) {
                    node.modal.elements.push({
                        "type": "hidden",
                        "name": "layerName"
                    });
                }
                node.modal = new FormModal($.extend({}, node.modal, {
                    submitBindFunc: function () {
                        try {
                            var active = that.getActive(nodeId);
                            active.nodeModal = this;
                            active.nodeModalId = nodeId;
                            active.workValues = this.getValues();
                            if (node.selectPorts) {
                                active.ports = active.workValues[node.selectPorts].split(',');
                            }
                            var parentLayerName = this.getValue("layerName");
                            //判断是否是保存
                            if (parentLayerName) {
                                var type = node.type;
                                if (type && type == "advanced-group-flow") {
                                    var checkArray = [];
                                    var form_node = node.modal.$form;
                                    var workflow = that.getOption("workflow");
                                    form_node.find('[type="checkbox"]:checked').each(function () {
                                        checkArray.push($(this).val());
                                    });
                                    var sortPort = function (a, b) {
                                        return a > b ? 1 : -1
                                    };
                                    checkArray.sort(sortPort);
                                    var portsArray = form_node.find('[type="checkbox"]').map(function () {
                                        return $(this).val();
                                    }).get();
                                    portsArray.unshift(0);

                                    active.workValues.portsIndex = checkArray;
                                    active.workValues.allCheckBox = portsArray;
                                    onSaveNode(parentLayerName, active.workValues, that);
                                    var portsIndex = checkArray;


                                    var a = portsArray.join(";");
                                    for (var i = 0, len = portsIndex.length; i < len; i++) {
                                        var reg = new RegExp("(^|;)" + portsIndex[i] + "(;|$)", "g");
                                        a = a.replace(reg, ";");
                                    }
                                    a = a.replace(/^\;+|\;+$/g, "");
                                    var remain = a.split(";");


                                    for (var k = 0; k < remain.length; k++) {
                                        var layerName = parentLayerName + '_' + remain[k];
                                        workflow.deleteNode(layerName);
                                    }
                                    workflow.loadNodes(workflow.getNodes());
                                }
                                else {
                                    onSaveNode(parentLayerName, active.workValues, that);
                                }
                            }
                            else {
                                onClickNode(active, that);
                            }
                            //}

                        }
                        catch (err) {
                            debugger;
                            console.error(err.message);
                        }

                        return false;
                    }
                }));
            }
            return node.modal;
        }
        else {
            onClickNode(node, that);
            return null;
        }
    };

    WorkflowNodeModal.prototype.showThumbnail = function (canvas) {
        if (canvas) {
            this.$thumbnailModal.find("#workflowThumbnailImg").attr("src", canvas.getCanvasImage());
            this.$thumbnailModal.modal("show");
        }
    };

    WorkflowNodeModal.prototype.hide = function () {
        this.$modal.modal("hide");
    };

    WorkflowNodeModal.prototype.refresh = function () {
        var that = this;
        var nodes = that.$modal.find(".workflow-node");
        var descSpan = that.$modal.find("#spanDescNode");
        nodes.off("click.workflow").on("click.workflow", function () {
            var $node = $(this);
            var nodeId = $node.data('id');
            var modal = that.generateNodeModal(nodeId);
            if (modal) {
                modal.show();
            }
            that.hide();
        });
        nodes.off("mouseover.workflow").on("mouseover.workflow", function () {
            nodes.css("background-color", "");
            var node = that.getNode($(this).data("id"));
            var desc = TxtContent.workFlow.noOut;
            if (node.ports.length > 0) {
                desc = TxtContent.workFlow.selNode + node.ports.length + TxtContent.workFlow.out + "[" + node.ports.join() + "]";
            }
            descSpan.text(desc);
            $(this).css("background-color", "#CEE3F6");
        });
    };

    WorkflowNodeModal.prototype.addNode = function (type, node) {
        var that = this;
        var id = "tab-" + type;
        var panel = this.$modal.find("#" + id + " .panel-body");
        panel.append(buildTabNode(type, node));
        that.node_dic[id + "-" + (node.id || Guid())] = node;
        that.refresh();
    };

    WorkflowNodeModal.prototype.clearHistoryNode = function () {
        var id = "tab-" + workflowNodeType.history;
        var panel = this.$modal.find("#" + id + " .panel-body");
        panel.empty();
    };

    WorkflowNodeModal.prototype.addHistoryNode = function (node) {
        this.addNode(workflowNodeType.history, node);
    };

    WorkflowNodeModal.prototype.getBeginNode = function () {
        return this.getActive("tab-base-begin");
    };

    WorkflowNodeModal.prototype.getEndNode = function () {
        return this.getActive("tab-base-end");
    };

    WorkflowNodeModal.prototype.getNode = function (id) {
        if (id in this.node_dic) {
            return this.node_dic[id];
        }
        return null;
    };

    WorkflowNodeModal.prototype.getActive = function (id) {
        if (id in this.node_dic) {
            var node = this.node_dic[id];
            return {
                type: node.type,
                desc: node.desc,
                ports: node.ports,
                icon: node.icon,
                color: node.color
            }
        }
        return null;
    };

    if (typeof $.WorkflowNodeModal === 'undefined') {
        $.WorkflowNodeModal = WorkflowNodeModal;
        window.WorkflowNodeModal = WorkflowNodeModal;
        document.WorkflowNodeModal = WorkflowNodeModal;
    }
})(jQuery, window, document);
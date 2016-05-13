/**
 * Created by Bigdata02 on 2015/11/19.
 */

function createFigureFilterLevelList(figure, name) {
    var figureParam = figure.figureParam;
    var model = new FormModal({
        "title": name,
        "elements": [
            {
                "require": true,
                "type": "checkbox",
                "name": "filterLevel",
                "checkOptions": [
                    {value: "level1", text: "普通会员"},
                    {value: "level2", text: "银卡会员"},
                    {value: "level3", text: "金卡会员"}
                ],
                defaultValue: figureParam
            }
        ],
        "submitBindFunc": function (fd) {
            figure.figureParam = model.getValue("filterLevel");
            model.destroy();
            return false;
        },
        "clear": true
    });
    return model;
}
function createFigureFilterActiveList(figure, name) {
    var figureParam = figure.figureParam;
    var model = new FormModal({
        "title": name,
        "elements": [
            {
                "require": true,
                "type": "checkbox",
                "name": "active",
                "checkOptions": [
                    {value: "active1", text: "活跃会员"},
                    {value: "active2", text: "沉默会员"},
                    {value: "active3", text: "预流失会员"},
                    {value: "active4", text: "流失会员"}
                ],
                defaultValue: figureParam
            }
        ],
        "submitBindFunc": function (fd) {
            figure.figureParam = model.getValue("active");
            model.destroy();
            return false;
        },
        "clear": true
    });
    return model;
}

function createFigureFilterOldNewList(figure, name) {
    var figureParam = figure.figureParam;
    var model = new FormModal({
        "title": name,
        "elements": [
            {
                "require": true,
                "type": "checkbox",
                "name": "member",
                "checkOptions": [
                    {value: "new", text: "新会员"},
                    {value: "old", text: "老会员"}
                ],
                defaultValue: figureParam
            }
        ],
        "submitBindFunc": function (fd) {
            figure.figureParam = model.getValue("member");
            model.destroy();
            return false;
        },
        "clear": true
    });
    return model;
}
function createFigureFilterSeatList(figure, name) {
    var figureParam = figure.figureParam;
    var params = figureParam.split(",");
    var area = "";
    var oper = "";
    var adress = "";
    if (params != undefined && params.length >= 1) {
        area = params[0];
    }
    if (params != undefined && params.length >= 2) {
        oper = params[1];
    }
    if (params != undefined && params.length >= 3) {
        adress = params[2];
    }
    var model = new FormModal({
        "title": name,
        "elements": [
            {
                "labelName": "在输入框中输入地址中的关键词可以对会员作进一步筛选",
                "type": "label"
            },
            {
                "require": true,
                "labelName": "请选择：",
                "type": "select",
                "name": "area",
                "selectOptions": {
                    "url": SMARTGROUP.getProvincesUrl()
                },
                defaultValue: area
            },
            {
                "require": true,
                "labelName": "地址：",
                "type": "select",
                "name": "oper",
                "selectOptions": [{value: "c", text: "包含"}, {value: "nc", text: "不包含"}],
                defaultValue: oper
            },
            {
                "require": true,
                "type": "text",
                "name": "address",
                defaultValue: adress
            }
        ],
        "submitBindFunc": function (fd) {
            figure.figureParam = model.getValue("area");
            figure.figureParam += ",";
            figure.figureParam += model.getValue("oper");
            figure.figureParam += ",";
            figure.figureParam += model.getValue("address");
            model.destroy();
            return false;
        },
        "clear": false
    });
    return model;
}

function createFigureFlowRateList(figure, name) {
    var figureParam = figure.figureParam;
    var model = new FormModal({
        "title": name,
        "elements": [
            {
                "require": true,
                "type": "text",
                "name": "rate",
                "labelName": "比例:",
                "defaultValue": figureParam
            },
            {
                "require": true,
                "type": "lable",
                "name": "lable1",
                "labelName": "请设置走A分支的概率a%,则走B分支的的概率1-a%"
            }
        ],
        "submitBindFunc": function (fd) {
            figure.figureParam = model.getValue("rate");
            model.destroy();
            return false;
        },
        "clear": true
    });
    return model;

}
function createFigureFlowGroupList(figure, name) {
    var figureParam = figure.figureParam;
    var model = new FormModal({
        "title": name,
        "elements": [
            {
                "require": true,
                "type": "checkbox",
                "name": "flowGroup",
                "labelName": "分组名称:",
                "checkOptions": {
                    "url": SMARTGROUP.getListSmartGroupUrl(),
                    "textName": "name",
                    "valueName": "key"
                },
                "display": "block",
                defaultValue: figureParam
            }

        ],
        "submitBindFunc": function (fd) {
            figure.figureParam = $.trim(model.getValue("flowGroup"));
            var count = 0;
            if (figure.figureParam.length > 0) {
                count = figure.figureParam.split(",").length;
            }
            updateConnectionPoint(figure, count);
            model.destroy();
            return false;
        },
        "clear": true
    });
    return model;
}
function createFigureWaitPayList(figure, name) {
    var figureParam = figure.figureParam;
    var model = new FormModal({
        "id": "modal_date",
        "title": name,
        "elements": [
            {
                "labelName": "超时时间点",
                "type": "radio-date",
                "name": "waitPayDate",
                "radioList": [
                    1, 2, 3
                ],
                "defaultValue": figureParam
            }
        ],
        "submitBindFunc": function (fd) {
            figure.figureParam = model.getValue("waitPayDate");
            model.destroy();
            return false;
        },
        "clear": false
    });
    return model;

}
function createFigureWaitOpenList(figure, name) {
    var figureParam = figure.figureParam;
    var params = figureParam.split(",");
    var selectRadio = "";
    var selectParam1 = "";
    var selectParam2 = "";
    var campaign = "";
    if (params != undefined && params.length >= 1) {
        selectRadio = params[0];
    }
    if (params != undefined && params.length >= 2) {
        selectParam1 = params[1];
    }
    if (params != undefined && params.length >= 3) {
        selectParam2 = params[2];
    }
    if (params != undefined && params.length >= 5) {
        campaign = params[4];
    }
    var model = new FormModal({
        "id": "modal_date",
        "title": name,
        "elements": [
            {
                "require": true,
                "labelName": "请选择需要等待的邮件：",
                "type": "select",
                "name": "campaign",
                "selectOptions": {
                    "url": PLAT.getListCampaignUrl(),
                    "textName": "taskName",
                    "valueName": "key"
                },
                "defaultValue": campaign
            },
            {
                "labelName": "设定系统等待超时时间：",
                "type": "radio-date",
                "name": "waitOpen",
                "radioList": [
                    1, 2, 3
                ],
                "prompt": "提示：如果不设定超时时间，工作流运行时未打开邮件会员将一直停留在该节点",
                "defaultValue": [selectRadio, selectParam1, selectParam2]
            }
        ],
        "submitBindFunc": function (fd) {
            campaign = model.getValue("campaign");
            open = model.getValue("waitOpen");
            figure.figureParam = open + ",," + campaign;
            model.destroy();
            return false;
        },
        "clear": false
    });
    return model;
}
function createFigureWaitClickList(figure, name) {
    var figureParam = figure.figureParam;
    var params = figureParam.split(",");
    var selectRadio = "";
    var selectParam1 = "";
    var selectParam2 = "";
    var campaign = "";
    if (params != undefined && params.length >= 1) {
        selectRadio = params[0];
    }
    if (params != undefined && params.length >= 2) {
        selectParam1 = params[1];
    }
    if (params != undefined && params.length >= 3) {
        selectParam2 = params[2];
    }
    if (params != undefined && params.length >= 5) {
        campaign = params[4];
    }
    var model = new FormModal({
        "id": "modal_date",
        "title": name,
        "elements": [
            {
                "require": true,
                "labelName": "请选择需要等待的邮件：",
                "type": "select",
                "name": "campaign",
                "selectOptions": {
                    "url": PLAT.getListCampaignUrl(),
                    "textName": "taskName",
                    "valueName": "key"
                },
                "defaultValue": campaign
            },
            {
                "labelName": "设定系统等待超时时间：",
                "type": "radio-date",
                "name": "waitClick",
                "radioList": [
                    1, 2, 3
                ],
                "prompt": "提示：如果不设定超时时间，工作流运行时未点击会员将一直停留在该节点",
                "defaultValue": [selectRadio, selectParam1, selectParam2]
            }
        ],
        "submitBindFunc": function (fd) {
            campaign = model.getValue("campaign");
            click = model.getValue("waitClick");
            figure.figureParam = click + ",," + campaign;
            model.destroy();
            return false;
        },
        "clear": false
    });
    return model;
}

function createFigureWaitTimeList(figure, name) {
    var figureParam = figure.figureParam;
    var params = figureParam.split(",");
    var selectRadio = "";
    var selectParam1 = "";
    var selectParam2 = "";
    if (params != undefined && params.length >= 1) {
        selectRadio = params[0];
    }
    if (params != undefined && params.length >= 2) {
        selectParam1 = params[1];
    }
    if (params != undefined && params.length >= 3) {
        selectParam2 = params[2];
    }
    var model = new FormModal({
        "id": "modal_date",
        "title": name,
        "elements": [
            {
                "labelName": "设定系统等待超时时间：",
                "type": "radio-date",
                "name": "waitTime",
                "radioList": [
                    1, 2, 3, 4
                ],
                "prompt": "提示：如果不设置等待时间，工作流运行时将默认跳过等待时间节点",
                "defaultValue": [selectRadio, selectParam1, selectParam2]
            }
        ],
        "submitBindFunc": function (fd) {
            time = model.getValue("waitTime");
            figure.figureParam = time + ",";
            model.destroy();
            return false;
        },
        "clear": false
    });
    return model;

}
function createFigureWaitTakeList(figure, name) {
    var figureParam = figure.figureParam;
    var params = figureParam.split(",");
    var selectRadio = "";
    var selectParam1 = "";
    var selectParam2 = "";
    if (params != undefined && params.length >= 1) {
        selectRadio = params[0];
    }
    if (params != undefined && params.length >= 2) {
        selectParam1 = params[1];
    }
    if (params != undefined && params.length >= 3) {
        selectParam2 = params[2];
    }
    var model = new FormModal({
        "id": "modal_date",
        "title": name,
        "elements": [
            {
                "labelName": "设定系统等待超时时间：",
                "type": "radio-date",
                "name": "waitTake",
                "radioList": [
                    1, 2, 3
                ],
                "prompt": "提示：如果不设定超时时间，工作流运行时未收货会员将一直停留在该节点",
                "defaultValue": [selectRadio, selectParam1, selectParam2]
            }
        ],
        "submitBindFunc": function (fd) {
            time = model.getValue("waitTake");
            figure.figureParam = time + ",";
            model.destroy();
            return false;
        },
        "clear": false
    });
    return model;

}
function createFigureWaitOrderList(figure, name) {
    var figureParam = figure.figureParam;
    var params = figureParam.split(",");
    var selectRadio = "";
    var selectParam1 = "";
    var selectParam2 = "";
    if (params != undefined && params.length >= 1) {
        selectRadio = params[0];
    }
    if (params != undefined && params.length >= 2) {
        selectParam1 = params[1];
    }
    if (params != undefined && params.length >= 3) {
        selectParam2 = params[2];
    }
    var model = new FormModal({
        "id": "modal_date",
        "title": name,
        "elements": [
            {
                "labelName": "设定系统等待超时时间：",
                "type": "radio-date",
                "name": "waitOrder",
                "radioList": [
                    1, 2, 3
                ],
                "prompt": "提示：如果不设定超时时间，工作流运行时未下单会员将一直停留在该节点",
                "defaultValue": [selectRadio, selectParam1, selectParam2]
            }
        ],
        "submitBindFunc": function (fd) {
            time = model.getValue("waitOrder");
            figure.figureParam = time + ",";
            model.destroy();
            return false;
        },
        "clear": false
    });
    return model;
}
function createFigureWaitEvaluateList(figure, name) {
    var figureParam = figure.figureParam;
    var params = figureParam.split(",");
    var selectRadio = "";
    var selectParam1 = "";
    var selectParam2 = "";
    if (params != undefined && params.length >= 1) {
        selectRadio = params[0];
    }
    if (params != undefined && params.length >= 2) {
        selectParam1 = params[1];
    }
    if (params != undefined && params.length >= 3) {
        selectParam2 = params[2];
    }
    var model = new FormModal({
        "id": "modal_date",
        "title": name,
        "elements": [
            {
                "labelName": "设定系统等待超时时间：",
                "type": "radio-date",
                "name": "waitEvaluate",
                "radioList": [
                    1, 2, 3
                ],
                "prompt": "提示：如果不设定超时时间，工作流运行时未评价会员将一直停留在该节点",
                "defaultValue": [selectRadio, selectParam1, selectParam2]
            }
        ],
        "submitBindFunc": function (fd) {
            time = model.getValue("waitEvaluate");
            figure.figureParam = time + ",";
            model.destroy();
            return false;
        },
        "clear": false
    });
    return model;

}
function createFigureWaitCusList(figure, name) {
    var figureParam = figure.figureParam;
    var params = figureParam.split(",");
    var selectRadio = "";
    var selectParam1 = "";
    var selectParam2 = "";
    var action = "";
    if (params != undefined && params.length >= 1) {
        selectRadio = params[0];
    }
    if (params != undefined && params.length >= 2) {
        selectParam1 = params[1];
    }
    if (params != undefined && params.length >= 3) {
        selectParam2 = params[2];
    }
    if (params != undefined && params.length >= 5) {
        action = params[4];
    }
    if (params != undefined && params.length >= 6) {
        action += "," + params[5];
    }
    var model = new FormModal({
        "id": "modal_date",
        "title": name,
        "elements": [
            {
                "labelName": "设定系统等待超时时间：",
                "type": "radio-date",
                "name": "waitCus",
                "radioList": [
                    1, 2, 3
                ],
                "prompt": "",
                "defaultValue": [selectRadio, selectParam1, selectParam2]
            },
            {
                "require": true,
                "type": "checkbox",
                "name": "action",
                "checkOptions": [
                    {value: "click", text: "邮件点击"},
                    {value: "open", text: "邮件打开"}
                ],
                defaultValue: action
            }
        ],
        "submitBindFunc": function (fd) {
            time = model.getValue("waitCus");
            action = model.getValue("action");
            figure.figureParam = time + ",," + action;
            model.destroy();
            return false;
        },
        "clear": false
    });
    return model;

}

function createFigureOperGroupList(figure, name) {
    var figureParam = figure.figureParam;
    var model = new FormModal({
        "title": name,
        "elements": [
            {
                "require": true,
                "labelName": "分组：",
                "type": "select",
                "name": "operGroup",
                "selectOptions": {
                    "url": SMARTGROUP.getListSmartGroupUrl(),
                    "textName": "name",
                    "valueName": "key"
                },
                "defaultValue": figureParam
            }
        ],
        "submitBindFunc": function (fd) {
            figure.figureParam = model.getValue("operGroup");
            model.destroy();
            return false;
        },
        "clear": true
    });
    return model;

}
function createFigureOperLevelList(figure, name) {
    var figureParam = figure.figureParam;
    var model = new FormModal({
        "title": name,
        "elements": [
            {
                "require": true,
                "type": "checkbox",
                "name": "operLevel",
                "checkOptions": [
                    {value: "level1", text: "普通会员"},
                    {value: "level2", text: "银卡会员"},
                    {value: "level3", text: "金卡会员"}
                ],
                defaultValue: figureParam
            }
        ],
        "submitBindFunc": function (fd) {
            figure.figureParam = model.getValue("operLevel");
            model.destroy();
            return false;
        },
        "clear": false
    });
    return model;

}


function createFigureDoEmailList(figure, name) {
    var figureParam = figure.figureParam;
    var params = figureParam.split(",");
    var selectEmail = "";
    var selectCus = "";
    var subject = "";
    var senderChinese = "";
    var sender = "";
    if (params != undefined && params.length >= 1) {
        selectEmail = params[0];
    }
    if (params != undefined && params.length >= 2) {
        subject = params[1];
    }
    if (params != undefined && params.length >= 3) {
        senderChinese = params[2];
    }
    if (params != undefined && params.length >= 4) {
        sender = params[3];
    }
    if (params != undefined && params.length >= 5) {
        selectCus = params[4];
    }
    var model = new FormModal({
        "title": name,
        "elements": [
            {
                "require": true,
                "labelName": "选择模板:",
                "type": "select",
                "name": "doEmail",
                "selectOptions": {
                    "url": PERSONALIZE.getListMailTemplateUrl(),
                    "textName": "templateName",
                    "valueName": "key"
                },
                "defaultValue": selectEmail,
                "change": function () {
                    var tpKey = $(this).val();
                    var obj = PERSONALIZE.getByIdMailTemplate(tpKey);
                    model.setValue("subject", obj.subject);
                    model.setValue("sender", obj.sender);
                    model.setValue("senderChinese", obj.senderChinese);
                }
            },
            {
                "require": true,
                "type": "text",
                "name": "subject",
                "labelName": "邮件标题:",
                "defaultValue": subject
            },
            {
                "require": true,
                "type": "text",
                "name": "senderChinese",
                "labelName": "发件人:",
                "defaultValue": senderChinese
            },
            {
                "require": true,
                "type": "text",
                "name": "sender",
                "labelName": "发件人地址:",
                "defaultValue": sender
            },
            {
                "require": true,
                "labelName": "发送账号:",
                "type": "select",
                "name": "sendCus",
                "selectOptions": {
                    "url": PLAT.getListCustomerUrl(),
                    "textName": "customerName",
                    "valueName": "key"
                },
                "defaultValue": selectCus
            }
        ],
        "submitBindFunc": function (fd) {
            var param = "";
            param += model.getValue("doEmail");
            param += ",";
            param += model.getValue("subject");
            param += ",";
            param += model.getValue("senderChinese");
            param += ",";
            param += model.getValue("sender");
            param += ",";
            param += model.getValue("sendCus");
            figure.figureParam = param;
            model.destroy();
            return false;
        },
        "clear": true
    });
    return model;
}

function createFigureClickHtml(fid, figureType) {
    var name = "";
    var model = null;
    var figure = STACK.figureGetById(fid);
    if (figureType == 3) {
        name = "等级";
        model = createFigureFilterLevelList(figure, name);
    } else if (figureType == 4) {
        name = "活跃度";
        model = createFigureFilterActiveList(figure, name);
    } else if (figureType == 5) {
        name = "所在地";
        model = createFigureFilterSeatList(figure, name);
    } else if (figureType == 6) {
        name = "新老会员";
        model = createFigureFilterOldNewList(figure, name);
    } else if (figureType == 7) {
        name = "高级会员";
        addList = "";
        $.ajax({
            url: "./test/model.html",
            async: false,
            success: function (data) {
                addList = [data];
            }
        });
    } else if (figureType == 10) {
        name = "AB测试";
        model = createFigureFlowRateList(figure, name);
    } else if (figureType == 11) {
        name = "活跃度";
        //no have
    } else if (figureType == 12) {
        name = "选择分组";
        model = createFigureFlowGroupList(figure, name);
    } else if (figureType == 13) {
        name = "等级";
        //no have
    } else if (figureType == 14) {
        name = "新老会员";
        //no have
    } else if (figureType == 15) {
        name = "发送短信";
    } else if (figureType == 16) {
        name = "发送邮件";
        model = createFigureDoEmailList(figure, name);
    } else if (figureType == 20) {
        name = "修改等级";
        model = createFigureOperLevelList(figure, name);
    } else if (figureType == 21) {
        name = "加入分组";
        model = createFigureOperGroupList(figure, name);
    } else if (figureType == 25) {
        name = "等待时间";
        model = createFigureWaitTimeList(figure, name);
    } else if (figureType == 26) {
        name = "等待打开";
        model = createFigureWaitOpenList(figure, name);
    } else if (figureType == 27) {
        name = "等待点击";
        model = createFigureWaitClickList(figure, name);
    } else if (figureType == 28) {
        name = "等待收货";
        model = createFigureWaitTakeList(figure, name);
    } else if (figureType == 29) {
        name = "等待下单";
        model = createFigureWaitOrderList(figure, name);
    } else if (figureType == 30) {
        name = "等待付款";
        model = createFigureWaitPayList(figure, name);
    } else if (figureType == 31) {
        name = "等待评价";
        model = createFigureWaitEvaluateList(figure, name);
    } else if (figureType == 32) {
        name = "定义等待";
        model = createFigureWaitCusList(figure, name);
    }
    if (model != null) {
        model.show();
    }
    return 1;
}





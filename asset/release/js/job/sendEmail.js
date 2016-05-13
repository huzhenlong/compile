/**
 * Created by HZL on 2015/12/15.
 */
$(function () {

    var _JOB = function () {
    };

    _JOB.prototype.EMAIL_MODAL = function (key, actType) {
        var id = "";
        if (key) {
            id = "send_email_" + key;
        }
        return {
            "id": id,
            "title":TxtContent.sendEmail.title,
            "elements": [
                {
                    "require": true,
                    "labelName": TxtContent.sendEmail.label1,
                    "type": "text",
                    "name": "taskName"
                },
                {
                    "require": true,
                    "labelName": TxtContent.sendEmail.label2,
                    "type": "text",
                    "name": "title"
                },
                {
                    "require": true,
                    "labelName": TxtContent.sendEmail.label3,
                    "type": "text",
                    "name": "subject"
                },
                {
                    "require": true,
                    "labelName": TxtContent.sendEmail.label4,
                    "type": "text",
                    "name": "senderChinese"
                },
                {
                    "require": true,
                    "labelName": TxtContent.sendEmail.label5,
                    "type": "email",
                    "name": "sender"
                },
                {
                    "labelName": TxtContent.sendEmail.label6,
                    "type": "select",
                    "name": "brandKey",
                    "selectOptions": {
                        "url": PLATFORM.getGetSelectBrandsUrl(),
                        "textName": "name",
                        "valueName": "key",
                        "defaultValue": 0
                    }
                },
                {
                    "require": true,
                    "labelName": TxtContent.sendEmail.label7,
                    "type": "select",
                    //"multiple":"multiple",
                    "name": "groupKey",
                    "selectOptions": {
                        "url": SMARTGROUP.getListGroupUrl(),
                        "textName": "name",
                        "valueName": "key"
                    }
                },
                {
                    "require": true,
                    "labelName": TxtContent.sendEmail.label8,
                    "type": "select",
                    "name": "customerKey",
                    "selectOptions": {
                        "url": PLATFORM.getGetSelectCustomersUrl(),
                        "textName": "customerName",
                        "valueName": "key"
                    }
                },
                {
                    "require": true,
                    "labelName": TxtContent.sendEmail.label9,
                    "type": "datetime-local",
                    "name": "sentTime"
                },
                {
                    "type": "hidden",
                    "name": "key"
                }
            ],
            "submitBindFunc": function (form) {
                var f = form[0];
                var fd = new FormData(f);
                if (key) {
                    fd.append("key", key);
                }
                fd.append("actType", actType);
                //调用发送接口
                PERSONALIZE.sendMail(fd, function () {
                    swal(TxtContent.prompt, "", "success");
                });
            },
            "clear": true
        };
    };

    _JOB.prototype.generateEmailModal = function (key,actType) {
        return new FormModal(this.EMAIL_MODAL(key, actType));
    };

    if (!window.XREWINJOB) {
        window.XREWINJOB = new _JOB();
    }
});

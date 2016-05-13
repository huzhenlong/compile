/**
 * Created by HZL on 2016/1/5.
 */
$(function () {
    var _JobSms = function () {
    };

    _JobSms.prototype.SENDSMS_MODAL = function (key, actType) {
        var id = "";
        if (key) {
            id = key;
        }
        return {
            "id": id,
            "title": TxtContent.sendEmail.sms,
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
                    "labelName": TxtContent.sendEmail.labelSms3,
                    "type": "text",
                    "name": "subject"
                },
                {
                    "labelName": TxtContent.sendEmail.labelSmsCon,
                    "type": "smsEdit",
                    "name": "defSmsName",
                    "smsContent": {
                        "data": importMemberColumns,
                        "textName": "name",
                        "valueName": "column"
                    }
                },
                {
                    "require": true,
                    "labelName": TxtContent.sendEmail.labelSmsSign,
                    "type": "text",
                    "name": "signature"
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
                PERSONALIZE.sendSms(fd, function () {
                    swal(TxtContent.prompt, "", "success");
                });
            },
            "clear": true
        };
    };

    _JobSms.prototype.generateSendSmsModal = function (key, actType) {
        return new FormModal(this.SENDSMS_MODAL(key, actType));
    };

    _JobSms.prototype.sendSms = function (btn, mailTempKey, actType) {
        var key = mailTempKey;
        if (typeof btn == "string") {
            btn = $("#" + btn);
        }
        else {
            btn = $(btn)
        }
        var opts = this.SENDSMS_MODAL(key, actType);
        opts.clear = false;
        var modal = btn.popup(opts);

        PERSONALIZE.getSmsTemplate({"data": key}, function () {
            var mailTemp = this.data;
            var time = new Date().Format("yyyy-MM-dd hh:mm:ss");
            var date = new Date().Format("yyyyMMdd");
            mailTemp["taskName"] = mailTemp["taskName"] || time + "—短信任务";
            mailTemp["subject"] = mailTemp["subject"] || date + "—" + mailTemp["subject"];
            mailTemp["sentTime"] = mailTemp["sentTime"] || new Date().Format("yyyy-MM-ddThh:mm");
            modal.editContent(mailTemp);
        });
    };

    if (!window.XREWINJOBSMS) {
        window.XREWINJOBSMS = new _JobSms();
    }
});


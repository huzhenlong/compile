/**
 * Created by HZL on 2016/1/5.
 */
$(function () {

    var table = PERSONALIZE.getListTableSmsTemplate('list_table');

    var smsModal = function (key) {
        return {
            "id": key || "importSmsTemplate",
            "title": TxtContent.smsTemplate,
            "elements": [
                {
                    "require": true,
                    "labelName": TxtContent.individuation.name,
                    "type": "text",
                    "name": "templateName"
                },
                {
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
                        /* "smsTxt": "亲爱的$$data.nick$$在您$$data.birthday$$之际赠送$$data.score$$!" +
                         "河中鱼类离奇死亡，下游居民频染怪病，沿岸植物不断变异，是残留农药？还是生化攻击？"*/
                    }
                },
                {
                    "type": "hidden",
                    "name": "publicFlag",
                    "defaultValue": "1",
                    "checkOptions": [{value: "1", text: "是否公开"}]
                },
                {
                    "type": "hidden",
                    "name": "smsState"
                }
            ],

            "submitBindFunc": function (form) {

                var state = form.find('[name="smsState"]');
                var fd = XREWIN.FormData({"sms": form.find("[contenteditable]").html()}, form[0].id);
                if (!state.val()) {
                    PERSONALIZE.addSmsTemplate(fd, function () {
                        table.ajax.reload();
                    });
                } else {
                    fd.append("key", state.val());
                    fd.append("groupKey", localStorage['smsGroupKey']);
                    PERSONALIZE.updateSmsTemplate(fd, function () {
                        table.ajax.reload();
                    });
                }
                form.find("div[contenteditable=true]").html('');
            },
            "clear": true,
            "submitBtn": TxtContent.save,
            "cancelBtn": TxtContent.close
        };
    };

    var modal = new FormModal(smsModal('editModal'));
    var sendModal = XREWINJOBSMS.generateSendSmsModal(null, "1");

    //查看
    var getSmsTemplate = function (id) {
        PERSONALIZE.getSmsTemplate({"data": id}, function () {
            var msg = this.data;
            localStorage['smsGroupKey'] = msg.groupKey;
            var smsTemp = {
                "templateName": msg["templateName"],
                "subject": msg["subject"],
                "smsTxt": msg["sms"]
            };
            modal.editContent(smsTemp);
            modal.$form.find("[contenteditable]").html(msg["sms"]);
            modal.show();
        });
    };

    var editForm = function (readonly, contenteditable, state, id) {
        modal.$form.find('input').attr({"readonly": readonly});
        modal.$form.find('[contenteditable]').attr({"contenteditable": contenteditable});
        if (state) {
            modal.$form.find(":submit,#contentBox,#personSet").show();

        } else {
            modal.$form.find(":submit,#contentBox,#personSet").hide();
        }
        modal.$form.find('[name="smsState"]').val(id);
    };

    table.on('draw.dt', function () {

        var swalSuccess = function (name) {
            swal(TxtContent.delSuc, "", "success");
        };

        //查看
        $(this).find("button[name='btnShowOp']").click(function () {
            var that = $(this);
            var id = that.data("data-id");
            editForm("readonly", false, false, id);
            getSmsTemplate(id);
        });

        //编辑
        $(this).find("button[name='btnEditOp']").click(function () {
            var that = $(this);
            var id = that.data("data-id");
            editForm(false, true, true, id);
            modal.$form.find('[name="templateName"]').attr("readonly", "readonly");
            getSmsTemplate(id);
        });

        //删除数据
        $(this).find("button[name='btnDelOp']").click(function () {
            var that = $(this);
            var id = that.data("data-id");
            var name = that.data("data-name");
            //显示弹框
            XREWIN.confirmModal(name, function () {
                //删除数据
                PERSONALIZE.delSmsTemplate({"data": id}, function () {
                    swalSuccess(name);
                    table.ajax.reload();
                });
            });
        });

        //点击发送
        $(this).find("button[name='btnSendEmailOp']").click(function () {
            var that = $(this);
            var id = that.data("data-id");
            var name = that.data("data-name");
            PERSONALIZE.getSmsTemplate({"data": id}, function () {
                var smsTemp = this.data;
                var time = new Date().Format("yyyy-MM-dd hh:mm:ss");
                var date = new Date().Format("yyyyMMdd");
                smsTemp["key"] = id;
                smsTemp["taskName"] = smsTemp["taskName"] || time + "—短信任务";
                smsTemp["title"] = smsTemp["title"] || date + "—" + smsTemp["subject"];
                smsTemp["sentTime"] = smsTemp["sentTime"] || new Date().Format("yyyy-MM-ddThh:mm");
                sendModal.editContent(smsTemp);
                sendModal.$form.find("[contenteditable]").html(smsTemp["sms"]);
                sendModal.$form.find("#contentBox,#personSet").hide();
                sendModal.show();
            });
        });
    });

    //提交表单
    $("#addSmsTemplate").popup(smsModal());
});
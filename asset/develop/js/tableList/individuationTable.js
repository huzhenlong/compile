/**
 * Created by HZL on 2015/12/15.
 */
$(function () {
    var table = PERSONALIZE.getListTableMailTemplate('list_table');
    var modal = XREWINJOB.generateEmailModal("","1");

    table.on('draw.dt', function () {

        //查看
        $(this).find("button[name='btnShowOp']").click(function () {
            var that = $(this);
            var id = that.data("data-id");
            //查看
            XREWIN.openNewWindow("/preview.html", {key: id});
        });

        //删除数据
        $(this).find("button[name='btnDelOp']").click(function () {
            var that = $(this);
            var id = that.data("data-id");
            var name = that.data("data-name");

            //显示弹框
            XREWIN.confirmModal(name, function () {
                //删除数据
                PERSONALIZE.delMailTemplate({"data": id}, function () {
                    swal(TxtContent.delSuc, "", "success");
                    table.ajax.reload();
                });
            });
        });

        //编辑
        $(this).find("button[name='btnEditOp']").click(function () {
            var that = $(this);
            var id = that.data("data-id");
            XREWIN.openNewWindow("/individuation.html", {key: id});
        });

        $(this).find("button[name='btnSendEmailOp']").click(function () {
            var that = $(this);
            var id = that.data("data-id");

            PERSONALIZE.getMailTemplate({"data": id}, function () {
                var mailTemp = this.data;
                var time = new Date().Format("yyyy-MM-dd hh:mm:ss");
                var date = new Date().Format("yyyyMMdd");
                mailTemp["key"] = id;
                mailTemp["taskName"] = mailTemp["taskName"] || time + "—邮件任务";
                mailTemp["title"] = mailTemp["title"] || date + "—" + mailTemp["subject"];
                mailTemp["sentTime"] = mailTemp["sentTime"] || new Date().Format("yyyy-MM-ddThh:mm");
                modal.editContent(mailTemp);
                modal.show();
            });
        });
    });

    //提交表单
    var options = {
        "id": "individuationModal",
        "title": TxtContent.individuation.importTem,
        "elements": [
            {
                "require": true,
                "labelName": TxtContent.individuation.name,
                "type": "text",
                "name": "templateName"

            },
            {
                "labelName":TxtContent.individuation.subject,
                "type": "text",
                "name": "subject"

            },
            {
                "labelName":TxtContent.individuation.sendName ,
                "type": "text",
                "name": "senderChinese"

            },
            {
                "require": true,
                "labelName":TxtContent.individuation.email ,
                "type": "email",
                "name": "sender"

            },
            {
                "require": true,
                "labelName":TxtContent.individuation.temCon ,
                "type": "file",
                "name": "template_file"

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
            //添加
            PERSONALIZE.addMailTemplate(fd, function () {
                XREWIN.openNewWindow("/individuation.html", {key: this.data});
                table.ajax.reload();
            });
        },
        "clear": true,
        "submitBtn":TxtContent.upload,
        "cancelBtn": TxtContent.close
    };

    $("#importIndividuation").popup(options);
});

/**
 * Created by HZL on 2015/12/15.
 */
var fnClicKShow = function () {
    $("#mySmartgroup").modal("show");
};
$(function () {

    var table = SMARTGROUP.getListTableSmartGroup('list_table');

    table.on('draw.dt', function () {

        //拼接url
        var generationUrl = function (obj) {
            var url = obj.attr("href") + window.location.search;
            var id = obj.data("data-id");
            var name = obj.data("data-name");
            //添加url参数
            return XREWIN.appendParams(url, {
                "key": id,
                "active": Base64.encode("<a>" + name + "</a>"),
                "sgTool":true
            });
        };

        //查看
        $(this).find("a[name=smartGroupCheck]").each(function () {
            var that = $(this);
            that.attr("href", generationUrl(that));
        });

        //编辑
        $(this).find("a[name=addSidHref]").each(function () {
            var that = $(this);
            that.attr("href", generationUrl(that));
        });

        //删除
        $(this).find("button[name=btnOp]").click(function () {
            var that = $(this);
            var id = that.data("data-id");
            var name = that.data("data-name");
            //显示弹框
            XREWIN.confirmModal(name, function () {
                //删除数据
                SMARTGROUP.delSmartGroup({"data": id}, function () {
                    swal(TxtContent.delSuc, "", "success");
                    table.ajax.reload();
                });
            });
        });
    });

    //提交表单
    $("#add-smartgroup").popup({
        "id": "add-smartgroup",
        "title": TxtContent.addSG,
        "elements": [
            {
                "require": true,
                "labelName": TxtContent.name,
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
            SMARTGROUP.addSmartGroup(fd, function () {
                //打开新的网页
                var url = "/smartgroup.html" + window.location.search;
                url = XREWIN.appendParams(url, {
                    "key": this.data,
                    "active": Base64.encode("<a>" + $(form[0]).find("input[name=name]").val() + "</a>")
                });
                XREWIN.openNewWindow(url);
                //刷新列表
                table.ajax.reload();
            });
        },
        "clear": true,
        "submitBtn": TxtContent.ckeitor.add,
        "cancelBtn":TxtContent.close
    });
});
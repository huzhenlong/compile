/**
 * Created by HZL on 2015/12/15.
 */
var fnClicKShow = function () {
    $("#myFixgroup").modal("show");
};
$(function () {
    $(".modal-select2").select2({
        placeholder:TxtContent.sel
    });
    var table = SMARTGROUP.getListTableFixGroup('list_table');

    table.on('draw.dt', function () {

        //查看
        $(this).find("a[name=addSidHref]").each(function () {
            var that = $(this);
            var url = that.attr("href") + window.location.search;
            var id = that.data("data-id");
            var name = that.data("data-name");
            //添加url参数
            var newUrl = XREWIN.appendParams(url, {
                "key": id,
                "active": Base64.encode("<a>" + name + "</a>")
            });
            that.attr("href", newUrl);
        });

        //删除
        $(this).find("button[name=btnOp]").click(function () {
            var that = $(this);
            var id = that.data("data-id");
            var name = that.data("data-name");

            //显示弹框
            XREWIN.confirmModal(name, function () {
                SMARTGROUP.delFixGroup({"id": id}, function () {
                    swal(TxtContent.delSuc, "", "success");
                    table.ajax.reload();
                });
            });
        });

        //导入
        $(this).find("button[name=importMember]").click(function () {
            var that = $(this);
            var id = that.data("data-id");
            var name = that.data("data-name");
            localStorage["fixGroupKey"] = id;
            //执行加载会员分组
            PLAT.listBrand(function () {
                var fixGroupKey = $("#member_brand");
                //添加options
                if (!$.trim(fixGroupKey.html())) {
                    XREWIN.addOptions(this.data, "key", "name", fixGroupKey);
                    fixGroupKey[0].selectedIndex = -1;
                }
            });
        });
    });

    //提交表单
    $('#fixGroupForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: TxtContent.nameIsnull
                    }
                }
            }
        }
    }).on('success.form.bv', function (e) {
        var fd = new FormData(document.getElementById("fixGroupForm"));
        //添加数据
        SMARTGROUP.addFixGroup(fd, function (e) {
            //刷新列表
            table.ajax.reload();
            //关闭弹框
            $("#myFixgroup").modal("hide");
        });
    });

    //重置表单
    $('#myFixgroup').on('show.bs.modal', function () {
        $('#fixGroupForm').bootstrapValidator('resetForm', true);
    });
});
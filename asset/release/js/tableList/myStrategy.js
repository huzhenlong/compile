/**
 * Created by HZL on 2016/2/18.
 */

//策略列表
var table = PERSONALIZE.getListTableIndividuationTactics('list_table');
table.on('draw.dt', function () {

    //查看
    $(this).find("button[name=btnShowOp]").on("click",function () {

    });

    //编辑
    $(this).find("button[name=btnEditOp]").on("click",function () {

    });

    //删除
    $(this).find("button[name=btnDelOp]").on("click",function () {
        var that = $(this);
        var id = that.data("data-id");
        var name = that.data("data-name");
        //显示弹框
        XREWIN.confirmModal(name, function () {
            //删除数据
            PERSONALIZE.delIndividuationTactics({"data": id}, function () {
                swal(TxtContent.delSuc, "", "success");
                table.ajax.reload();
            });
        });
    });
});
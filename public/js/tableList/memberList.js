/**
 * Created by HZL on 2016/1/11.
 */
//弹出memberConModal
var memberCon = function () {
    $("#memberConModal").modal("show");
};

//会员列表操作
var table = PLAT.getListTableMember('list_table'), toolBox;

table.on('draw.dt', function () {
    toolBox = $('#toolbox');
    if( !toolBox.html()){
        toolBox.empty().append('<form role="form" class="form-inline" id="form_search_tool"' +
            'onkeydown="if(event.keyCode==13){return false;}">' + $("#form_search")[0].innerHTML + '</form>');
    }

    var that = $(this);
    //删除数据
    that.find("button[name=btnDelOp]").click(function () {
        var that = $(this);
        var id = that.data("data-id");
        var name = that.data("data-name");
        var scanTool = $("#form_search").find("select").val();

        //显示是否删除弹框
        XREWIN.confirmModal(name, function () {
            PLAT.delMember({"key": id, "scanTool": scanTool}, function () {
                swal(TxtContent.delSuc, "", "success");
                table.ajax.reload();
            });
        });
    });

    //查看
    that.find("button[name=btnShowOp]").each(function () {
        var that = $(this);
        var id = that.data("data-id");
    });

    //查询数据
    toolBox.find("#checkData").click(function () {
        table.ajax.reload();
    });
});
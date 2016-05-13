/**
 * Created by HZL on 2015/12/25.
 */
var table = PLAT.getListTableMailSmsView("job_table");

table.on('draw.dt', function () {
    toolBox = $('#toolbox');
    if (!toolBox.html()) {
        toolBox.empty().append('<form role="form" class="form-inline" id="form_search_tool"' +
            'onkeydown="if(event.keyCode==13){return false;}">' + $("#form_search")[0].innerHTML + '</form>');
    }

    //查询数据
    $("#checkData", toolBox).off().on("click", function () {
        table.ajax.reload();
    });

    //查看总体情况
    $("button[name='checkReport']").on("click", function () {
        var that = $(this),url;
        var id = that.data("data-id");
        var type = that.data("type");
        if(type == 1){
            url = "/totalCase.html" + window.location.search;
        }else if (type == 2){
            url = "/smsTotalCase.html" + window.location.search;
        }
        url = XREWIN.appendParams(url, {"key":id});
        XREWIN.openNewWindow(url);
    });
});

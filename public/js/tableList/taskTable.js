/**
 * Created by HZL on 2015/12/15.
 */
$(function () {
    var table = PLAT.getListTableCampaign("task_table");

    table.on('draw.dt', function (e, settings, json, xhr) {
        //转换为开始按钮
        var startBtn = function (that) {
            that.attr("name", 'start');
            that.text(TxtContent.start);
            that.attr("disabled", true);
            var remAttr = function () {
                that.attr("disabled", false);
            };
            setTimeout(remAttr, 5000);
            that.off().on("click", function () {
                var that = $(this);
                var id = that.data("data-id");
                startFunc(id, that);
            });
        };

        //转换为暂停按钮
        var pauseBtn = function (that) {
            that.attr("name", 'pause');
            that.text(TxtContent.pause);
            that.attr("disabled", true);
            var remAttr = function () {
                that.attr("disabled", false);
            };
            setTimeout(remAttr, 5000);
            that.off().on("click", function () {
                var that = $(this);
                var id = that.data("data-id");
                pauseFunc(id, that);
            });
        };

        //开始后执行
        var pauseFunc = function (id, that) {
            PLAT.parseUpload({"key": id}, function () {
                startBtn(that);
            });
        };

        //暂停后执行
        var startFunc = function (id, that) {
            PLAT.startUpload({"key": id}, function () {
                pauseBtn(that);
            });
        };

        //查看
        table.$("button[name='check_task']").off("click").on("click", function () {
            var that = $(this);
            var id = that.data("data-id");
            var name = that.data("data-name");
        });

        //暂停
        table.$("button[name='pause']").off("click").on("click", function () {
            var that = $(this);
            var id = that.data("data-id");
            pauseFunc(id, that);

        });

        //开始
        table.$("button[name='start']").off("click").on("click", function () {
            var that = $(this);
            var id = that.data("data-id");
            startFunc(id, that);
        });

        //下载失败数量
        table.$("button[name='downLoad_task']").off("click").on("click", function () {
            var that = $(this);
            var id = that.data("data-id");
            var count = that.data("count");
            if(count > 0){
                dowloadUrl = XREWIN.appendParam(PLAT.getFailMemsDowloadUrl(),"campaignKey",id);
                window.open(dowloadUrl);
            }
        });

    });

    //刷新列表
    var reload = function () {
        table.ajax.reload(reloadDelay, false);
    };

    var reloadDelay = function () {
        setTimeout(reload, 10000);
    };

    reloadDelay();
});
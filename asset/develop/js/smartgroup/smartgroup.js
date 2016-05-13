/**
 * Created by HZL on 2015/12/15.
 */
$(function () {

    //智能分组条件开关
    var elem = document.querySelector('.js-switch');
    new Switchery(elem, {color: '#1ab394', size: "small"});

    //紧缩菜单栏
    if ($(window).width() <= 1366) {
        $(".navbar-minimalize").trigger("click");
    }

    //调用插件
    var sg = $("#vertical-timeline").smartGroup({});
    var groupKey = XREWIN.getUrlParam("key");
    $("#smartgroup-filter").smartGroupFilter({smartGroup: sg, groupKey: groupKey});

    //清空数据
    var clearData = function () {
        //清空节点
        sg.clearCookie();
        //调用保存
        sg.updateSmartgroupData();
    };

    //清空数据
    $("#btn-sm-clear").click(function () {
        //显示加载样式框
        SMARTGROUP.clear({"data": XREWIN.getUrlParam("key")}, function () {
            clearData();
            XREWIN.skipPrompt(TxtContent.skipPrompt);
        });
    });

    //保存数据
    $("#btn-sm-save").click(function () {
        sg.updateSmartgroupData();
        //提示成功
        XREWIN.promptSuccess();
        //解绑卸载事件
        XREWIN.unbindSkipPrompt();
    });

    //删除节点
    $("#btn-sm-del").click(function () {
        sg.removeSelectItem();
        XREWIN.skipPrompt(TxtContent.skipPrompt);
    });

    //刷新数据
    $('#btn-sm-refresh').on("click", function () {
        var that = $(this);
        that.attr("disabled", "disabled");
        setTimeout(function () {
            that.attr("disabled", false);
        }, 30000);
        SMARTGROUP.resertStaticts({"data": XREWIN.getUrlParam('key')}, function () {
            sg.refreshCount();
        });
    });

    //控制时间轴高度
    $(".switchery").click(function () {
        /*var clickCheckbox = document.querySelector('.js-check-click');
        if (!clickCheckbox.checked) {
            $("#smartGroupCondition").on("mouseenter", function () {
                $("#sgWrap").css("display", "block");
                setIboxHeight();
            });

            $("#ibox-content").on("dblclick", function () {
                $("#sgWrap").css("display", "none");
                setIboxHeight();
            });
        } else {
            $("#smartGroupCondition").off("mouseenter");
            $("#ibox-content").off("dblclick");
        }*/
        $("#sgWrap").toggleClass("toggleShow");
        setIboxHeight();
    });

    var boxHeight = $("#wrapper").height();
    var setIboxHeight = function () {
        var iboxHeight = boxHeight - $("#smartGroupCondition").height() - 220;
        $("#ibox-content").height(iboxHeight);
    };
    setIboxHeight();
});
/**
 * Created by hzl on 2015/9/23.
 */
$(function () {

    //必须先执行ckeditor在执行jq
    var _box = null;

    //离开页面提示保存
    XREWIN.skipPrompt(TxtContent.skipPrompt);

    CKEDITOR.on("instanceReady", function () {

        //初始化一次
        if (_box == null) {

            //region 执行插件
            var $box = $("#eArea");
            _box = $box.Individuation();
            _box.find("p:first").remove();

            //内容被修改时绑定提示
            $box.on("keydown", function () {
                XREWIN.skipPrompt(TxtContent.skipPrompt);
            });
            //endregion

            //region 左侧功能

            //左侧tab切换
            $(".navBar li").bind("click", function () {
                var index = $(this).index();
                //解决多次点击整行变蓝
                $(this).bind("selectstart", function () {
                    return false;
                });
                $(this).addClass("hover").siblings().removeClass("hover");
                $(".conBox .con").eq(index).show().siblings("div").hide();
            });
            //向编辑区添加选中元素
            $(".con .wr").bind("dblclick", function () {
                var child = $(this).html();
                _box.setTr("eArea", child);
                XREWIN.skipPrompt(TxtContent.skipPrompt);
            });

            //解决多次点击整行变蓝
            $(".con").bind("selectstart", function () {
                return false;
            });
            //endregion

            //region 隐藏按钮&清空&源码&预览

            //隐藏按钮
            $('.spin-icon').click(function () {
                $(".theme-config-box").toggleClass("show");
            });

            //清空编辑区内容
            $("#del").bind("click", function () {
                _box.del($box);
            });

            //查看源码
            $("#SC").on("shown.bs.modal", function () {
                $("#sourceCode").val($("#eArea").html());
            });

            //预览
            $("#preview").bind("click", function () {
                XREWIN.openNewWindow("/preview.html", {"key": XREWIN.getUrlParam("key")});
            });
            //endregion

            //region 更新编辑区
            //获取浏览器url的key
            var key = XREWIN.getUrlParam("key");

            var labelReplace = function (obj, replaceObj) {
                $(obj).each(function () {
                    var that = $(this);
                    that.replaceWith('<' + replaceObj + ' name="' + that.attr("name") + '" id="' + that.attr("id") + '">' + $(this).html() + '</' + replaceObj + '>');
                });
            };

            //更新数据
            $("#saveAllData").on("click", function () {
                labelReplace("aside", "map");
                var updateData = XREWIN.FormData({
                    "html": $("#eArea").html(),
                    "key": key
                });

                //更新
                PERSONALIZE.updateMailTemplate(updateData, function () {
                    labelReplace("map", "aside");
                });
                $(window).off("beforeunload");
            });
            //endregion

        }
    });

    //region 复制粘贴
    var editor = null;
    var $model = $('#leftPartModal');
    //弹出框显示时执行
    $model.on('show.bs.modal', function () {

        //region 执行复制
        //执行复制功能
        if (editor == null) {
            editor = CKEDITOR.replace('clip');
        }
        $("#cke_eArea").find(".cke_toolgroup")[0].firstChild.onclick();
        $("#savetype").unbind().bind("click", function () {
            var partType = $("#vipFilter").val();
            var editorData = CKEDITOR.instances.clip.getData();
            var divWrap = $('<div class="wrap" style="zoom:33%"></div>').append(editorData);
            $("#" + partType).append(divWrap);
            //绑定左侧事件
            _box.eBind(divWrap);
            var addData = JSON.stringify({
                partType: partType,
                html: divWrap[0].outerHTML
            });

            //添加数据
            PERSONALIZE.addMailTemplatePart({"data": addData}, function () {
                divWrap.attr("id", this.data);
            });
        });
        //endregion

    });
    //endregion

    //region 执行粘贴
    //弹出框显示完执行粘贴
    $model.on('shown.bs.modal', function () {
        //执行粘贴功能
        $("#cke_clip").find(".cke_toolgroup")[0].lastChild.onclick();
    });
    //endregion

    //region 窗口隐藏清空内容
    $model.on('hide.bs.modal', function () {
        CKEDITOR.instances.clip.setData("");
    });
    //endregion

    //保存后的提示信息
    $('#saveAllData').click(function () {
        //提示成功
        XREWIN.promptSuccess();
        XREWIN.unbindSkipPrompt();
    });


    //发送邮件
    var key = XREWIN.getUrlParam("key");
    var modal = XREWINJOB.generateEmailModal(key, "1");
    $(".modal-select2").select2({
        placeholder: "-请选择-"
    });
    $("#btnSendEmail").on("click", function () {
        PERSONALIZE.getMailTemplate({"data": key}, function () {
            var mailTemp = this.data;
            var time = new Date().Format("yyyy-MM-dd hh:mm:ss");
            var date = new Date().Format("yyyyMMdd");
            mailTemp["taskName"] = mailTemp["taskName"] || time + "—邮件任务";
            mailTemp["title"] = mailTemp["title"] || date + "—" + mailTemp["subject"];
            mailTemp["sentTime"] = mailTemp["sentTime"] || new Date().Format("yyyy-MM-ddThh:mm");
            modal.editContent(mailTemp);
            modal.show();
        });
    });
});
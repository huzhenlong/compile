/**
 * Created by hzl on 2015/9/23.
 */
(function ($, window, document, undefined) {

    //region 数据
    //sessionStorage["ediWH"] 保存的编辑区宽高
    //endregion

    $.fn.Individuation = function () {

        //region 初始化

        //初始化一次
        if (this.data('init')) {
            return this;
        }
        this.data('init', true);

        var plugin = this;
        var selBox = null;
        var selBoxData = null;

        //初始化
        var init = function () {
            //私有属性
            plugin.core = {
                selEle: null,
                selData: null,
                dic: {},
                //模版列表
                temList: [],
                //左侧样板列表
                modList: [],
                //中间编辑去列表
                list: []
            };

            //加载页面
            loadPage(XREWIN.getUrlParam("key"));
        };

        //endregion

        //region 加载页面
        //页面重新加载
        var loadPage = function (ediKey) {

            sessionStorage["ediWH"] = "";
            //加载中间编辑区域内容
            PERSONALIZE.getMailTemplate({"data": ediKey}, function () {
                var that = this;
                var obj = that.data;
                $("#eArea").append(obj.html);
                if (obj.groupKey) {
                    localStorage["group_key"] = obj.groupKey;
                }
                else {
                    localStorage["group_key"] = "";
                }
                //禁用map
                $('map').each(function () {
                    var that = $(this);
                    that.replaceWith('<aside name="' + that.attr("name") + '" id="' + that.attr("id") + '">' + $(this).html() + '</aside>');
                });
            });

            //加载左侧分栏内容
            PERSONALIZE.listMailTemplatePart(function () {
                var that = this;
                var mod = that.data;
                for (var q = 0; q < mod.length; q++) {
                    var appendedDom = $(mod[q].html).appendTo($("#" + mod[q].partType)).attr("id", mod[q].key);
                    plugin.eBind(appendedDom);
                }
            });

            //region 绑定左侧删除
            //绑定左侧删除
            $("#delBox").bind("click", function () {
                if (selBox) {
                    selBox.remove();

                    //删除左侧数据
                    PERSONALIZE.delMailTemplatePart({"data": selBox.attr("id")});
                }
            });
            //endregion

            //region 设置编辑区宽高禁用邮件里的map
            //设置编辑区宽高
            var wVal, hVal, wh = {};
            $('.ediArea input[name="w"]').bind("keyup", function () {
                wVal = $(this).val();
                wh.w = wVal;
                plugin.width(wVal);
                sessionStorage["ediWH"] = JSON.stringify(wh);
            });
            $('.ediArea input[name="h"]').bind("keyup", function () {
                hVal = $(this).val();
                wh.h = hVal;
                plugin.height(hVal);
                sessionStorage["ediWH"] = JSON.stringify(wh);
            });
            //endregion
        };
        //endregion

        //region 绑定左侧事件
        //绑定左侧事件
        plugin.eBind = function (obj) {
            obj.on("mouseenter", function () {
                if (!obj.attr("mask-id")) {
                    var maskId = obj.attr("id");
                    obj.attr("mask-id", maskId);
                    var $mask = $("<div class='mask'></div>").attr("mask-id", maskId).css({
                        "top": 0,
                        "left": 0
                    });
                    obj.append($mask);
                }
            });

            obj.on("click", function () {
                selBox = $(this);
                selBox.addClass("bg").siblings().removeClass("bg");
                selBoxData = plugin.core.dic[selBox.attr("id")]
            });

            obj.on("dblclick", function () {
                //obj.find(".mask").remove();
                plugin.setTr("eArea", obj.not(".mask").html());
            });
        };
        //endregion

        //region 创建元素
        //创建对象并绑定事件
        plugin.setTr = function (obj, ele) {
            var preTime = new Date();
            var eid = "d" + preTime.getTime();
            var divWrap = $(ele).appendTo(plugin).attr("id", eid);
            var eleData = {};
            eleData.el = ele;
            eleData.id = eid;
            eleData.index = 0;
            plugin.core.dic[eid] = eleData;
            return divWrap;
        };
        //endregion


        //region 清除编辑区内容
        //清除所有内容
        plugin.del = function (obj) {
            obj.empty();
        };
        //endregion

        //执行初始化
        init();

        return plugin;
    }
})(jQuery, window, document);

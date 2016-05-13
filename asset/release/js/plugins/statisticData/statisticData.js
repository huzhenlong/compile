/**
 * Created by HZL on 2016/2/22.
 */
(function ($, window, document, undefined) {
    //统计数据
    $.fn.statisticData = function (setting) {
        var plugin = this;
        //默认属性
        var defaults = {};

        //扩展后属性
        var options = $.extend({}, defaults, setting);

        //初始化
        var init = function () {
            plugin.empty();
        };

        init();





        return plugin;
    };
})(jQuery, window, document);

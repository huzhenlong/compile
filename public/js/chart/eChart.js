/**
 * Created by HZL on 2016/2/23.
 */
(function ($) {
    $.fn.eChart = function (option) {
        var plugin = this;
        // 基于准备好的dom，初始化echarts实例
        var Chart = echarts.init(plugin[0]);

        // 使用刚指定的配置项和数据显示图表。
        Chart.setOption(option);
        return plugin;
    }
})(jQuery);
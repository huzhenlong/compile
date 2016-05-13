/**
 * Created by HZL on 2016/2/22.
 */

(function ($, window, document, undefined) {
    //统计数据
    $.fn.tabs = function (setting) {
        var plugin = this;
        //默认属性
        var defaults = {};

        //扩展后属性
        var options = $.extend({}, defaults, setting);

        //初始化
        var init = function () {
            plugin.empty();

            //获取外部tabs
            if (options.tabs) {
                var tabContainer = $('<div class="tabs-container"></div>').append(createTabNav(options.tabs),
                    createTabContent(options.tabs));
                plugin.append(tabContainer);
            }
        };

        //创建tabNav
        var createTabNav = function (obj) {
            var $ul = $('<ul class="nav nav-tabs"></ul>');
            for (var i = 0; i < obj.length; i++) {
                var $li;
                if (i == 0) {
                    $li = '<li class="active">' +
                        '<a data-toggle="tab" href="#tab-' + i + '" aria-expanded="true" title="' + obj[i]["title"] + '">' +
                        ' <i class="' + obj[i]["icon"] + '"></i>' +
                        '</a>' +
                        '</li>';
                } else {
                    $li = '<li>' +
                        '<a data-toggle="tab" href="#tab-' + i + '" aria-expanded="false" title="' + obj[i]["title"] + '">' +
                        ' <i class="' + obj[i]["icon"] + '"></i>' +
                        '</a>' +
                        '</li>';
                }

                $ul.append($li);
            }
            return $ul;
        };

        //创建tabContent
        var createTabContent = function (obj) {
            var $content = $('<div class="tab-content"></div>');
            for (var j = 0; j < obj.length; j++) {
                var $div;
                if (j == 0) {
                    $div = '<div id="tab-' + j + '" class="tab-pane active">' +
                        '<div class="panel-body">' +
                        obj[j]["content"] +
                        '</div></div>';
                } else {
                    $div = '<div id="tab-' + j + '" class="tab-pane">' +
                        '<div class="panel-body">' +
                        obj[j]["content"] +
                        '</div></div>';
                }

                $content.append($div);
            }
            return $content;
        };

        init();

        return plugin;
    };
})(jQuery, window, document);

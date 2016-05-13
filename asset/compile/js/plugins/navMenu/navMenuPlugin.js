/**
 * Created by HZL on 2015/12/24.
 */
(function ($, window, document, undefined) {

    //定义navMenu构造函数
    var NavMenu = function (option) {
        var that = this;

        //默认值
        that.defaults = {};

        //扩展默认值
        that.options = $.extend({}, that.defaults, option);

        //初始化
        that.init();
    };

    //定义navMenu方法
    NavMenu.prototype = {

        //初始化
        init: function () {
            var that = this;
            that.buildNavMenu();

            setTimeout(function () {
                $("#loadingLeft").hide();
                $(".showLi").show()
            }, 300);
        },

        //组建navMenu
        buildNavMenu: function () {
            var that = this;
            var navWrap = $(that.createNavMenuWrap());
            var navHeader = that.createNavHeader();
            var navLoading = that.createLoading();
            var navContent = that.createNavMenuContent();
            var navUlWrap = navWrap.find("#side-menu");
            if (that.options.header) {
                navUlWrap.append(navHeader);
            }
            navUlWrap.append(navLoading, navContent);
            $("#" + that.options.boxId).prepend(navWrap);
        },

        //创建navMenu框架
        createNavMenuWrap: function () {
            var nav = '<nav class="navbar-default navbar-static-side" role="navigation">';
            nav += '<div class="sidebar-collapse">';
            nav += '<ul class="nav metismenu" id="side-menu">';
            nav += '</ul></div></nav>';
            return nav;
        },

        //创建navHeader
        createNavHeader: function () {
            var that = this;
            var headerObj = that.options.header;
            var navHeader = '<li class="nav-header" style="text-align: center;">';
            navHeader += '<div class="dropdown profile-element">';
            navHeader += '<span>';
            navHeader += '<a href="/index.html" name="index"><img alt="image" class="img-circle" src="' + headerObj["logo"] + '" ' +
                'style="width: 120px; height: 40px;border-radius: 0;"></a>';
            navHeader += '</span>';
            navHeader += '</div>';
            navHeader += '<div class="logo-element" style="padding: 15px;"><a href="/index.html"><img alt="image" class="img-circle" src="./img/logo/x.png" ' +
                'style="width: 28px; height: 28px;border-radius:0;"></a></div></li>';
            return navHeader;
        },

        //创建loading
        createLoading: function () {
            var loading = '<li class="ibox-content" id="loadingLeft">';
            loading += '<div class="spiner-example">';
            loading += '<div class="sk-spinner sk-spinner-wave">';
            loading += '<div class="sk-rect1"></div>';
            loading += '<div class="sk-rect2"></div>';
            loading += '<div class="sk-rect3"></div>';
            loading += '<div class="sk-rect4"></div>';
            loading += '<div class="sk-rect5"></div>';
            loading += '</div></div></li>';
            return loading;
        },

        //创建navMenuContent
        createNavMenuContent: function () {
            var that = this;
            var menuContent = "";
            var navContent = that.options.content;
            for (var i = 0; i < navContent.length; i++) {
                var subMenu = navContent[i]["subMenu"];
                menuContent += '<li class="showLi" style="display: none;">';
                if (subMenu && subMenu.length > 0) {
                    menuContent += '<a><i class="fa ' + navContent[i]["icon"] + '"></i>';
                    menuContent += '<span class="nav-label">' + navContent[i]["mainMenu"] + '</span>';
                    menuContent += '<span class="fa arrow"></span>';
                    menuContent += '</a>';
                    menuContent += '<ul class="nav nav-second-level">';
                    for (var j = 0; j < subMenu.length; j++) {
                        menuContent += '<li><a class="menu-anchor" href="' + subMenu[j]["href"] + '" ' +
                            'name="' + subMenu[j]["name"] + '">' + subMenu[j]["text"] + '</a></li>';
                    }
                    menuContent += '</ul>';
                } else {
                    menuContent += '<a class="menu-anchor" href="' + navContent[i]["href"] + '" id="'+navContent[i]["id"]+'">';
                    menuContent += '<i class="fa ' + navContent[i]["icon"] + '"></i>';
                    menuContent += '<span class="nav-label">' + navContent[i]["mainMenu"] + '</span>';
                    menuContent += '</a>';
                }
                menuContent += '</li>';
            }
            return menuContent;
        }
    };

    /**
     * 导航菜单外部接口
     */
    $.fn.navBar = function (obj) {
        var plugin = this;
        new NavMenu(obj);
        return plugin;
    };

    if (!window.NavBar) {
        window.NavBar = NavMenu;
    }

})(jQuery, window, document);
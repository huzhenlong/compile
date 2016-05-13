/**
 * Created by HZL on 2015/12/25.
 */
(function () {

    $.fn.menu = function (menuList) {
        new NavBar(menuList);
    };


    $(function () {
        var loadPage = function () {
            var menuFrom = UrlUtil.getQueryString("from");
            var activeUrl = UrlUtil.getQueryString("active");

            /**
             * 回调设置菜单属性
             * @param menu
             */
            var activeMenuFunc = function (menu) {
                if (window.location.href.indexOf("index.html") != -1) {
                    return false;
                }
                if (menu.length) {
                    var parent = menu.parent();
                    if (parent && parent.attr("id") !== "side-menu") {
                        if (!parent.is('li')) {
                            parent.addClass("in");
                        } else {
                            parent.addClass("active");
                            var actives = parent.children("a");
                            if (actives.length > 0) {
                                activeList.push(actives);
                            }
                        }
                        activeMenuFunc(parent);
                    }
                }
            };

            var setActiveHrefFunc = function () {
                XREWIN.setActiveHref(this, menuFrom);
            };

            var setMenuHrefFunc = function () {
                var that = $(this);
                var href = that.attr("href");
                if (href) {
                    var from = that.attr("name");
                    href = XREWIN.appendParam(href, "sid", sid);
                    href = XREWIN.appendParam(href, "from", from);
                    that.attr("href", href);
                }
            };

            var $side = $("#side-menu");
            var userDropDown = $(".header_li");
            var logoutForm = $("#logoutForm");
            var activeList = [];
            var pageTitle = $("#page_title");
            var pageBreadcrumb = $("#page_breadcrumb");

            var sid = XREWIN.getSid();

            if (XREWIN.hasLogined()) {
                if (activeUrl && activeUrl != '') {
                    activeList.push($(Base64.decode(activeUrl)));
                }

                // 设置登出地址
                logoutForm.attr("action", XREWIN.getLogoutAction());

                // 设置右边菜单状态
                $side.find("a").each(setMenuHrefFunc);
                userDropDown.find("a").each(setMenuHrefFunc);
                var menuFromUrl = menuFrom;
                var activeMenu = $side.find("a.menu-anchor[name='" + menuFromUrl + "']");
                if (activeMenu.length == 0) {
                    activeMenu = $side.find(".menu-anchor").first();
                }
                pageTitle.text(activeMenu.text());
                activeMenuFunc(activeMenu);

                // 设置面包屑导航
                pageBreadcrumb.find("a").each(setMenuHrefFunc);
                for (var i = activeList.length; i > 0; i--) {
                    var temp = activeList[i - 1];
                    var anchorText = $.trim(temp.attr("title"));
                    if (!anchorText) {
                        anchorText = $.trim(temp.text());
                    }
                    var li = document.createElement("li");
                    if (i > 1) {
                        var a = document.createElement("a");
                        var href = temp.attr("href");
                        if (href) {
                            a.setAttribute("href", href);
                        }
                        a.innerHTML = anchorText;
                        li.appendChild(a);
                    }
                    else {
                        var strong = document.createElement("strong");
                        strong.innerHTML = anchorText;
                        li.className = "active";
                        li.appendChild(strong);
                    }

                    pageBreadcrumb.append(li);

                }
                $("a[name=addSidHref]").each(setActiveHrefFunc);

                $("#btnChangePassword").popup({
                    "title": TxtContent.pwd.mod,
                    "elements": [
                        {
                            "require": true,
                            "labelName": TxtContent.pwd.old,
                            "type": "text",
                            "name": "oldPassword"
                        },
                        {
                            "require": true,
                            "labelName": TxtContent.pwd.new,
                            "type": "text",
                            "name": "newPassword"
                        },
                        {
                            "require": true,
                            "labelName": TxtContent.pwd.repeat,
                            "type": "text",
                            "name": "confirmPassword",
                            "validators": {
                                equal: {
                                    message: TxtContent.pwd.match,
                                    field: "newPassword"
                                }
                            }
                        }
                    ],
                    "submitBindFunc": function () {
                        alert("modal_1111！");
                    },
                    "clear": true
                });

                $("#btnLogoutForm").on("click", function () {
                    document.getElementById('logoutForm').submit();
                });
            }
        };
        loadPage();

        //语言
        $("#side-menu").find(".showLi:last .menu-anchor").on("click", function () {
            localStorage['lang'] = $(this).attr("name");

            $("#content_breadcrumb").hide();
        });
    });

})();




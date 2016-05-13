/**
 * Created by HZL on 2016/3/11.
 */
(function () {
    $.fn.heapMap = function (obj) {

        var plugin = this;
        var totalLink = 0;
        var links = [];
        var counts = [];
        var totalCount = 0;
        var init = function () {
            if (obj) {
                //获取数组内容
                var url_count = obj['clickInfo'];
                for (var i = 0; i < url_count.length; i++) {
                    links.push(url_count[i]['url']);
                    counts.push(url_count[i]['clickCount']);
                }
                totalCount = obj.submitCount;
                // 循环处理A标签
                doExecuteA(links, counts, totalCount, "red");

                // 循环处理Area标签
                doExecuteArea(links, counts, totalCount, "blue");
            }
        };


        /**
         * 循环处理A标签
         *
         * @param links 链接集合
         * @param counts 点击人数集合
         * @param totalCount 总人数
         * @param color 浮动层颜色
         */
        var doExecuteA = function (links, counts, totalCount, color) {
            var as = document.getElementsByTagName("a");
            for (var i = 0; i < as.length; i++) {

                // 如果是特殊链接，则无需处理（转发、退订）
                if (as[i].href.indexOf("unsubscribe.html?") > 0 || as[i].href.indexOf("fd.html?") > 0) {
                    break;
                }

                var _count = 0;
                var _hasUrl = false;
                for (var k = 0; k < links.length; k++) {
                    if (compareUrl(convertText(links[k]), convertText(as[i].href))) {

                        _count = counts[k];

                        // 模板中的链接会出现重复的情况，为了精准标记每一个链接的点击情况。
                        // 匹配成功后将集合中当前匹配上的链接置空，这样下次循环就不会再找到它。
                        // (注：需要保证links中的链接按照由上到下的顺序排序)
                        links[k] = "";

                        _hasUrl = true;
                        break;
                    }
                }

                //if (_hasUrl) {
                // 获得浮动层的颜色百分比
                var colorRet = createColor(_count, totalCount, color);

                // 创建浮动层
                createDiv(as[i], _count, totalCount, colorRet);

                // 总数自加
                totalLink++;
                //}

            }
        };

        /**
         * 循环处理Area标签
         *
         * @param links 链接集合
         * @param counts 点击人数集合
         * @param totalCount 总人数
         * @param color 浮动层颜色
         */
        var doExecuteArea = function (names, repeats, noRepeats, color) {
            //判断是否包含map
            var mapNode = document.getElementsByTagName("map");
            var name;
            //说明存在map标签
            if (mapNode.length > 0) {
                //将所有url转换为map形式，key:url;value:index
                var urlMap = new Map();
                for (var u = 0; u < names.length; u++) {
                    name = convertText(names[u]);
                    urlMap.put(name, u);
                }

                //重复的url不再画图
                var usedUrlMap = new Map();

                //提取所有包含usemap标签的img,key:map名称，value:img对象
                var imgMap = getImgNodeWithMapPro();
                if (imgMap.size() > 0) {//说明包含图片含有usemap属性
                    for (var i = 0; i < mapNode.length; i++) {
                        //map名称
                        var mName = mapNode[i].name.toString();
                        var imgNode = imgMap.get("#" + mName);
                        //说明包含这张图片
                        if (imgNode !== undefined) {
                            for (var j = 0; j < mapNode[i].childNodes.length; j++) {
                                //map中的area节点
                                var areaNode = mapNode[i].childNodes[j];
                                //area对应的图片坐标，主要去前2个
                                var coords = areaNode.coords;
                                if (areaNode.href && areaNode.href.toString().length > 0) {
                                    var pasedUrl = convertText(areaNode.href.toString());
                                    var index = urlMap.get(pasedUrl);
                                    if (index !== undefined && usedUrlMap.get(pasedUrl) === undefined) {
                                        index = parseInt(index);
                                        var colorRet = createColor(repeats[index], noRepeats, color);
                                        //0:左边距离，1：顶端距离
                                        var coordsPoint = coords.split(",");

                                        var left = $(imgNode).offset().left + parseInt(coordsPoint[0]);
                                        var top = $(imgNode).offset().top + parseInt(coordsPoint[1]) + 20;

                                        //创建浮动层
                                        var div = getDiv(top, left, repeats[index], noRepeats, colorRet);
                                        $(imgNode).parent().append($(div));
                                        totalLink++;

                                        usedUrlMap.put(pasedUrl, "1");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };

        /**
         * 获取带有usemap属性的IMG，key:map名称，value:img对象
         * */
        var getImgNodeWithMapPro = function () {
            var m = new Map();
            var imgs = document.getElementsByTagName("img");
            if (imgs.length > 0) {
                for (var i = 0; i < imgs.length; i++) {
                    var usemap = imgs[i].useMap;
                    //说明包含usemap属性
                    if (usemap !== undefined && usemap.toString().length > 0) {
                        m.put(usemap.toString(), imgs[i]);
                    }
                }
            }
            return m;
        };

// 计算浮动框比率（保留2为小数）
        var getRate = function (num1, num2) {
            if (num2 == 0) {
                return "&nbsp;0.00%&nbsp;&nbsp;";
            }
            var rate = (num1 / num2) * 100 + "";
            var index = rate.indexOf('.');
            if (index == -1) {
                rate = rate + ".00";
            } else {
                if (index + 2 == rate.length) {
                    // 小数点后且剩下一位，补零
                    rate = rate.substring(0, (index + 2)) + "0";
                } else if (index + 3 <= rate.length) {
                    // 小数点后剩下二位及以上，保留2位
                    rate = rate.substring(0, (index + 3));
                }
            }
            return "&nbsp;" + rate + "%&nbsp;&nbsp;";
        };

// 替换特殊字符
        var convertText = function (str) {
            str = str.trim();
            str = str.replace("&amp;", "&");
            str = str.replace("&lt;", "<");
            str = str.replace("&gt;", ">");
            str = str.replace("&quot;", "\"");
            str = str.replace("#", ""); //解决ie6下链接中有#号，会被认为是锚点，而丢失问题
            return str;
        };

// 去除斜杠后比较url是否一样
        var compareUrl = function (u1, u2) {
            if (u1 != null && u2 != null) {
                var regS = new RegExp("/", "gi");
                if (u1.replace(regS, "") == u2.replace(regS, "")) {
                    return true;
                }
            }
            return false;
        };

// 根据点击比重获得浮动层的颜色
        var colorred1 = "#ffe4e7";
        var colorred2 = "#ff8f9a";
        var colorred3 = "#ff3b4e";
        var colorred4 = "#ff0016";
        var colorgreen1 = "#eeffeb";
        var colorgreen2 = "#bbffb0";
        var colorgreen3 = "#86ff71";
        var colorgreen4 = "#5fff43";
        var colorblue1 = "#e9e5ff";
        var colorblue2 = "#aa9fff";
        var colorblue3 = "#6451ff";
        var colorblue4 = "#331bff";

        var createColor = function (num1, num2, color) {
            var per = 0;
            var colorRet;
            if (num1 == 0 || num2 == 0) {
                per = 0;
            } else {
                per = num1 * 100 / num2;
            }
            if (color.indexOf("red") == 0) {
                if (per >= 0 && per <= 20) {
                    colorRet = colorred1;
                } else if (per > 20 && per <= 40) {
                    colorRet = colorred2;
                } else if (per > 40 && per <= 60) {
                    colorRet = colorred3;
                } else if (per > 60) {
                    colorRet = colorred4;
                }
            } else if (color.indexOf("blue") == 0) {
                if (per >= 0 && per <= 20) {
                    colorRet = colorblue1;
                } else if (per > 20 && per <= 40) {
                    colorRet = colorblue2;
                } else if (per > 40 && per <= 60) {
                    colorRet = colorblue3;
                } else if (per > 60) {
                    colorRet = colorblue4;
                }
            } else if (color.indexOf("green") == 0) {
                if (per >= 0 && per <= 20) {
                    colorRet = colorgreen1;
                } else if (per > 20 && per <= 40) {
                    colorRet = colorgreen2;
                } else if (per > 40 && per <= 60) {
                    colorRet = colorgreen3;
                } else if (per > 60) {
                    colorRet = colorgreen4;
                }
            }
            return colorRet;
        };

        /**
         * 创建浮动层
         *
         * @param aTag a标签元素obj
         * @param num1 点击人数
         * @param num2 总人数
         * @param colorRet 颜色
         * */
        var createDiv = function (aTag, num1, num2, colorRet) {
            var i, h;
            if (!document.getElementById || !document.getElementsByTagName) return;
            h = document.createElement("span");
            h.style.border = "#999999 1px solid";
            h.id = "btc" + totalLink;
            h.className = "heapMark";
            h.style.fontSize = "12px";
            //h.style.backgroundColor = "#fefefe";
            h.style.backgroundColor = colorRet;
            h.style.color = "#ff8800";
            h.setAttribute("id", "btc" + totalLink);
            h.style.position = "absolute";
            h.style.width = "100";
            h.style.height = "20";
            // h.style.filter = 'alpha(opacity=65)';//滤镜属性
            var pos = getPos(aTag);
            var po = getElementPos(aTag);
            if (pos) {
                h.style.top = pos.y + po.y - 58 + 65 + 20 + "px";
                //修正显示框位置和链接不匹配问题，实际就是减去顶部的loading显示框的高度，如果修改显示框高度此处也应修改。
                h.style.left = pos.x + po.x + "px";
            } else {
                h.style.top = po.y - 58 + 65 + 20 + "px";
                h.style.left = po.x + "px";
            }
            var a = " <label style='color:#000000;cursor: pointer;' title='点击关闭' num1=" + num1 + " num2=" + num2 + " onclick=\"javascript:colspan('" + "btc" + totalLink + "')\"><u>关闭</u></label>";
            h.innerHTML = "<font color='black'>" + getRate(num1, num2) + "</font>";
            //h.innerHTML = msg;
            h.innerHTML += "  " + a;
            plugin.append(h);
            //document.getElementsByTagName("body")[0].appendChild(h);
        };

        /**
         * @param top 窗口顶端距离
         * @param left 左边距离
         * @param num1
         * @param num2
         * @param colorRet
         * */
        var getDiv = function (top, left, num1, num2, colorRet) {
            var i, h;
            if (!document.getElementById || !document.getElementsByTagName) return;
            h = document.createElement("span");
            h.style.border = "#999999 1px solid";
            h.id = "btc" + totalLink;
            h.style.fontSize = "12px";
            //h.style.backgroundColor = "#fefefe";
            h.style.backgroundColor = colorRet;
            h.style.color = "#ff8800";
            h.setAttribute("id", "btc" + totalLink);
            h.style.position = "absolute";
            h.style.width = "100";
            h.style.height = "20";
            // h.style.filter = 'alpha(opacity=65)';//滤镜属性
            h.style.top = top + "px";
            h.style.left = left + "px";
            var a = " <label style='color:#000000;cursor: pointer;' title='点击关闭' num1=" + num1 + " num2=" + num2 + " onclick=\"javascript:colspan('" + "btc" + totalLink + "')\"><u>关闭</u></label>";
            h.innerHTML = "<font color='black'>" + getRate(num1, num2) + "</font>";
            //h.innerHTML = msg;
            h.innerHTML += "  " + a;
            return h;
        };

// 关闭浮动层
        var colspan = function (p) {
            var span = document.getElementById(p);
            span.style.display = "none";
        };

// 选择透明或不透明
        var clearDiv = function (item) {
            if (item.checked) {
                for (var i = 0; i < totalLink; i++) {
                    //IE
                    document.getElementById("btc" + i).style.filter = "alpha(opacity=50)";
                    //其它浏览器
                    document.getElementById("btc" + i).style.opacity = 0.5;
                }
            } else {
                for (var i = 0; i < totalLink; i++) {
                    //IE
                    document.getElementById("btc" + i).style.filter = "alpha(opacity=100)";
                    //其它浏览器
                    document.getElementById("btc" + i).style.opacity = 1;
                }
            }
        };

// 改变颜色
        var changeColors = function (color) {
            for (var i = 0; i < totalLink; i++) {
                try {
                    var span = document.getElementById("btc" + i);
                    var label = $(span).find("label");
                    var colorRet = createColor(label.attr("num1"), label.attr("num2"), color);
                    span.style.backgroundColor = colorRet;
                } catch (e) {
                }
            }
        };

        var getPos = function (obj) {
            var imgs = document.getElementsByTagName("img");
            var pos = [];
            if (obj.parentElement) {
                if (obj.parentElement.tagName.toLowerCase() == 'map') {
                    for (var i = 0; i < imgs.length; i++) {
                        var usemap = imgs[i].useMap;
                        var temp;
                        var index = usemap.indexOf('#');
                        var length = usemap.length;
                        if (index != -1) {
                            if (index + 1 > length)
                                index = -1;
                            temp = usemap.substring(index + 1, length);
                        }
                        if (temp == obj.parentElement.id || temp == obj.parentElement.name) {
                            pos[0] = getElementPos(imgs[i]).x;
                            pos[1] = getElementPos(imgs[i]).y;
                            break;
                        }
                    }
                    return {x: pos[0], y: pos[1]};
                }
            }
            return undefined;
        };

// 取得页面元素位置
        var getElementPos = function (element) {
            var ua = navigator.userAgent.toLowerCase();
            var isOpera = (ua.indexOf('opera') != -1);
            var isIE = (ua.indexOf('msie') != -1 && !isOpera); // not opera spoof
            var el = element;
            if (el.parentNode === null || el.style.display == 'none') {
                return false;
            }
            var parent = null;
            var pos = [];
            var box;
            if (el.getBoundingClientRect)    //IE
            {
                box = el.getBoundingClientRect();
                var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
                var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
                return {x: box.left + scrollLeft, y: box.top + scrollTop};
            } else if (document.getBoxObjectFor)    // gecko
            {
                box = document.getBoxObjectFor(el);
                var borderLeft = (el.style.borderLeftWidth) ? parseInt(el.style.borderLeftWidth) : 0;
                var borderTop = (el.style.borderTopWidth) ? parseInt(el.style.borderTopWidth) : 0;
                pos = [box.x - borderLeft, box.y - borderTop];
            } else    // safari & opera
            {
                pos = [el.offsetLeft, el.offsetTop];
                parent = el.offsetParent;
                if (parent != el) {
                    while (parent) {
                        pos[0] += parent.offsetLeft;
                        pos[1] += parent.offsetTop;
                        parent = parent.offsetParent;
                    }
                }
                if (ua.indexOf('opera') != -1 || (ua.indexOf('safari') != -1 && el.style.position == 'absolute')) {
                    pos[0] -= document.body.offsetLeft;
                    pos[1] -= document.body.offsetTop;
                }
            }
            if (el.parentNode) {
                parent = el.parentNode;
            } else {
                parent = null;
            }
            while (parent && parent.tagName != 'BODY' && parent.tagName != 'HTML') { // account for any scrolled ancestors
                pos[0] -= parent.scrollLeft;
                pos[1] -= parent.scrollTop;
                if (parent.parentNode) {
                    parent = parent.parentNode;
                } else {
                    parent = null;
                }
            }
            return {x: pos[0], y: pos[1]};
        };

        init();
    }
})();

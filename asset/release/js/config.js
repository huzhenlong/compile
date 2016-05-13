/**
 * Created by zw on 2015/9/28.
 */
(function () {
    var _XREWIN = function () {
    };

    /**
     * 是否是本地调试
     * @type {boolean}
     */
    _XREWIN.prototype.debug = window.location.host.indexOf("localhost") != -1;

    _XREWIN.prototype.login = false;

    /**
     * 后台是否计算中。。。
     * @type {boolean}
     */
    _XREWIN.prototype.loading = false;
    _XREWIN.prototype.loadingType = "";

    _XREWIN.prototype.config = {};

    var getCookie = function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return decodeURIComponent(arr[2]);
        }
        else {
            return "";
        }

    };

    var setCookie = function (name, value, time) {
        var strSec = getSec(time);
        var exp = new Date();
        exp.setTime(exp.getTime() + strSec * 1);
        document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString();
    };

    var getSec = function getSec(str) {
        var str1 = str.substring(1, str.length) * 1;
        var str2 = str.substring(0, 1);
        if (str2 == "s") {
            return str1 * 1000;
        }
        else if (str2 == "h") {
            return str1 * 60 * 60 * 1000;
        }
        else if (str2 == "d") {
            return str1 * 24 * 60 * 60 * 1000;
        }
    };

    var appendParam = function (url, name, value) {
        if (url && name) {
            name += "=";
            if (url.indexOf(name) == -1) {
                if (url.indexOf("?") != -1) {
                    url += "&";
                }
                else {
                    url += "?";
                }
                url += name + encodeURIComponent(value);
            }
        }
        return url;
    };

    var appendParams = function (url, paramObj) {
        for (var key in paramObj) {
            if (typeof key == 'string' && paramObj.hasOwnProperty(key)) {
                url = appendParam(url, key, paramObj[key]);
            }
        }
        return url;
    };

    var getParams = function () {
        var urlParams = {};
        (function () {
            var match,
                pl = /\+/g,  // Regex for replacing addition symbol with a space
                search = /([^&=]+)=?([^&]*)/g,
                decode = function (s) {
                    return decodeURIComponent(s.replace(pl, " "));
                },
                query = window.location.search.substring(1);

            while (match = search.exec(query))
                urlParams[decode(match[1])] = decode(match[2]);
        })();
        return urlParams;
    };

    var appendSid = function (url) {
        var sid = XREWIN.getSid();
        url = appendParam(url, "sid", sid);
        return url;
    };

    _XREWIN.prototype.appendSid = appendSid;

    _XREWIN.prototype.appendParam = appendParam;
    _XREWIN.prototype.appendParams = appendParams;

    /**
     * 取得Url上的参数
     * @type {UrlUtil.getQueryString|Function}
     */
    _XREWIN.prototype.getUrlParam = UrlUtil.getQueryString;

    _XREWIN.prototype.makeLogin = function () {
        var sid = XREWIN.getSid();
        if (sid && sid != "") {
            this.login = true;
            for (var key in this.config.urls) {
                if ("string" == typeof(key) && this.config.urls.hasOwnProperty(key)) {
                    var url = this.config.urls[key];
                    this.config.urls[key] = appendParam(url, "sid", this.getSid());
                }
            }
        }
        else {
            this.login = false;
        }
    };

    _XREWIN.prototype.hasLogined = function () {
        return this.login;
    };

    var loading = function () {
        $("#toast_r").letterfx({"fx": "smear", "letter_end": "rewind"});
    };

    var loadingTaskId = 0;

    _XREWIN.prototype.showPageLoading = function (loadingType) {
        var type = loadingType || this.loadingType;
        switch (type) {
            case "toast":
                toastr["rewin"]('<span id="toast_r">Loading...</span>');
                loading();
                loadingTaskId = setInterval(loading, 2000);
                break;
            default:
                $("#xrewinLoadingWrap").show();
                break;
        }
        this.loading = true;
    };

    _XREWIN.prototype.hidePageLoading = function () {
        toastr.clear();
        clearInterval(loadingTaskId);
        $("#xrewinLoadingWrap").hide();
        this.loading = false;
    };

    _XREWIN.prototype.openNewWindow = function (url, params) {
        var formObj = $("#new_window_form");
        if (formObj.length == 0) {
            formObj = $('<form id="new_window_form" method="post" target="_blank"></form>').appendTo('body');
        }
        var sid = XREWIN.getSid();
        if (sid) {
            url = appendParam(url, "sid", sid);
        }
        var urlParams = getParams();
        $.extend(urlParams, params);

        if (urlParams) {
            for (var urlKey in urlParams) {
                if (urlParams.hasOwnProperty(urlKey) && typeof urlParams[urlKey] == 'string') {
                    url = appendParam(url, urlKey, urlParams[urlKey]);
                }
            }
        }

        formObj.attr("action", url);
        document.getElementById("new_window_form").submit();//提交
        return true;
    };

    _XREWIN.prototype.setActiveHref = function (anchor, from) {
        var that = $(anchor);
        var href = that.attr("href");
        if (href) {
            href = appendParam(href, "sid", this.getSid());
            if (from) {
                href = appendParam(href, "from", from);
            }
            var activeEl = document.createElement("a");
            activeEl.setAttribute("href", that.attr("href"));
            if (that.attr("title")) {
                activeEl.setAttribute("title", that.attr("title"));
            }
            activeEl.innerHTML = that.text();
            var dataId = that.data("dataId");
            if (dataId) {
                href = appendParam(href, "dId", dataId);
            }
            href = appendParam(href, "active", Base64.encode(activeEl.outerHTML));
            that.attr("href", href);
        }
    };


    /** 初始化 **/
    _XREWIN.prototype.init = function () {
        _XREWIN.prototype.config.urls = {};
        _XREWIN.prototype.config.services = {
            XREWIN: "http://218.240.33.180:8000",
            WELLEMAIL: "http://218.240.33.180:8003",
            WORKFLOW: "http://218.240.33.180:8116",
            SMARTGROUP: "http://218.240.33.180:8117",
            PERSONALIZE: "http://218.240.33.180:8118",
            PLAT: "http://218.240.33.180:8119"
        };
        var urls = _XREWIN.prototype.config.urls;
        var services = _XREWIN.prototype.config.services;
        if (this.debug) {
            services.XREWIN = "http://localhost";
            services.WELLEMAIL = "http://192.168.1.5:8003";
            services.WORKFLOW = "http://192.168.1.5:8116";
            services.SMARTGROUP = "http://192.168.1.5:8117";
            services.PERSONALIZE = "http://192.168.1.5:8118";
            services.PLAT = "http://192.168.1.5:8119";
        }

        //region 登陆验证
        urls.LOGIN = services.WELLEMAIL + "/Platform/LoginPart";
        urls.LOGOUT = services.WELLEMAIL + "/Platform/LogoutPart";
        urls.LOGINURL = services.XREWIN + "/login.html";
        urls.LOGOUTURL = services.XREWIN + "/logout.html";
        urls.INDEXURL = services.XREWIN + "/index.html";
        urls.RETURNURL = services.XREWIN + "/index.html";
        //endregion

        //region 基础数据操作
        urls.SYSTEMDATAURL = services.WELLEMAIL + "/Platform/PlatformData";
        urls.CUSTOMERDATAURL = services.WELLEMAIL + "/Platform/CustomerData";
        urls.PLATFORM_LIST = services.PLAT + "/Platform/list";
        urls.PLATFORM_ADD = services.PLAT + "/Platform/add";
        urls.PLATFORM_DELETE = services.PLAT + "/Platform/delete";
        //endregion

        //region 会员操作
        urls.MEMBER_LIST = services.PLAT + "/Member/list";
        urls.MEMBER_GET = services.PLAT + "/Member/get";
        urls.MEMBER_DEL = services.PLAT + "/Member/delete";
        urls.MEMBER_IMPORT = services.PLAT + "/Member/import_members";
        /**
         urls.MEMBER_COUNT = services.PLAT + "/MemberNode/getCount";
         urls.MEMBER_DELETENODE = services.PLAT + "/MemberNode/delete";
         urls.MEMBER_CLEAR = services.PLAT + "/MemberNode/clear";
         urls.MEMBER_ADDNODE = services.PLAT + "/MemberNode/add";
         **/
            //campaign 任务操作
        urls.MEMBER_TASK = services.PLAT + "/Campaign/list";
        urls.MEMBER_TASK_PAUSE = services.PLAT + "/Campaign/parseUpload";
        urls.MEMBER_TASK_START = services.PLAT + "/Campaign/startUpload";
        //订单操作
        urls.MEMBER_ORDER_IMPORT = services.PLAT + "/Trade/import_trades";
        urls.MEMBER_ORDER_LIST = services.PLAT + "/Trade/list";
        urls.MEMBER_ORDER_DELETE = services.PLAT + "/Trade/delete";


        //endregion

        //region 工作流
        urls.WORKFLOWLISTURL = services.WORKFLOW + "/WorkFlow/list";
        urls.WORKFLOWCONURL = services.WORKFLOW + "/WorkFlow/control";
        urls.DELETEWORKFLOWURL = services.WORKFLOW + "/WorkFlow/delete";
        urls.PUBLISHWORKFLOWURL = services.WORKFLOW + "/WorkFlow/publish";
        urls.STOPWORKFLOWURL = services.WORKFLOW + "/WorkFlow/stop";
        urls.FINDWORKFLOWURL = services.WORKFLOW + "/WorkFlow/find";
        urls.WORKFLOWPAGE = services.XREWIN + "/workflow.html";
        urls.WORKFLOWLISTPAGE = services.XREWIN + "/workflows.html";
        //endregion

        //region 任务相关
        urls.MAILJOBSURL = "/test/mailjobs.json";
        //endregion

        //region 大区省市
        urls.AREAURL = services.SMARTGROUP + "/SmartGroupArea/areas";
        urls.PROVINCEURL = services.SMARTGROUP + "/SmartGroupArea/provinces";
        urls.CITYURL = services.SMARTGROUP + "/SmartGroupArea/cities";
        //endregion


        if (this.debug) {
            urls.WORKFLOWLISTURL = "/test/workflow.json";
        }

        toastr.options = {
            "closeButton": false,
            "debug": false,
            "progressBar": false,
            "preventDuplicates": false,
            "positionClass": "toast-bottom-right",
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "100000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut",
            "iconClass": "test"
        };
    };

    //region 取得Url

    _XREWIN.prototype.getIndexUrl = function () {
        var sid = getCookie("sid");
        var url = this.config.urls.INDEXURL;
        if (sid && sid != "") {
            url = appendParam(this.config.urls.INDEXURL, "sid", sid);
        }
        return url;
    };

    _XREWIN.prototype.getLoginUrl = function () {
        return Base64.encode(XREWIN.config.urls.LOGINURL);
    };

    _XREWIN.prototype.getLogoutUrl = function () {
        return Base64.encode(XREWIN.config.urls.LOGOUTURL);
    };

    _XREWIN.prototype.getLoginUrls = function () {
        var srcUrl = Base64.encode(window.location.href);
        var returnUrl = Base64.encode(this.getIndexUrl());
        return srcUrl + "|" + returnUrl;
    };

    _XREWIN.prototype.getLoginAction = function () {
        return XREWIN.config.urls.LOGIN + "?urls=" + this.getLoginUrls();
    };

    _XREWIN.prototype.getLogoutAction = function () {
        var action = appendParam(XREWIN.config.urls.LOGOUT, "sid", this.getSid());
        action = appendParam(action, "url", this.getLogoutUrl());
        return action;
    };

    _XREWIN.prototype.getSid = function () {
        var sid = getCookie("sid");
        if (!sid) {
            sid = this.getUrlParam("sid");
            if (sid) {
                setCookie("sid", sid, "1h");
            }
        }
        return sid;
    };

    _XREWIN.prototype.getMailJobsUrl = function () {
        return this.config.urls.MAILJOBSURL;
    };

    //获取工作流列表
    _XREWIN.prototype.getWorkFlowListUrl = function () {
        return this.config.urls.WORKFLOWLISTURL;
    };

    //工作流页面
    _XREWIN.prototype.getWorkFlowListPage = function () {
        return this.config.urls.WORKFLOWLISTPAGE;
    };
    //工作流页面
    _XREWIN.prototype.getWorkFlowPage = function () {
        return this.config.urls.WORKFLOWPAGE;
    };
    //删除工作流
    _XREWIN.prototype.deleteWorkFlow = function () {
        return this.config.urls.DELETEWORKFLOWURL;
    };
    //发布工作流
    _XREWIN.prototype.publishWorkFlow = function () {
        return this.config.urls.PUBLISHWORKFLOWURL;
    };
    //停止工作流
    _XREWIN.prototype.stopWorkFlow = function () {
        return this.config.urls.STOPWORKFLOWURL;
    };
    //查询工作流的名称是否重复
    _XREWIN.prototype.findWorkFlow = function () {
        return this.config.urls.FINDWORKFLOWURL;

    };

    //保存或者修改工作流
    _XREWIN.prototype.getWorkFlowControlUrl = function () {
        return this.config.urls.WORKFLOWCONURL;
    };

    //region 大区省市方法

    _XREWIN.prototype.getAreaUrl = function () {
        return this.config.urls.AREAURL;
    };

    _XREWIN.prototype.getProvinceUrl = function () {
        return this.config.urls.PROVINCEURL;
    };

    _XREWIN.prototype.getCityUrl = function () {
        return this.config.urls.CITYURL;
    };

    //endregion

    //region 基础数据链接方法
    _XREWIN.prototype.getPlatformDataUrl = function (type) {
        return appendParam(this.config.urls.PLATFORM_LIST, 'type', type);
    };

    _XREWIN.prototype.getPlatformImportUrl = function (type) {
        return appendParam(this.config.urls.PLATFORM_ADD, 'type', type);
    };

    _XREWIN.prototype.getPlatformDeleteUrl = function (type) {
        return appendParam(this.config.urls.PLATFORM_DELETE, 'type', type);
    };

    _XREWIN.prototype.getSystemDataUrl = function (type) {
        return appendParam(this.config.urls.SYSTEMDATAURL, 'type', type);
    };

    _XREWIN.prototype.getCustomerDataUrl = function () {
        return this.config.urls.CUSTOMERDATAURL;
    };
    //endregion



    //endregion

    var xrewinAjax = function (url, data, async, cache, type, dataType, processData, successFunc, errorFunc, loadingType) {
        XREWIN.showPageLoading(loadingType);
        var ret = -1;
        if (url) {
            if (type == null) {
                type = "POST";
            }
            var opt = {
                url: url,
                type: type,
                success: function (data) {
                    XREWIN.hidePageLoading();
                    if (successFunc && typeof successFunc == "function") {
                        ret = successFunc.call(opt, data);
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    XREWIN.hidePageLoading();
                    if (errorFunc && typeof errorFunc == "function") {
                        errorFunc.call(opt, data);
                    }
                    swal("错误提示", "从服务器取得数据失败，请联系管理员！", "error");
                    return -1;
                }
            };
            if (data != null) {
                opt.data = data;
            }
            if (async != null) {
                opt.async = async;
            }
            if (cache != null) {
                opt.cache = cache;
            }
            if (dataType != null) {
                opt.dataType = dataType;
            }
            if (processData != null) {
                opt.processData = processData;
                opt.contentType = false;
            }
            $.ajax(
                opt
            );
        }
        return ret;
    };

    _XREWIN.prototype.ajaxPost = function (url, data, async, successFunc, errorFunc) {
        xrewinAjax(url, data, async, null, null, null, null, successFunc, errorFunc);
    };

    _XREWIN.prototype.ajaxGet = function (url, data, async, cache, successFunc, errorFunc) {
        xrewinAjax(url, data, async, cache, "GET", null, null, successFunc, errorFunc);
    };

    _XREWIN.prototype.ajaxGetJson = function (url, data, async, cache, successFunc, errorFunc) {
        xrewinAjax(url, data, async, cache, "GET", null, "json", null, successFunc, errorFunc);
    };

    _XREWIN.prototype.ajaxGetJsonByCache = function (url, data, successFunc, errorFunc) {
        xrewinAjax(url, data, null, true, "GET", "json", null, successFunc, errorFunc);
    };

    _XREWIN.prototype.ajaxPostSync = function (url, data, async, pd, successFunc) {
        return xrewinAjax(url, data, async, null, "POST", "json", pd, successFunc, null);
    };

    _XREWIN.prototype.ajaxPostSyncCheck = function (url, data, async, pd, successFunc) {
        var sFunc = successFunc;
        var func = function (result) {
            return XREWIN.judgeResult(result, sFunc);
        };
        return xrewinAjax(url, data, async, null, "POST", "json", pd, func, null);
    };

    //调用ajax后执行函数
    _XREWIN.prototype.judgeResult = function (msg, successFunc, errorFunc) {
        if (msg) {
            if (typeof msg == "string") {
                msg = JSON.parse(msg);
            }
            var code = msg.code;
            if (code > 0) {
                if (successFunc && typeof successFunc == "function") {
                    successFunc.call(msg, msg.data);
                }
            } else {
                if (errorFunc && typeof errorFunc == "function") {
                    errorFunc.call(msg, msg.message);
                }
                swal("错误提示", msg.message, "error");
                console.log("code:" + code + " mesg:" + msg.message);
                return -1;
            }


        }
        return msg;
    };

    //操作弹出框
    _XREWIN.prototype.confirmModal = function (name, confirmFunc) {
        var txt;
        if (name) {
            txt = "【" + name + "】删除后将不能被还原！"
        } else {
            txt = '';
        }
        swal({
            title: "是否删除？",
            text: txt,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定",
            cancelButtonText: "取消"
        }, function () {
            if (confirmFunc && typeof confirmFunc == "function") {
                confirmFunc(name);
            }
        });
    };

    //拦截页面跳转
    _XREWIN.prototype.skipPrompt = function (text) {
        $(window).off().on("beforeunload", function () {
            return text;
        });
    };

    //解除拦截
    _XREWIN.prototype.unbindSkipPrompt = function () {
        $(window).off("beforeunload");
    };

    //FormData提交
    _XREWIN.prototype.FormData = function (obj, id) {
        var fd;
        if (id) {
            fd = new FormData(document.getElementById(id));
        } else {
            fd = new FormData();
        }
        if (typeof obj == "object") {
            for (var name in obj) {
                if (obj.hasOwnProperty(name)) {
                    fd.append(name, obj[name]);
                }
            }
        }

        return fd;
    };

    //添加select下的options
    _XREWIN.prototype.addOptions = function (list, val, text, box, extendVal) {
        for (var k = 0; k < list.length; k++) {
            var op = "";
            var opVal = list[k][val] || list[k];
            var opTxt = list[k][text] || list[k];
            op += '<option value="' + opVal + '" extend="' + (list[k][extendVal] ? list[k][extendVal] : "") + '">';
            op += opTxt;
            op += '</option>';
            box.append(op);
        }
    };

    //在光标位置插入内容
    _XREWIN.prototype.insertHtmlAtCaret = function (html) {
        var sel, range;
        if (window.getSelection) {
            // IE9 and non-IE
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();
                // Range.createContextualFragment() would be useful here but is
                // non-standard and not supported in all browsers (IE9, for one)
                var el = document.createElement("div");
                el.innerHTML = html;
                var frag = document.createDocumentFragment(), node, lastNode;
                while ((node = el.firstChild)) {
                    lastNode = frag.appendChild(node);
                }
                range.insertNode(frag);
                // Preserve the selection
                if (lastNode) {
                    range = range.cloneRange();
                    range.setStartAfter(lastNode);
                    range.collapse(true);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        } else if (document.selection && document.selection.type != "Control") {
            // IE < 9
            document.selection.createRange().pasteHTML(html);
        }
    };

    //提示成功弹窗
    _XREWIN.prototype.promptSuccess = function () {
        //提示保存成功
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "progressBar": false,
            "preventDuplicates": false,
            "positionClass": "toast-bottom-right",
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
        toastr['rewin']("保存成功");
    };

    //在body上存储数据
    _XREWIN.prototype.addAtBodyData = function (name, value) {
        $('body').data(name, value);
    };

    //在body上取数据
    _XREWIN.prototype.getAtBodyData = function (name) {
        return $('body').data(name);
    };

    if (!window.XREWIN) {
        window.XREWIN = new _XREWIN();
        XREWIN.init();
        XREWIN.menuFrom = UrlUtil.getQueryString("from");
        XREWIN.activeUrl = UrlUtil.getQueryString("active");

        // 设置登陆状态
        XREWIN.makeLogin();
    }

})();

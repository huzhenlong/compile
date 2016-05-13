/**
 * Created by HZL on 2016/1/15.
 */
$(function () {
    var wrap = $("#wrapper");
    //吸顶盒
    $(window).scroll(function () {
        var mark = $(".formMark");
        if ($(this).scrollTop() == 0) {
            mark.removeClass("bgColor");
        } else {
            mark.addClass("bgColor");
        }

    });

    //创建option方法
    var createOptions = function (list, val, text, box) {
        for (var k = 0; k < list.length; k++) {
            var op = "";
            var opVal = list[k][val];
            var opTxt = list[k][text];
            op += '<option value="' + opVal + '">';
            op += opTxt;
            op += '</option>';
            box.append(op);
        }
    };

    //加载分组
    SMARTGROUP.listGroup({"status": '2,or,3'}, function () {
        var obj = this.data;
        var selectBox = $("#selectGroup");
        //添加options
        createOptions(obj, "key", "name", selectBox);
        selectBox.val(localStorage['defaultGroup']);
    });

    //获取总页数
    var getTotalPageNub = function () {
        return parseInt($("#totalPages").text());
    };

    //设置总页数
    var setTotalPageNub = function (num) {
        $("#totalPages").text(num);
    };

    //设置每页显示条数
    var setCurPageShowNub = function (num) {
        $("#curPageNub").text(num);
    };

    //获取每页显示条数
    var getCurPageShowNub = function () {
        return $("#pageNub").val();
    };

    //获取分组值
    var getGroupVal = function () {
        return $("#selectGroup").val();
    };

    //获取当前页数
    var getCurPageNub = function () {
        return parseInt($("#curPage").text());
    };

    //设置当前页数
    var setCurPageNub = function (num) {
        $("#curPage").text(num);
    };
    //设置信息条数
    var setInfoNub = function (num) {
        $("#totalInfo").text(num);
    };

    //获取信息条数
    var getInfoNub = function () {
        return $("#totalInfo").text();
    };

    //获取条件key
    var getConditionKey = function () {
        return $("body").data("key");
    };

    //获取数据
    var getData = function () {
        //查询数据
        var fd = new FormData(document.getElementById("previewSearch"));
        fd.append("key", XREWIN.getUrlParam("key"));
        fd.append("groupKey", getGroupVal());
        return fd;
    };

    //预览内容
    var temCount = '1';
    var showChange = function (msg, curPageNub) {
        var temBox, zoom, template;
        var conBox = $(".contentBox");
        if (conBox) {
            conBox.remove();
        }
        temCount = getCurPageShowNub();
        switch (temCount) {
            case '1':
                temBox = $('<div class="boxWrap1 contentBox"></div>');
                zoom = 1;
                break;
            case '2':
                temBox = $('<div class="boxWrap2 contentBox"></div>');
                zoom = .9;
                break;
            case '4':
                temBox = $('<div class="boxWrap4 contentBox"></div>');
                zoom = .45;
                break;
        }
        for (var i = 0; i < temCount; i++) {
            if($.isArray(msg) && msg.length == 0){
                template = $('<div class="templateWrap"></div>').append(localStorage['defaultMail']).css("zoom", zoom);
            }else {
                template = $('<div class="templateWrap"></div>').append($.isArray(msg) ? msg[i] : msg.html).css("zoom", zoom);
            }
            var temp = temBox.append(template);
            wrap.append(temp);
        }
        var infoNub = getInfoNub();
        setCurPageShowNub(temCount);
        setTotalPageNub(Math.ceil(infoNub / temCount));
        setCurPageNub(curPageNub);
    };

    //调用接口
    var msg = PERSONALIZE.getMailTemplate({"data": XREWIN.getUrlParam("key")});
    localStorage['defaultMail'] = msg.html;
    localStorage['defaultGroup'] = msg.groupKey;
    $("#selectGroup").val(msg.groupKey);
    showChange(msg, 1);

    //获取页面数据接口
    var getPagePort = function (curPage) {
        var loading = $(".sk-spinner");
        if (loading.is(":visible")) {
            loading.hide();
        }
        var conditionKey = getConditionKey();
        if (conditionKey) {
            var fd = new FormData();
            fd.append("key", conditionKey);
            fd.append("pageSize", getCurPageShowNub());
            fd.append("curPage", curPage || getCurPageNub());
            PERSONALIZE.gotoPagePreview(fd, function () {
                showChange(this.data.htmlList, curPage || getCurPageNub());
            });
        } else {
            $("#previewSearchBtn").trigger("click");
        }
    };

    //变更页面显示数量
    var preVal = 1, curVal;
    $("#pageNub").off().on("change", function () {
        curVal = parseInt($(this).val());
        if (getConditionKey()) {
            var page = Math.ceil(preVal * getCurPageNub() / curVal);
            getPagePort(page);
        } else {
            var loading = $(".sk-spinner");
            showChange(msg, getCurPageNub());
            loading.show();
            $(".templateWrap").not(".templateWrap:first").css("opacity", ".1");
            if (curVal == 1) {
                loading.hide();
            }
        }
        preVal = curVal;
    });

    //点击首页
    $("#homePage").off().on("click", function () {
        setCurPageNub(1);
        getPagePort();
    });

    //点击下一页
    $("#nextPage").off().on("click", function () {
        if (getCurPageNub() == getTotalPageNub()) {
            return false;
        }
        setCurPageNub(getCurPageNub() + 1);
        getPagePort();
    });

    $(document).on("keydown", function (e) {
        var e = e || window.e;
        if (e.keyCode == 39) {
            $("#nextPage").trigger('click');
        } else if (e.keyCode == 37) {
            $("#prePage").trigger('click');
        }
    });

    //点击上一页
    $("#prePage").off().on("click", function () {
        if (getCurPageNub() == 1) {
            return false;
        }
        setCurPageNub(getCurPageNub() - 1);
        getPagePort();
    });

    //点击尾页
    $("#endPage").off().on("click", function () {
        setCurPageNub(getTotalPageNub());
        getPagePort();
    });

    //跳转到
    $("#goTo").off().on("click", function () {
        var input = $("#checkInput");
        var inputVal = input.val();
        if(inputVal){
            if (inputVal > getTotalPageNub()) {
                swal("当前页数大于总页数", "", "error");
            } else {
                setCurPageNub(inputVal);
                getPagePort();
                input.val('')
            }
        }
    });

    var $input = $("#checkInput");
    $input.off().on("click", function () {
        var that = $(this);
        that.attr("max", getTotalPageNub());
    });

    $input.off().on("keydown", function (e) {
        var e = e || window.e;
        if (e.keyCode == 13) {
            e.preventDefault();
            e.stopPropagation();
            $("#goTo").trigger('click');
        }
    });

    //点击查询
    $("#previewSearchBtn").off().on("click", function () {
        PERSONALIZE.previewMail(getData(), function () {
            var data = this.data;
            setInfoNub(data.total);
            if(data.total == 0){
                swal("",TxtContent.noData,"warning")
            }
            $("body").data("key", data.key);
            if(data.total == 0){
                setTotalPageNub(0);
            }
            else{
                getPagePort(1);
            }

        });
    });
});

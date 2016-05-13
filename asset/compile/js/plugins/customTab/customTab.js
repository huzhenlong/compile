/**
 * Created by HZL on 2016/3/3.
 */
(function () {
    $("li.showLi").on("click", function () {
        var that = $(this);
        var id = $(".customTab",that).attr("href");
        that.addClass("active").siblings("li").removeClass("active");
        $(id).addClass("active").siblings("div").removeClass("active");
    });
})();
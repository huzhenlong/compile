/**
 * Created by HZL on 2016/5/10.
 */
var user = PLAT.getUser();
if (user) {
    $("#userName").text(user.userName);
    $("#userInfo").hover(function () {
        $(this).css("background", "#fff");
        $("#userInfoContent").show();
    }, function () {
        $(this).css("background", "#f3f3f4");
        $("#userInfoContent").hide();
    });
}

$("#setting").click(function () {
    var href = $(this).data('href');
    XREWIN.openNewWindow(href);
});

$("#loginTime").text(TxtContent.loginTime);
$("#memberScore").text(TxtContent.memberScore);
$("#homePage").text(TxtContent.homePage);
var lang = localStorage['lang'] ? localStorage['lang'] : '';
if(lang == 'SMSReport'){
    lang = '';
}
$("#lang").val(lang);

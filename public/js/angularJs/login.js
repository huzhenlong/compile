/**
 * Created by HZL on 2016/5/10.
 */
 (function () {
        var sid = XREWIN.getSid();
        if (sid && sid != "") {
            window.location.href = XREWIN.getIndexUrl();
        }


    })();
    $(function () {

        var loginForm = $("#loginForm");
        loginForm.attr("action", XREWIN.getLoginAction());
        var ckRememberMe = $("#ckRememberMe");
        ckRememberMe.on("change", function () {
            $.cookie("sid", "");
        });
        var error = XREWIN.getUrlParam("error");
        if (error) {
            alert(Base64.decode(error));
        }

        localStorage['lang'] = '';
        $("#lg").click(function () {
            localStorage['lang'] = $(this).val();
        });
    });




 angular.module("login", [])
            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('{[{');
                $interpolateProvider.endSymbol('}]}');
            })
            .controller("loginXrewin", function ($scope) {
                $scope.title = TxtContent.login.title;
                $scope.login = TxtContent.login.login;
                $scope.useName = TxtContent.login.useName;
                $scope.pwd = TxtContent.login.pwd;
                $scope.forgetPwd = TxtContent.login.forgetPwd;
                $scope.loginTime = TxtContent.login.loginTime;

            });
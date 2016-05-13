/**
 * Created by HZL on 2016/5/10.
 */
angular.module("chart", [])
    .config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
    })
    .controller("chartInfo", function ($scope) {
        $scope.client = TxtContent.client;
        $scope.taskData = TxtContent.taskData;
        $scope.dayPart = TxtContent.dayPart;
        $scope.endPage = TxtContent.endPage;

        $scope.homePage = TxtContent.homePage;
        $scope.prePage = TxtContent.prePage;
        $scope.nextPage = TxtContent.nextPage;
        $scope.bar = TxtContent.bar;
        $scope.skip = TxtContent.skip;
        $scope.total = TxtContent.total;
        $scope.page = TxtContent.page;
        $scope.skip = TxtContent.skip;
        $scope.current = TxtContent.current;
        $scope.perPage = TxtContent.perPage;
        $scope.info = TxtContent.info;
        $scope.perPage = TxtContent.perPage;
        $scope.mail = TxtContent.mail;
        $scope.search = TxtContent.search;
        $scope.tel = TxtContent.tel;
        $scope.importTel = TxtContent.importTel;
        $scope.email = TxtContent.email;
        $scope.importEmail = TxtContent.importEmail;
        $scope.taskInfo = TxtContent.taskInfo;
        $scope.totalCase = TxtContent.totalCase;
        $scope.clickCase = TxtContent.clickCase;
        $scope.clickMap = TxtContent.clickMap;
    });
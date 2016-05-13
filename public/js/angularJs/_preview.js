/**
 * Created by HZL on 2016/5/10.
 */
 angular.module("preview", [])
            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('{[{');
                $interpolateProvider.endSymbol('}]}');
            })
            .controller("previewCon", function ($scope) {
                $scope.selGroup = TxtContent.selGroup;
                $scope.homePage = TxtContent.homePage;
                $scope.importEmail = TxtContent.importEmail;
                $scope.email = TxtContent.email;
                $scope.importTel = TxtContent.importTel;
                $scope.tel = TxtContent.tel;
                $scope.search = TxtContent.search;
                $scope.mail = TxtContent.mail;
                $scope.page = TxtContent.page;
                $scope.total = TxtContent.total;
                $scope.page = TxtContent.page;
                $scope.info = TxtContent.info;
                $scope.perPage = TxtContent.perPage;
                $scope.bar = TxtContent.bar;
                $scope.current = TxtContent.current;
                $scope.bar = TxtContent.bar;
                $scope.prePage = TxtContent.prePage;
                $scope.nextPage = TxtContent.nextPage;
                $scope.endPage = TxtContent.endPage;
                $scope.skip = TxtContent.skip;
            });
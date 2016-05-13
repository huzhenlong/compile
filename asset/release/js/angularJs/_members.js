/**
 * Created by HZL on 2016/5/10.
 */
angular.module("member", [])
            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('{[{');
                $interpolateProvider.endSymbol('}]}');
            })
            .controller("memberList", function ($scope) {
                $scope.list = TxtContent.list;
                $scope.nick = TxtContent.nick;
                $scope.importNick = TxtContent.importNick;
                $scope.search = TxtContent.search;
                $scope.tel = TxtContent.tel;
                $scope.importTel = TxtContent.importTel;
                $scope.email = TxtContent.email;
                $scope.importEmail = TxtContent.importEmail;
                $scope.memberCon = TxtContent.memberCon;
                $scope.orderCon = TxtContent.orderCon;
                $scope.otherCon = TxtContent.otherCon;
            });
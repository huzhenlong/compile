/**
 * Created by HZL on 2016/5/10.
 */
angular.module("group", [])
            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('{[{');
                $interpolateProvider.endSymbol('}]}');
            })
            .controller("fixGroup", function ($scope) {
                $scope.addMember = TxtContent.addMember;
                $scope.nick = TxtContent.nick;
                $scope.importNick = TxtContent.importNick;
                $scope.search = TxtContent.search;
                $scope.tel = TxtContent.tel;
                $scope.importTel = TxtContent.importTel;
                $scope.email = TxtContent.email;
                $scope.importEmail = TxtContent.importEmail;
                $scope.addGroup = TxtContent.addGroup;
                $scope.fixGroup = TxtContent.fixGroup;
                $scope.delGroup = TxtContent.delGroup;
                $scope.memberList = TxtContent.memberList;
                $scope.addMember = TxtContent.addMember;
                $scope.memberCon = TxtContent.memberCon;
                $scope.orderCon = TxtContent.orderCon;
                $scope.otherCon = TxtContent.otherCon;
                $scope.confirm = TxtContent.confirm;
                $scope.close = TxtContent.close;
                $scope.selGroup = TxtContent.selGroup;
                $scope.add = TxtContent.add;

            });
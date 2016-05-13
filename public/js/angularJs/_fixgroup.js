/**
 * Created by HZL on 2016/5/10.
 */
angular.module("smart", [])
    .config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
    })
    .controller("memModal", function ($scope) {

        $scope.upload = TxtContent.upload;
        $scope.close = TxtContent.close;
        $scope.bind = TxtContent.bind;
        $scope.memberFile = TxtContent.memberFile;
        $scope.brand = TxtContent.brand;
        $scope.taskName = TxtContent.taskName;
        $scope.importMember = TxtContent.importMember;
    })
    .controller("smartGroup", function ($scope) {
        $scope.name = TxtContent.name;
        $scope.importName = TxtContent.importName;
        $scope.addGroup = TxtContent.addGroup;
        $scope.newImportGroup = TxtContent.newImportGroup;
        $scope.importGroupList = TxtContent.importGroupList;
        $scope.close = TxtContent.close;
        $scope.add = TxtContent.add;
    });
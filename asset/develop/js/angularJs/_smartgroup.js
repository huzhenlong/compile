/**
 * Created by HZL on 2016/5/10.
 */
angular.module("sg", [])
            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('{[{');
                $interpolateProvider.endSymbol('}]}');
            })
            .controller("smartGroup", function ($scope) {
                $scope.sgConSwitch = TxtContent.sgConSwitch;
                $scope.refresh = TxtContent.refresh;
                $scope.save = TxtContent.save;
                $scope.del = TxtContent.del;
                $scope.clear = TxtContent.clear;
            });
/**
 * Created by HZL on 2016/5/10.
 */
angular.module("total", [])
            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('{[{');
                $interpolateProvider.endSymbol('}]}');
            })
            .controller("totalCase", function ($scope) {
                $scope.taskInfo = TxtContent.taskInfo;
                $scope.totalCase = TxtContent.totalCase;
            });


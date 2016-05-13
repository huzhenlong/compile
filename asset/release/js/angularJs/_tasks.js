/**
 * Created by HZL on 2016/5/10.
 */
 angular.module("task", [])
            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('{[{');
                $interpolateProvider.endSymbol('}]}');
            })
            .controller("taskList", function ($scope) {
                $scope.taskList = TxtContent.taskList;
            });

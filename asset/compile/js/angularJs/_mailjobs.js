/**
 * Created by HZL on 2016/5/10.
 */
 angular.module("task", [])
            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('{[{');
                $interpolateProvider.endSymbol('}]}');
            })
            .controller("taskList", function ($scope) {
                $scope.search = TxtContent.search;
                $scope.sendTime = TxtContent.sendTime;
                $scope.brand = TxtContent.brand;
                $scope.importStartTime = TxtContent.importStartTime;
                $scope.importEndTime = TxtContent.importEndTime;

                $scope.brandList = TxtContent.brandList;
                $scope.taskList = TxtContent.taskList;
                $scope.taskName = TxtContent.taskName;
                $scope.importTaskName = TxtContent.importTaskName;
                $scope.taskList = TxtContent.taskList;

            });
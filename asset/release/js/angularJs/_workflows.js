/**
 * Created by HZL on 2016/5/10.
 */
angular.module("wk", [])
            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('{[{');
                $interpolateProvider.endSymbol('}]}');
            })
            .controller("wkTable", function ($scope) {
                $scope.flowList = TxtContent.flowList;
                $scope.addWorkFlow = TxtContent.addWorkFlow;
            });
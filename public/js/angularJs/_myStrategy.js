/**
 * Created by HZL on 2016/5/10.
 */
angular.module("strategy", [])
            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('{[{');
                $interpolateProvider.endSymbol('}]}');
            })
            .controller("strategyCon", function ($scope) {
                $scope.myStrategy = TxtContent.myStrategy;
            });
/**
 * Created by HZL on 2016/5/10.
 */
 angular.module("sgList", [])
            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('{[{');
                $interpolateProvider.endSymbol('}]}');
            })
            .controller("smartGroupList", function ($scope) {
                $scope.sgList = TxtContent.sgList;
                $scope.addSmartGroup = TxtContent.addSmartGroup;
            });

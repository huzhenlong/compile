/**
 * Created by HZL on 2016/5/10.
 */
angular.module("lv", [])
            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('{[{');
                $interpolateProvider.endSymbol('}]}');
            })
            .controller("lvSetting", function ($scope) {
                $scope.lvSetting = TxtContent.lvSetting;
                $scope.addLv = TxtContent.addLv;
                $scope.lvConfig = TxtContent.lvConfig;
                $scope.brandConfig = TxtContent.brandConfig;
            });

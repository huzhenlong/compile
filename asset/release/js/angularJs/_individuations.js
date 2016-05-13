/**
 * Created by HZL on 2016/5/10.
 */
angular.module("email", [])
             .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('{[{');
                $interpolateProvider.endSymbol('}]}');
            })
            .controller("emailList", function ($scope) {
                $scope.emailList = TxtContent.emailList;
                $scope.import = TxtContent.import;

            });
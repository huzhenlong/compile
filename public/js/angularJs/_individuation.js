/**
 * Created by HZL on 2016/5/10.
 */
angular.module("iEditor", [])
            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('{[{');
                $interpolateProvider.endSymbol('}]}');
            })
            .controller("individuation", function ($scope) {
                $scope.close = TxtContent.close;
                $scope.src = TxtContent.src;
                $scope.cancel = TxtContent.cancel;
                $scope.save = TxtContent.save;
                $scope.template = TxtContent.template;
                $scope.head = TxtContent.head;
                $scope.img = TxtContent.img;
                $scope.bottom = TxtContent.bottom;
                $scope.saveTemplate = TxtContent.saveTemplate;
                $scope.save = TxtContent.save;
                $scope.send = TxtContent.send;
                $scope.addTemplate = TxtContent.addTemplate;
                $scope.check = TxtContent.check;
                $scope.clear = TxtContent.clear;
                $scope.send = TxtContent.send;
                $scope.width = TxtContent.width;
                $scope.height = TxtContent.height;
                $scope.send = TxtContent.send;
                $scope.del = TxtContent.del;
            });
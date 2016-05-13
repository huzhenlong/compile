/**
 * Created by HZL on 2016/5/10.
 */
angular.module("work", [])
            .config(function ($interpolateProvider) {
                $interpolateProvider.startSymbol('{[{');
                $interpolateProvider.endSymbol('}]}');
            })
            .controller("workFlow", function ($scope) {
                $scope.save = TxtContent.save;
                $scope.del = TxtContent.del;
                $scope.clear = TxtContent.clear;
                $scope.preview = TxtContent.preview;

                $scope.finish = TxtContent.finish;
                $scope.flowCheck = TxtContent.flowCheck;
                $scope.play = TxtContent.play;
                $scope.pause = TxtContent.pause;
                $scope.stop = TxtContent.stop;
                $scope.addWorkFlow = TxtContent.addWorkFlow;

                $scope.roi = TxtContent.roi;
            });

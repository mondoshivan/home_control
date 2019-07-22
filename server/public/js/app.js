define(["require", "exports", "angular", "jqueryui"], function (require, exports, angular) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function start() {
        angular.element(document).ready(function () {
            var myApp = angular.module('myApp', []);
            myApp.controller("myController", function ($scope) {
                $scope.message = "AngularJS Tutorial";
            });
            angular.element(function () {
                angular.bootstrap(document, ['myApp']);
            });
        });
    }
    exports.start = start;
});

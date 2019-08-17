define(["require", "exports", "angular", "jqueryui"], function (require, exports, angular) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function start() {
        angular.element(document).ready(function () {
            angular.module('myApp', [])
                .controller("myController", function ($scope) {
                $scope.players = [
                    { firstName: 'Richard', secondName: 'Golz' },
                    { firstName: 'Harald', secondName: 'Spörl' },
                    { firstName: 'Carsten', secondName: 'Kober' },
                    { firstName: 'Stefan', secondName: 'Rode' },
                    { firstName: 'Jan', secondName: 'Furtok' }
                ];
                $scope.rowLimit = 3;
            });
            angular.element(function () {
                angular.bootstrap(document, ['myApp']);
            });
        });
    }
    exports.start = start;
});


import * as $ from 'jquery';
import 'jqueryui';
import * as angular from 'angular';

export function start() {

    angular.element(document).ready(function() {
        angular.module('myApp', [])
            .controller("myController", function ($scope) {
                $scope.players = [
                    { firstName: 'Richard', secondName: 'Golz'},
                    { firstName: 'Harald', secondName: 'Spörl'},
                    { firstName: 'Carsten', secondName: 'Kober'},
                    { firstName: 'Stefan', secondName: 'Rode'},
                    { firstName: 'Jan', secondName: 'Furtok'}
                ];

                $scope.rowLimit = 3;
            });

        angular.element(function() {
            angular.bootstrap(document, ['myApp']);
        });
    });


}
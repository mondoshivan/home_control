
import * as $ from 'jquery';
import 'jqueryui';
import * as angular from 'angular';

export function start() {

    angular.element(document).ready(function() {
        var myApp = angular.module('myApp', []);
        myApp.controller("myController", function ($scope) {
            $scope.message = "AngularJS Tutorial"
        });

        angular.element(function() {
            angular.bootstrap(document, ['myApp']);
        });
    });


}
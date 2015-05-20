var app = angular.module('bravofire', ['ngRoute']).config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'templates/main.html',
            controller: 'mainController'
        })
});
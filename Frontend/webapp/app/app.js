'use strict';

// Declare app level module which depends on views, and components
var app =
    angular.module('myApp',
        ['ui.router', 'ui.bootstrap']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('dashboard', {
            templateUrl: '/app/boot.html'
        })
        .state('dashboard.home', {
            url: '/',
            templateUrl: '/app/Dashboard/dashboard.html',
            controller: 'DashboardController'
        })
        .state('dashboard.item', {
            url: '/{itemId}',
            templateUrl: '/app/Dashboard/Item/item.html',
            controller: 'ItemController'
        })
}]);

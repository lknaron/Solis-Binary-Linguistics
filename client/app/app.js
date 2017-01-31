'use strict';
/*
 * File: app.js 
 * Description: Top level control of the application
 * Date: 1/28/2017
 */

// setup main app module and other modules
var app = angular.module('app', ['ngRoute',
                                 'app.login']);

// main app routing
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo : '/login'
        })
        .when('/login', {
            templateUrl : 'app/login/loginView.html',
            controller : 'loginController'
        })
        .when('/studentHome', {
            templateUrl : 'app/users/studentView.html'
        })
        .when('/badrequest', {
            templateUrl : 'app/errors/404.html'
        })
        .otherwise({
            redirectTo : '/badrequest'
        });
});
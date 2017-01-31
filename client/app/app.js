'use strict';
/*
 * File: app.js 
 * Description: Top level control of the application
 */

// setup main app module and other modules
var app = angular.module('app', ['ngRoute', 'app.login', 'app.account']);

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
        .when('/createAccount', {
            templateUrl : 'app/account/createAccountView.html',
            controller : 'createAccountController'
        })
        .when('/viewAccount', {
            templateUrl : 'app/account/accountView.html',
            controller : 'viewAccountController'
        })
        .when('/badrequest', {
            templateUrl : 'app/errors/404.html'
        })
        .otherwise({
            redirectTo : '/badrequest'
        });
});
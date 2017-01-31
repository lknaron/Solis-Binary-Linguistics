'use strict';
/*
 * File: app.js 
 * Description: Top level control of the application
 */

// setup main app module and other modules
var app = angular.module('app', ['ngRoute',
                                 'app.login',
                                 'app.account',
                                 'app.student']);

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
            templateUrl : 'app/users/studentView-test.html'
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

// service to store username to send get method to retriece user data for landing page
// Possibly move this to Services.js file (if needed)
app.service('LoginNameService', function() {
    this.loginName = '';
    this.setLoginName = function(name) {
        this.loginName = name;
    }
    this.getLoginName = function() {
       return this.loginName;
    }
});
'use strict';
/*
 * File: app.js 
 * Description: Top level control of the application
 */

// setup main app module and other modules
var app = angular.module('app', ['ngRoute',
                                 'app.login',
                                 'app.account',
                                 'app.student',
                                 'app.application',
                                 'app.services']);

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
        .when('/contactInfo', {
            templateUrl : 'app/application/contactInfoView.html'
        })
        .when('/education', {
            templateUrl : 'app/application/educationView.html'
        })
        .when('/employment', {
            templateUrl : 'app/application/employmentView.html'
        })
        .when('/availability', {
            templateUrl : 'app/application/availabilityView.html'
        })
        .when('/languages', {
            templateUrl : 'app/application/languagesView.html'
        })
        .when('/courses', {
            templateUrl : 'app/application/coursesView.html'
        })
        .otherwise({
            redirectTo : '/badrequest'
        });
});
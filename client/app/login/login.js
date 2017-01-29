'use strict'
/*
 * File: login.js
 * Description: Establishes login page module and controller
 */

// setup login module
var login = angular.module('app.login', ['ngRoute']);

// login page controller
login.controller('loginController', function($scope, $location, $http) {
    $scope.username = 'my name';
    $scope.password = 'my password';
    $scope.submitLogin = function() {
        var loginData = {'username':$scope.username, 'password':$scope.password};
        $http.post('https://localhost:3443/login', loginData).then(function successCallback(response) {
            console.log('successful post');
            console.log(response.data.typeUser);
            if (response.data.typeUser === 1) {
                // go to student home
                $location.path('/studentHome');
            }            
        }, function errorCallback(response) {
            console.log('unsuccessful post');
            //TODO
        });
    }
});
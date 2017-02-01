'use strict'
/*
 * File: login.js
 * Description: Establishes login page module and controller
 */

// setup login module
var login = angular.module('app.login', ['ngRoute']);

// login page controller
login.controller('loginController', function($scope, $location, $http, LoginNameService) {
    $scope.username = '';
    $scope.password = '';
    $scope.submitLogin = function() {
        var loginData = {'username':$scope.username, 'password':$scope.password};
        //!!!!-put service here to capture username after form submit!!!!
        LoginNameService.setLoginName($scope.username);
        $http.post('/login', loginData).then(function successCallback(response) {
            console.log('successful post');
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

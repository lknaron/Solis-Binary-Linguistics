'use strict'
/*
 * File: login.js
 * Description: Establishes login page module and controller
 */

// setup login module
var login = angular.module('app.login', ['ngRoute']);

// login page controller
login.controller('loginController', function($scope, $location, $http, UserInfoService, FirstTimeLoginService) {
    $scope.message = '';
    if (FirstTimeLoginService.isFirstTime()) {
        $scope.message = FirstTimeLoginService.firstTimeMessage();
    }
    $scope.submitLogin = function() {
        $scope.message = '';
        FirstTimeLoginService.setFirstTime(false);
        var loginData = {'username':$scope.username, 'password':$scope.password};        
        $http.post('/login', loginData).then(function successCallback(response) {
            if (response.data.error === 0) {
                UserInfoService.setUserId($scope.username);
                UserInfoService.setFullName(response.data.firstName + ' ' + response.data.lastName);
                UserInfoService.setUserType(response.data.type);
                UserInfoService.setLastSaved(response.data.lastSaved);
                UserInfoService.setAppStatus(response.data.appStatus);
                UserInfoService.setToken(response.data.token);
                if (response.data.type === 'student') {
                    // go to student home
                    $location.path('/studentHome');
                } else if (response.data.type === 'faculty') {
                    $location.path('/facultyHome');
                }
                /* other types TODO */
            } else if (response.data.error === 1) {
                // no such user exists
                $scope.message = 'Login name not found';
            } else if (response.data.error === 2) {
                // incorrect password
                $scope.message = 'Incorrect password';
            } else {
                // TODO
            }      
        }, function errorCallback(response) {
            console.log('unsuccessful post');
            //TODO
        });
    }
});
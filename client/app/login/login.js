'use strict'
/*
 * File: login.js
 * Description: Establishes login page module and controller
 */

// setup login module
var login = angular.module('app.login', ['ngRoute']);

// login page controller
login.controller('loginController', function($scope, $location, $http, UserInfoService) {
    $scope.username = '';
    $scope.password = '';
    $scope.submitLogin = function() {
        var loginData = {'username':$scope.username, 'password':$scope.password};
        $http.post('/login', loginData).then(function successCallback(response) {
            console.log('successful post');
            UserInfoService.setUserId($scope.username);
            UserInfoService.setUserName(response.data.firstName + ' ' + response.data.lastName);
            UserInfoService.setUserType(response.data.type);
            if (response.data.type === 'student') {
                // go to student home
                $location.path('/studentHome');
            }            
        }, function errorCallback(response) {
            console.log('unsuccessful post');
            //TODO
        });
    }
});

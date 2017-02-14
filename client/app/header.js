/*
 * File: header.js
 * Description: Handles Header scopes and methods.
 */

// setup module
var header = angular.module('app.header', ['ngRoute']);

header.controller('logoutController', function($scope, $location, $http, UserInfoService) {
    $scope.logout = function() {
        UserInfoService.clearUserSession();
        $location.path('/login');
    }
    
    $scope.goHome = function() {
        console.log(UserInfoService.getUserType());
        if (UserInfoService.getUserType() === 'student') {
            $location.path('/studentHome');
        } // else other types TODO
    }
});
'use-strict'
/*
 * File: account.js
 * Description: Modules and controllers for user account creation and viewing.
 */

// setup account module
var account = angular.module('app.account', ['ngRoute']);

// account pages controllers
account.controller('createAccountController', function($scope, $location, $http, UserInfoService, FirstTimeLoginService) {
    var regTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    $scope.submitAccount = function() {     
        $scope.message = '';        
        // checks if passwords match, then posts if match
        if ($scope.password1 !== $scope.password2) {
            $scope.message = 'Passwords do not match. Please try again.';
            $scope.password1 = '';
            $scope.password2 = '';
        } else if (!checkEmail($scope.email)) {
            $scope.message = 'You must use your ASU email.';
            $scope.email = '';
            $scope.password1 = '';
            $scope.password2 = '';
        } else if (!checkPassword($scope.password1)) {
            $scope.message = 'Password Requirements:\n  -Min. 8 Characters\n  -1 Lowercase Letter\n  -1 Uppercase Letter\n  -1 Special Character(#?!@$%^&*-)';
            $scope.password1 = '';
            $scope.password2 = '';
        } else {
            var createAccountData = {
               "ASURITE_ID" : $scope.asuriteID,
                "FirstName"  : $scope.firstname,
                "MiddleName"  : $scope.middlename,
                "LastName"  : $scope.lastname,
                "UserEmail"  : $scope.email,
                "UserPassword"  : $scope.password1,
                "UserRole"  : "student",
                "RegTime"  : regTime,
                "isActive"  : 1,
                "LoginTime" : regTime
            };
            $http.post('/createAccount', createAccountData).then(function successCallback(response) {
                if (response.data.error === 0) {
                    UserInfoService.setUserId($scope.username);
                    UserInfoService.setFullName($scope.firstname + ' ' + $scope.lastname);
                    UserInfoService.setUserType('student');
                    FirstTimeLoginService.setFirstTime(true);
                    $location.path('/login');               
                } else if(response.data.error === 1) {
                    console.log(response.data.error);
                    $scope.message = 'User already exists';
                }        
            }, function errorCallback(response) {
                console.log('unsuccessful post');
                //TODO
            });
        }
    }
    
    function checkPassword(password) {
        var requirement = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
        var res = requirement.test(password);
        return res;
    }

    function checkEmail(email) {
        var require = 'asu.edu';
        var end = email.split('@')[1];
        if (end === require) {
            return true;
        }
        return false;
    }
});

account.controller('viewAccountController', function($scope) {
    //TODO
});
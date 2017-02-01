'use-strict'
/*
 * student.js used to modularize (module) and control (controllers) the Student user
 * It will control what content is displayed per user and launching of student tasks 
 * (not a student 'user account view' <- this is handled by account.js and account views)
 */

// setup student module
var student = angular.module('app.student', []);

// student view page controllers - notice UserInfoService service injected
student.controller('studentInfoController', function($scope, UserInfoService) {
    $scope.name = UserInfoService.getUserName();
});
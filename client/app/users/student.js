'use-strict'
/*
 * student.js used to modularize (module) and control (controllers) the Student user
 * It will control what content is displayed per user and launching of student tasks 
 * (not a student 'user account view' <- this is handled by account.js and account views)
 */

// setup student module
var student = angular.module('app.student', []);

student.controller('studentInfoController', function($scope, UserInfoService) {
    $scope.name = UserInfoService.getFullName();
    
    $scope.page = function() {
        var last = UserInfoService.getLastSaved();
        // im under the assumption that if the user has not started an application
        // or has completed the application, the last saved page will be null
        if (last !== 'null') {
            $scope.link = 'Continue Application';
            return '#!' + last;
        } else {
            $scope.link = 'Application';
            return '#!/contactInfo'
        }
    }
});
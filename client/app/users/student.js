'use-strict'
/*
 * student.js used to modularize (module) and control (controllers) the Student user
 * It will control what content is displayed per user and launching of student tasks 
 * (not a student 'user account view' <- this is handled by account.js and account views)
 */

// setup student module
var student = angular.module('app.student', []);

// student view page controllers - notice LoginNameService service injected
student.controller('studentNameController', function($scope, $http, LoginNameService) {
    // this will be the call (or one of the calls) to get user details to display on the student landing
    $scope.getName = function() {
        var data = {'loginName':LoginNameService.getLoginName()};
        $http.post('/getStudent', data).then(function successCallback(response) {
                console.log('successful post');
                var returnedName = response.data.firstName + ' ' + response.data.lastName;
                $scope.name = returnedName;           
            }, function errorCallback(response) {
                console.log('unsuccessful post');
                //TODO
        });
    }
        // get user name (and more later) from server
        $scope.getName();
});
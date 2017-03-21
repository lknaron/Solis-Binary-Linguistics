/*
 * File: faculty.js
 * Description: Module and controllers to handle pages of the faculty process.
 */

// setup module
var faculty = angular.module('app.faculty', []);

faculty.controller('studentEvalController', function($scope, $http, $location, $route, UserInfoService) {
    // populates the Student Evaluation dropdown   
    $scope.ratings = ['1','2','3','4','5'];  
    
    // populates students names in dropdown
    $http.get('/faculty/evaluations/appnames').then(function successCallback(response) {
        $scope.studentnames = response.data;
    }, function errorCallback(response) {
            //TODO
    });
    
    // Saves Student Evalutaion into Database
    $scope.saveEval = function(doRoute) {
        var dateObj = new Date().toISOString().slice(0, 19).replace('T', ' ');
        var studentEvalData = {
                StudentName     : $scope.selectName,
                QOneScore       : $scope.selectOne,
                QOneComments    : $scope.commentsOne,
                QTwoScore       : $scope.selectTwo,
                QTwoComments    : $scope.commentsTwo,
                QThreeScore     : $scope.selectThree,
                QThreeComments  : $scope.commentsThree,
                QFourScore      : $scope.selectFour,
                QFourComments   : $scope.commentsFour,
                DateCreated     : dateObj,
                InstructorName  : UserInfoService.getFullName()
            };
        $http.post('/faculty/evaluation', studentEvalData).then(function successCallback(response) {
            if (doRoute === true) {
                $location.path('/facultyHome'); 
            }
        }, function errorCallback(response) {
            //TODO
        });
    }
});
// View Evaluations
faculty.controller('studentEvalViewController', function($scope, $http, $location, $route) {
    // populates dropdown with all names with evaluations
    $http.get('/faculty/evaluation/names').then(function successCallback(response) {
        $scope.names = response.data;
    }, function errorCallback(response) {
            //TODO
    });
    // Searches name in database
    $scope.searchEval = function() {
        var studentEvalData = {
            name : $scope.selectName
        };
        $http.post('/faculty/evaluations', studentEvalData).then(function successCallback(response) {
            $scope.evals = response.data;
        }, function errorCallback(response) {
            //TODO
        });
    }
});
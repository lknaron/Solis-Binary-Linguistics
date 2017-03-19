'use-strict'
/*
 * users.js used to modularize (module) and control (controllers) all users home page
 * It will control what content is displayed per user and launching of users tasks 
 */

// setup user module
var user = angular.module('app.users', []);

user.controller('studentInfoController', function($scope, UserInfoService, StudentActionsService) {
    // sets application link
    switch(UserInfoService.getAppStatus()) {
        case 'new':
            $scope.link = 'Start Application';
            break;
        case 'incomplete':
            $scope.link = 'Continue Application';
            break;
        default:
            $scope.link = 'Application';
    }
    $scope.name = UserInfoService.getFullName();
    $scope.status = UserInfoService.getAppStatus();
    $scope.semesterName = StudentActionsService.callTo.deadlineSemester + ' ' + new Date(StudentActionsService.callTo.deadlineDate).getFullYear();
    $scope.deadline = new Date(StudentActionsService.callTo.deadlineDate).toString().substring(0,15);
    if (StudentActionsService.callTo.hasAppActions === 1) {
        for (var i = 0; i < StudentActionsService.callTo.appActions.length; i++) {
            var scopeName = StudentActionsService.callTo.appActions[i].page + '_items'; 
            $scope[scopeName] = StudentActionsService.callTo.appActions[i].missingItems;
        }
    }       
});

user.controller('programChairController', function($scope, $http, $location, $route, $timeout, SendClassService, UserInfoService) {
    $scope.name = UserInfoService.getFullName();
    $scope.classes = [];
    $scope.semesterNames = ['Fall', 'Spring', 'Summer'];

    angular.element(document).ready(function() {
        $http.get('/programChair/getClassNames').then(function successCallback(response) {
            for (var i in response.data) {
                if (response.data[i].Location === 'ASUOnline') {
                    var className = response.data[i].Subject + ' ' + response.data[i].CatalogNumber + '*';   
                } else {
                    var className = response.data[i].Subject + ' ' + response.data[i].CatalogNumber;    
                }
                $scope.classes.push({'class': className,'courseNumber': response.data[i].CourseNumber});
            }     
        }, function errorCallback(response) {
            //TODO
        });
        
        $http.get('programChair/getDeadline').then(function successCallback(response) {
            $scope.deadline = {date:new Date(response.data.date), semester:response.data.semester};
        }, function errorCallback(response) {
            // empty
        });
    });

    $scope.go = function(selectedClass, reload) {
        SendClassService.setClassNumber(selectedClass.courseNumber);
        SendClassService.setClassName(selectedClass.class);
        $location.path('/classSummary');
        if (reload) {
            $route.reload();
        }
    }
    
    $scope.saveDeadline = function() {
        $scope.deadlineMessage = '';
        var formatCheck = checkDeadlineDateFormat();
        if (formatCheck) {
            var data = {semester:$scope.deadline.semester, date:new Date($scope.deadline.date).toISOString().slice(0, 10)};
            $http.post('programChair/setDeadline', data).then(function successCallback(response) {
                $scope.deadlineMessage = 'Deadline successfully saved!';
                $timeout(function() { 
                    $scope.deadlineMessage = '';
                }, 900);
            }, function errorCallback(response) {
                console.log('unsuccessful post ' + response);
            });
        }
    }
    
    // format check of the deadline date - used for incorrect date format in Firefox
    function checkDeadlineDateFormat() {
        try {
            var test = new RegExp("^[2][0-9]{3}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$").test($scope.deadline.date.toISOString().slice(0, 10)); 
            return test;
        } catch (e) {
            $scope.deadlineMessage = 'Date input is incorrect! Please enter date as yyyy-mm-dd';
            return;
        }           
    } 
});
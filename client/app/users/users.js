'use-strict'
/*
 * users.js used to modularize (module) and control (controllers) all users home page
 * It will control what content is displayed per user and launching of users tasks 
 */

// setup user module
var user = angular.module('app.users', []);

user.controller('programChairController', function($scope, $http, $location, $route, SendClassService, UserInfoService) {
    $scope.name = UserInfoService.getFullName();
    $scope.classes = [];

    angular.element(document).ready(function() {
        //var user = { 'user' : UserInfoService.getUserId() };
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
    });

    $scope.go = function(selectedClass, reload) {
        SendClassService.setClassNumber(selectedClass.courseNumber);
        SendClassService.setClassName(selectedClass.class);
        $location.path('/classSummary');
        if (reload) {
            $route.reload();
        }
    }
});
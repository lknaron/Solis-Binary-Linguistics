'use-strict'
/*
 * student.js used to modularize (module) and control (controllers) the Student user
 * It will control what content is displayed per user and launching of student tasks 
 * (not a student 'user account view' <- this is handled by account.js and account views)
 */

// setup student module
var student = angular.module('app.student', []);

student.controller('studentInfoController', function($scope, UserInfoService, StudentActionsService) {
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
    if (StudentActionsService.callTo.hasAppActions === 1) {
    	for (var i = 0; i < StudentActionsService.callTo.appActions.length; i++) {
    		var scopeName = StudentActionsService.callTo.appActions[i].page + '_items'; 
        	$scope[scopeName] = StudentActionsService.callTo.appActions[i].missingItems;
    	}
    }       
});
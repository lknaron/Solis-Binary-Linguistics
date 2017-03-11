'use-strict'
/*
 * File: services.js
 * Description: Used for common custom services within the web application
 */

// setup services module
var services = angular.module('app.services',['app.application']);

/*
 * Runs check on entered hours on application employment page
 */
services.service('WorkHoursCheckService', function(WORK_HOURS) {
    this.checkHours = function(commitedHours, type, extraHours) {
        var wantedHours = 0;
        var maxHours = 0;
        if (commitedHours !== null && type !== null && extraHours !== null) {
            if (commitedHours === '10 hours per week') {
                wantedHours = 10;
            }
            else {
                wantedHours = 20;
            }
            if (type === 1) {
                maxHours = WORK_HOURS.international;
            } else {
                maxHours = WORK_HOURS.us;
            }
            wantedHours += extraHours;
            if (wantedHours > maxHours) {
                return {isOver:true, hours:wantedHours};
            } 
        }
        return {isOver:false, hours:null};
    }
});

/*
 * UserInfoService - provides the name and user type of the logged in user
 */
services.service('UserInfoService', function($window) {
    this.setUserId = function(loginId) {
        $window.sessionStorage.setItem('userId', loginId);
    } 
    this.setFullName = function(name) {
        $window.sessionStorage.setItem('userName', name);
    }   
    this.setUserType = function(type) {
        $window.sessionStorage.setItem('userType', type);
    }   
    this.setLastSaved = function(last) {
        $window.sessionStorage.setItem('lastSaved', last);
    } 
    this.setAppStatus = function(status) {
        $window.sessionStorage.setItem('appStatus', status);
    } 
    this.setToken = function(token) {
        $window.sessionStorage.setItem('token', token);
    } 
    this.getUserId = function() {
        return $window.sessionStorage.getItem('userId');
    }   
    this.getFullName = function() {
        return $window.sessionStorage.getItem('userName');
    }   
    this.getUserType = function() {
        return $window.sessionStorage.getItem('userType');
    }
    this.getLastSaved = function() {
        return $window.sessionStorage.getItem('lastSaved');
    }
    this.getAppStatus = function() {
        return $window.sessionStorage.getItem('appStatus');
    }
    this.getToken = function() {
        return $window.sessionStorage.getItem('token');
    }
    this.clearUserSession = function() {
        $window.sessionStorage.removeItem('userId');   
        $window.sessionStorage.removeItem('userName');   
        $window.sessionStorage.removeItem('userType');   
        $window.sessionStorage.removeItem('lastSaved');       
        $window.sessionStorage.removeItem('appStatus');   
        $window.sessionStorage.removeItem('token');
    }
});

/*
* Checks user session status (authentication) and if the user is authorized to
* view the route
*/
services.service('UserAuthService', function(UserInfoService, USER_ROLES) {
    this.isAuthenticated = function() {
        // converts a truthy string to boolen true or false
        // checks if user is logged in
        return !!UserInfoService.getUserId() && !!UserInfoService.getToken();
    }
    // checks if user type is authorized
    this.isAuthorized = function(authRoles) {
        if (authRoles.indexOf(USER_ROLES.all) !== -1) {
            return true;
        }
        return this.isAuthenticated() && authRoles.indexOf(UserInfoService.getUserType()) !== -1;
    }
});

/*
 * request: adds the stored token to the http call Authorization header     
 * responseError: andles unauthorized response from server
 */
services.service('AuthInterceptor', function($injector, $location, UserInfoService) {
   return {
       request : function(config) {
           config.headers.Authorization = 'Bearer ' + UserInfoService.getToken();
           return config;
       },
       responseError : function(response) {
           // user no longer authenticated - server responded with 401
           UserInfoService.clearUserSession();
           $location.path('/unauthorized');
       }
   } 
});

/*
 * Notifies user of successful account creation
 */
services.service('FirstTimeLoginService', function() {
    this.firstTime = false;
    
    this.setFirstTime = function(val) {
        this.firstTime = val;
    }
    this.isFirstTime = function() {
        return this.firstTime;
    }
    this.firstTimeMessage = function() {
        return 'Account creation successful. Please login to continue';
    }
});

/*
 * Handles received data for Student Call to Actions
 */
services.service('StudentActionsService', function() {
    this.callTo = {};
    this.getAppActions = function() {
    	return this.callTo.AppActions;
    }
});

/*
 * Handles checking for complete application pages
 */
services.service('PageCompletionService', function() {
    this.checkFields = function(scope, page) {
        var requiredFields = ['fdsf'];
        if (page === 'contact') {
            requiredFields = ['phoneNumber', 'mobileNumber', 'addressOne', 'country', 'city', 'state', 'zip'];
        } else if (page === 'education') {
            requiredFields = ['selectedDegree', 'gpa', 'session', 'gradDate'];
            if (scope.selectedDegree === 'M.S. Other' || scope.selectedDegree === 'Ph.D Other') {
                requiredFields.push('otherDegree');
            }
        } else if (page === 'employment') {
            if (scope.ta || scope.grader === 0) {
                return 0;
            }
            requiredFields = ['hours'];
            if (scope.international === 1) {
                requiredFields.push('speakTest');
            }
            if (scope.employer) {
                requiredFields.push('workHours');
            }
            if (scope.workHours) {
                requiredFields.push('employer');
            }
        }
    	for (var i = 0; i < requiredFields.length; i++) {
    		if (!scope[requiredFields[i]]) {               
        		return 0;
        	}
   		}
        return 1;
    }
});
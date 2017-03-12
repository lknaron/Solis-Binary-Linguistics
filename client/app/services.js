'use-strict'
/*
 * File: services.js
 * Description: Used for common custom services within the web application
 */

// setup services module
var services = angular.module('app.services',[]);

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
        $window.sessionStorage.removeItem('className');
        $window.sessionStorage.removeItem('classNumber');
        $window.sessionStorage.removeItem('studentId');
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
 * Allows passing of class information between pages
 */
services.service('SendClassService', function($window) {
    this.setClassName = function(className) {
        $window.sessionStorage.setItem('className', className);
    }
    this.getClassName = function() {
        return $window.sessionStorage.getItem('className');
    }
    this.setClassNumber = function(classNumber) {
        $window.sessionStorage.setItem('classNumber', classNumber);
    }
    this.getClassNumber = function() {
        return $window.sessionStorage.getItem('classNumber');
    }
});

/*
 * Allows passing of student information between pages
 */
services.service('SendStudentService', function($window) {
    this.setStudentId = function(studentId) {
        $window.sessionStorage.setItem('studentId', studentId);
    }
    this.getStudentId = function() {
        return $window.sessionStorage.getItem('setStudentId');
    }
});
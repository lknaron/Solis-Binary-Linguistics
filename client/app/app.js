'use strict';
/*
 * File: app.js 
 * Description: Top level control of the application
 */

// setup main app module and other modules
var app = angular.module('app', ['ngRoute',
                                 'app.login',
                                 'app.header',
                                 'app.account',
                                 'app.student',
                                 'app.application',
                                 'app.services']);

app.constant('USER_ROLES', {
    all: '*',
    administrative: 'administrative',
    faculty: 'faculty',
    human_resources: 'human resources',
    program_chair: 'program chair',
    student: 'student'
});

app.run(function($rootScope, $location, UserAuthService, UserInfoService, USER_ROLES) {
   $rootScope.$on('$routeChangeStart', function(event, next) {
       var authRoles = next.permissions;
       if (!UserAuthService.isAuthorized(authRoles)) {
           event.preventDefault();
           if (UserAuthService.isAuthenticated()) {
               // user is logged in but not allowed - 403
               $location.path('/forbidden')
           } else if (authRoles.indexOf(USER_ROLES.all) !== -1) {
               // user is not restricted but no such file exists - 404
               $location.path('/badrequest')
           } else {
               // user is not or no longer logged in - 401
               UserInfoService.clearUserSession();
               $location.path('/unauthorized');
           }
       }
   }); 
});

app.config(function($routeProvider, $httpProvider, USER_ROLES) {
    $routeProvider
        .when('/', {
            redirectTo : '/login',
            permissions : [USER_ROLES.all]
        })
        .when('/login', {
            templateUrl : 'app/login/loginView.html',
            controller : 'loginController',
            permissions : [USER_ROLES.all]
        })
        .when('/studentHome', {
            templateUrl : 'app/users/studentView.html',
            permissions : [USER_ROLES.student]
        })
        .when('/createAccount', {
            templateUrl : 'app/account/createAccountView.html',
            controller : 'createAccountController',
            permissions : [USER_ROLES.all]
        })
        .when('/viewAccount', {
            templateUrl : 'app/account/accountView.html',
            controller : 'viewAccountController',
            permissions : [USER_ROLES.all]
        })
        .when('/badrequest', {
            templateUrl : 'app/errors/404.html',
            permissions : [USER_ROLES.all]
        })
        .when('/unauthorized', {
            templateUrl : 'app/errors/401.html',
            permissions : [USER_ROLES.all]
        })
        .when('/forbidden', {
            templateUrl : 'app/errors/403.html',
            permissions : [USER_ROLES.all]
        })
        .when('/contactInfo', {
            templateUrl : 'app/application/contactInfoView.html',
            controller : 'contactInfoController',
            permissions : [USER_ROLES.student]
        })
        .when('/education', {
            templateUrl : 'app/application/educationView.html',
            controller : 'educationInfoController',
            permissions : [USER_ROLES.student]
        })
        .when('/employment', {
            templateUrl : 'app/application/employmentView.html',
            controller : 'employmentInfoController',
            permissions : [USER_ROLES.student]
        })
        .when('/availability', {
            templateUrl : 'app/application/availabilityView.html',
            controller : 'availabilityInfoController',
            permissions : [USER_ROLES.student]
        })
        .when('/languages', {
            templateUrl : 'app/application/languagesView.html',
            controller : 'languagesInfoController',
            permissions : [USER_ROLES.student]
        })
        .when('/courses', {
            templateUrl : 'app/application/coursesView.html',
            controller : 'coursesInfoController ',
            permissions : [USER_ROLES.student]
        })
        .otherwise({
            redirectTo : '/badrequest',
            permissions : [USER_ROLES.student]
        });
    
    $httpProvider.interceptors.push([
        '$injector',
        function($injector) {
            return $injector.get('AuthInterceptor');
        }
    ]);
});
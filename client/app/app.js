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
                                 'app.users',
                                 'app.programChair',
                                 'app.application',
                                 'app.services',
                                 'app.directives'
                                 ]);

app.constant('USER_ROLES', {
    all: '*',
    administrative: 'administrative',
    faculty: 'faculty',
    human_resources: 'human resources',
    program_chair: 'program chair',
    student: 'student'
});

app.constant('APPLICATION_LINKS', {
	Contact : '#!/contactInfo',
    Education : '#!/education',
    Employment : '#!/employment',
    Availability : '#!/availability',
    Languages : '#!/languages',
    Courses : '#!/courses'
});

/* Upon a change in route, this checks if the user is logged in and is the correct 
 * user type to view the route. 
 * Sets the css layout for the next page. 
 * Reroutes a logged in user to home page if they attempt to access login page.
 */
app.run(function($rootScope, $location, UserAuthService, UserInfoService, USER_ROLES) {
    $rootScope.$on('$routeChangeStart', function(event, next) {
       // reroute logged in user from hitting login page
       if (next.templateUrl === 'app/login/loginView.html' && UserAuthService.isAuthenticated()) {
           if (UserInfoService.getUserType() === USER_ROLES.student) {
                $location.path('/studentHome'); 
           } else if (UserInfoService.getUserType() === USER_ROLES.faculty) {
                $location.path('/facultyHome'); 
           }    // rest TODO
       }
       // checks if a user is authorized to view a page
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
   $rootScope.$on('$routeChangeSuccess', function(event, current, next) {
        // this is here to grab the layout after path changes in routeChangeStart above
        $rootScope.layout = current.layout;
   }); 
});

app.config(function($locationProvider, $routeProvider, $httpProvider, USER_ROLES) {
    $routeProvider
        .when('/', {
            redirectTo : '/login',
            permissions : [USER_ROLES.all]
        })
        .when('/login', {
            templateUrl : 'app/login/loginView.html',
            controller : 'loginController',
            permissions : [USER_ROLES.all],
            layout : "/app/login/css/login.css"
        })
        .when('/studentHome', {
            templateUrl : 'app/users/studentView.html',
            permissions : [USER_ROLES.student],
            resolve : {
                    getActions : function($q, $http, UserInfoService, StudentActionsService, AppStatusService) {
                      var deferred = $q.defer();
                          $http({method: 'POST', 
                                 url: '/getStudentActions', 
                                 data: {user: UserInfoService.getUserId()}}).then(function(getActions) {
                                   StudentActionsService.callTo = getActions.data;	
                                   AppStatusService.setStatuses(getActions.data);
                                   deferred.resolve(getActions);
                          });
                    return deferred.promise;
                    }  
                }
        })
        .when('/facultyHome', {
            templateUrl : 'app/users/facultyView.html',
            permissions : [USER_ROLES.faculty]
        })
        .when('/administrationHome', {
            templateUrl : 'app/users/administrationView.html',
            permissions : [USER_ROLES.administrative]
        })
        .when('/programChairHome', {
            templateUrl : 'app/users/programChairView.html',
            permissions : [USER_ROLES.program_chair]
        })
        .when('/classSummary', {
            templateUrl : 'app/programChair/classSummaryView.html',
            permissions : [USER_ROLES.program_chair]
        })
        .when('/createFacultyAdminAccount', {
            templateUrl : 'app/account/createFacultyAdminAccountView.html',
            permissions : [USER_ROLES.program_chair],
            layout : "/app/account/css/createFacultyAdminAccount.css"
        })
        .when('/assignStudent', {
            templateUrl : 'app/programChair/assignStudentView.html',
            permissions : [USER_ROLES.program_chair]
        })
        .when('/studentProfile', {
            templateUrl : 'app/programChair/studentProfileView.html',
            permissions : [USER_ROLES.program_chair]
        })
        .when('/createAccount', {
            templateUrl : 'app/account/createAccountView.html',
            controller : 'createAccountController',
            permissions : [USER_ROLES.all],
            layout : "/app/account/css/createAccount.css"
        })
        .when('/viewAccount', {
            templateUrl : 'app/account/accountView.html',
            controller : 'viewAccountController',
            permissions : [USER_ROLES.student, USER_ROLES.faculty,
                           USER_ROLES.administrative, USER_ROLES.human_resources,
                           USER_ROLES.program_chair]
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
            permissions : [USER_ROLES.student],
            layout : "/app/application/css/contactInfo.css"
        })
        .when('/education', {
            templateUrl : 'app/application/educationView.html',
            controller : 'educationInfoController',
            permissions : [USER_ROLES.student],
            layout : "/app/application/css/education.css"
        })
        .when('/employment', {
            templateUrl : 'app/application/employmentView.html',
            controller : 'employmentInfoController',
            permissions : [USER_ROLES.student],
            layout : "/app/application/css/employment.css"
        })
        .when('/availability', {
            templateUrl : 'app/application/availabilityView.html',
            controller : 'availabilityInfoController',
            permissions : [USER_ROLES.student],
            layout : "/app/application/css/availability.css"
        })
        .when('/languages', {
            templateUrl : 'app/application/languagesView.html',
            controller : 'languagesInfoController',
            permissions : [USER_ROLES.student],
            layout : "/app/application/css/languages.css"
        })
        .when('/courses', {
            templateUrl : 'app/application/coursesView.html',
            controller : 'coursesInfoController',
            permissions : [USER_ROLES.student],
            layout : "/app/application/css/courses.css"
        })
        .otherwise({
            redirectTo : '/badrequest',
            permissions : [USER_ROLES.all]
        });
    
    // adds http interceptor for adding token to Auth header
    $httpProvider.interceptors.push([
        '$injector',
        function($injector) {
            return $injector.get('AuthInterceptor');
        }
    ]);
});
/*
 * File: application.js
 * Description: Module and controllers to handle pages of the TA/Grader application process.
 */

// setup module
var application = angular.module('app.application', []);

application.controller('contactInfoController', function($scope, $location, $http) {
    $scope.saveContact = function(doRoute) {
        /*
        $http.post(route, data).then(function successCallback(response) {
            console.log('successful post');
            }            
        }, function errorCallback(response) {
            console.log('unsuccessful post');
            //TODO
        });*/
        if (doRoute === true) {
           $location.path('/education'); 
        }
    }
});

application.controller('educationInfoController', function($scope, $location, $http) {
    $scope.saveEducation = function(doRoute) {
        /*
        $http.post(route, data).then(function successCallback(response) {
            console.log('successful post');
            }            
        }, function errorCallback(response) {
            console.log('unsuccessful post');
            //TODO
        });*/
        if (doRoute === true) {
           $location.path('/employment'); 
        }
    }
});

application.controller('employmentInfoController', function($scope, $location, $http) {
    $scope.saveEmployment = function(doRoute) {
        /*
        $http.post(route, data).then(function successCallback(response) {
            console.log('successful post');
            }            
        }, function errorCallback(response) {
            console.log('unsuccessful post');
            //TODO
        });*/
        if (doRoute === true) {
           $location.path('/availability'); 
        }
    }
});

application.controller('availabilityInfoController', function($scope, $location, $http) {
    $scope.saveAvailability = function(doRoute) {
        /*
        $http.post(route, data).then(function successCallback(response) {
            console.log('successful post');
            }            
        }, function errorCallback(response) {
            console.log('unsuccessful post');
            //TODO
        });*/
        if (doRoute === true) {
           $location.path('/languages'); 
        }
    }
});

application.controller('languagesInfoController', function($scope, $location, $http) {
    $scope.saveLanguages= function(doRoute) {
        /*
        $http.post(route, data).then(function successCallback(response) {
            console.log('successful post');
            }            
        }, function errorCallback(response) {
            console.log('unsuccessful post');
            //TODO
        });*/
        if (doRoute === true) {
           $location.path('/courses'); 
        }
    }
});

application.controller('coursesInfoController', function($scope, $location, $http) {
    $scope.saveCourses= function(doRoute) {
        /*
        $http.post(route, data).then(function successCallback(response) {
            console.log('successful post');
            }            
        }, function errorCallback(response) {
            console.log('unsuccessful post');
            //TODO
        });*/
        if (doRoute === true) {
           //TODO; 
        }
    }
});
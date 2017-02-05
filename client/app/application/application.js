/*
 * File: application.js
 * Description: Module and controllers to handle pages of the TA/Grader application process.
 */

// setup module
var application = angular.module('app.application', []);

application.controller('contactInfoController', function($scope, $location, $http) {
    getContactInfo();
    $scope.saveContact = function(doRoute) {
        /*$http.post(route, data).then(function successCallback(response) {
            console.log('successful post');
        }, function errorCallback(response) {
            console.log('unsuccessful post');
            //TODO
        });*/
        if (doRoute === true) {
           $location.path('/education'); 
        }
    }
    
    // populates the Contact Info page
    function getContactInfo() {          
        $http.get('route').then(function successCallback(response) {
            $scope.phoneNumber = response.data.PhoneNumber;
            $scope.mobileNumber = response.data.MobilePhone;
            $scope.country = response.data.AddressCountry;
            $scope.addressOne = response.data.AddressOne;
            if (response.data.AddressTwo != null) {
                $scope.addressTwo = response.data.AddressTwo;
            }
            $scope.city = response.data.AddressCity;
            $scope.state = response.data.AddressState;
            $scope.zip = response.data.AddressZip;        
        }, function errorCallback(response) {
                //TODO
        });
    }
});

application.controller('educationInfoController', function($scope, $location, $http) {
    // degree options - possbily move to more configurable location
    $scope.degrees = ["Ph.D Computer Science",
                      "Ph.D Computer Engineering",
                      "Ph.D SMACS",
                      "Ph.D Other",
                      "M.S. Software Engineering",
                      "M.S. Computer Engineering",
                      "M.C.S Computer Science",
                      "M.S. Other"];
    $scope.gradDates = ["Fall 2017",
                        "Spring 2018",
                        "Fall 2018",
                        "Sping 2019",
                        "Fall 2019",
                        "Spring 2020"];
    getEducationInfo();
    
    // saves data and posts - routes if the user chose to continue
    $scope.saveEducation = function(doRoute) {
        
        /*
        $http.post(route, educationData).then(function successCallback(response) {
            console.log('successful post');           
        }, function errorCallback(response) {
            console.log('unsuccessful post');
            //TODO
        });*/
        if (doRoute === true) {
           $location.path('/employment'); 
        }
    }
    
    // populates Education page
    function getEducationInfo() {
                
        $http.get('route').then(function successCallback(response) {
            switch (response.data.EducationLevel) {
                case "Ph.D Computer Science":
                    $scope.selectedDegree = $scope.degrees[0];
                    break;
                case "Ph.D Computer Engineering":
                    $scope.selectedDegree = $scope.degrees[1];
                    break;
                case "Ph.D SMACS":
                    $scope.selectedDegree = $scope.degrees[2];
                    break;
                case "Ph.D Other":
                    $scope.selectedDegree = $scope.degrees[3];
                    break;
                case "M.S. Software Engineering":
                    $scope.selectedDegree = $scope.degrees[4];
                    break;
                case "M.S. Computer Engineering":
                    $scope.selectedDegree = $scope.degrees[5];
                    break;
                case "M.S. Computer Science":
                    $scope.selectedDegree = $scope.degrees[6];
                    break;
                case "M.S. Other":
                    $scope.selectedDegree = $scope.degrees[7];     
            }
            $scope.gpa = response.data.GPA;
            $scope.otherDegree = response.data.DegreeProgram;
            $scope.probation = response.data.isAcademicProbabtion;
            $scope.fourPlusOne = response.data.isFourPlusOne;
            $scope.international = response.data.isInternationalStudent;
            $scope.speakTest = response.data.SpeakTest;
            $scope.session = response.data.FirstSession;
            switch (response.data.GraduationDatel) {
                case "Fall 2017":
                    $scope.gradDate = $scope.gradDates[0];
                    break;
                case "Spring 2018":
                    $scope.gradDate = $scope.gradDates[1];
                    break;
                case "Fall 2018":
                    $scope.gradDate = $scope.gradDates[2];
                    break;
                case "Spring 2019":
                    $scope.gradDate = $scope.gradDates[3];
                    break;
                case "Fall 2019":
                    $scope.gradDate = $scope.gradDates[4];
                    break;
                case "Spring 2020":
                    $scope.gradDate = $scope.gradDates[5];
            }
        }, function errorCallback(response) {
            //TODO
        });
    }
});

application.controller('employmentInfoController', function($scope, $location, $http) {
    getEmploymentInfo();
    
    $scope.saveEmployment = function(doRoute) {
        /*
        $http.post(route, data).then(function successCallback(response) {
            console.log('successful post');          
        }, function errorCallback(response) {
            console.log('unsuccessful post');
            //TODO
        });*/
        if (doRoute === true) {
           $location.path('/availability'); 
        }
    }
    
    // populates Employment Page
    function getEmploymentInfo() {
        
        $http.get('route').then(function successCallback(response) {
            $scope.hours = response.data.TimeCommitment;
            $scope.ta = response.data.isTA;
            $scope.grader = response.data.isGrader;
            $scope.employer = response.data.CurrentEmployer;
            $scope.workHours = response.data.WorkHours;
        }, function errorCallback(response) {
                //TODO
        });
    }
});

application.controller('availabilityInfoController', function($scope, $location, $http) {
    
    $scope.saveAvailability = function(doRoute) {
        /*
        $http.post(route, data).then(function successCallback(response) {
            console.log('successful post');          
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
    getLanguagesInfo();
    $scope.saveLanguages= function(doRoute) {
        /*
        $http.post(route, data).then(function successCallback(response) {
            console.log('successful post');            
        }, function errorCallback(response) {
            console.log('unsuccessful post');
            //TODO
        });*/
        if (doRoute === true) {
           $location.path('/courses'); 
        }
    }
    
    function getLanguagesInfo() {
                
        $http.get('route').then(function successCallback(response) {
            $scope.c = response.data.isC;
            $scope.c_group = response.data.CLevel;
            $scope.csharp = response.data.isCSharp;
            $scope.csharp_group = response.data.CSharpLevel;
            $scope.cplusplus = response.data.isCPlusPlus;
            $scope.cpp_group = response.data.CPlusPlusLevel;
        }, function errorCallback(response) {
                //TODO
        });
    }
});

application.controller('coursesInfoController', function($scope, $location, $http) {
    $scope.saveCourses= function(doRoute) {
        /*
        $http.post(route, data).then(function successCallback(response) {
            console.log('successful post');          
        }, function errorCallback(response) {
            console.log('unsuccessful post');
            //TODO
        });*/
        if (doRoute === true) {
           //TODO; 
        }
    }
});
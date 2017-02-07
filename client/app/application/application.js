/*
 * File: application.js
 * Description: Module and controllers to handle pages of the TA/Grader application process.
 */

// setup module
var application = angular.module('app.application', []);

application.controller('contactInfoController', function($scope, $location, $http) {
    // populates the Contact Info page        
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
    angular.element(document).ready(function(){
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
    });
    
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
});

application.controller('employmentInfoController', function($scope, $location, $http) {
    angular.element(document).ready(function(){
        $http.get('route').then(function successCallback(response) {
            $scope.hours = response.data.TimeCommitment;
            $scope.ta = response.data.isTA;
            $scope.grader = response.data.isGrader;
            $scope.employer = response.data.CurrentEmployer;
            $scope.workHours = response.data.WorkHours;
        }, function errorCallback(response) {
            //TODO
        });
    });
    
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
});

application.controller('availabilityInfoController', function($scope, $location, $http) {
    	$scope.times = [
			{'startHour':'12:00am','endHour':'01:00am'},
			{'startHour':'01:00am','endHour':'02:00am'},
			{'startHour':'02:00am','endHour':'03:00am'},
			{'startHour':'03:00am','endHour':'04:00am'},
			{'startHour':'04:00am','endHour':'05:00am'},
			{'startHour':'05:00am','endHour':'06:00am'},
			{'startHour':'06:00am','endHour':'07:00am'},
			{'startHour':'07:00am','endHour':'08:00am'},
			{'startHour':'08:00am','endHour':'09:00am'},
			{'startHour':'09:00am','endHour':'10:00am'},
			{'startHour':'10:00am','endHour':'11:00am'},
			{'startHour':'11:00am','endHour':'12:00pm'},
			{'startHour':'12:00pm','endHour':'01:00pm'},
			{'startHour':'01:00pm','endHour':'02:00pm'},
			{'startHour':'02:00pm','endHour':'03:00pm'},
			{'startHour':'03:00pm','endHour':'04:00pm'},
			{'startHour':'04:00pm','endHour':'05:00pm'},
			{'startHour':'05:00pm','endHour':'06:00pm'},
			{'startHour':'06:00pm','endHour':'07:00pm'},
			{'startHour':'07:00pm','endHour':'08:00pm'},
			{'startHour':'08:00pm','endHour':'09:00pm'},
			{'startHour':'09:00pm','endHour':'10:00pm'},
			{'startHour':'10:00pm','endHour':'11:00pm'},
			{'startHour':'11:00pm','endHour':'12:00am'}];
            
        $scope.days = ['Sunday',
        			   'Monday',
                       'Tuesday',
                       'Wednesday',
                       'Thursday',
                       'Friday',
                       'Saturday'];
    
        $scope.saveAvailability = function(doRoute) {
            var availableSlots = [];
            var data = $scope.processAvailability('fall',false,availableSlots);
            // TEST--displays on the console the saved values--TEST
  			for (var i = 0; i < data.length; i++) {
    			console.log(data[i]);
  			}
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
        

        // saves all checked values
		$scope.processAvailability = function(semesterName, finish, availableSlots) {
  			var timeslotObj = '';
        	var hours = '';
            var day = '';
            for (var x = 0; x < 7; x++) {
                day = $scope.days[x];
  				for (var i = 0; i < 24; i++) {
					if (document.getElementsByName(semesterName +'_'+ day)[i].checked === true) {
                		hours = JSON.parse(document.getElementsByName(semesterName +'_'+ day)[i].value);
      					timeslotObj = {'calendarName':semesterName,'calendarDay':day, 
                        			   'startHour':hours.startHour,'endHour':hours.endHour};
      					availableSlots.push(timeslotObj);
    				}
  				}
            }
        	if (finish !== true) {
        		$scope.processAvailability('spring', true, availableSlots);
        	}
            //package data up HERE to POST --> need to figure out format
            return availableSlots;
		}   
        
        // unchecks all boxes
        $scope.resetAll = function(semesterName, finish) {
        	for (var x = 0; x < 7; x++) {
                day = $scope.days[x];
  				for (var i = 0; i < 24; i++) {
					document.getElementsByName(semesterName +'_'+ day)[i].checked = false;
  				}
                if (finish !== true) {
                	$scope.resetAll('spring',true);
                }
            }
        } 
        //------GET-------RETRIEVE SAVED DATA---HTTP COMMENTED OUT-------------
        angular.element(document).ready(function(){
        	$scope.setPreviousSchedule('fall',false);
        });
        $scope.setPreviousSchedule = function(semesterName, finish) {
            // TEST DATA SET
            var response = {'data':[{'calendarDay':'Sunday',
                        'calendarName':'fall',
                        'startHour':'12:00am'},
                        {'calendarDay':'Sunday',
                        'calendarName':'fall',
                        'startHour':'01:00am'},
                        {'calendarDay':'Monday',
                        'calendarName':'fall',
                        'startHour':'03:00am'},
                        {'calendarDay':'Sunday',
                        'calendarName':'spring',
                        'startHour':'06:00am'},
                        {'calendarDay':'Wednesday',
                        'calendarName':'spring',
                        'startHour':'01:00am'},
                        {'calendarDay':'Tuesday',
                        'calendarName':'fall',
                        'startHour':'12:00am'},
                        {'calendarDay':'Friday',
                        'calendarName':'fall',
                        'startHour':'07:00pm'}
                       ]};
            //$http.get('route').then(function successCallback(response) {
                var slots = [];
        	    var hour = '';
                var day = '';
                for (var x = 0; x < 7; x++) {
                    day = $scope.days[x];
  				    for (var i = 0; i < 24; i++) {
                	   for (var y = 0; y < response.data.length; y++) {
				         if(semesterName === response.data[y].calendarName && 
                            day === response.data[y].calendarDay && 
                           (JSON.parse(document.getElementsByName(semesterName +'_'+ day)[i].value).startHour) === response.data[y].startHour) {
                    		   document.getElementsByName(semesterName +'_'+ day)[i].checked = true;
                    	   }
                        }
  				    }
                }
        	    if (finish !== true) {
        		  $scope.setPreviousSchedule('spring', true);
        	    }
            //}, function errorCallback(response) {
                //TODO
            //});
        }
});

application.controller('languagesInfoController', function($scope, $location, $http) {
    angular.element(document).ready(function(){
        $http.get('route').then(function successCallback(response) {
            $scope.c = response.data.isC;
            $scope.c_group = response.data.CLevel;
            $scope.csharp = response.data.isCSharp;
            $scope.csharp_group = response.data.CSharpLevel;
            $scope.cplusplus = response.data.isCPlusPlus;
            $scope.cpp_group = response.data.CPlusPlusLevel;
            $scope.css_group = response.data.CSSLevel;
            $scope.html_group = response.data.HTMLLevel;
        }, function errorCallback(response) {
            //TODO
        });
    });
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
});

application.controller('coursesInfoController', function($scope, $location, $http) {
    angular.element(document).ready(function(){
        $http.get('route').then(function successCallback(response) {
            //TODO
        }, function errorCallback(response) {
            //TODO
        });
    });
    $scope.saveCourses= function(doRoute) {
        /*
        $http.post(route, data).then(function successCallback(response) {
            console.log('successful post');          
        }, function errorCallback(response) {
            console.log('unsuccessful post');
            //TODO
        });*/
        if (doRoute === true) {
           $location.path('/studentHome'); 
        }
    }
});
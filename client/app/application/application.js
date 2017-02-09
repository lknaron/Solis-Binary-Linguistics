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
    			console.log(data[i]); // TEST--displays data that will be POST'd
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
        //------GET-------RETRIEVE SAVED DATA---COMMENT OUT HTTP TO WORK-------------
        
        // when page loads, runs setPreviousSchedule which poplulates fiels with 
        // previously saved data
        angular.element(document).ready(function(){
        	$scope.setPreviousSchedule('fall',false);
        });
    
        $scope.setPreviousSchedule = function(semesterName, finish) {
            // TEST DATA SET START-----------------------------------------------
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
            //---END TEST DATA----------------------------------------------
            
            $http.get('route').then(function successCallback(response) {
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
            }, function errorCallback(response) {
                //TODO
            });
        }
});

application.controller('languagesInfoController', function($scope, $location, $http) {
	// try moving this to Service as an angular.value or constant
	// ordered as in the database
	$scope.languages = [{'name':'C','box':'c_box','level':'c_group'},
                  	  	{'name':'C#','box':'csharp_box','level':'csharp_group'},
                  	  	{'name':'C++','box':'cpp_box','level':'cpp_group'},
                  	  	{'name':'CSS','box':'css_box','level':'css_group'},
                  	  	{'name':'HTML','box':'html_box','level':'html_group'},
                  	  	{'name':'Java','box':'java_box','level':'java_group'},
                  	  	{'name':'Javascript','box':'js_box','level':'js_group'},
                  	  	{'name':'JSON','box':'json_box','level':'json_group'},
                  	  	{'name':'List/Scheme','box':'list_scheme_box','level':'list_scheme_group'},
                  	  	{'name':'PHP','box':'php_box','level':'php_group'},
                      		{'name':'PLP','box':'plp_box','level':'plp_group'},
                 		{'name':'Prolog','box':'prolog_box','level':'prolog_group'},
                  		{'name':'Python','box':'python_box','level':'python_group'},
                  		{'name':'SQL','box':'sql_box','level':'sql_group'},
                  		{'name':'Swift','box':'swift_box','level':'swift_group'},
                  		{'name':'Verilog','box':'verilog_box','level':'verilog_group'},
                  		{'name':'XML','box':'xml_box','level':'xml_group'}
                 	   ];
                       
     $scope.ides = [{'name':'Android Studio','box':'as_box'},
     		    {'name':'Brackets','box':'brackets_box'},
                    {'name':'IntelliJ','box':'intellij_box'},
                    {'name':'NetBeans','box':'netbeans_box'},
                    {'name':'Xcode','box':'xcode_box'}
     		   ];
                   
     $scope.tools = [{'name':'Github','box':'github_box'},
     		     {'name':'Taiga','box':'taiga_box'},
                     {'name':'Slack','box':'slack_box'}
     		    ];
                 
    //on page load, retrieve prior saved data                  
    angular.element(document).ready(function(){
        $http.get('route').then(function successCallback(response) {
                // TEST TEST TEST ---example data return---
           		var response = {'data':{'languageData':{'selectionArray':[
                                                                          {'name':'C++','value':1,'level':'Expert'},
                    		   						                      {'name':'C','value':0,'level':null},
                               						     	              {'name':'C#','value':1,'level':'Novice'},
                                        				 	              {'name':'List/Scheme','value':1,'level':'Proficient'},
                                                                          {'name':'SQL','value':1,'level':'Expert'}
                                                        			     ],
                                                                          'other':'Ada'
                                                       },               					   
                                        'ideData':{'selectionArray':[
                                                                     {'name':'Brackets','value':1},
                                       					             {'name':'IntelliJ','value':1}
                                       					            ],
                                                                     'other':'Eclipse'
                                                  },
                                        'toolData':{'selectionArray':[
                                                                      {'name':'Github','value':1},
                                                                      {'name':'Slack','value':1}
                                        			                 ],
                                                                      'other':'Skype'
                                                   }                                                  
                                       }                 			            
                                }; // close json

                // fill previous saved language selections
            	for (var i = 0; i < $scope.languages.length; i++) {
                	for (var k = 0; k < response.data.languageData.selectionArray.length; k++) {
                    		if ($scope.languages[i].name === response.data.languageData.selectionArray[k].name) {
                       			$scope.languages[i].box = response.data.languageData.selectionArray[k].value;
                        		$scope.languages[i].level = response.data.languageData.selectionArray[k].level;
                    		}
                	}
            	}
                $scope.otherLanguage = response.data.languageData.other;
                
                // fill previous saved IDEs
                for (var i = 0; i < $scope.ides.length; i++) {
                	for (var k = 0; k < response.data.ideData.selectionArray.length; k++) {
                    		if ($scope.ides[i].name === response.data.ideData.selectionArray[k].name) {
                       			$scope.ides[i].box = response.data.ideData.selectionArray[k].value;
                    		}
                    	}
                }
                $scope.otherIde = response.data.ideData.other;
                
                // fill previous saved tools
                for (var i = 0; i < $scope.tools.length; i++) {
                	for (var k = 0; k < response.data.toolData.selectionArray.length; k++) {
                    		if ($scope.tools[i].name === response.data.toolData.selectionArray[k].name) {
                       			$scope.tools[i].box = response.data.toolData.selectionArray[k].value;
                    		}
                    	}
                }
                $scope.otherTool = response.data.toolData.other;
        }, function errorCallback(response) {
            //TODO
        });
    });

    // saves all data on page
    $scope.saveLanguages= function(doRoute) {
        var selectedLanguages = [];
        var selectedIdes = [];
        var selectedTools = [];
        var languageObj = {};
        var ideObj = {};
        var toolObj = {};
        var languageData = {};
        var ideData = {};
        var toolData = {};
        var dataPackage = {};
        
        // gather language data
        for (var i = 0; i < $scope.languages.length; i++) {
            if ($scope.languages[i].box === 0) {
                $scope.languages[i].level = null;
            }
            if ($scope.languages[i].level === null) {
                $scope.languages[i].box = 0
            }
            languageObj = {'name':$scope.languages[i].name, 'value':$scope.languages[i].box, 'level':$scope.languages[i].level};
            selectedLanguages.push(languageObj);
        }
        languageData = {'selectionArray':selectedLanguages,'other':$scope.otherLanguage};
        
        // gather IDE data
        for (var j = 0; j < $scope.ides.length; j++) {
        	ideObj = {'name':$scope.ides[j].name, 'value':$scope.ides[j].box};
            selectedIdes.push(ideObj);
        }
        ideData = {'selectionArray':selectedIdes,'other':$scope.otherIde};
        
        // gather tools data
        for (var k = 0; k < $scope.tools.length; k++) {
        	toolObj = {'name':$scope.tools[k].name, 'value':$scope.tools[k].box};
            selectedTools.push(toolObj);
        }
        toolData = {'selectionArray':selectedTools, 'other':$scope.otherTool};
        dataPackage = {'languageData':languageData,'ideData':ideData,'toolData':toolData}; 
        
        // TEST TEST -- displays data contents as it will be sent-------------------------------
         for (var x = 0; x < dataPackage.languageData.selectionArray.length;x++) {
            console.log(dataPackage.languageData.selectionArray[x].name +' '+ dataPackage.languageData.selectionArray[x].value + ' ' + dataPackage.languageData.selectionArray[x].level);
        }
        console.log(dataPackage.languageData.other);
        for (var y = 0; y < dataPackage.ideData.selectionArray.length; y++) {
        	console.log(dataPackage.ideData.selectionArray[y].name +' '+ dataPackage.ideData.selectionArray[y].value);
        }
        console.log(dataPackage.ideData.other);
        for (var z = 0; z < dataPackage.toolData.selectionArray.length; z++) {
        	console.log(dataPackage.toolData.selectionArray[z].name +' '+ dataPackage.toolData.selectionArray[z].value);
        }
        console.log(dataPackage.toolData.other);
        //--------------------------------------------------------------------------------------
        
        /*$http.post('route', dataPackage).then(function successCallback(response) {
            console.log('successful post');
            // move the doRoute check here so the page routes after successful data save
        }, function errorCallback(response) {
            console.log('unsuccessful post');
            // if an error occurs, notify user -- page will also not route (see success post above)
        });*/

        if (doRoute === true) {
            $location.path('/courses'); 
        }
    } // end saveLanguages
    
    $scope.clearUnselected = function() {
    	for (var i = 0; i < $scope.languages.length; i++) {
        	if ($scope.languages[i].box === 0) {
            	$scope.languages[i].level = null;
            }
        }
    }        
});

application.controller('coursesInfoController', function($scope, $location, $http) {
	// LATER - try moving this to Service as an angular.value or constant
	$scope.courses = [{'name':'ASU 101','box':'asu101_box'},
                        {'name':'CSE 110','box':'cse110_box'},
                        {'name':'CSE 205','box':'cse205_box'},
                        {'name':'CSE 230','box':'cse230_box'},
                        {'name':'CSE 240','box':'cse240_box'},
                        {'name':'CSE 563','box':'cse563_box'}, 
                        {'name':'CSE 564','box':'cse564_box'}, 
                        {'name':'CSE 566','box':'cse566_box'},  
                        {'name':'EEE/CSE 120','box':'eee_cse120_box'}, 
                        {'name':'FSE 100','box':'fse100_box'},
                        {'name':'SER 215','box':'ser215_box'},
                        {'name':'SER 216','box':'ser216_box'},
                        {'name':'SER 222','box':'ser222_box'}, 
                        {'name':'SER 315','box':'ser315_box'},
                        {'name':'SER 316','box':'ser316_box'}, 
                        {'name':'SER 321','box':'ser321_box'},
                        {'name':'SER 322','box':'ser322_box'},
                        {'name':'SER 332','box':'ser332_box'}, 
                        {'name':'SER 334','box':'ser334_box'},
                        {'name':'SER 401','box':'ser401_box'},
                        {'name':'SER 402','box':'ser402_box'},
                        {'name':'SER 415','box':'ser415_box'},
                        {'name':'SER 416','box':'ser416_box'},
                        {'name':'SER 421','box':'ser421_box'},
                        {'name':'SER 422','box':'ser422_box'},
                        {'name':'SER 423','box':'ser423_box'}, 
                        {'name':'SER 431','box':'ser431_box'},  
                        {'name':'SER 432','box':'ser432_box'},
                        {'name':'SER 450','box':'ser450_box'}, 
                        {'name':'SER 456','box':'ser456_box'},
                        {'name':'SER 486','box':'ser486_box'}, 
                        {'name':'SER 501','box':'ser501_box'},
                        {'name':'SER 502','box':'ser502_box'},
                        {'name':'SER 515','box':'ser515_box'},
                        {'name':'SER 516','box':'ser516_box'}, 
                        {'name':'SER 517','box':'ser517_box'},
                        {'name':'SER 518','box':'ser518_box'}
                       ];
                         
    //on page load, retrieve prior saved data                  
    angular.element(document).ready(function(){
        $http.get('route').then(function successCallback(response) {
	       // TEST TEST TEST ---TEST DATA-------------------------------------------
           var response = {'data':{'courses':[
                				              {'name':'SER 215','value':1},
                                              {'name':'SER 315','value':1},
                                              {'name':'SER 316','value':1},
                                              {'name':'SER 401','value':1}
                                             ],'other':'EEE 200'}};
            //---END TEST DATA-------------------------------------------------------    
            
            for (var i = 0; i < $scope.courses.length; i++) {
                for (var k = 0; k < response.data.courses.length; k++) {
                        if ($scope.courses[i].name === response.data.courses[k].name) {
                            $scope.courses[i].box = response.data.courses[k].value;
                        }
                }
            }
            $scope.otherCourse = response.data.other;
        }, function errorCallback(response) {

        });
    });

    $scope.saveCourses = function(doRoute) {
        var courseSelections = [];
        var courseObj = {};
        var coursesData = {};
        
        // gather courses data
        for (var i = 0; i < $scope.courses.length; i++) {
        	courseObj = {'name':$scope.courses[i].name, 'value':$scope.courses[i].box};
            courseSelections.push(courseObj);
        }
        coursesData = {'courses':courseSelections, 'other':$scope.otherCourse};
        
        // TEST TEST -- displays data contents as it will be sent--------------------
		for (var i = 0; i < coursesData.courses.length; i++) {
        	console.log(coursesData.courses[i].name +' '+ coursesData.courses[i].value);
        }
        console.log(coursesData.other);
        //----------------------------------------------------------------------------
        
        /*$http.post('route', dataPackage).then(function successCallback(response) {
            console.log('successful post');
            // move the doRoute check here so the page routes after successful data save
        }, function errorCallback(response) {
            console.log('unsuccessful post');
            // if an error occurs, notify user -- page will also not route (see success post above)
        });*/
        
        if (doRoute === true) {
            $location.path('/studentHome'); 
        }
    } // end saveLanguages

});
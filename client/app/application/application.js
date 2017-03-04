/*
 * File: application.js
 * Description: Module and controllers to handle pages of the TA/Grader application process.
 */

// setup module
var application = angular.module('app.application', []);

application.controller('contactInfoController', function($scope, $location, $http, UserInfoService) {
    // populates the Contact Info page        
    angular.element(document).ready(function() {
        var user = { 'user' : UserInfoService.getUserId() };
        $http.post('/contactInfo/getContactInfo', user).then(function successCallback(response) {           
            $scope.phoneNumber = response.data.PhoneNumber;
            $scope.mobileNumber = response.data.MobileNumber;
            $scope.country = response.data.AddressCountry;
            $scope.addressOne = response.data.AddressOne;
            if (response.data.AddressTwo != null) {
                $scope.addressTwo = response.data.AddressTwo;
            }
            $scope.city = response.data.AddressCity;
            $scope.state = response.data.AddressState;
            $scope.zip = response.data.AddressZip;  
            $scope.name = UserInfoService.getFullName();      
        }, function errorCallback(response) {
            //TODO
        });   
    });
    // Saves Contact Information into Database
    $scope.saveContact = function(doRoute) {
        var dateObj = new Date().toISOString().slice(0, 19).replace('T', ' ');
        var lastSaved = '';
        if (doRoute === true) {
            lastSaved = '/education';
        } else {
            lastSaved = '/contactInfo';
        }
        // In Sprint 2 address the AppStatus when someone comes back to edit their application and once they complete this it's complete and not incomplete
        // Maybe Change do Route to pass a number, 1 for true, 2 for false, 3 for changing status to complete
        var contactInfoData = {
                "PhoneNumber"       : $scope.phoneNumber,
                "MobileNumber"      : $scope.mobileNumber,
                "AddressOne"        : $scope.addressOne,
                "AddressTwo"        : $scope.addressTwo,
                "AddressCountry"    : $scope.country,
                "AddressCity"       : $scope.city,
                "AddressState"      : $scope.state,
                "AddressZip"        : $scope.zip,
                "AppStatus"         : 'Incomplete',
                "LastSaved"         : lastSaved,
                "DateCreated"       : dateObj,
                "ModifiedDate"      : dateObj,
                "ASURITE_ID"        : UserInfoService.getUserId()
            };
        $http.post('/contactInfo', contactInfoData).then(function successCallback(response) {
            if (doRoute === true) {
                $location.path('/education'); 
            }
        }, function errorCallback(response) {
            //TODO
        });
    }
});

application.controller('educationInfoController', function($scope, $location, $http, UserInfoService) {
    // degree options - possbily move to more configurable location
    $scope.degrees = ["Ph.D Computer Science",
                      "Ph.D Computer Engineering",
                      "Ph.D SMACS",
                      "Ph.D Other",
                      "M.S. Software Engineering",
                      "M.S. Computer Engineering",
                      "M.C.S Computer Science",
                      "M.S. Other"];
    $scope.gradDates = [];

    var today = new Date();
    var year = today.getFullYear();

    for(var i = 0; i < 3; i++) {
        $scope.gradDates.push("Fall " + (year + i));
        $scope.gradDates.push("Spring " + (year + (i + 1)));
        $scope.gradDates.push("Summer " + (year + (i + 1)));
    }
    
    // populates the Education page        
    angular.element(document).ready(function() {        
        var user = { 'user' : UserInfoService.getUserId() };
        $http.post('/education/getEducationInfo', user).then(function successCallback(response) {  
            $scope.selectedDegree = response.data.EducationLevel;
            $scope.gpa = response.data.GPA;
            $scope.otherDegree = response.data.DegreeProgram;
            $scope.probation = response.data.isAcademicProbation;
            $scope.fourPlusOne = response.data.isFourPlusOne;
            $scope.international = response.data.isInternationalStudent;
            $scope.speakTest = response.data.SpeakTest;
            if (response.data.FirstSession != null) {
                $scope.session = new Date(response.data.FirstSession);    
            } 
            $scope.gradDate = response.data.GraduationDatel;
        }, function errorCallback(response) {
            //TODO
        });
    });
    
    // saves data and posts - routes if the user chose to continue
    $scope.saveEducation = function(doRoute) {
        var dateObj = new Date().toISOString().slice(0, 19).replace('T', ' ');
        var lastSaved = '';
        if (doRoute === true) {
            lastSaved = '/employment';
        } else {
            lastSaved = '/education';
        }
        var educationData = {
                "EducationLevel"            : $scope.selectedDegree,
                "GPA"                       : $scope.gpa,
                "DegreeProgram"             : $scope.otherDegree,
                "isAcademicProbation"       : $scope.probation,
                "isFourPlusOne"             : $scope.fourPlusOne,
                "isInternationalStudent"    : $scope.international,
                "SpeakTest"                 : $scope.speakTest,
                "FirstSession"              : $scope.session = new Date($scope.session),
                "GraduationDate"            : $scope.gradDate,
                "LastSaved"                 : lastSaved,
                "ModifiedDate"              : dateObj,
                "ASURITE_ID"                : UserInfoService.getUserId()
            };
        
        $http.post('/education', educationData).then(function successCallback(response) {
            if (doRoute === true) {
                $location.path('/employment'); 
            }
        }, function errorCallback(response) {
            //TODO
        });
    }
});

application.controller('employmentInfoController', function($scope, $location, $http, UserInfoService) {
    var user = { 'user' : UserInfoService.getUserId() };
    angular.element(document).ready(function(){
        $http.post('/employment/getEmploymentInfo', user ).then(function successCallback(response) {
            $scope.hours = response.data.TimeCommitment;
            $scope.ta = response.data.isTA;
            $scope.grader = response.data.isGrader;
            $scope.employer = response.data.CurrentEmployer;
            $scope.workHours = response.data.WorkHours;
        }, function errorCallback(response) {
            //TODO
        });
    });
    
    // saves data and posts - routes if the user chose to continue
    $scope.saveEmployment = function(doRoute) {
        var dateObj = new Date().toISOString().slice(0, 19).replace('T', ' ');
        var lastSaved = '';
        if (doRoute === true) {
            lastSaved = '/availability';
        } else {
            lastSaved = '/employment';
        }
        var employmentData = {
                "TimeCommitment"    : $scope.hours,
                "isTA"              : $scope.ta,
                "isGrader"          : $scope.grader,
                "CurrentEmployer"   : $scope.employer,
                "WorkHours"         : $scope.workHours,
                "LastSaved"         : lastSaved,
                "ModifiedDate"      : dateObj,
                "ASURITE_ID"        : UserInfoService.getUserId()
            };
        
        $http.post('/employment', employmentData).then(function successCallback(response) {
            if (doRoute === true) {
                $location.path('/availability'); 
            }
        }, function errorCallback(response) {
            //TODO
        });
    }
});

application.controller('availabilityInfoController', function($scope, $location, $http, UserInfoService) {
    $scope.times = [
        {'startHour':'8:00 AM','stopHour':'10:00 AM'},
        {'startHour':'10:00 AM','stopHour':'12:00 PM'},
        {'startHour':'12:00 PM','stopHour':'2:00 PM'},
        {'startHour':'2:00 PM','stopHour':'4:00 PM'},
        {'startHour':'4:00 PM','stopHour':'6:00 PM'},
        {'startHour':'6:00 PM','stopHour':'8:00 PM'}];
        
    $scope.days = ['Monday',
                   'Tuesday',
                   'Wednesday',
                   'Thursday',
                   'Friday'];

    // saves data and posts - routes if the user chose to continue
    $scope.saveAvailability = function(doRoute) {
        var availableSlots = [];
        var user = UserInfoService.getUserId();
        var user2 = { 'user' : UserInfoService.getUserId() };
        $scope.processAvailability(user, availableSlots);
        if (availableSlots.length > 0) {
            $http.post('/availability', availableSlots).then(function successCallback(response) {
                if (doRoute === true) {
                    $location.path('/languages'); 
                }
            }, function errorCallback(response) {
                //TODO
            });     
        } else {
            $http.post('/availability', user2).then(function successCallback(response) {
                if (doRoute === true) {
                    $location.path('/languages'); 
                }
            }, function errorCallback(response) {
                //TODO
            }); 
        } 
    }

    // saves all checked values
    $scope.processAvailability = function(user, availableSlots) {
        var timeslotObj = [];
        var hours = '';
        var day = '';
        for (var x = 0; x < 5; x++) {
            day = $scope.days[x];
            for (var i = 0; i < 6; i++) {
                if (document.getElementsByName(day)[i].checked === true) {
                    hours = JSON.parse(document.getElementsByName(day)[i].value);
                    timeslotObj = [day, convertTime12to24(hours.startHour), convertTime12to24(hours.stopHour), user];
                    availableSlots.push(timeslotObj);
                }
            }
        }
    }

    function convertTime12to24(time12h) {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        if (hours === '12') {
            hours = '00';
        }
          
        if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
        }
        return hours + ':' + minutes + ':' + '00';
    }   
    
    // unchecks all boxes
    $scope.resetAll = function() {
        for (var x = 0; x < 5; x++) {
            day = $scope.days[x];
            for (var i = 0; i < 6; i++) {
                document.getElementsByName(day)[i].checked = false;
            }
        }
    } 
    
    // checks all boxes
    $scope.checkAll = function() {
        for (var x = 0; x < 5; x++) {
            day = $scope.days[x];
            for (var i = 0; i < 6; i++) {
                document.getElementsByName(day)[i].checked = true;
            }
        }
    }
    
    // when page loads, runs setPreviousSchedule which poplulates fiels with 
    // previously saved data
    angular.element(document).ready(function(){
        $scope.setPreviousSchedule();
    });
    
    $scope.setPreviousSchedule = function() {
        var user = { 'user' : UserInfoService.getUserId() };
        $http.post('/availability/getAvailabilityInfo', user).then(function successCallback(response) {
            var res = JSON.parse(JSON.stringify(response.data));
            if (res.data) {
                var slots = [];
                var hour = '';
                var day = '';
                for (var x = 0; x < 5; x++) {
                    day = $scope.days[x];
                    for (var i = 0; i < 6; i++) {
                        for (var y = 0; y < res.data.length; y++) {
                            if(day === res.data[y].calendarDay && 
                           (JSON.parse(document.getElementsByName(day)[i].value).startHour) === convertTime24to12(res.data[y].startHour)) {
                               document.getElementsByName(day)[i].checked = true;
                           }
                        }
                    }
                }
            }
        }, function errorCallback(response) {
            //TODO
        });
    }

    function convertTime24to12(isoTime) {
        var hours   = parseInt(isoTime.substring(0, 2), 10),
        minutes = isoTime.substring(3, 5),
        ampm    = 'AM';

        if (hours == 12) {
            ampm = 'PM';
        } else if (hours == 0) {
            hours = 12;
        } else if (hours > 12) {
            hours -= 12;
            ampm = 'PM';
        }
        return hours + ':' + minutes + ' ' + ampm;
    }
});

application.controller('languagesInfoController', function($scope, $location, $http, UserInfoService) {
    // try moving this to Service as an angular.value or constant
    // ordered as in the database
    $scope.languages = [{'name':'C','level':'c_group'},
                        {'name':'C++','level':'cpp_group'},
                        {'name':'CSS','level':'css_group'},
                        {'name':'HTML','level':'html_group'},
                        {'name':'Java','level':'java_group'},
                        {'name':'Javascript','level':'js_group'},
                        {'name':'JSON','level':'json_group'},
                        {'name':'Python','level':'python_group'},
                        {'name':'SQL','level':'sql_group'},
                        {'name':'Swift','level':'swift_group'},
                        {'name':'Verilog','level':'verilog_group'},
                        {'name':'XML','level':'xml_group'}
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
                 
    // on page load, retrieve prior saved data                  
    angular.element(document).ready(function(){
        var user = { 'user' : UserInfoService.getUserId() };
        $http.post('/languages/getLanguagesInfo', user).then(function successCallback(response) {
            var res = JSON.parse(JSON.stringify(response.data));
            // fill previous saved language selections
            // loads all other languages into array
            for (var k = 0; k < res.data.languageData.length; k++) {
                if(res.data.languageData[k].OtherLanguage != null) {
                    $scope.languages.push({'name' : res.data.languageData[k].OtherLanguage, 'level' : res.data.languageData[k].OtherLevel});   
                }
            }
            // populates page of previous language selections
            for (var i = 0; i < $scope.languages.length; i++) {
                for (var j = 0; j < res.data.languageData.length; j++) {
                    if ($scope.languages[i].name === res.data.languageData[j].isLanguage) {
                        $scope.languages[i].level = res.data.languageData[j].LanguageLevel;
                    }
                }
            }
            // fill previous saved ide selections
            // loads all other ides into array
            for (var p = 0; p < res.data.ideData.length; p++) {
                if(res.data.ideData[p].OtherIDE != null) {
                    $scope.ides.push({'name' : res.data.ideData[p].OtherIDE, 'box' : 1});     
                }
            }
            // populates page of previous ide selections
            for (var m = 0; m < $scope.ides.length; m++) {
                for (var n = 0; n < res.data.ideData.length; n++) {
                    if ($scope.ides[m].name === res.data.ideData[n].isIDE) {
                        $scope.ides[m].box = 1;
                    }  
                }
            }
            // fill previous saved tools selections
            // loads all other tools into array
            for (var s = 0; s < res.data.toolData.length; s++) {
                if(res.data.toolData[s].OtherTool != null) {
                    $scope.tools.push({'name' : res.data.toolData[s].OtherTool, 'box' : 1});     
                }
            }
            // populates page of previous tool selections
            for (var q = 0; q < $scope.tools.length; q++) {
                for (var r = 0; r < res.data.toolData.length; r++) {
                    if ($scope.tools[q].name === res.data.toolData[r].isTool) {
                        $scope.tools[q].box = 1;
                    }  
                }
            }
        }, function errorCallback(response) {
            //TODO
        });
    });

    // saves all data on page
    $scope.saveLanguages= function(doRoute) {
        var data = [];
        var languages = [];
        var ides = [];
        var tools = [];
        var user = [];
        // 12 is number of hard coded languages in $scope.languages
        for (var i = 0; i < 12; i++) {
            if ($scope.languages[i].level === 'Expert' || $scope.languages[i].level === 'Proficient' || $scope.languages[i].level === 'Novice') {
                var arr = [$scope.languages[i].name, $scope.languages[i].level, null, null, UserInfoService.getUserId()];
                languages.push(arr);
            }   
        }
        // Grabs any pre-populated Other Languages
        for (var j = 12; j < $scope.languages.length; j++) {
            if ($scope.languages[j].level === 'Expert' || $scope.languages[i].level === 'Proficient' || $scope.languages[i].level === 'Novice') {
                var arr = [null, null, $scope.languages[j].name, $scope.languages[j].level, UserInfoService.getUserId()];
                languages.push(arr);
            }
        }
        // Grabs any new Other Languages
        var count = document.getElementById('spaceforlanguages').getElementsByTagName('input').length / 4; // Each other language has 4 inputs (text, 3 radio buttons)
        if ($scope.otherLanguage != null) {
            for (var k = 0; k < count; k++) {    
                if ($scope.otherLanguage[k+1] != null && $scope.otherLanguageLevel[k+1] != null) {
                    var arr = [null, null, $scope.otherLanguage[k+1], $scope.otherLanguageLevel[k+1], UserInfoService.getUserId()]; 
                    languages.push(arr);  
                }
            } 
        }      
        data.push(languages);

        // 5 is number of hard coded ides in $scope.ides
        for (var i = 0; i < 5; i++) {
            if ($scope.ides[i].box === 1) {
                var arr = [$scope.ides[i].name, null, UserInfoService.getUserId()];
                ides.push(arr);
            }   
        }
        // Grabs any pre-populated Other IDEs
        for (var j = 5; j < $scope.ides.length; j++) {
            if ($scope.ides[j].box === 1) {
                var arr = [null, $scope.ides[i].name, UserInfoService.getUserId()];
                ides.push(arr);
            }
        }
        // Grabs any new Other IDEs
        var count = document.getElementById('spaceforides').getElementsByTagName('input').length;
        if ($scope.otherIDE != null) {
            for (var k = 0; k < count; k++) {
                if ($scope.otherIDE[k+1] != null) {
                    var arr = [null, $scope.otherIDE[k+1], UserInfoService.getUserId()]; 
                    ides.push(arr);  
                }
            }   
        }       
        data.push(ides);

        // 3 is number of hard coded tools in $scope.tools
        for (var i = 0; i < 3; i++) {
            if ($scope.tools[i].box === 1) {
                var arr = [$scope.tools[i].name, null, UserInfoService.getUserId()];
                tools.push(arr);
            }   
        }
        // Grabs any pre-populated Other Tools
        for (var j = 3; j < $scope.tools.length; j++) {
            if ($scope.tools[j].box === 1) {
                var arr = [null, $scope.tools[i].name, UserInfoService.getUserId()];
                tools.push(arr);
            }
        }
        // Grabs any new Other Tools
        var count = document.getElementById('spacefortools').getElementsByTagName('input').length;
        if ($scope.otherTool != null) {
            for (var k = 0; k < count; k++) {
                if ($scope.otherTool[k+1] != null) {
                    var arr = [null, $scope.otherTool[k+1], UserInfoService.getUserId()]; 
                    tools.push(arr);  
                }
            }
        }
        data.push(tools);
        user.push(UserInfoService.getUserId());
        data.push(user);

        $http.post('/languages', data).then(function successCallback(response) {
            if (doRoute === true) {
                $location.path('/courses'); 
            }
        }, function errorCallback(response) {
            // TO DO
        });
    } // end saveLanguages

    $scope.deselectLevel = function(element, count) {
        if (element.language) {
            element.language.level = null;   
        } else if (count)  {
            element.otherLanguageLevel[count] = null;
        }  
    }

    // Not functioning -- Still need to clear ides and tools
    /*$scope.clearUnselected = function() {
        for (var i = 0; i < $scope.languages.length; i++) {
            if ($scope.languages[i].box === 0) {
                $scope.languages[i].level = null;
            }
        }
    }*/       
});

application.controller('coursesInfoController', function($scope, $location, $http, UserInfoService) {
    var courseNames = ['isASU101','isCSE110','isCSE205','isCSE230','isCSE240','isCSE563','isCSE564','isCSE566','isCSE120','isFSE100','isSER215',
                       'isSER216','isSER222','isSER315','isSER316','isSER321','isSER322','isSER332','isSER334','isSER401','isSER402','isSER415',
                       'isSER416','isSER421','isSER422','isSER423','isSER431','isSER432','isSER450','isSER456','isSER486','isSER501','isSER502',
                       'isSER515','isSER516','isSER517','isSER518'];

    // LATER - try moving this to Service as an angular.value or constant
    $scope.courses = [{'name':'ASU 101','box':'asu101_box','pbox':'asu101p_box'},
                        {'name':'CSE 110','box':'cse110_box','pbox':'cse110p_box'},
                        {'name':'CSE 205','box':'cse205_box','pbox':'cse205p_box'},
                        {'name':'CSE 230','box':'cse230_box','pbox':'cse230p_box'},
                        {'name':'CSE 240','box':'cse240_box','pbox':'cse240p_box'},
                        {'name':'CSE 563','box':'cse563_box','pbox':'cse563p_box'}, 
                        {'name':'CSE 564','box':'cse564_box','pbox':'cse564p_box'}, 
                        {'name':'CSE 566','box':'cse566_box','pbox':'cse566p_box'},  
                        {'name':'EEE/CSE 120','box':'eee_cse120_box','pbox':'eee_cse120p_box'}, 
                        {'name':'FSE 100','box':'fse100_box','pbox':'fse100p_box'},
                        {'name':'SER 215','box':'ser215_box','pbox':'ser215p_box'},
                        {'name':'SER 216','box':'ser216_box','pbox':'ser216p_box'},
                        {'name':'SER 222','box':'ser222_box','pbox':'ser222p_box'},
                        {'name':'SER 315','box':'ser315_box','pbox':'ser315p_box'},
                        {'name':'SER 316','box':'ser316_box','pbox':'ser316p_box'}, 
                        {'name':'SER 321','box':'ser321_box','pbox':'ser321p_box'},
                        {'name':'SER 322','box':'ser322_box','pbox':'ser322p_box'},
                        {'name':'SER 332','box':'ser332_box','pbox':'ser332p_box'},
                        {'name':'SER 334','box':'ser334_box','pbox':'ser334p_box'},
                        {'name':'SER 401','box':'ser401_box','pbox':'ser401p_box'},
                        {'name':'SER 402','box':'ser402_box','pbox':'ser402p_box'},
                        {'name':'SER 415','box':'ser415_box','pbox':'ser415p_box'},
                        {'name':'SER 416','box':'ser416_box','pbox':'ser416p_box'},
                        {'name':'SER 421','box':'ser421_box','pbox':'ser421p_box'},
                        {'name':'SER 422','box':'ser422_box','pbox':'ser422p_box'},
                        {'name':'SER 423','box':'ser423_box','pbox':'ser423p_box'},
                        {'name':'SER 431','box':'ser431_box','pbox':'ser431p_box'}, 
                        {'name':'SER 432','box':'ser432_box','pbox':'ser432p_box'},
                        {'name':'SER 450','box':'ser450_box','pbox':'ser450p_box'},
                        {'name':'SER 456','box':'ser456_box','pbox':'ser456p_box'},
                        {'name':'SER 486','box':'ser486_box','pbox':'ser486p_box'}, 
                        {'name':'SER 501','box':'ser501_box','pbox':'ser501p_box'},
                        {'name':'SER 502','box':'ser502_box','pbox':'ser502p_box'},
                        {'name':'SER 515','box':'ser515_box','pbox':'ser515p_box'},
                        {'name':'SER 516','box':'ser516_box','pbox':'ser516p_box'}, 
                        {'name':'SER 517','box':'ser517_box','pbox':'ser517p_box'},
                        {'name':'SER 518','box':'ser518_box','pbox':'ser518p_box'}
                       ];
                         
    // on page load, retrieve prior saved data                  
    angular.element(document).ready(function(){
        var user = { 'user' : UserInfoService.getUserId() };
        var index = [];
        $http.post('/courses/getCoursesInfo', user).then(function successCallback(response) {
            var res = JSON.parse(JSON.stringify(response.data));
            var index = [];
            if (res.data) {
                for (var i = 0; i < courseNames.length; i++) {
                    for (var key in res.data.courses[0]) {
                        if (res.data.courses[0].hasOwnProperty(key) && key == courseNames[i]) {
                            $scope.courses[i].box = res.data.courses[0][key];
                        }
                    }
                }
                $scope.otherCourse = res.data.other;
            }
        }, function errorCallback(response) {
            // TO DO
        });

        $http.post('/courses/getCoursesTaughtInfo', user).then(function successCallback(response) {
            var res = JSON.parse(JSON.stringify(response.data));
            var index = [];
            if (res.data) {
                for (var i = 0; i < courseNames.length; i++) {
                    for (var key in res.data.courses[0]) {
                        if (res.data.courses[0].hasOwnProperty(key) && key == courseNames[i]) {
                            $scope.courses[i].pbox = res.data.courses[0][key];
                        }
                    }
                }
                $scope.otherCourseT = res.data.other;
            }
        }, function errorCallback(response) {
            // TO DO
        });
    });

    // saves data and posts - routes if the user chose to continue
    $scope.saveCourses = function(doRoute) {
        var coursesComp = {};
        var coursesTaught = {};     
        // gather courses data
        for (var i = 0; i < $scope.courses.length; i++) {
            coursesComp[courseNames[i]] = $scope.courses[i].box;
            coursesTaught[courseNames[i]] = $scope.courses[i].pbox;
        }
        coursesComp['ASURITE_ID'] = UserInfoService.getUserId();
        coursesComp['Other'] = $scope.otherCourse;
        coursesTaught['ASURITE_ID'] = UserInfoService.getUserId();
        coursesTaught['Other'] = $scope.otherCourseT;

        $http.post('/courses', coursesComp).then(function successCallback(response) {
        }, function errorCallback(response) {
            // TO DO
        });

        $http.post('/courses/coursesTaught', coursesTaught).then(function successCallback(response) {
            if (doRoute === true) {
                $location.path('/studentHome'); 
            }
        }, function errorCallback(response) {
            // TO DO
        });
    } // end saveCourses
});
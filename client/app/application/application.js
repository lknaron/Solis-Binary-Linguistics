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
    $scope.gradDates = ["Fall 2017",
                        "Spring 2018",
                        "Fall 2018",
                        "Sping 2019",
                        "Fall 2019",
                        "Spring 2020"];
    
    // populates the Education page        
    angular.element(document).ready(function() {        
        var user = { 'user' : UserInfoService.getUserId() };
        $http.post('/education/getEducationInfo', user).then(function successCallback(response) {  
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
            $scope.probation = response.data.isAcademicProbation;
            $scope.fourPlusOne = response.data.isFourPlusOne;
            $scope.international = response.data.isInternationalStudent;
            $scope.speakTest = response.data.SpeakTest;
            $scope.session = new Date(response.data.FirstSession);
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
        {'startHour':'12:00 AM','stopHour':'1:00 AM'},
        {'startHour':'1:00 AM','stopHour':'2:00 AM'},
        {'startHour':'2:00 AM','stopHour':'3:00 AM'},
        {'startHour':'3:00 AM','stopHour':'4:00 AM'},
        {'startHour':'4:00 AM','stopHour':'5:00 AM'},
        {'startHour':'5:00 AM','stopHour':'6:00 AM'},
        {'startHour':'6:00 AM','stopHour':'7:00 AM'},
        {'startHour':'7:00 AM','stopHour':'8:00 AM'},
        {'startHour':'8:00 AM','stopHour':'9:00 AM'},
        {'startHour':'9:00 AM','stopHour':'10:00 AM'},
        {'startHour':'10:00 AM','stopHour':'11:00 AM'},
        {'startHour':'11:00 AM','stopHour':'12:00 PM'},
        {'startHour':'12:00 PM','stopHour':'1:00 PM'},
        {'startHour':'1:00 PM','stopHour':'2:00 PM'},
        {'startHour':'2:00 PM','stopHour':'3:00 PM'},
        {'startHour':'3:00 PM','stopHour':'4:00 PM'},
        {'startHour':'4:00 PM','stopHour':'5:00 PM'},
        {'startHour':'5:00 PM','stopHour':'6:00 PM'},
        {'startHour':'6:00 PM','stopHour':'7:00 PM'},
        {'startHour':'7:00 PM','stopHour':'8:00 PM'},
        {'startHour':'8:00 PM','stopHour':'9:00 PM'},
        {'startHour':'9:00 PM','stopHour':'10:00 PM'},
        {'startHour':'10:00 PM','stopHour':'11:00 PM'},
        {'startHour':'11:00 PM','stopHour':'12:00 AM'}];
        
    $scope.days = ['Sunday',
                   'Monday',
                   'Tuesday',
                   'Wednesday',
                   'Thursday',
                   'Friday',
                   'Saturday'];

    // saves data and posts - routes if the user chose to continue
    $scope.saveAvailability = function(doRoute) {
        var availableSlots = [];
        var user = UserInfoService.getUserId();
        var user2 = { 'user' : UserInfoService.getUserId() };
        $scope.processAvailability('Fall Semester', false, false, user, availableSlots);
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
    $scope.processAvailability = function(semesterName, finish, summer, user, availableSlots) {
        var timeslotObj = [];
        var hours = '';
        var day = '';
        for (var x = 0; x < 7; x++) {
            day = $scope.days[x];
            for (var i = 0; i < 24; i++) {
                if (document.getElementsByName(semesterName +'_'+ day)[i].checked === true) {
                    hours = JSON.parse(document.getElementsByName(semesterName +'_'+ day)[i].value);
                    timeslotObj = [semesterName, day, convertTime12to24(hours.startHour), convertTime12to24(hours.stopHour), user];
                    availableSlots.push(timeslotObj);
                }
            }
        }
        if (finish !== true) {
            $scope.processAvailability('Spring Semester', true, false, user, availableSlots);
        } else if (summer !== true) {
            $scope.processAvailability('Summer Semester', true, true, user, availableSlots);
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
    $scope.resetAll = function(semesterName, finish, summer) {
        for (var x = 0; x < 7; x++) {
            day = $scope.days[x];
            for (var i = 0; i < 24; i++) {
                document.getElementsByName(semesterName +'_'+ day)[i].checked = false;
            }
            if (finish !== true) {
                $scope.resetAll('Spring Semester', true, false);
            } else if (summer !== true) {
                $scope.resetAll('Summer Semester', true, true);
            }
        }
    } 
    
    // when page loads, runs setPreviousSchedule which poplulates fiels with 
    // previously saved data
    angular.element(document).ready(function(){
        $scope.setPreviousSchedule('Fall Semester', false, false);
    });
    
    $scope.setPreviousSchedule = function(semesterName, finish, summer) {
        var user = { 'user' : UserInfoService.getUserId() };
        $http.post('/availability/getAvailabilityInfo', user).then(function successCallback(response) {
            var res = JSON.parse(JSON.stringify(response.data));
            if (res.data) {
                var slots = [];
                var hour = '';
                var day = '';
                for (var x = 0; x < 7; x++) {
                    day = $scope.days[x];
                    for (var i = 0; i < 24; i++) {
                        for (var y = 0; y < res.data.length; y++) {
                            if(semesterName === res.data[y].calendarName && 
                            day === res.data[y].calendarDay && 
                           (JSON.parse(document.getElementsByName(semesterName +'_'+ day)[i].value).startHour) === convertTime24to12(res.data[y].startHour)) {
                               document.getElementsByName(semesterName +'_'+ day)[i].checked = true;
                           }
                        }
                    }
                }
                if (finish !== true) {
                    $scope.setPreviousSchedule('Spring Semester', true, false);
                } else if (summer !== true) {
                    $scope.setPreviousSchedule('Summer Semester', true, true);
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
                 
    // on page load, retrieve prior saved data                  
    angular.element(document).ready(function(){
        var user = { 'user' : UserInfoService.getUserId() };
        $http.post('/languages/getLanguagesInfo', user).then(function successCallback(response) {
            var res = JSON.parse(JSON.stringify(response.data));
            // fill previous saved language selections
            for (var i = 0; i < $scope.languages.length; i++) {
                for (var k = 0; k < res.data.languageData.selectionArray.length; k++) {
                    if ($scope.languages[i].name === res.data.languageData.selectionArray[k].name) {
                        $scope.languages[i].box = res.data.languageData.selectionArray[k].value;
                        $scope.languages[i].level = res.data.languageData.selectionArray[k].level;
                    }
                }
            }
            $scope.otherLanguage = res.data.languageData.other;
                
            // fill previous saved IDEs
            for (var i = 0; i < $scope.ides.length; i++) {
                for (var k = 0; k < res.data.ideData.selectionArray.length; k++) {
                    if ($scope.ides[i].name === res.data.ideData.selectionArray[k].name) {
                        $scope.ides[i].box = res.data.ideData.selectionArray[k].value;
                    }
                }
            }
            $scope.otherIde = res.data.ideData.other;
                
            // fill previous saved tools
            for (var i = 0; i < $scope.tools.length; i++) {
                for (var k = 0; k < res.data.toolData.selectionArray.length; k++) {
                    if ($scope.tools[i].name === res.data.toolData.selectionArray[k].name) {
                        $scope.tools[i].box = res.data.toolData.selectionArray[k].value;
                    }
                }
            }
                $scope.otherTool = res.data.toolData.other;
        }, function errorCallback(response) {
            //TODO
        });
    });

    // saves all data on page
    $scope.saveLanguages= function(doRoute) {
        var sendData = {
            languages: [],
            ide: [],
            tools: [],
            'user' : UserInfoService.getUserId()
        };
        var lNames = ['isC', 'isCSharp', 'isCPlusPlus', 'isCSS', 'isHTML', 'isJava', 'isJavascript', 'isJSON', 'isScheme', 'isPHP', 'isPLP', 'isProlog', 'isPython', 'isSQL', 'isSwift', 'isVerilog', 'isXML', 'XMLLevel', 'Other'];
        var lLevels = ['CLevel', 'CSharpLevel', 'CPlusPlusLevel', 'CSSLevel', 'HTMLLevel', 'JavaLevel', 'JavascriptLevel', 'JSONLevel', 'SchemeLevel', 'PHPLevel', 'PLPLevel', 'PrologLevel', 'PythonLevel', 'SQLLevel', 'SwiftLevel', 'VerilogLevel', 'XMLLevel']
        var iNames = ['isAndroidStudio', 'isBrackets', 'isIntelliJ', 'isNetBeans', 'isXcode', 'Other'];
        var tNames = ['isGitHub', 'isTaiga', 'isSlack', 'Other'];
        var languages = {};
        var ides = {};
        var tools = {};
        
        // gather language data
        for (var i = 0; i < $scope.languages.length; i++) {
            if ($scope.languages[i].box === 0) {
                $scope.languages[i].level = null;
            }
            if ($scope.languages[i].level === null) {
                $scope.languages[i].box = 0
            }
            if (i === $scope.languages.length - 1) {
                languages[lNames[i]] = $scope.languages[i].box;
                languages[lLevels[i]] = $scope.languages[i].level;
                languages[lNames[lNames.length - 1]] = $scope.otherLanguage;
                languages['ASURITE_ID'] = UserInfoService.getUserId(); 
            } else {
                languages[lNames[i]] = $scope.languages[i].box;
                languages[lLevels[i]] = $scope.languages[i].level; 
            }
        }
        sendData.languages.push(languages);

        // gather ide data
        for (var j = 0; j < $scope.ides.length; j++) {
            if ($scope.ides[j].box === null) {
                $scope.ides[j].box = 0
            }
            ides[iNames[j]] = $scope.ides[j].box;
        }
        ides[iNames[iNames.length - 1]] = $scope.otherIde;
        ides['ASURITE_ID'] = UserInfoService.getUserId();
        sendData.ide.push(ides);

        // gather tools data
        for (var k = 0; k < $scope.tools.length; k++) {
            if ($scope.tools[k].box === null) {
                $scope.tools[k].box = 0
            }
            tools[tNames[k]] = $scope.tools[k].box;
        }
        tools[tNames[tNames.length - 1]] = $scope.otherTool;
        tools['ASURITE_ID'] = UserInfoService.getUserId(); 
        sendData.tools.push(tools);
        
        $http.post('/languages', sendData).then(function successCallback(response) {
            if (doRoute === true) {
                $location.path('/courses'); 
            }

        }, function errorCallback(response) {
            // TO DO
        });
    } // end saveLanguages

    // Not functioning -- Still need to clear ides and tools
    $scope.clearUnselected = function() {
        for (var i = 0; i < $scope.languages.length; i++) {
            if ($scope.languages[i].box === 0) {
                $scope.languages[i].level = null;
            }
        }
    }       
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
            coursesTaught[courseNames[i]] = $scope.courses[i].box;
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
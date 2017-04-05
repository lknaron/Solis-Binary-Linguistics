/*
 * File: faculty.js
 * Description: Module and controllers to handle pages of the faculty process.
 */

// setup module
var faculty = angular.module('app.faculty', []);

faculty.controller('studentEvalController', function($scope, $http, $location, $route, UserInfoService) {
    // populates the Student Evaluation dropdown   
    $scope.ratings = ['1','2','3','4','5'];  
    
    // populates students names in dropdown
    $http.get('/faculty/evaluations/appnames').then(function successCallback(response) {
        $scope.studentnames = response.data;
    }, function errorCallback(response) {
            //TODO
    });
    
    // Saves Student Evalutaion into Database
    $scope.saveEval = function(doRoute) {
        var dateObj = new Date().toISOString().slice(0, 19).replace('T', ' ');
        var studentEvalData = {
                StudentName     : $scope.selectName,
                QOneScore       : $scope.selectOne,
                QOneComments    : $scope.commentsOne,
                QTwoScore       : $scope.selectTwo,
                QTwoComments    : $scope.commentsTwo,
                QThreeScore     : $scope.selectThree,
                QThreeComments  : $scope.commentsThree,
                QFourScore      : $scope.selectFour,
                QFourComments   : $scope.commentsFour,
                DateCreated     : dateObj,
                InstructorName  : UserInfoService.getFullName()
            };
        $http.post('/faculty/evaluation', studentEvalData).then(function successCallback(response) {
            if (doRoute === true) {
                $location.path('/facultyHome'); 
            }
        }, function errorCallback(response) {
            //TODO
        });
    }
});

// View Applications
faculty.controller('facultySearchAppController', function($scope, $location, $http) {
    $http.post('/faculty/applicationNames').then(function successCallback(response) {
            $scope.names = response.data;
        }, function errorCallback(response) {
            //TODO
        });
    // populates dropdown for courses
    $scope.courses = [
                        'SER 100', 
                        'FSE 100', 
                        'ASU 101', 
                        'CSE 110',  
                        'SER 200', 
                        'CSE 205', 
                        'SER 215', 
                        'SER 216', 
                        'SER 221', 
                        'SER 222', 
                        'CSE 230', 
                        'SER 232', 
                        'CSE 240', 
                        'SER 334', 
                        'SER 401', 
                        'SER 402', 
                        'SER 415', 
                        'SER 416', 
                        'SER 421', 
                        'SER 422', 
                        'SER 423', 
                        'SER 431',
                        'SER 432', 
                        'SER 450', 
                        'SER 456', 
                        'SER 486', 
                        'SER 501', 
                        'SER 502', 
                        'SER 515', 
                        'SER 516', 
                        'SER 517', 
                        'SER 518'
                    ];
    
    // Searches applications in database
    $scope.searchApp = function() {
        var courseData = {
            course : $scope.selectCourse
        };
        $http.post('/faculty/applications', courseData).then(function successCallback(response) {
            $scope.names = response.data;
        }, function errorCallback(response) {
            //TODO
        });
    }
});

//View Student Application Info
faculty.controller('facultyStudentInfoController', function($scope, $routeParams, $http) {
    $scope.studentName = $routeParams.studentName
    var studentData = {
            studentName : $scope.studentName
    };
    // populates application table
    $http.post('/faculty/applicationTable', studentData).then(function successCallback(response) {
        $scope.appInfo = response.data;
    }, function errorCallback(response) {
        //TODO
    });
    // populates languages table
    $http.post('/faculty/languagesTable', studentData).then(function successCallback(response) {
        $scope.languages = response.data;
    }, function errorCallback(response) {
        //TODO
    });
    // populates IDEs table
    $http.post('/faculty/ideTable', studentData).then(function successCallback(response) {
        $scope.ides = response.data;
    }, function errorCallback(response) {
        //TODO
    });
    // populates collaborative tools table
    $http.post('/faculty/toolsTable', studentData).then(function successCallback(response) {
        $scope.tools = response.data;
    }, function errorCallback(response) {
        //TODO
    });
    // populates course competencies table
    $http.post('/faculty/coursesTable', studentData).then(function successCallback(response) {
        $scope.courses = response.data;
    }, function errorCallback(response) {
        //TODO
    });
    // populates calendar table
    $http.post('/faculty/calendarTable', studentData).then(function successCallback(response) {
        $scope.calendars = response.data;
    }, function errorCallback(response) {
        //TODO
    });
    // populates attachment table
    $http.post('/faculty/attachmentTable', studentData).then(function successCallback(response) {
        $scope.attachment = response.data;
    }, function errorCallback(response) {
        //TODO
    });
     // opens attachments
    $scope.openAttachments = function(fileType, ID, fileName) {
        // display resume file
        if (fileType == 1) {
            var resumeData = {
            ID       : ID,
            fileName : fileName
            };
            $http.post('/faculty/resume/', resumeData, {responseType: 'arraybuffer'}).then(function successCallback(response) {
                var Resume = new Blob([response.data], {type: 'application/pdf'});
                var ResumeURL = URL.createObjectURL(Resume);
                window.location.assign(ResumeURL);
            }, function errorCallback(response) {
                //TODO
            });
        }
        // display transcript file
        if (fileType == 2) {
            var transcriptData = {
            ID       : ID,
            fileName : fileName
            };
            // display resume file
            $http.post('/faculty/transcript/', transcriptData, {responseType: 'arraybuffer'}).then(function successCallback(response) {
                var Transcript = new Blob([response.data], {type: 'application/pdf'});
                var TranscriptURL = URL.createObjectURL(Transcript);
                window.location.assign(TranscriptURL);
            }, function errorCallback(response) {
                //TODO
            });
        }
        // display iPOS file
        if (fileType == 3) {
            var iposData = {
            ID       : ID,
            fileName : fileName
            };
            // display resume file
            $http.post('/faculty/ipos/', iposData, {responseType: 'arraybuffer'}).then(function successCallback(response) {
                var Ipos = new Blob([response.data], {type: 'application/pdf'});
                var IposURL = URL.createObjectURL(Ipos);
                window.location.assign(IposURL);
            }, function errorCallback(response) {
                //TODO
            });
        }
    }
    // populates evaluation table
    $http.post('/faculty/evaluationTable', studentData).then(function successCallback(response) {
        if(response.data == 'OK') {
            $scope.evaulations = [];
        } else {
            $scope.evaluations = response.data;
        }
    }, function errorCallback(response) {
        //TODO
    });
});
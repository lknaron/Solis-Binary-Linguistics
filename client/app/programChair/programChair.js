'use-strict'
/*
 * programChair.js used to modularize (module) and control (controllers) the Program Chair User (other than homepage)
 * It will control what content is displayed and launching of Program Chair tasks 
 */

// setup user module
var programChair = angular.module('app.programChair', []);

programChair.controller('classSummaryController', function($scope, $http, $location, SendClassService, SendStudentService) {
    $scope.enrollments = [];
    $scope.assignedHours = [];
    angular.element(document).ready(function() { 
        var className = { 'class' : SendClassService.getClassNumber() };       
        $http.post('/programChair/getClassInfo', className).then(function successCallback(response) {
            if (response.data[0][0]) {
                $scope.populateSelectedClassInfo(response)
                $scope.populateClassRequirements(response);                 
            }            
            // Populate Enrollment Section
            if (response.data[1][0]) {
                $scope.populateEnrollment(response);
            }            
            // Populate Assigned Students Section
            if (response.data[2][0]) {
                $scope.populateAssignedStudents(response);   
            } else {
                $scope.noneAssigned = 'No Students Currently Assigned';
                $scope.noAssigned = true;   
            } 
            // Populate Faculty Requests Section
            if (response.data[3][0]) {
                $scope.populateFacultyRequests(response);
            } else {
                $scope.noneRequested = response.data[0][0].FirstName + ' ' + response.data[0][0].LastName + 'has not made any requests'
                $scope.noRequested = true;    
            } 
        }, function errorCallback(response) {
            //TODO
        });
    });

    // Method to populate selected class section of class summary page
    $scope.populateSelectedClassInfo = function(response) {
        $scope.classTitle = response.data[0][0].Subject + ' ' + response.data[0][0].CatalogNumber + ' - ' + response.data[0][0].CourseTitle;
        $scope.instructor = response.data[0][0].FirstName + ' ' + response.data[0][0].LastName;
        if (response.data[0][0].Days != null && response.data[0][0].StartHours != null && response.data[0][0].EndHours != null) {
            var dayString = '';
            var day = response.data[0][0].Days.split("/");
            for (var i = 0; i < day.length; i++) {
                if (i = day.length - 1) {
                    dayString += day[i];   
                } else {
                    dayString += day[i] + ' ';   
                }   
            }
            $scope.showSchedule = true;
            $scope.days = dayString;
            $scope.hours = response.data[0][0].StartHours.slice(0, -3) + ' - ' + response.data[0][0].EndHours.slice(0, -3);
        }
        else {
            $scope.showSchedule = false;
        }            
        $scope.location = response.data[0][0].Location;
        $scope.classStatus = response.data[0][0].AssignedStatus;
        $scope.status = response.data[0][0].AssignedStatus;
    }

    // Method to populate class requirements section of class summary page
    $scope.populateClassRequirements = function(response) {
        $scope.reqTaHours = response.data[0][0].TARequiredHours;
        $scope.reqGraderHours = response.data[0][0].GraderRequiredHours; 
    }

    // Method to populate enrollment section of class summary page
    $scope.populateEnrollment = function(response) {
        for (var i in response.data[1]) {
            var dateObj = new Date(response.data[1][i].DateEntered).toISOString().slice(0, 19).replace('T', ' ').toString();
            var dateArray = dateObj.substr(0,dateObj.indexOf(' ')).split("-");
            var en = dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0] + ': ' + response.data[1][i].EnrollmentNumCurrent;
            $scope.enrollments.push(en);
        }
        $scope.previousEnrollment = response.data[0][0].EnrollmentNumPrev;
        $scope.enrollmentDifference = response.data[1][response.data[1].length - 1].EnrollmentNumCurrent - response.data[0][0].EnrollmentNumPrev;
    }

    // Method to populate assigned students section of page
    $scope.populateAssignedStudents = function(response) {
        $scope.assignedHours = [];
        // TA 1
        if (response.data[2][0].TA != null) {
            $scope.taIdLink = response.data[2][0].TA;
            $scope.taAssignedHours = response.data[2][0].TAHours;
            $scope.assignedHours.push(response.data[2][0].TAHours);
            $scope.taStatus = response.data[2][0].TAStatus; 
            $scope.showTA = true; 
            var studentID = { 'studentID' : response.data[2][0].TA };
            $http.post('/programChair/getStudentNameHours', studentID).then(function successCallback(response) {
                var commitHours = 0;
                for (var i = 0; i < response.data[2].length; i++) {
                    if (response.data[2][i].TAHours) 
                        commitHours += response.data[2][i].TAHours;
                    if (response.data[2][i].TATwoHours) 
                        commitHours += response.data[2][i].TATwoHours;
                    if (response.data[2][i].GraderOneHours) 
                        commitHours += response.data[2][i].GraderOneHours;
                    if (response.data[2][i].GraderTwoHours) 
                        commitHours += response.data[2][i].GraderOneHours;
                }
                $scope.taAvailableHours = response.data[1][0].TimeCommitment - commitHours;
                $scope.ta = response.data[0][0].FirstName + ' ' + response.data[0][0].LastName;
            }, function errorCallback(response) {
                //TODO
            });    
        } else {
            $scope.assignedHours.push(null);    
        }
        // TA 2
        if (response.data[2][0].TATwo != null) {
            $scope.taTwoIdLink = response.data[2][0].TATwo;
            $scope.taTwoAssignedHours = response.data[2][0].TATwoHours;
            $scope.assignedHours.push(response.data[2][0].TATwoHours);
            $scope.taTwoStatus = response.data[2][0].TATwoStatus; 
            $scope.showTATwo = true;  
            var studentID = { 'studentID' : response.data[2][0].TATwo };
            $http.post('/programChair/getStudentNameHours', studentID).then(function successCallback(response) {
                var commitHours = 0;
                for (var i = 0; i < response.data[2].length; i++) {
                    if (response.data[2][i].TAHours) 
                        commitHours += response.data[2][i].TAHours;
                    if (response.data[2][i].TATwoHours) 
                        commitHours += response.data[2][i].TATwoHours;
                    if (response.data[2][i].GraderOneHours) 
                        commitHours += response.data[2][i].GraderOneHours;
                    if (response.data[2][i].GraderTwoHours) 
                        commitHours += response.data[2][i].GraderOneHours;
                }
                $scope.taTwoAvailableHours = response.data[1][0].TimeCommitment - commitHours; 
                $scope.taTwo = response.data[0][0].FirstName + ' ' + response.data[0][0].LastName;
            }, function errorCallback(response) {
                //TODO
            });
        } else {
            $scope.assignedHours.push(null);    
        }           
        // Grader 1
        if (response.data[2][0].GraderOne != null) {
            $scope.graderOneIdLink = response.data[2][0].GraderOne;
            $scope.graderOneAssignedHours = response.data[2][0].GraderOneHours;
            $scope.assignedHours.push(response.data[2][0].GraderOneHours);
            $scope.graderOneStatus = response.data[2][0].GraderOneStatus;
            $scope.showGraderOne = true;
            var studentID = { 'studentID' : response.data[2][0].GraderOne };
            $http.post('/programChair/getStudentNameHours', studentID).then(function successCallback(response) { 
                var commitHours = 0;
                for (var i = 0; i < response.data[2].length; i++) {
                    if (response.data[2][i].TAHours) 
                        commitHours += response.data[2][i].TAHours;
                    if (response.data[2][i].TATwoHours) 
                        commitHours += response.data[2][i].TATwoHours;
                    if (response.data[2][i].GraderOneHours) 
                        commitHours += response.data[2][i].GraderOneHours;
                    if (response.data[2][i].GraderTwoHours) 
                        commitHours += response.data[2][i].GraderOneHours;
                }
                $scope.graderOneAvailableHours = response.data[1][0].TimeCommitment - commitHours;
                $scope.graderOne = response.data[0][0].FirstName + ' ' + response.data[0][0].LastName;
            }, function errorCallback(response) {
                //TODO
            });    
        } else {
            $scope.assignedHours.push(null);    
        }
        // Grader 2
        if (response.data[2][0].GraderTwo != null) {
            $scope.graderTwoIdLink = response.data[2][0].GraderTwo;
            $scope.graderTwoAssignedHours = response.data[2][0].GraderTwoHours;
            $scope.assignedHours.push(response.data[2][0].GraderTwoHours);
            $scope.graderTwoStatus = response.data[2][0].GraderTwoStatus;
            $scope.showGraderTwo = true;
            var studentID = { 'studentID' : response.data[2][0].GraderTwo };
            $http.post('/programChair/getStudentNameHours', studentID).then(function successCallback(response) { 
                var commitHours = 0;
                for (var i = 0; i < response.data[2].length; i++) {
                    if (response.data[2][i].TAHours) 
                        commitHours += response.data[2][i].TAHours;
                    if (response.data[2][i].TATwoHours) 
                        commitHours += response.data[2][i].TATwoHours;
                    if (response.data[2][i].GraderOneHours) 
                        commitHours += response.data[2][i].GraderOneHours;
                    if (response.data[2][i].GraderTwoHours) 
                        commitHours += response.data[2][i].GraderOneHours;
                }
                $scope.graderTwoAvailableHours = response.data[1][0].TimeCommitment - commitHours;
                $scope.graderTwo = response.data[0][0].FirstName + ' ' + response.data[0][0].LastName;
            }, function errorCallback(response) {
                //TODO
            });
        }
        else {
            $scope.assignedHours.push(null);    
        }
    }

    // Method to populate faculty requests section of class summary page
    $scope.populateFacultyRequests = function(response) {
        $scope.showFacultyRequests = true;
        if (response.data[3][0].Rank1 != null) {
            var studentID = { 'studentID' : response.data[3][0].Rank1 };
            $http.post('/programChair/getStudentNameHours', studentID).then(function successCallback(response) {
                $scope.requestOne = response.data[0][0].FirstName + ' ' + response.data[0][0].LastName;  
            }, function errorCallback(response) {
                //TODO
            });
            $scope.firstChoice = true;
            $scope.requestOneIdLink = response.data[3][0].Rank1;
        }
        if (response.data[3][0].Rank2 != null) {
            var studentID = { 'studentID' : response.data[3][0].Rank2 };
            $http.post('/programChair/getStudentNameHours', studentID).then(function successCallback(response) {
                $scope.requestTwo = response.data[0][0].FirstName + ' ' + response.data[0][0].LastName;  
            }, function errorCallback(response) {
                //TODO
            });
            $scope.secondChoice = true;
            $scope.requestTwoIdLink = response.data[3][0].Rank2;
        } 
    }

    // Method to save class stauts in database
    $scope.saveStatus = function() {
        var postData = { 'status' : $scope.status, 'class' : SendClassService.getClassNumber() };
        $http.post('/programChair/updateStatus', postData).then(function successCallback(response) {
            $scope.classStatus = $scope.status;  
        }, function errorCallback(response) {
            //TODO
        });
        $scope.cancelStatusUpdate();     
    }

    // Method to cancel status change
    $scope.cancelStatusUpdate = function() {
        $scope.showStatusUpdate = false;
        $scope.disableUpdateStatus = false;
        var element = document.getElementById('spaceforstatus');
        while (element.firstChild) {
            element.removeChild(element.firstChild);   
        }       
    }

    // Method to save enrollment in database
    // Add enrollment thresholds to update required hours
    $scope.saveEnrollment = function(enrollmentUpdate) {
        if (enrollmentUpdate != null) {
            // Possibly set time zone of date object
            var dateObj = new Date().toISOString().slice(0, 19).replace('T', ' ').toString();
            var dateArray = dateObj.substr(0,dateObj.indexOf(' ')).split("-");
            var en = dateArray[1] + '/' + dateArray[2] + '/' + dateArray[0] + ': ' + enrollmentUpdate;
            $scope.enrollments.push(en);

            var postData = { 'class' : SendClassService.getClassNumber(), 'enrollment' : enrollmentUpdate };
            $http.post('/programChair/updateEnrollment', postData).then(function successCallback(response) {
                $scope.enrollmentDifference = enrollmentUpdate - $scope.previousEnrollment;  
            }, function errorCallback(response) {
                //TODO
            });
            $scope.cancelEnrollmentUpdate();
        } else {
            $scope.enrollmentError = true;
        }        
    }

    // Method to cancel enrollment update
    $scope.cancelEnrollmentUpdate = function() {
        $scope.showEnrollmentUpdate = false;
        $scope.disableUpdateEnrollment = false;
        $scope.enrollmentUpdate = null;
        $scope.enrollmentError = false;
        var element = document.getElementById('spaceforenrollment');
        while (element.firstChild) {
            element.removeChild(element.firstChild);   
        }       
    }

    // Method to save required hours in database
    $scope.saveRequiredHours = function(taHours, graderHours) {
        var postData,
            ta = taHours,
            grader = graderHours,
            send = false;
        if (taHours && graderHours) {
            postData = { 'class' : SendClassService.getClassNumber(), 'taHours' : taHours, 'graderHours' : graderHours }; 
            send = true;      
        } else if (!taHours && graderHours) {
            postData = { 'class' : SendClassService.getClassNumber(), 'taHours' : $scope.reqTaHours, 'graderHours' : graderHours };
            send = true;
        } else if (taHours && !graderHours) {
            postData = { 'class' : SendClassService.getClassNumber(), 'taHours' : taHours, 'graderHours' : $scope.reqGraderHours };
            send = true;
        } else {
            $scope.requiredHoursError = true;
        }
        if (send) {
            $http.post('/programChair/updateRequiredHours', postData).then(function successCallback(response) {
                $scope.reqTaHours = response.data[0];
                $scope.reqGraderHours = response.data[1];  
            }, function errorCallback(response) {
                //TODO
            });
            $scope.cancelRequiredHoursUpdate();    
        }       
    }

    // Method to cancel required hours update
    $scope.cancelRequiredHoursUpdate = function() {
        $scope.showRequiredHoursUpdate = false;
        $scope.disableUpdateRequiredHours = false;
        $scope.requiredTAHoursUpdate = null;
        $scope.requiredGraderHoursUpdate = null;
        $scope.requiredHoursError = false;
        var element = document.getElementById('spaceforrequiredhours');
        while (element.firstChild) {
            element.removeChild(element.firstChild);   
        }       
    }

    // Method to update available hours when assigned hours changes
    $scope.updateAvailableHours = function(student) {
        if (student === 0) {
            if(!$scope.taAssignedHours && $scope.taAssignedHours != 0) {
                $scope.taAssignedHours = $scope.assignedHours[student];
            } else {
                $scope.taHoursMax = $scope.taAvailableHours + $scope.assignedHours[student];
                $scope.taAvailableHours = $scope.taAvailableHours - ($scope.taAssignedHours - $scope.assignedHours[student]);
                $scope.assignedHours[student] = $scope.taAssignedHours;    
            }   
        } else if (student === 1) {
            if(!$scope.taTwoAssignedHours && $scope.taTwoAssignedHours != 0) {
                $scope.taTwoAssignedHours = $scope.assignedHours[student];
            } else {
                $scope.taTwoAvailableHours = $scope.taTwoAvailableHours - ($scope.taTwoAssignedHours  - $scope.assignedHours[student]);
                $scope.assignedHours[student] = $scope.taTwoAssignedHours; 
                $scope.assignedHours[student] = $scope.taTwoAssignedHours;    
            }   
        } else if (student === 2) {
            if(!$scope.graderOneAssignedHours && $scope.graderOneAssignedHours != 0) {
                $scope.graderOneAssignedHours = $scope.assignedHours[student];
            } else {
                $scope.graderOneAvailableHours = $scope.graderOneAvailableHours - ($scope.graderOneAssignedHours  - $scope.assignedHours[student]);
                $scope.assignedHours[student] = $scope.graderOneAssignedHours;
                $scope.assignedHours[student] = $scope.graderOneAssignedHours;
            }
        } else if (student === 3) {
            if(!$scope.graderTwoAssignedHours && $scope.graderTwoAssignedHours != 0) {
                $scope.graderTwoAssignedHours = $scope.assignedHours[student];
            } else {
                $scope.graderTwoAvailableHours = $scope.graderTwoAvailableHours - ($scope.graderTwoAssignedHours  - $scope.assignedHours[student]);
                $scope.assignedHours[student] = $scope.graderTwoAssignedHours;
                $scope.assignedHours[student] = $scope.graderTwoAssignedHours;
            }
        }
    }

    // Method to save updated student assignments
    $scope.saveUpdatedAssignments = function(ta, taAssignedHours, taStatus, taTwo, taTwoAssignedHours, taTwoStatus, graderOne, graderOneAssignedHours, graderOneStatus, graderTwo, graderTwoAssignedHours, graderTwoStatus) {
        if (!taAssignedHours || taAssignedHours === 0) {
            ta = null;
            taAssignedHours = null;
            taStatus = null
        }
        if (!taTwoAssignedHours || taTwoAssignedHours === 0) {
            taTwo = null;
            taTwoAssignedHours = null;
            taTwoStatus = null
        }
        if (!graderOneAssignedHours || graderOneAssignedHours === 0) {
            graderOne = null;
            graderOneAssignedHours = null;
            graderOneStatus = null
        }
        if (!graderTwoAssignedHours || graderTwoAssignedHours === 0) {
            graderTwo = null;
            graderTwoAssignedHours = null;
            graderTwoStatus = null
        }
        if ((!taAssignedHours || taAssignedHours === 0) && (!taTwoAssignedHours || taTwoAssignedHours === 0) && (!graderOneAssignedHours || graderOneAssignedHours === 0) && (!graderTwoAssignedHours || graderTwoAssignedHours === 0)) {
            var postData = { 'deleteClass' : SendClassService.getClassNumber()};
        } else {
            var postData = { 'class' : SendClassService.getClassNumber(), 'ta' : ta, 'taAssignedHours' : taAssignedHours, 'taStatus' : taStatus, 'taTwo' : taTwo, 'taTwoAssignedHours' : taTwoAssignedHours, 'taTwoStatus' : taTwoStatus, 'graderOne' : graderOne, 'graderOneAssignedHours' : graderOneAssignedHours, 'graderOneStatus' : graderOneStatus, 'graderTwo' : graderTwo, 'graderTwoAssignedHours' : graderTwoAssignedHours, 'graderTwoStatus' : graderTwoStatus };   
        }
        $http.post('/programChair/updateAssignedStudents', postData).then(function successCallback(response) {
            $scope.cancelUpdatedAssignments();
        }, function errorCallback(response) {
            //TODO
        });
    }

    // Method to cancel updating student assignments
    $scope.cancelUpdatedAssignments = function() {
        var className = { 'class' : SendClassService.getClassNumber() };       
        $http.post('/programChair/getClassInfo', className).then(function successCallback(response) {
            $scope.showTA = false;
            $scope.showTATwo = false;
            $scope.showGraderOne = false;
            $scope.showGraderTwo = false;
            $scope.showUpdatedAssignments = false;
            $scope.populateAssignedStudents(response);
        }, function errorCallback(response) {
            //TODO
        });
    }

    // Method to delete assigned student
    $scope.deleteStudent = function(student) {
        var postData = { 'deleteStudent' : student, 'class' : SendClassService.getClassNumber()};
        $http.post('/programChair/updateAssignedStudents', postData).then(function successCallback(response) {
            $scope.cancelUpdatedAssignments();
        }, function errorCallback(response) {
            //TODO     
        });
    }

    // On click of Assign button direct to assign student page
    $scope.goToAssignStudent = function() {
        $location.path('/assignStudent');
    }

    // On click of Assign faculty request student, set student id, direct to assign student page
    $scope.addRequestedStudent = function (student) {
        SendStudentService.setStudentId(student);  
        $location.path('/assignStudent'); 
    }

    // On click of student id link, set student id, direct to student profile page
    $scope.goToProfile = function(student) {
        SendStudentService.setStudentId(student);
        $location.path('/studentProfile');
    }
});
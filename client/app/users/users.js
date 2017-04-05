'use-strict'
/*
 * users.js used to modularize (module) and control (controllers) all users home page
 * It will control what content is displayed per user and launching of users tasks 
 */

// setup user module
var user = angular.module('app.users', []);

user.controller('studentInfoController', function($scope, UserInfoService, StudentActionsService) {
    // sets application link
    switch(UserInfoService.getAppStatus()) {
        case 'new':
            $scope.link = 'Start Application';
            break;
        case 'incomplete':
            $scope.link = 'Continue Application';
            break;
        default:
            $scope.link = 'Application';
    }
    $scope.name = UserInfoService.getFullName();
    $scope.status = UserInfoService.getAppStatus();
    $scope.semesterName = StudentActionsService.callTo.deadlineSemester + ' ' + new Date(StudentActionsService.callTo.deadlineDate).getFullYear();
    $scope.deadline = new Date(StudentActionsService.callTo.deadlineDate).toString().substring(0,15);
    if (StudentActionsService.callTo.hasAppActions === 1) {
        for (var i = 0; i < StudentActionsService.callTo.appActions.length; i++) {
            var scopeName = StudentActionsService.callTo.appActions[i].page + '_items'; 
            $scope[scopeName] = StudentActionsService.callTo.appActions[i].missingItems;
        }
    }       
});

user.controller('programChairController', function($scope, $http, $location, $route, $timeout, SendClassService, UserInfoService, PCActionsService) {
    $scope.name = UserInfoService.getFullName();
    $scope.classes = [];
    $scope.semesterNames = ['Fall', 'Spring', 'Summer'];
    /*
     * This creates the dropdowns for classes missing/needing student assignments, student confirmations,
     * and courses missing assigned hours. The undefined check is there to prevent errors occuring on the
     * class summary page if the page is refreshed.
     */
    if (PCActionsService.callTo.hasActions !== undefined) {
        $scope.incompleteClasses = setClassOptions(PCActionsService.callTo.incompleteClasses);
        $scope.missingPlacementClasses = setClassOptions(PCActionsService.callTo.placements.missingPlacements);
        $scope.missingTAClasses = setClassOptions(PCActionsService.callTo.placements.missingTA);
        $scope.missingGraderClasses = setClassOptions(PCActionsService.callTo.placements.missingGrader);
        $scope.needTAConfirmation = setClassOptions(PCActionsService.callTo.placements.needTAConfirmation);
        $scope.needGraderConfirmation = setClassOptions(PCActionsService.callTo.placements.needGraderConfirmation);
        $scope.needTAHours = setClassOptions(PCActionsService.callTo.placements.needTAHours, true);
        $scope.needGraderHours = setClassOptions(PCActionsService.callTo.placements.needGraderHours, true);
    }
    
    angular.element(document).ready(function() {
        $http.get('/programChair/getClassNames').then(function successCallback(response) {
           $scope.classes = setClassOptions(response.data);
        }, function errorCallback(response) {
            //TODO
        });
        
        $http.get('programChair/getDeadline').then(function successCallback(response) {
            $scope.deadline = {date:new Date(response.data.date), semester:response.data.semester};
        }, function errorCallback(response) {
            // empty
        });
    });

    $scope.go = function(selectedClass, reload) {
        SendClassService.setClassNumber(selectedClass.courseNumber);
        SendClassService.setClassName(selectedClass.class);
        $location.path('/classSummary');
        if (reload) {
            $route.reload();
        }
    }
    
    $scope.saveDeadline = function() {
        $scope.deadlineMessage = '';
        var formatCheck = checkDeadlineDateFormat();
        if (formatCheck) {
            var data = {semester:$scope.deadline.semester, date:new Date($scope.deadline.date)};
            console.log(new Date($scope.deadline.date).toLocaleString())
            $http.post('programChair/setDeadline', data).then(function successCallback(response) {
                $scope.deadlineMessage = 'Deadline successfully saved!';
                $timeout(function() { 
                    $scope.deadlineMessage = '';
                }, 900);
            }, function errorCallback(response) {
                console.log('unsuccessful post ' + response);
            });
        }
    }
    
    // format check of the deadline date - used for incorrect date format in Firefox
    function checkDeadlineDateFormat() {
        try {
            var test = new RegExp("^[2][0-9]{3}-(((0[13578]|(10|12))-(0[1-9]|[1-2][0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)-(0[1-9]|[1-2][0-9]|30)))$").test($scope.deadline.date.toISOString().slice(0, 10)); 
            return test;
        } catch (e) {
            $scope.deadlineMessage = 'Date input is incorrect! Please enter date as yyyy-mm-dd';
            return;
        }           
    } 
    
    // adds an indicator to the class name in dropdowns if a class is online and hours needed
    // for classes missing TA/Grader assigned hours
    function setClassOptions(data, hasHours) {
        var options = [];
        for (var i in data) {
            if (data[i].Location === 'ASUOnline') {
                var className = data[i].Subject + ' ' + data[i].CatalogNumber + '*';   
            } else {
                var className = data[i].Subject + ' ' + data[i].CatalogNumber;    
            }
            if (hasHours) {
                className += ' ~ ' + data[i].neededHours + ' remaining hours';
            }
            options.push({'class': className,'courseNumber': data[i].CourseNumber});
        } 
        return options;
    }

    $scope.scheduleFileNameChanged = function(file) {
        if (file[0]) {
            $scope.scheduleInput = file[0].name;
            $scope.$apply();
        }
    }

    $scope.uploadSchedule = function(){
        if ($scope.scheduleFile) {
            var file = $scope.scheduleFile;
            var uploadUrl = "/programChair/scheduleUpload";
            var fd = new FormData();
            fd.append('file', file);

            $http.post(uploadUrl,fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).then(function successCallback(response) {
                if (response.data.error === 1) {
                    $scope.scheduleInput = '';
                    $scope.errorMessage = 'Failed to Upload File. Please Check File Format';
                    $scope.uploadErrorMessage = true;   
                } else {
                    $scope.scheduleInput = '';
                    $route.reload();
                }    
            }, function errorCallback(response) {
                // TO DO
            });   
        } else {
            $scope.errorMessage = 'Please Select a File to Upload';
            $scope.uploadErrorMessage = true; 
        }  
    };
});

user.controller('facultyController', function($scope, $http, $location, $route, UserInfoService) {
    $scope.name = UserInfoService.getFullName();    
});
'use-strict'
/*
 * File: directives.js
 * Description: Used for dynamically adding elements to the DOM with angular control
 */

// setup directives module
var directives = angular.module('app.directives',[]);

// Directive for adding add language button
directives.directive('addlanguagesbutton', function () {
    return {
        restrict: "E",
		template: "<button addlanguages class='myButton'>Add Another Language</button>"
    };
});

// Directive for text input and radio buttons on click of add languages button
directives.directive("addlanguages", function($compile){
	return function(scope, element, attrs){
		var count = '';
		var model = '';
		element.bind("click", function(){
			if (document.getElementById('spaceforlanguages').getElementsByTagName('input').length === 0) {
				count = (document.getElementById('spaceforlanguages').getElementsByTagName('input').length + 1);	
			} else {
				count = ((document.getElementById('spaceforlanguages').getElementsByTagName('input').length / 4) + 1);
			}
			scope.message = "*You must select a level to save additional language";			
			angular.element(document.getElementById('spaceforlanguages')).append($compile("<input type='text' ng-model='otherLanguage["+count+"]' placeholder='Language Name'><div class='otherl'><span><input type='radio' ng-model='otherLanguageLevel["+count+"]' value='Expert' ng-dblclick='deselectLevel(this, "+count+")'>Expert<input type='radio' ng-model='otherLanguageLevel["+count+"]' value='Proficient' ng-dblclick='deselectLevel(this, "+count+")'>Proficient<input type='radio' ng-model='otherLanguageLevel["+count+"]' value='Novice' ng-dblclick='deselectLevel(this, "+count+")'>Novice</div><br></span>")(scope));        
		});
	};
});

// Directive for add ides button
directives.directive('addidesbutton', function () {
    return {
        restrict: "E",
		template: "<button addides class='myButton'>Add Another IDE</button>"
    };
});

// Directive for text input on click of add ides button
directives.directive("addides", function($compile){
	return function(scope, element, attrs){
		element.bind("click", function(){
			var count = (document.getElementById('spaceforides').getElementsByTagName('input').length + 1);
			angular.element(document.getElementById('spaceforides')).append($compile("<input type='text' ng-model='otherIDE["+count+"]' placeholder='IDE Name'><br>")(scope));        
		});
	};
});

// Directive for add tools button
directives.directive('addtoolsbutton', function () {
        return {
            restrict: "E",
			template: "<button addtools class='myButton'>Add Another Tool</button>"
        };
    });

// Directive for text input on click of add tools button
directives.directive("addtools", function($compile){
	return function(scope, element, attrs){
		element.bind("click", function(){
			var count = (document.getElementById('spacefortools').getElementsByTagName('input').length + 1);
			angular.element(document.getElementById('spacefortools')).append($compile("<input type='text' ng-model='otherTool["+count+"]' placeholder='Tool Name'><br>")(scope));        
		});
	};
});

// Directive for file upload (ipos, transcript, resume)
directives.directive('fileInput', ['$parse', function ($parse) {
	return {
    	restrict: 'A',
    	link: function(scope, element, attrs) {
        	var model = $parse(attrs.fileInput);
        	var modelSetter = model.assign;
	        element.bind('change', function(){
	            scope.$apply(function(){
	                modelSetter(scope, element[0].files[0]);
	            });
        	});
    	}
	};
}]);

// Directive for adding add courses button
directives.directive('addcoursesbutton', function () {
    return {
        restrict: "E",
		template: "<button addcourses class='myButton'>Add Another Course</button>"
    };
});

// Directive for text input and radio buttons on click of add courses button
directives.directive("addcourses", function($compile){
	return function(scope, element, attrs){
		var count = '';
		var model = '';
		element.bind("click", function(){
			if (document.getElementById('spaceforcourses').getElementsByTagName('input').length === 0) {
				count = (document.getElementById('spaceforcourses').getElementsByTagName('input').length + 1);	
			} else {
				count = ((document.getElementById('spaceforcourses').getElementsByTagName('input').length / 5) + 1);
			}
			scope.message = "*You must select a level to save additional course";	
			angular.element(document.getElementById('spaceforcourses')).append($compile("<input type='text' ng-model='otherCourse["+count+"]' placeholder='Course Name'><div class='otherc'><span><input type='radio' ng-model='otherCourseLevel["+count+"]' value='Prefer' ng-dblclick='deselectLevel(this, "+count+")'>Prefer<input type='radio' ng-model='otherCourseLevel["+count+"]' value='Qualified' ng-dblclick='deselectLevel(this, "+count+")'>Qualified<input type='radio' ng-model='otherCourseLevel["+count+"]' value='Previously TA' ng-dblclick='deselectLevel(this, "+count+")'>Previously TA<input type='radio' ng-model='otherCourseLevel["+count+"]' value='Previously Grader' ng-dblclick='deselectLevel(this, "+count+")'>Previously Grader</div><br><br><br><br></span>")(scope));  		        
		});
	};
});

// Directive for add status button on program chair class summary page
directives.directive('addstatusbutton', function () {
    return {
        restrict: "E",
		template: "<button addstatus ng-disabled='disableUpdateStatus' ng-click='showStatusUpdate = true; disableUpdateStatus = true' class='myButton'>Update Status</button>"
    };
});

// Directive for text input and save/cancel button on click of add enrollment button on program chair class summary page
directives.directive("addstatus", function($compile){
	return function(scope, element, attrs){
		element.bind("click", function(){
			angular.element(document.getElementById('spaceforstatus')).append($compile("<br><input type='radio' ng-model=status required value='Incomplete' name='status'>Incomplete</input><input type='radio' ng-model=status value='Complete' name='status'>Complete<br><input type='button' ng-click='saveStatus()' value='Save' style='margin-right: 10px;'></input><input type='button' ng-click='cancelStatusUpdate()' value='Cancel'></input><br>")(scope));    
		});
	};
});

// Directive for add enrollment button on program chair class summary page
directives.directive('addenrollmentbutton', function () {
    return {
        restrict: "E",
		template: "<button addenrollment ng-disabled='disableUpdateEnrollment' ng-click='showEnrollmentUpdate = true; disableUpdateEnrollment = true' class='myButton'>Update Enrollment</button>"
    };
});

// Directive for text input and save/cancel button on click of add enrollment button on program chair class summary page
directives.directive("addenrollment", function($compile){
	return function(scope, element, attrs){
		element.bind("click", function(){
			angular.element(document.getElementById('spaceforenrollment')).append($compile("<br><input type='number' ng-model='enrollmentUpdate' placeholder='Input Enrollment'><input type='button' ng-click='saveEnrollment(enrollmentUpdate)' value='Save' style='margin-left: 10px; margin-right: 10px'></input><input type='button' ng-click='cancelEnrollmentUpdate()' value='Cancel'></input><br><label ng-show='enrollmentError'>Please enter a value or hit Cancel</label>")(scope));    
		});
	};
});

// Directive for add required hours button on program chair class summary page
directives.directive('addrequiredhoursbutton', function () {
    return {
        restrict: "E",
		template: "<button addrequiredhours ng-disabled='disableUpdateRequiredHours' ng-click='showRequiredHoursUpdate = true; disableUpdateRequiredHours = true' class='myButton'>Update Required Hours</button>"
    };
});

// Directive for two text inputs and save/cancel button on click of add required hours button on program chair class summary page
directives.directive("addrequiredhours", function($compile){
	return function(scope, element, attrs){
		element.bind("click", function(){
			angular.element(document.getElementById('spaceforrequiredhours')).append($compile("<br>TA: <input type='number' ng-model='requiredTAHoursUpdate' placeholder='Input Required TA Hours'>Grader: <input type='number' ng-model='requiredGraderHoursUpdate' placeholder='Input Required Grader Hours'><input type='button' ng-click='saveRequiredHours(requiredTAHoursUpdate, requiredGraderHoursUpdate)' value='Save' style='margin-left: 10px; margin-right: 10px'></input><input type='button' ng-click='cancelRequiredHoursUpdate()' value='Cancel'></input><br><label ng-show='requiredHoursError'>Please enter a value or hit Cancel</label>")(scope));    
		});
	};
});
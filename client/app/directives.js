'use-strict'
/*
 * File: directives.js
 * Description: Used for dynamically adding elements to the DOM with angular control
 */

// setup directives module
var directives = angular.module('app.directives',[]);

/*
 * Displays call to action for application fields
 */
directives.directive('studentActionsDirective', function($compile, StudentActionsService, APPLICATION_LINKS) {
   function actions(scope, element, attrs) {
        if (StudentActionsService.callTo.hasAppActions === 0) {
            angular.element(document.getElementById('appCalls')).append($compile("<div>Your application has not been started!</div>")(scope));
        } else if (StudentActionsService.callTo.hasAppActions === 1) {
            for (var i = 0; i < StudentActionsService.callTo.appActions.length; i++) {
                var pageName = StudentActionsService.callTo.appActions[i].page;
                var missingItemsName = pageName + '_items';
                angular.element(document.getElementById('appCalls')).append($compile("<label>You have some missing items from the "+ pageName +" page. Please provide the following info:</label><div ng-repeat='item in "+ missingItemsName +"'>{{item}}</div><a href='"+ APPLICATION_LINKS[pageName] +"'>Go to "+ pageName +" page</a><br>")(scope));
            }
        } else if (StudentActionsService.callTo.hasAppActions === 2) {
            angular.element(document.getElementById('appCalls')).append($compile("<div>Your application is not missing anything!</div>")(scope));
        }
    }
    return {
        link: actions
    };
});

/*
 * Displays call to action notice that the student is on probation
 */
app.directive('studentNoticeDirective', function($compile, UserInfoService, StudentActionsService, APPLICATION_LINKS) {
    function probation(scope, element, attrs) {
        // ----------
        // TODO - deadline check here
        //-----------
        if (StudentActionsService.callTo.onProbation === 0) {
            angular.element(document.getElementById('noticeCalls')).append($compile("<div>No new notices.</div>")(scope));
        } else {
            angular.element(document.getElementById('noticeCalls')).append($compile("<div>You have indicated on your application that you are on academic probation. Your application won't be considered until the academic probation has been cleared!<br><a href='"+ APPLICATION_LINKS.Education +"'>Go to Education page</div>")(scope));
        } 
    }
    return {
        link: probation
    };
});

/*
 * Displays call to action notice that application deadline is approaching
 */
/*app.directive('studentNoticeDirective', function() {
    //TODO
});*/

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
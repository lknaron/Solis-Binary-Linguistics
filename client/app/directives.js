'use-strict'
/*
 * File: directives.js
 * Description: Used for dynamically adding elements to the DOM with angular control
 */

// setup directives module
var directives = angular.module('app.directives',[]);

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
angular.module("RamApps")
	.directive("myDirective", function() {
    return {
		template : "<h3>Made by a directive!</h3>"
    };
});

angular.module("RamApps")
	.directive("myClassDirective", function() {
    return {
		restrict : "C",
        template : "<h4>Made a directive using class with restrict as C!</h4>"
    };
});

angular.module("RamApps")
	.directive("myCommentDirective", function() {
    return {
		restrict : "M",
        replace : true,
        template : "<h5>Made a directive within a comment and writing replace as true!</h5>"
    };
});

angular.module("RamApps")
	.directive("myRestrictedDirective", function() {
    return {
		restrict : "A",
        template : "<h5>This line will not be displayed. !</h5>"
		
    };
});

angular.module("RamApps")
	.directive("myInputValidationDirective", function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {
            function myValidation(value) {
                if (value.indexOf("e") > -1) {
                    mCtrl.$setValidity('charE', true);
                } else {
                    mCtrl.$setValidity('charE', false);
                }
                return value;
            }
            mCtrl.$parsers.push(myValidation);
        }
    };
});
'use strict';

angular.module('myApp').
    directive('fileInput', ['$parse', function ($parse) {
        return {
//            replace: true,
            restrict: 'A',
//            template: ' <input class="form-control" filestyle="" type="file" data-classbutton="btn btn-default"   data-classinput="form-control inline" tabindex="-1"  style="position: inherit; clip: rect(0px 0px 0px 0px);" />',
            scope: {
                onLoad: '='
            },

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

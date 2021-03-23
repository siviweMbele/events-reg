'use strict';

eventsApp.directive('gravatar', function(gravatarUrlBuilder){
    return {
        restrict:'E', //because this is an element
        template: '<img />',
        replace:true,
        link: function (scope, element, attrs, controller){
            attrs.$observe('email', function (newValue, oldValue){
                if(newValue !== oldValue){
                    attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newValue)) // sets the src attribute of the img element to the url returned by the gravatar url builder
                } 
            });
        }
    }
})
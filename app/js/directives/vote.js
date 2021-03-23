'use strict';

eventsApp.directive('vote', function () {
    return {
        restrict: 'E', //E= element, A = attribute, C = class and M = comment
        templateUrl: '/templates/directives/vote.html',
        scope: {
            upvote: "&", //execute function in the parent scope
            downvote: "&",
            count: "="//"@" passes a string value passed with {{value}}
        }
    }
});
'use strict';

eventsApp.directive('eventThumbnail', function (){
    return {
        restrict:'E',
        replace: true,
        templateUrl: '/templates/directives/eventThumbnail.html',
        scope: {
            event: "="
            // event : "=myEvent if attribute name is my-event"
            // event : "&event"
            // event : "$event"
        }
    }
});
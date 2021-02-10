'use strict';

eventsApp.factory('$exceptionHandler', function(){ //using$ to override the default exceptionHandler
    return function (exception){
        console.log("exception handled: " + exception.message);
    }
});
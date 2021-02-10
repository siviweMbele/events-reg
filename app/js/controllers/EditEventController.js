'use strict';

eventsApp.controller('EditEventController',

    function EditEventController($scope, eventData) {
        var editCount = 1;
          
        $scope.saveEvent = function (event, newEventForm) {
            if (newEventForm.$valid) {
                eventData.save(event);
            }
        }

        $scope.cancelEdit = function () {
        }
    });
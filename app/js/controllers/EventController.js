'use strict';

eventsApp.controller('EventController', function ($scope, eventData, $log, $anchorScroll) {
    $scope.query = "";
    $scope.sortorder = "name";

    //AnchorScroller takesfrom hash scroll to the element with id
    $scope.scrollToSession = function(){
        $anchorScroll();
    }

    //USING RESOURCE FETCH DATA
    // $scope.event = eventData.getEvent();

    //USING RESOURCE PROMISE FETCH DATA
    eventData.getEvent().$promise.then(
        function(event) {
            $scope.event = event;
        }
    ).catch(function(response){
        console.log(response)
    });

    //USING HTTP FETCH DATA CALLBACK
    // eventData.getEvent(function (data){
    //     $scope.event = data;
    // });

    //USING HTTP FETCH DATA PROMISE
    // eventData.getEvent().then(
    //     function (response) {
    //         $scope.event = response.data;
    //     },
    //     function (error) {
    //         $log.warn(error);
    // });

    $scope.upVoteSession = function (session) {
        session.upVoteCount++;
    }

    $scope.downVoteSession = function (session) {
        session.upVoteCount--;
    }
});
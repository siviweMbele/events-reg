'use strict';
eventsApp.controller('MainMenuController', function ($scope, $location) {
    console.log('absUrl', $location.absUrl());
    console.log('protocol', $location.protocol());
    console.log('port', $location.port());
    console.log('host', $location.host());
    console.log('path', $location.path());
    console.log('search', $location.search());
    console.log('hash', $location.hash());
    console.log('url', $location.url());
    
    $scope.createEvent = function(){
        $location.replace(); //used to remove the history of page visits.
        $location.url('/newEvent');
    }
});
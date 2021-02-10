'use strict';

eventsApp.controller('CookieStoreController', function ($scope, $cookies) {

    $scope.event = { id: 1, name: 'My Event' };

    $scope.saveEventToCookie = function (event) {
        $cookies.put('event',event);
    };

    $scope.getEventFromCookie = function () {
        var favoriteCookie = $cookies.get('event')
        console.log(favoriteCookie);
    };

    $scope.removeEventCookie = function (event) {
        $cookies.remove('event');
    };

});
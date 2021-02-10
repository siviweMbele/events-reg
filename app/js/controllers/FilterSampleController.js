'use strict';

//using $filterService
// eventsApp.controller('FilterSampleController', function($scope,$filter){
//     $scope.data = {};

//     var duration = $filter('durations');
//     $scope.data.duration1 = duration(1);
//     $scope.data.duration2 = duration(2);
//     $scope.data.duration3 = duration(3);
//     $scope.data.duration4 = duration(4);
// });

//injecting filter
eventsApp.controller('FilterSampleController', function($scope,durationsFilter){
    $scope.data = {};

    $scope.data.duration1 = durationsFilter(1);
    $scope.data.duration2 = durationsFilter(2);
    $scope.data.duration3 = durationsFilter(3);
    $scope.data.duration4 = durationsFilter(4);
});
'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope,gravatarUrlBuilder) {
        $scope.user = {};

        $scope.getGravatarUrl = function(email){
           return  gravatarUrlBuilder.buildGravatarUrl(email)
        }

        $scope.saveUser = function(user){
            console.log(user)
        }

    }
);

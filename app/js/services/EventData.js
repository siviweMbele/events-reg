eventsApp.factory('eventData', function ($http, $log, $resource) {
    
    var resource = $resource('/data/event/:id',{id:'@id'},{"getAll": {method:"GET", isArray:true, params: {something:"foo"}}});
    
    

    return {

        //USING RESOURCE FETCH DATA
        getEvent: function(eventId) {
            return resource.get({id:eventId});
        },

        //USING RESOURCE TO SAVE DATA
        save: function(event){
            $resource('/getAll').get().$promise.then(function(response){
                files = response.files;
                lastFile = files[files.length-1];
                event.id = parseInt(lastFile.split(".")[0]) + 1;
                return resource.save(event);
            });
        },

        getAllEvents: function() {
            return resource.query();
        }


        //USING HTTP FETCH DATA
        // getEvent: function(successcb) {
        //     $http(
        //         {menthod:'GET',
        //         url: '/data/event/1'}).
        //     then(function(response){
        //         successcb(response.data);
        //     },
        //     function(error){
        //         $log.warn(error);
        //     });
        // }

        // getEvent: function (successcb) {
        //     return $http(
        //         {
        //             menthod: 'GET',
        //             url: '/data/event/1'
        //         });
        // }
    };
});
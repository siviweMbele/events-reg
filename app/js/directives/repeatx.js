'use strict';

eventsApp.directive('repeatX', function(){
    return {
        compile: function (element, attr){
           for(let x = 0; x < (attr.repeatX - 1); x++){
               element.after(element.clone().attr('repeat-x',0));
           }

           return function(scope, element, attr, controller){
               attr.$observe('text', function (newValue) {
                   if( newValue === 'Hello World'){
                       element.css('color','red')
                   }
               })
           }

        }


        //..... USING LINK FUNCTION IS AN EXPENSIVE PROCEDURE .....
        // ,link : function(scope, element, attr, controller){
        //     for(let x = 0; x < Number(attr.repeatX) - 1; x++){
        //         element.after(element.clone().attr('repeat-x',0));
        //     }
        // }
    }
});
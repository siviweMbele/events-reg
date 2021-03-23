'use strict';
eventsApp
    .directive('greetings', function () {
        return {
            restrict: 'E', //element
            replace: 'true',
            // priority:-1,
            transclude:true, //this is used if you want to have nested directives also doesn't work on buttons (use divs)
            template: '<div> <button class="btn" ng-click="sayHello()" >Say Hello</button><div ng-transclude ></div></div>',
            // controller: '@',
            // name: 'ctrl'
            // controller: 'GreetingsController'
            controller: function ($scope) {
                var greetings = ['hello'];

                $scope.sayHello = function () {
                    alert(greetings.join());
                };

                this.addGreeting = function (greeting) {
                    greetings.push(greeting);
                };
            }


        };
    }).
    directive('finnish', function () {
        return {
            restrict: 'A', //attribute
            require: '^greetings',
            // priority:-1,
            // terminal: true,
            link: function (scope, element, attr, controller) {
                controller.addGreeting('hei')
            }
        };
    }).
    directive('hindi', function () {
        return {
            restrict: 'A',
            require: '^greetings',
            // priority:-2,
            link: function (scope, element, attr, controller) {
                controller.addGreeting('namaste')
            }
        };
    });



eventsApp.controller('GreetingsController', function GreetingsController($scope) {
    var greetings = ['hello'];

    $scope.sayHello = function () {
        alert(greetings.join());
    };

    this.addGreeting = function (greeting) {
        greetings.push(greeting);
    };
});

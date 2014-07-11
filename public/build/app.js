var app = angular.module('goDialogue', [
    'ngRoute',
    'goDialogue.services',
    'goDialogue.controllers',
    'goDialogue.directives'
]);

app.config(['$routeProvider', '$httpProvider', '$locationProvider',
function($routeProvider, $httpProvider, $locationProvider) {
   $routeProvider.when('/', {
       templateUrl: '/templates/dialogue_screen.html',
       controller: 'DialogueController'
   }).otherwise({
       redirectTo: '/'
   });
   $locationProvider.html5Mode(true).hashPrefix('!');
}]).run(['$rootScope',
function($rootScope) {
}]);

var controllers = angular.module('goDialogue.controllers', []);

controllers.controller('DialogueController',['$scope',
function ($scope){
     $scope.data = {
        "connections": [{
            "source": {
                "uuid": "15c07a57-393d-49da-8eb6-56ba550aa7cc"
            },
            "target": {
                "uuid": "62551f2b-d8f9-4de2-8074-690f399ab824"
            },
            "uuid": "15c07a57-393d-49da-8eb6-56ba550aa7cc-62551f2b-d8f9-4de2-8074-690f399ab824"
        }, {
            "source": {
                "uuid": "d8e397af-1496-4b54-8ac3-9950274053e2"
            },
            "target": {
                "uuid": "126508b4-8f06-4df8-a57f-5a23c0f72b9c"
            },
            "uuid": "d8e397af-1496-4b54-8ac3-9950274053e2-126508b4-8f06-4df8-a57f-5a23c0f72b9c"
        }],
        "urls": {
            "show": "/conversations/7e218c388f5644f9b912e25fe7f07af3/"
        },
        "poll_metadata": {
            "repeatable": true
        },
        "campaign_id": "28d0f7420cee4805b46a898dc3b3eb1e",
        "states": [{
            "ordinal": 0,
            "name": "Client name",
            "store_on_contact": false,
            "text": "Enter your name:",
            "x": 10,
            "y": 25,
            "exit_endpoint": {
                "uuid": "15c07a57-393d-49da-8eb6-56ba550aa7cc"
            },
            "entry_endpoint": {
                "uuid": "a5b62f11-f795-4e20-ae3b-55e26cf9cecd"
            },
            "user_defined_store_as": false,
            "store_as": "client-name",
            "type": "freetext",
            "uuid": "947fc081-3779-4a72-9a14-90dc2235e93c"
        }, {
            "ordinal": 1,
            "name": "Surname",
            "store_on_contact": false,
            "text": "Enter your surname:",
            "x": 15,
            "y": 29,
            "exit_endpoint": {
                "uuid": "d8e397af-1496-4b54-8ac3-9950274053e2"
            },
            "entry_endpoint": {
                "uuid": "62551f2b-d8f9-4de2-8074-690f399ab824"
            },
            "user_defined_store_as": false,
            "store_as": "surname",
            "type": "freetext",
            "uuid": "62634fbc-13ac-4cc5-a593-8df67600e227"
        }, {
            "ordinal": 2,
            "name": "Bye Screen",
            "store_on_contact": false,
            "text": "Cheers..Good bye!",
            "x": 40,
            "y": 17,
            "entry_endpoint": {
                "uuid": "126508b4-8f06-4df8-a57f-5a23c0f72b9c"
            },
            "user_defined_store_as": false,
            "store_as": "bye-screen",
            "type": "end",
            "uuid": "3d963275-9c7c-4ee9-9ddf-9956b78183b7"
        }],
        "groups": [{
            "user_account": "28d0f7420cee4805b46a898dc3b3eb1e",
            "key": "a58d3c7537c641949f5c7af02c544684",
            "$VERSION": null,
            "query": null,
            "created_at": "2014-06-09 10:43:23.170387",
            "name": "Service Delivery - Electricity"
        }, {
            "user_account": "28d0f7420cee4805b46a898dc3b3eb1e",
            "key": "9149b9aa6ff44750bd7e843843c7cc1b",
            "$VERSION": null,
            "query": null,
            "created_at": "2014-06-09 10:44:08.568903",
            "name": "Service Delivery - Other"
        }, {
            "user_account": "28d0f7420cee4805b46a898dc3b3eb1e",
            "key": "d67927a2b7d849d48e6326281cc24ecd",
            "$VERSION": null,
            "query": null,
            "created_at": "2014-06-09 10:43:47.879577",
            "name": "Service Delivery - Sanitation"
        }, {
            "user_account": "28d0f7420cee4805b46a898dc3b3eb1e",
            "key": "3d87e66d2e0b46aeb5abe820df4d906c",
            "$VERSION": null,
            "query": null,
            "created_at": "2014-06-09 10:45:13.193123",
            "name": "Service Delivery - Water"
        }],
        "conversation_key": "7e218c388f5644f9b912e25fe7f07af3",
        "start_state": {
            "uuid": "947fc081-3779-4a72-9a14-90dc2235e93c"
        }
        };
}]);


var directives = angular.module('goDialogue.directives', []);

directives.directive('goDialogueScreen',['$rootScope', 'utils','blocks','dialoguepane','screens',
    function($rootScope, utils, blocks, dialoguepane, screens){
        function controller($scope, $element, $attrs){
            $scope.data = $scope.data || {};
        }

        function link($scope, $element, $attrs){
            var state = blocks.state();
            var pane = dialoguepane.pane();
            var screen = screens.screen();

            d3.select($element.get(0)).selectAll('.state')
                .data($scope.data.states, function(d){return d.name;})
                .call(state);

            d3.select($element.get(0)).selectAll('.pane')
                .data([{
                    key: 'a',
                        type:' Dialogue Pane'
                    }],function(d){return d.key;})
                .call(pane);

            d3.select($element.get(0)).selectAll('.screen')
                .data([{
                    key: 'a',
                        type:'Multiple Choice',
                           x: 960,
                           y: 40
                    },{
                    key: 'b',
                        type: 'Open Answer',
                          x: 960,
                          y: 120
                    },{
                    key: 'c',
                        type: 'Show text  & close',
                          x: 960,
                          y: 200
                    },{
                    key: 'd',
                        type: 'Add text & close',
                          x: 960,
                          y: 280
                    }],function(d){return d.key;})
                .call(screen);
        }

        return{
            restrict: 'E',
            replace: true,
            template: '<svg width=90% height=600></svg>',
            scope:{
                data: '='
            },
            controller: ['$scope','$element','$attrs', controller],
            link: link
        };
    }
]);

var services = angular.module('goDialogue.services', []);


services.factory('utils', [function () {
}]);

services.factory('shapes', [function () {
    function circle(opts) {
        opts = opts || {};
        var color = opts.color || '#33cc33';

        function component(selection) {
            // entering
            var enter = selection.enter().append('g')
                    .attr('class', 'circle');

                enter.append('circle')
                    .attr('r', function() { return 30; })
                    .style('fill', color);

                enter.append('text')
                    .text(function(d){return d.name;});

            // updating
                selection
                    .attr('transform', 'translate (80, 0)');

            // exiting
            selection.exit()
                .remove();
        }

        return component;
    }

    return {
        circle: circle
    };
}]);

services.factory('dialoguepane', [function () {
    function pane(){
        function component(selection){

            var w = 180,
                h = 650;

            var enter = selection.enter().append('g')
                        .attr('class','pane');
            //entering
                enter.append('rect')
                    .attr('width', w)
                    .attr('height', h)
                    .attr('rx', 6)
                    .attr('x', 920)
                    .attr('ry', 6);

            //updating


            //exiting
        }
        return component;
    }
    return {
        pane: pane
    };
}]);

services.factory('screens', [function () {
    function screen(){
        function component(selection){

            var drag = d3.behavior.drag()
                .on('drag', function(d,i){
                    d.x += d3.event.dx;
                    d.y += d3.event.dy;
                    d3.select(this).attr('transform', function(d, i){
                        return "translate(" + [d.x, d.y ] + ")";
                    });
                });

            var w = 80,
                h = 50;

            var enter = selection.enter().append('g')
                        .attr('class','screen')
                        .call(drag);

            //entering
                enter.append('rect')
                     .attr('width', w)
                     .attr('height', h)
                     .attr('rx', 6)
                     .attr('ry', 6);

                enter.append('text')
                    .text(function(d){return d.type;})
                    .attr('x',5)
                    .attr('y', 12);

            //updating
            selection
                    .attr('transform', function(d){return "translate("+d.x+","+d.y+")";});

            //exiting
            selection.exit()
                .remove();
        }
        return component;
    }
    return {
        screen: screen
    };
}]);

services.factory('blocks', [function () {
    function state(){

        function component(selection){
            //entering

            var drag = d3.behavior.drag()
                .on('drag', function(d,i){
                    d.x += d3.event.dx;
                    d.y += d3.event.dy;
                    d3.select(this).attr('transform', function(d, i){
                        return "translate(" + [d.x, d.y ] + ")";
                    });
                });

            var w =130,
                h = 160;

            var enter = selection.enter().append('g')
                        .attr('class','state')
                        .call(drag);

                enter.append('rect')
                    .attr('width', w)
                    .attr('height', h)
                    .attr('rx', 6)
                    .attr('ry', 6);

                enter.append('text')
                    .text(function(d){return d.name;})
                    .attr('x',5)
                    .attr('y', 12);

                enter.append('line')
                    .attr('x1', 10)
                    .attr('y1',110)
                    .attr('x2',120)
                    .attr('y2',110);

                enter.append('text')
                    .text('edit')
                    .attr('x', 5)
                    .attr('y',128);

                enter.append('text')
                    .attr('x', 95)
                    .attr('y', 128)
                    .text('x');

            //updating
                    selection
                    .attr('transform', function(d){return "translate("+d.x+","+d.y+")";});

            //exiting
            selection.exit()
                .remove();
        }
        return component;
    }
    return {
        state: state
    };
}]);
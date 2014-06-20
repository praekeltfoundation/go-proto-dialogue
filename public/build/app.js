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

controllers.controller('DialogueController', ['$scope',
function ($scope) {
    $scope.data = {
        nodes: [{
            key: 'a',
            r: 30
        }, {
            key: 'b',
            r: 20
        }]
    };
}]);

var directives = angular.module('goDialogue.directives', []);


directives.directive('goDialogueScreen', ['$rootScope', 'utils', 'shapes',
function ($rootScope, utils, shapes) {
    function controller($scope, $element, $attrs) {
        $scope.data = $scope.data || {};
    }


    function link($scope, $element, $attrs) {
        var circle = shapes.circle();

        d3.select($element.get(0)).selectAll('.circle')
            .data($scope.data.nodes, function(d) { return d.key; })
            .call(circle);
    }


    return {
        restrict: 'E',
        replace: true,
        template: '<svg width=600 height=600></svg>',
        scope: {
            data: '='
        },
        controller: ['$scope', '$element', '$attrs', controller],
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
            selection.enter().append('circle')
                .attr('class', 'circle');

            // updating
            selection
                .attr('r', function(d) { return d.r; })
                .style('fill', color);

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

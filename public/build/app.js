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
    $scope.data = {};
}]);

var directives = angular.module('goDialogue.directives', []);


directives.directive('goDialogueScreen', ['$rootScope', 'utils',
function ($rootScope, utils) {
    function controller($scope, $element, $attrs) {
        $scope.data = $scope.data || {};
    }


    function link($scope, $element, $attrs) {
    }


    return {
        restrict: 'E',
        replace: true,
        template: '<div></div>',
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

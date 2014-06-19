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

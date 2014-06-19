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

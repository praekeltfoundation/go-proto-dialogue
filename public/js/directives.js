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

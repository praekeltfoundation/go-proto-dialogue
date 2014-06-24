var directives = angular.module('goDialogue.directives', []);


directives.directive('goDialogueScreen', ['$rootScope', 'utils', 'shapes',
function ($rootScope, utils, shapes) {
    function controller($scope, $element, $attrs) {
        $scope.data = $scope.data || {};
    }


    function link($scope, $element, $attrs) {
        var circle = shapes.circle();

        d3.select($element.get(0)).selectAll('.circle')
            .data($scope.data.states, function(d) { return d.name; })
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

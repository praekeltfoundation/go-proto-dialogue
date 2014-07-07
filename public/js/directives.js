var directives = angular.module('goDialogue.directives', []);

directives.directive('goDialogueScreen',['$rootScope', 'utils','blocks',
    function($rootScope, utils, blocks){
        function controller($scope, $element, $attrs){
            $scope.data = $scope.data || {};
        }

        function link($scope, $element, $attrs){
            var state = blocks.state();

            d3.select($element.get(0)).selectAll('.state')
                .data($scope.data.states, function(d){return d.name;})
                .call(state);
        }

        return{
            restrict: 'E',
            replace: true,
            template: '<svg width=750 height=600></svg>',
            scope:{
                data: '='
            },
            controller: ['$scope','$element','$attrs', controller],
            link: link
        };
    }
]);

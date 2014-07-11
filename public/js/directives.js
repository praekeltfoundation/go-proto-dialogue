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

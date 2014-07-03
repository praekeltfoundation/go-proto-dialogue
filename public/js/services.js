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

services.factory('blocks', [function () {
    function state(opts){
        opts = opts || {};
        var color = opts.color || '#33cc33';

        function component(selection){
            //entering
            var enter = selection.enter().append('g')
                        .attr('class','state');

                enter.append('foreignObject')
                    .attr('width', '100')
                    .attr('height', '50')
                    .attr('requiredExtensions', 'http://www/w3.org/1999/xhtml');

                enter.append('text')
                    .text(function(d){return d.name;})
                    .style('fill',color);

            //updating
                    selection
                    .attr('transform', 'translate (80, 0)');

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
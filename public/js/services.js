var services = angular.module('goDialogue.services', []);


services.factory('utils', [function () {
}]);

services.factory('shapes', [function () {
    function circle(opts) {
        opts = opts || {};
        var color = opts.color || '#33cc33';

        function component(selection) {
            // entering
            var enter = selection.enter().append('g');

                enter.append('circle')
                    .attr('class','circle')
                    .attr('r', function() { return 30; })
                    .style('fill', color);

                enter.append('text')
                    .attr('dx', function(){return (Math.random() * 500);});

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
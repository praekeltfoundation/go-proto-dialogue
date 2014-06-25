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
                .attr('r', function() { return 30; })
                .attr('cx', function(){return (Math.random() * 720);})
                .attr('cy', function(){return (Math.random() * 300);})
                .style('fill', color);

            selection.enter().append('text')
                .attr('dx', function(){return (Math.random() * 500);})
                .text(function(d){return d.name;});

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
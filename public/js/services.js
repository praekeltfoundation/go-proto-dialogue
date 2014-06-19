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
                .attr('r', function(d) { return d.r; })
                .style('fill', color);

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

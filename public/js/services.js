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

            var drag = d3.behavior.drag()
                .on('drag', function(d,i){
                    d.x += d3.event.dx;
                    d.y += d3.event.dy;
                    d3.select(this).attr('transform', function(d, i){
                        return "translate(" + [d.x, d.y ] + ")";
                    });
                });

            var enter = selection.enter().append('g')
                        .attr('class','state')
                        .call(drag);

                enter.append('rect')
                    .attr('stroke-width', 1)
                    .attr('stroke','black')
                    .attr('width', 130)
                    .attr('height', 160)
                    .attr('rx', 6)
                    .attr('ry', 6)
                    .style('fill', '#FFFFFF');

                enter.append('text')
                    .text(function(d){return d.name;})
                    .attr('x', function(d){return d.x;})
                    .attr('y', function(d){return d.y;})
                    .style('fill',color);

                enter.append('line')
                    .attr('x1',function(d){return d.x - 10;})
                    .attr('y1',function(d){return d.y + 110;})
                    .attr('x2',function(d){return d.x + 120;})
                    .attr('y2',function(d){return d.y + 110;})
                    .attr('stroke','rgb(6,120,155)');

                enter.append('text')
                    .text(function(){return "edit";})
                    .attr('x', function(d){return d.x;})
                    .attr('y', function(d){return d.y + 128;})
                    .style('fill','black');

                enter.append('text')
                    .attr('x', function(d){return d.x + 95;})
                    .attr('y', function(d){return d.y + 128;})
                    .text(function(d){return 'x';});

            //updating
                    selection
                    .attr('transform', function(d){return "translate("+(Math.random() * 510)+","+(0)+")";});

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
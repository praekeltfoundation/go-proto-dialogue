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

services.factory('dialoguepane', [function () {
    function pane(){
        function component(selection){

            var w = 180,
                h = 650;

            var enter = selection.enter().append('g')
                        .attr('class','pane');
            //entering
                enter.append('rect')
                    .attr('width', w)
                    .attr('height', h)
                    .attr('rx', 6)
                    .attr('x', 920)
                    .attr('ry', 6);

            //updating


            //exiting
        }
        return component;
    }
    return {
        pane: pane
    };
}]);

services.factory('screens', [function () {
    function screen(){
        function component(selection){

            var drag = d3.behavior.drag()
                .on('drag', function(d,i){
                    d.x += d3.event.dx;
                    d.y += d3.event.dy;
                    d3.select(this).attr('transform', function(d, i){
                        return "translate(" + [d.x, d.y ] + ")";
                    });
                });

            var w = 80,
                h = 50;

            var enter = selection.enter().append('g')
                        .attr('class','screen')
                        .call(drag);

            //entering
                enter.append('rect')
                     .attr('width', w)
                     .attr('height', h)
                     .attr('rx', 6)
                     .attr('ry', 6);

                enter.append('text')
                    .text(function(d){return d.type;})
                    .attr('x',5)
                    .attr('y', 12);

            //updating
            selection
                    .attr('transform', function(d){return "translate("+d.x+","+d.y+")";});

            //exiting
            selection.exit()
                .remove();
        }
        return component;
    }
    return {
        screen: screen
    };
}]);

services.factory('blocks', [function () {
    function state(){

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

            var w =130,
                h = 160;

            var enter = selection.enter().append('g')
                        .attr('class','state')
                        .call(drag);

                enter.append('rect')
                    .attr('width', w)
                    .attr('height', h)
                    .attr('rx', 6)
                    .attr('ry', 6);

                enter.append('text')
                    .text(function(d){return d.name;})
                    .attr('x',5)
                    .attr('y', 12);

                enter.append('line')
                    .attr('x1', 10)
                    .attr('y1',110)
                    .attr('x2',120)
                    .attr('y2',110);

                enter.append('text')
                    .text('edit')
                    .attr('x', 5)
                    .attr('y',128);

                enter.append('text')
                    .attr('x', 95)
                    .attr('y', 128)
                    .text('x');

            //updating
                    selection
                    .attr('transform', function(d){return "translate("+d.x+","+d.y+")";});

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
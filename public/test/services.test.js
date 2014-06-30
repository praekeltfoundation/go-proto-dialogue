describe("goDialogue.services", function() {
    beforeEach(module('goDialogue.services'));

    describe(".shapes", function(){
        describe(".circle", function(){
            it("shoud set the circle color", inject(function(shapes){
                var svg = angular.element('<svg width="100" height="100"></svg>');
                var circle = shapes.circle({color: '#eeeeee'});
                d3.select(svg.get(0)).selectAll('.circle')
                    .data([{
                        key: 'a',
                            r: 3
                        }, {
                        key: 'b',
                            r: 2
                        }], function(d) {return d.key;})
                    .call(circle);

                    expect(svg.find('.circle').eq(0).css('fill')).to.equal('#eeeeee');
                    expect(svg.find('.circle').eq(1).css('fill')).to.equal('#eeeeee');
            }));

            it("should increment svg text elements", inject(function(fixtures){
                var svg = angular.element('<svg width="100" height="100"></svg>');

                d3.select(svg.get(0)).selectAll('.text')
                    .data(fixtures.simple().states, function(d){return d.name;})
                    .enter()
                    .append('text');

                    expect(svg.find('text')).to.have.length(3);
                })
            );
        });
    });
});
describe("goDialogue.services", function(){
    beforeEach(module('goDialogue.services'));

    describe(".shapes", function(){
        describe(".circle", function(){
            it("should set the circle color", inject(function(shapes){
                var svg = angular.element('<svg width="100" height="100"></svg>');
                var circle = shapes.circle({color: '#eeeeee'});
                d3.select(svg.get(0)).selectAll('.circle')
                    .data([{
                        key: 'a',
                            r: 3,
                            name: 'Client name'
                        }, {
                        key: 'b',
                            r: 2,
                            name: 'Surname'
                        }], function(d){return d.key;})
                    .call(circle);

                    expect(svg.find('.circle')).to.have.length(2);
                    expect(svg.find('.circle').eq(0).css('fill')).to.equal('#eeeeee');
                    expect(svg.find('.circle').eq(1).css('fill')).to.equal('#eeeeee');

                d3.select(svg.get(0)).selectAll('.circle')
                    .data([{
                        key: 'a',
                            r: 3,
                            name: 'Client name'
                        }, {
                        key: 'c',
                            r: 2,
                            name: 'Bye Scree'
                        }], function(d){return d.key;})
                    .call(circle);

                    expect(svg.find('.circle')).to.have.length(2);
                    expect(svg.find('.circle').eq(0).css('fill')).to.equal('#eeeeee');
                    expect(svg.find('.circle').eq(1).css('fill')).to.equal('#eeeeee');
            }));

            it("should redraw text properly", inject(function(shapes){
                var svg = angular.element('<svg width="100" height="100"></svg>');
                var circle = shapes.circle({color: '#eeeeee'});
                d3.select(svg.get(0)).selectAll('.circle')
                    .data([{
                        key: 'a',
                            r: 3,
                            name: 'Client name'
                        }, {
                        key: 'b',
                            r: 2,
                            name: 'Surname'
                        }], function(d){return d.key;})
                    .call(circle);

                    expect(svg.find('text')).to.have.length(2);
                    expect(svg.find('.circle').eq(0).find('Client name').text());
                    expect(svg.find('.circle').eq(1).find('Surname').text());

                d3.select(svg.get(0)).selectAll('.circle')
                    .data([{
                        key: 'a',
                            r: 3,
                            name: 'Client name'
                        }, {
                        key: 'c',
                            r: 2,
                            name: 'Bye Screen'
                        }], function(d){return d.key;})
                    .call(circle);

                    expect(svg.find('text')).to.have.length(3);
                    expect(svg.find('.circle').eq(0).find('Client name').text());
                    expect(svg.find('.circle').eq(1).find('Bye Screen').text());

            }));
        });
    });
});
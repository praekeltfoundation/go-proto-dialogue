describe("goDialogue.services", function() {
    beforeEach(module('goDialogue.services'));

    describe(".shapes", function() {
        describe(".circle", function() {
            it("should set the circles radius", inject(function(shapes) {
                var svg = angular.element('<svg width="100" height="100"></svg>');

                var circle = shapes.circle();
                d3.select(svg.get(0)).selectAll('.circle')
                    .data([{
                        key: 'a',
                        r: 3
                    }, {
                        key: 'b',
                        r: 2
                    }], function(d) {
                        return d.key;
                    })
                    .call(circle);

                expect(svg.find('.circle')).to.have.length(2);
                expect(svg.find('.circle').eq(0).attr('r')).to.equal('3');
                expect(svg.find('.circle').eq(1).attr('r')).to.equal('2');

                d3.select(svg.get(0)).selectAll('.circle')
                    .data([{
                        key: 'b',
                        r: 3
                    }, {
                        key: 'c',
                        r: 5
                    }], function(d) {
                        return d.key;
                    })
                    .call(circle);

                expect(svg.find('.circle')).to.have.length(2);
                expect(svg.find('.circle').eq(0).attr('r')).to.equal('3');
                expect(svg.find('.circle').eq(1).attr('r')).to.equal('5');
            }));

            it("should set the circles color", inject(function(shapes) {
                var svg = angular.element('<svg width="100" height="100"></svg>');
                var circle = shapes.circle({color: '#eee'});

                d3.select(svg.get(0)).selectAll('.circle')
                    .data([{
                        key: 'a',
                        r: 3
                    }, {
                        key: 'b',
                        r: 2
                    }], function(d) {
                        return d.key;
                    })
                    .call(circle);

                expect(svg.find('.circle')).to.have.length(2);
                expect(svg.find('.circle').eq(0).css('fill')).to.equal('#eeeeee');
                expect(svg.find('.circle').eq(1).css('fill')).to.equal('#eeeeee');

                d3.select(svg.get(0)).selectAll('.circle')
                    .data([{
                        key: 'b',
                        r: 3
                    }, {
                        key: 'c',
                        r: 5
                    }], function(d) {
                        return d.key;
                    })
                    .call(circle);

                expect(svg.find('.circle')).to.have.length(2);
                expect(svg.find('.circle').eq(0).css('fill')).to.equal('#eeeeee');
                expect(svg.find('.circle').eq(1).css('fill')).to.equal('#eeeeee');
            }));
        });
    });
});

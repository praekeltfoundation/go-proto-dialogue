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

                    expect(svg.find('.circle').find('circle')).to.have.length(2);
                    expect(svg.find('.circle').eq(0).find('circle').css('fill')).to.equal('#eeeeee');
                    expect(svg.find('.circle').eq(1).find('circle').css('fill')).to.equal('#eeeeee');

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

                    expect(svg.find('.circle').find('circle')).to.have.length(2);
                    expect(svg.find('.circle').eq(0).find('circle').css('fill')).to.equal('#eeeeee');
                    expect(svg.find('.circle').eq(1).find('circle').css('fill')).to.equal('#eeeeee');
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

                     expect(svg.find('.circle').find('text')).to.have.length(2);
                     expect(svg.find('.circle').find('text').eq(0).text()).to.equal('Client name');
                     expect(svg.find('.circle').find('text').eq(1).text()).to.equal('Surname');

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

                     expect(svg.find('.circle').find('text')).to.have.length(2);
                     expect(svg.find('.circle').find('text').eq(0).text()).to.equal('Client name');
                     expect(svg.find('.circle').find('text').eq(1).text()).to.equal('Bye Screen');
            }));
        });
    });
});

describe("goDialogue.services", function(){
    beforeEach(module('goDialogue.services'));

    describe(".blocks", function(){
        describe(".state", function(){
            it("should fill the rectangle color", inject(function(blocks){
            var svg = angular.element('<svg width="100" height="100"></svg>');
            var rect = blocks.state({color: '#ffffff'});
            d3.select(svg.get(0)).selectAll('.state')
                .data([{
                    key: 'a',
                        width: 3,
                        height: 4,
                        name: 'Client name'
                    },{
                    key: 'b',
                        width: 2,
                        height: 3,
                        name: 'Surname'
                    }], function(d){return d.key;})
                .call(rect);

                expect(svg.find('.state').find('rect')).to.have.length(2);
                expect(svg.find('.state').eq(0).find('rect').css('fill')).to.equal('#ffffff');
                expect(svg.find('.state').eq(1).find('rect').css('fill')).to.equal('#ffffff');

                d3.select(svg.get(0)).selectAll('.state')
                .data([{
                    key: 'a',
                        width: 3,
                        height: 4,
                        name: 'Client name'
                    },{
                    key: 'c',
                        width: 4,
                        height: 6,
                        name: 'Bye Screen'
                    }], function(d){return d.key;})
                .call(rect);

                expect(svg.find('.state').find('rect')).to.have.length(2);
                expect(svg.find('.state').eq(0).find('rect').css('fill')).to.equal('#ffffff');
                expect(svg.find('.state').eq(1).find('rect').css('fill')).to.equal('#ffffff');
            }));

            it("should check screen texts", inject(function(blocks){
            var svg = angular.element('<svg width="100" height="100"></svg>');
            var rect = blocks.state({color: '#ffffff'});
            d3.select(svg.get(0)).selectAll('.state')
                .data([{
                    key: 'a',
                        width: 3,
                        height: 4,
                        name: 'Client name'
                    },{
                    key: 'b',
                        width: 2,
                        height: 3,
                        name: 'Surname'
                    }], function(d){return d.key;})
                .call(rect);

                expect(svg.find('.state').find('rect')).to.have.length(2);
                expect(svg.find('.state').find('text').eq(0).text()).to.equal('Client name');
                expect(svg.find('.state').find('text').eq(3).text()).to.equal('Surname');

                d3.select(svg.get(0)).selectAll('.state')
                .data([{
                    key: 'a',
                        width: 3,
                        height: 4,
                        name: 'Client name'
                    },{
                    key: 'c',
                        width: 4,
                        height: 6,
                        name: 'Bye Screen'
                    }], function(d){return d.key;})
                .call(rect);

                expect(svg.find('.state').find('rect')).to.have.length(2);
                expect(svg.find('.state').find('text').eq(0).text()).to.equal('Client name');
                expect(svg.find('.state').find('text').eq(3).text()).to.equal('Bye Screen');
            }));
        });
    });
});
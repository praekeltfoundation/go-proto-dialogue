describe("goDialogue.directives", function() {
    beforeEach(module('goDialogue.services'));
    beforeEach(module('goDialogue.directives'));

    describe(".shapes", function(){
        describe(".circle", function(){
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
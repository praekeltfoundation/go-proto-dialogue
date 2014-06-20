describe("goDialogue.directives", function() {
    beforeEach(module('goDialogue.services'));
    beforeEach(module('goDialogue.directives'));

    describe(".goDialogueScreen", function() {
        var $el;

        beforeEach(inject(function($rootScope, $compile) {
            $rootScope.data = {
                nodes: [{
                    key: 'a',
                    r: 3
                }, {
                    key: 'b',
                    r: 2
                }]
            };

            $el = angular.element([
                '<go-dialogue-screen data-data="data" class="go-dialogue">',
                '</go-dialogue-screen>'
            ].join(''));

            $compile($el)($rootScope);
            $rootScope.$digest();
        }));

        it("should draw circles", function() {
            expect($el.find('.circle')).to.have.length(2);
        });
    });
});

describe("goDialogue.directives", function() {
    beforeEach(module('goDialogue.services'));
    beforeEach(module('goDialogue.directives'));

    describe(".goDialogueScreen", function() {
        var $el;

        beforeEach(inject(function($rootScope, $compile) {
        $rootScope.data = {
            "connections": [{
                "source": {
                    "uuid": "15c07a57-393d-49da-8eb6-56ba550aa7cc"
                },
                "target": {
                    "uuid": "62551f2b-d8f9-4de2-8074-690f399ab824"
                },
                "uuid": "15c07a57-393d-49da-8eb6-56ba550aa7cc-62551f2b-d8f9-4de2-8074-690f399ab824"
            }, {
                "source": {
                    "uuid": "d8e397af-1496-4b54-8ac3-9950274053e2"
                },
                "target": {
                    "uuid": "126508b4-8f06-4df8-a57f-5a23c0f72b9c"
                },
                "uuid": "d8e397af-1496-4b54-8ac3-9950274053e2-126508b4-8f06-4df8-a57f-5a23c0f72b9c"
            }],
            "urls": {
                "show": "/conversations/7e218c388f5644f9b912e25fe7f07af3/"
            },
            "poll_metadata": {
                "repeatable": true
            },
            "campaign_id": "28d0f7420cee4805b46a898dc3b3eb1e",
            "states": [{
                "ordinal": 0,
                "name": "Client name",
                "store_on_contact": false,
                "text": "Enter your name:",
                "exit_endpoint": {
                    "uuid": "15c07a57-393d-49da-8eb6-56ba550aa7cc"
                },
                "entry_endpoint": {
                    "uuid": "a5b62f11-f795-4e20-ae3b-55e26cf9cecd"
                },
                "user_defined_store_as": false,
                "store_as": "client-name",
                "type": "freetext",
                "uuid": "947fc081-3779-4a72-9a14-90dc2235e93c"
            }, {
                "ordinal": 1,
                "name": "Surname",
                "store_on_contact": false,
                "text": "Enter your surname:",
                "exit_endpoint": {
                    "uuid": "d8e397af-1496-4b54-8ac3-9950274053e2"
                },
                "entry_endpoint": {
                    "uuid": "62551f2b-d8f9-4de2-8074-690f399ab824"
                },
                "user_defined_store_as": false,
                "store_as": "surname",
                "type": "freetext",
                "uuid": "62634fbc-13ac-4cc5-a593-8df67600e227"
            }, {
                "ordinal": 2,
                "name": "Bye Screen",
                "store_on_contact": false,
                "text": "Cheers..Good bye!",
                "entry_endpoint": {
                    "uuid": "126508b4-8f06-4df8-a57f-5a23c0f72b9c"
                },
                "user_defined_store_as": false,
                "store_as": "bye-screen",
                "type": "end",
                "uuid": "3d963275-9c7c-4ee9-9ddf-9956b78183b7"
            }],
            "groups": [{
                "user_account": "28d0f7420cee4805b46a898dc3b3eb1e",
                "key": "a58d3c7537c641949f5c7af02c544684",
                "$VERSION": null,
                "query": null,
                "created_at": "2014-06-09 10:43:23.170387",
                "name": "Service Delivery - Electricity"
            }, {
                "user_account": "28d0f7420cee4805b46a898dc3b3eb1e",
                "key": "9149b9aa6ff44750bd7e843843c7cc1b",
                "$VERSION": null,
                "query": null,
                "created_at": "2014-06-09 10:44:08.568903",
                "name": "Service Delivery - Other"
            }, {
                "user_account": "28d0f7420cee4805b46a898dc3b3eb1e",
                "key": "d67927a2b7d849d48e6326281cc24ecd",
                "$VERSION": null,
                "query": null,
                "created_at": "2014-06-09 10:43:47.879577",
                "name": "Service Delivery - Sanitation"
            }, {
                "user_account": "28d0f7420cee4805b46a898dc3b3eb1e",
                "key": "3d87e66d2e0b46aeb5abe820df4d906c",
                "$VERSION": null,
                "query": null,
                "created_at": "2014-06-09 10:45:13.193123",
                "name": "Service Delivery - Water"
            }],
            "conversation_key": "7e218c388f5644f9b912e25fe7f07af3",
            "start_state": {
                "uuid": "947fc081-3779-4a72-9a14-90dc2235e93c"
            }
            };

            $el = angular.element([
                '<go-dialogue-screen data-data="data" class="go-dialogue">',
                '</go-dialogue-screen>'
            ].join(''));

            $compile($el)($rootScope);

            $rootScope.$digest();

            //console.log($rootScope);

            describe(".goDialogue", function(){
                it("Should set the circle colour");
                console.log($rootScope);
                console.log("Should set colour describe");
            });
        }));

        it("should draw circles", function() {
            expect($el.find('.circle')).to.have.length(3);
            console.log("Should draw circles");
        });
    });
});

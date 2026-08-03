
import PetService from "../../services/PetService";


describe("pet crud end to end flow", () => {


    it("Create, Get, Update and Delete Pet", () => {


        cy.fixture("pet").then((petData) => {


            const payload = {

                id: Date.now(),

                ...petData

            };


            // CREATE PET

            PetService.createPet(payload)

            .then((createResponse) => {


                expect(createResponse.status)
                    .to.eq(200);


                const petId = createResponse.body.id;


                cy.log("Created Pet ID: " + petId);



                // GET PET

                return PetService.getPet(petId);


            })

            .then((getResponse) => {


                expect(getResponse.status)
                    .to.eq(200);


                expect(getResponse.body.name)
                    .to.eq("CypressDog");



                const updatePayload = {

                    id: getResponse.body.id,

                    name: "UpdatedDog",

                    photoUrls: [
                        "photo"
                    ],

                    status: "sold"

                };


                // UPDATE PET

                return PetService.updatePet(updatePayload);


            })

            .then((updateResponse) => {


                expect(updateResponse.status)
                    .to.eq(200);


                return PetService.deletePet(
                    updateResponse.body.id
                );


            })

            .then((deleteResponse) => {


                expect(deleteResponse.status)
                    .to.eq(200);


            });


        });


    });


});
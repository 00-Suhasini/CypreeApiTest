
import petService from "../../services/petService";

describe("pet crud end to end flow",()=>{
  

  it("create pet",()=>{
   cy.fixture("pet").then((petData)=>{
    const payload={
        id:Date.now(),
         ...petData
    };
   
   
    petService.createPet(payload)
    .then((createResponse)=>{
        expect(createResponse.status).to.eq(200);
       const petId=createResponse.body.id;
         cy.log("Created Pet ID: " + petId);
    });
  });
     it("get pet api",()=>{
        petService.getPet(petId)
        .then((response)=>{
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(petId);
        });
     });
it("update pet api",()=>{
 const payload={
    id:petId,

name:"UpdatedDog",

photoUrls:["photo"],

status:"sold"
 };
petService.createPet(payload)
.then((response)=>{
    expect(response.status).to.eq(200);
    expect(response.body.status).to.eq("sold");
});
});
it("delete pet api",()=>{
    petService.deletePet(petId)
    .then((response)=>{
        expect(response.status).to.eq(200);

    });
});
  });
});

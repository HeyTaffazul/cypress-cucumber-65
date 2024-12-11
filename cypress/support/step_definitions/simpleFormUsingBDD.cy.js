import {Given,And,When,Then} from "cypress-cucumber-preprocessor/steps";
Given('I open the simple form page',()=>{
cy.visit('https://v1.training-support.net/selenium/simple-form');
});

And("I fill all the data in form",() => {
    cy.get("#firstName").type("Taffazul");
    cy.get("#lastName").type("Ansari");
    cy.get("#email").type("Taffazulansari@gmail.com");
    cy.get("#number").type("7979047741");
    cy.get('[rows="2"]').type("This is a test message from Taffazul");
  });

  When("I click the submit button", () => {
    cy.get("input[type='submit']").click();
  });



//   Then("I click the submit button", () => {
//     cy.get("input[type='submit']").click();
//   });

  Then("I should see a confirmation message", () => {
    cy.on("windown:alert",( alertText) =>{
        expect(alertText).to.equal('Thanks you');
    });
  });

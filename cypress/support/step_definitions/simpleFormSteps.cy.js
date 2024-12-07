import {Given,And,Then} from "cypress-cucumber-preprocessor/steps";
Given('open the url',()=>{
cy.visit('https://the-internet.herokuapp.com/login');
})
And("Enter username and pasword",()=>{
cy.get("#username").type("tomsmith");
cy.get('[type="password"]').type("SuperSecretPassword!");
})
Then('click on button',()=>{
cy.get(".radius").click();
})
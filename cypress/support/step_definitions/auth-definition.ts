import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the app", () => {
  cy.visit("/");
});
When("I am not yet authenticated", () => {
  //
  
})

Then("I should be redirected to signin screen", () => {
  cy.contains('login');
});
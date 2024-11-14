import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the app", () => {
  cy.visit("/");
});
When("I click basic calculator", () => {
  cy.get('#Pivot167-Tab0 > .ms-Button-flexContainer > .ms-Pivot-linkContent').click();
})

When("I click {string} button", (calcBtn:string) => {
  cy.get(`[aria-label="${calcBtn}"]`).click();
})
When("I click {int} button", (num:number) => {
  cy.get(`[aria-label="${num}"]`).click();
})

Then("I should see the basic calculator", () => {
  cy.get('[aria-label="Subtract"]').should('be.visible');
  cy.get('[aria-label="Add"]').should('be.visible');
});
Then("I should see results shown as {string}", (result:string) => {
  cy.get('.GuppyField_cc__CAqHC').contains(result)
});
///
describe("About me test", () => {
  before(() => {});
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL"));
  });

  it("It should display Home page", () => {
    cy.url().should("eq", Cypress.env("BASE_URL"));
  });
  it("It should navigate to about me page and go back to home page", () => {
    cy.get('button[id="headlessui-disclosure-button-3"').click();
    cy.get('a[href="/about-me"]').last().should("be.visible").click();
    cy.url().should("eq", `${Cypress.env("BASE_URL")}about-me`);
    cy.get('button[id="headlessui-disclosure-button-7"').click();
    cy.get('a[href="/"]').last().should("be.visible").click();
    cy.url().should("eq", `${Cypress.env("BASE_URL")}`);
  });
});

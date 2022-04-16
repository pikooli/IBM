///
describe("First test", () => {
  before(() => {});
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL"));
  });
  it("Visit home page ", () => {
    for (let i = 1; i <= 100; i++) {
      cy.contains(i);
    }
  });
});

import pickColor from "services/boxServices/pickColor";

///
describe("First test", () => {
  before(() => {});
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL"));
  });

  it("It should display home page", () => {
    cy.url().should("eq", Cypress.env("BASE_URL"));
  });

  it("It should have 100 box with the corresponding color", () => {
    for (let i = 1; i <= 100; i++) {
      const color = pickColor(i) || "rgba(0, 0, 0, 0)";
      cy.contains("div", i).should("has.css", "background-color", color);
    }
  });
});

import pickColor from "services/boxServices/pickColor";

const checkBox = (size: number) => {
  for (let i = 1; i <= size; i++) {
    const color = pickColor(i) || "rgba(0, 0, 0, 0)";
    cy.contains("div", i).should("has.css", "background-color", color);
  }
};

///
describe("Home page", () => {
  before(() => {});
  beforeEach(() => {
    cy.visit(Cypress.env("BASE_URL"));
  });

  it("It should display home page", () => {
    cy.url().should("eq", Cypress.env("BASE_URL"));
  });

  it("It should have 100 box with the corresponding color", () => {
    checkBox(100);
  });

  it("It should input 0 don't change the number of boxes", () => {
    cy.get('input[name="size"]').type("0");
    cy.get('button[type="submit"]').click();
    checkBox(100);
  });

  it("It should input 200 and display 200 box with the corresponding color", () => {
    cy.get('input[name="size"]').type("200");
    cy.get('button[type="submit"]').click();
    checkBox(200);
  });
});

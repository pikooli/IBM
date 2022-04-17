///
describe("About me test", () => {
  const url = `${Cypress.env("BASE_URL")}about-me`;

  before(() => {});
  beforeEach(() => {
    cy.visit(url);
  });

  it("It should display about me page", () => {
    cy.url().should("eq", url);
    cy.contains("Pascal Zhang");
    cy.contains("Green dot");
    cy.get(
      'img[src="https://www.pngitem.com/pimgs/m/80-805001_bongo-cat-game-hd-png-download.png"]'
    );
  });
});

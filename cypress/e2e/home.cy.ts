describe("Home page test suite", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it("displays required elements", () => {
    cy.get("nav").should("exist")
    cy.get("header").should("exist")
    cy.get("#artists-list").should("exist")
  })
})

describe("Stopwatch", () => {
  it("Deve funcionar o cronômetro com sucesso", () => {
    cy.visit("http://localhost:5173")

    cy.get("button").first().click()
    cy.wait(6000)

    cy.get("button").eq(1).click()
    cy.wait(4000)

    cy.get("button").first().click()
    cy.wait(6000)

    cy.get("button").last().click()
  })
})

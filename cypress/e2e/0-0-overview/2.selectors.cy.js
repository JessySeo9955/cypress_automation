describe("Selector Playground", () => {
    it("should verify selector playground", () => {
        expect(true).to.equal(true)
        cy.visit("https://www.letskodeit.com/");
        cy.get('[data-id="41189"] > .dynamic-link').click()
    })
})


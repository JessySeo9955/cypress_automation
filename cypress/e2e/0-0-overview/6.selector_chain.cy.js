describe("Chain Commends Demo", () => {
    it("should learn chain commands details", () => {
        // expect(true).to.equal(true)
        cy.visit("https://www.letskodeit.com/practice");
        cy.get('#openwindow').should('be.visible').and('contain', 'Open Window')
    
    
    })
})
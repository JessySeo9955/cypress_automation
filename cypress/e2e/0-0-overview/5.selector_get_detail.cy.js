describe("Get Method Details", () => {
    it("should learn get() method details", () => {
        // expect(true).to.equal(true)
        cy.visit("https://www.letskodeit.com/practice");
        cy.get('input', {timeout: 6000})
        cy.get('input', {log: true})
    
    })
})

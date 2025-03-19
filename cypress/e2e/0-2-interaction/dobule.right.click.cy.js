describe("Click Demo", () => {
    it("should understand various options of click method", () => {

        cy.visit("https://www.letskodeit.com/practice");

     
        // dblclick
        cy.get('').dblclick()
        
        // rightclick
        cy.get('').rightclick()
    })
})

describe("Click Demo", () => {
    it("should understand various options of click method", () => {

        cy.visit("https://www.letskodeit.com/practice");

        // syntax type
        cy.get('#name').type('Jessy')
     
        cy.get('#disabled-button').click();

        // throw error indicating the element is diabled
        // cy.get('#enabled-example-input').type('Let\'s code it')

        // force option
        cy.get('#enabled-example-input').type('Let\'s code it', {force: true})

        // delay
        // cy.get('#name').clear()
        // cy.get('#name').type('Jessy22', {delay: 100})

        // parseSpecialCharSequences
        cy.get('#name').clear()
        cy.get('#name').type('abcd{backspace}', {parseSpecialCharSequences: true}) // defautl true
        cy.wait(2000)
        cy.get('#name').type('{backspace}')
        cy.get('#name').type('{selectall}')
        cy.get('#name').type('{backspace}')
        cy.get('#name').type('abcd{backspace}', {parseSpecialCharSequences: false})
    })
})

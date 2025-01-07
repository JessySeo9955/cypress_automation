describe('Alert And Confirm Popups Demo', () => {

    it('should understande how to handle alert popup', () => {

        cy.get('#alertbtn').click()
        cy.get('#confirm').click()
    })
})
describe('Alert And Confirm Popups Demo', () => {

    it.skip('should understande how to handle alert popup', () => {

        cy.visit("https://www.letskodeit.com/practice");
    
        cy.get('#confirmbtn').click()

        cy.on('window:confirm', (alertText) => {
            expect(alertText).to.equal("Hello , Are you sure you want to confirm?")
        })
    })

    it('should understande how to handle alert popup', () => {

        cy.visit("https://www.letskodeit.com/practice");
        cy.get('#alertbtn').click()

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal("Hello , share this practice page and share your knowledge")
            return true
        })
    })
})
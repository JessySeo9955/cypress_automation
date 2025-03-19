describe('Providing empty data to input field', () => {
    it('should not login to app using empty username', () => {
        cy.visit("https://www.letskodeit.com/login");

        // cypress Error
        // solution 1. commenting out
        // solution 2. use {backspace}
        cy.get('#email').type('{backspace}');
        cy.get('#login').click();
        


    })
})
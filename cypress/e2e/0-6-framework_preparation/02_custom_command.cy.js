describe('Custom Command Get Text Demo', () => {

    it('should use custom command to get text', () => {

        cy.visit('https://www.letskodeit.com/practice');
        // cy.get('#openwindow').then(($element) => {
        //     cy.visit('https://www.letskodeit.com/practice');
        //     const itemText = $element.text();
        //     expect(itemText).eq('Open Window');
        //
        // });

        cy.get('#openwindow').getText().then((elementText) => {
            expect(elementText).eq('Open Window');
            cy.log(elementText)
        });
    });

    it('should use custom command to login', () => {

        cy.visit('https://www.letskodeit.com/login');
        cy.login('test@email.com', 'abcabc')
    });
});
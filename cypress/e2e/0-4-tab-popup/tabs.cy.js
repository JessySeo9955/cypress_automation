describe('Child Tabs Demo', () => {

    it.skip('verify href attribute', () => {

        cy.visit("https://www.letskodeit.com/practice");

        cy.get('#opentab')
        .should('have.attr', 'href')
        .and('include', 'course')

        cy.get('#opentab')
        .should('have.attr', 'target')
        .and('include','_blank')
    })

    it('should visit the new tab, removing target attribute', () => {

       cy.visit("https://www.letskodeit.com/practice");

       cy.get('#opentab').invoke('removeAttr', 'target').click()
       cy.url().should('include', '/courses')

       cy.get('input[id="search"]').type('seleniumm');
       cy.get('button[class="find-course search-course"]').click();
    })

    it.skip('should visit the new tab, without removing target attribute', () => {

        //cy.visit("https://www.letskodeit.com/practice");

    })
})
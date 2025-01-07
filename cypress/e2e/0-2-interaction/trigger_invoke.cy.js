describe("Click Demo", () => {
    it("should understand various options of click method", () => {

        cy.visit("https://www.letskodeit.com/practice");

        // trigger
        // focus, mouseover, mousedown, mouseup

        // for a dropdown implemented by Css, cypress would not work on that.


        // focus, don't use "click" 
        cy.get('#hide-textbox')
        .trigger('focus')
        .trigger('click', {force: true});

        // not working because of the dropbox effect implemented with css
        cy.get('#mousehover').trigger('mouseover')
        cy.get('div.mouse-hover-content').should('have.css', 'display', 'none')
        // best alternatives
        cy.get('div.mouse-hover-content a[href="#top"]').click({force: true})



        // invoke - jquery method
        cy.get('div.mouse-hover-content').invoke('show', {force: true})
        cy.get('div.mouse-hover-content').should('have.css', 'display', 'block')

    })
})

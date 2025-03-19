describe("Click Demo", () => {
    it("should understand various options of click method", () => {

        cy.visit("https://www.letskodeit.com/practice");

        // top, topLeft, topRight, bottom, bottomLeft, bottomRight
        // cy.get('#opentab').click('top');


        // click with coordinators
        cy.get('#opentab').click(2,3);
 
        // Ignore error checking
        cy.get('#hide-textbox').click();
     
        cy.get('#displayed-text').should('exist').should('to.hidden')
        cy.get('#displayed-text').click({force: true})

        // click multiple elements
        cy.get('input[type="checkbox"][name="cars"]').click({multiple: true})

        // scroll behavior
        cy.get('#mousehover').click({scrollBehavior: 'top'})

    })
})

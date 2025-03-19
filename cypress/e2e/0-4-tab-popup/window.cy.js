describe('Child Window Demo', () => {

    it('should open a new window with provided URL', () => {

        cy.visit("https://www.letskodeit.com/practice");


        cy.window().then(win => {
            // (stub-1)open("https://www.letskodeit.com/courses", "_blank", "width=1200, height=600, top=100, left=100, scrollbars=yes, resizable=yes")
             cy.stub(win, 'open').as('windowOpen')  // Aliases

        })

        cy.get('#openwindow').click()

        // find the aliased 'windowOpen'
        cy.get('@windowOpen').should('be.calledWith', 'https://www.letskodeit.com/courses')



    })


})
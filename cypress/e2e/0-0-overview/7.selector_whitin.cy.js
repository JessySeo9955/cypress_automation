describe("Within Command Details", () => {
    it("should learn withing command details", () => {
        
       cy.visit("https://www.letskodeit.com/practice");
   
       cy.get("#open-window-example-div").within(() => {
        cy.get('button').should('have.id', 'openwindow')
       })

       // within chainning dosen't change the return parameter of get. // still #open-window-example-div dom
       cy.get("#open-window-example-div").within(() => cy.get('button')).should('have.id', 'open-window-example-div')

    
       cy.get('#open-window-example-div > button').should('have.id', 'openwindow')
    })
})
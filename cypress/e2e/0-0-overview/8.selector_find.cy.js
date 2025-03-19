describe("Find Command Details", () => {
    it("should learn find command details", () => {
        
       cy.visit("https://www.letskodeit.com/practice");
    
    //    cy.get('#open-window-example-div').find('button').should('have.id', 'openwindow');


       const button = cy.get('#open-window-example-div', {log: false}).find('button', {log: true})
       button.should('have.id', 'openwindow')
       button.click();
    })
})
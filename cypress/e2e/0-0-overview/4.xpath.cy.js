describe('Cypress Xpath Demo', () => {
    it('should verify xpath capabilities', () => {
        cy.visit("https://www.letskodeit.com/courses");

        // xpath
        // . XPath can be beneficial for selecting elements
        // based on complex conditions or when dealing with XML data.
        // when CSS selectors are not sufficient.
        cy.xpath('//input[@id="search"]').type('Test');

        cy.xpath('//div[@id="course-list"]').xpath('./div').should('have.length', 6)
        
    })
})
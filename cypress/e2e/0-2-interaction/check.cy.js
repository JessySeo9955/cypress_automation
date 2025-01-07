
describe("Click Demo", () => {
    it("should understand various options of click method", () => {

        cy.visit("https://www.letskodeit.com/practice");

     
        // check([values], [options]), uncheck([values], [options]) 
        // checkbox elements
        cy.get('div#checkbox-example-div input[type="checkbox"]').check(['bmw', 'benz'])
        
        cy.get('div#checkbox-example-div input[type="checkbox"]').uncheck(['benz'])
        // radio elements
        cy.get('div#radio-btn-example input[type="radio"]').check('bmw') // empty argemunts choose the last item
       // uncheck is unavailable for radios
        //cy.get('div#radio-btn-example input[type="radio"]').uncheck()
       
       
        //cy.get('div#radio-btn-example input[type="radio"]').check('bmw')
    
    
    })
})

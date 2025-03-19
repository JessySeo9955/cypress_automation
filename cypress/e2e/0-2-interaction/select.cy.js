
describe("Click Demo", () => {
    it("should understand various options of click method", () => {

        cy.visit("https://www.letskodeit.com/practice");

        // .select([values], [options])
        // options: log, timeout, force
        cy.get('#carselect').select(['benz'])
        cy.get('#multiple-select-example').select(['apple', 'orange'])
       // expect(true).to.be.true
       cy.get('#carselect')

       // Select Value With Options
       cy.get('#carselect').select('benz', {force: true})


    })
})

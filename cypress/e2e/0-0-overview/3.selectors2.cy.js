describe("Get Method and Css Examples", () => {
    it("should learn get() method and some CSS examples", () => {
        expect(true).to.equal(true)
        cy.visit("https://www.letskodeit.com/practice");
        // Tag Name
        cy.get("button:visible")
        // Id
        cy.get("#name")
        // Class name
       // cy.get(".inputs")

        // Attribute Value
        //cy.get("[placeholder='Enter Your Name']")

        // Class Value
        //cy.get("[class=inputs displayed-class]")

        // Tag Name and Attribute Value
        cy.get("input[id='name']")
        cy.get("input[id='name'][placeholder='Enter Your Name']")

    })
})

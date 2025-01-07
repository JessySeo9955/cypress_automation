describe("Implicit Assertion", () => {
    it("should understand implicit assertions in cypress", async () => {
        cy.visit("https://www.letskodeit.com/practice");

        let $firstAuthor = ''
        let $secondAuthor = ''

        const parent$ = await cy.get('#product').find('tbody tr');
    
        await new Promise((resolve) => {
            [$firstAuthor, $secondAuthor] = [1, 2].map((num) => parent$.eq(num).find('td').first());
            resolve()
        })

        expect($firstAuthor.text()).to.equal($secondAuthor.text())
    
    })
})
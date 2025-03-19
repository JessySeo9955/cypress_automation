describe("Click Demo", () => {
    it("should understand various options of click method", () => {

        cy.visit("https://www.letskodeit.com/practice");

        cy.get('[class^="btn-style class1"]').each(($el, index, $list) => {
            const itemText = $el.text().trim()
            cy.wrap($el).should('contain', itemText)
        })
    
        // type input => select firstItem => click item 
        cy.get('#autosuggest').then($input => {
            cy.wrap($input).type('Automation')
            return cy.get('[class="ui-corner-all"]')
        }).then($list => {
            Array.from($list).forEach(($el, index) => {
                const text = $el.text.trim().toLowerCase()
                expect(text).to.contain('automation')
            })
            const $firstItem = $list[0]
            cy.wrap($firstItem).click()
            return Promise.resolve($firstItem.text)
        }).then(inputValue => {
            cy.get('#autosuggest').should('have.value', inputValue)
        })
    })
})

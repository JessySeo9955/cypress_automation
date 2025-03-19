describe('Child Tabs Demo', () => {
    it('should visit the new tab, without removing target attribute', () => {

        cy.visit("https://www.letskodeit.com/practice");
        // not working in iframe
        // cy.get('input[id="search"]').type('selenium')
        cy.get('iframe[name="iframe-name"]').then($iframe => {
            const search = $iframe.contents().find('input[id="search"]');
            cy.wrap(search).type('selenium')
        })

    })
})
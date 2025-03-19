describe('Hooks Demo', () => {

    // Before() Hook
    // It runs before only once any test starts
    before(() => {cy.log('before')})

    // After() Hook
    // It runs after only once after completing all tests
    after(() => {cy.log('after')})

    // BeforeEach() Hook
    // It runs before every test
    beforeEach(() => {cy.log('beforeEach')})

    // AfterEach() Hook
    // It runs after every test
    afterEach(() => {cy.log('afterEach')})


    it('Test 1', () => {
        cy.log('Test 1')
    });
    it('Test 2', () => {
        cy.log('Test 2')
    });
});
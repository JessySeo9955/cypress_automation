// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('getText', {prevSubject: 'element'}, ($element) => {
   cy.wrap($element).scrollIntoView();
   return cy.wrap($element).invoke('text');

});

Cypress.Commands.add('login', (email, password) => {
    cy.get('#email').type(email);
    cy.get('#login-password').type(password);
    cy.get('#login').click();
    cy.get('#dropdownMenu1').should('exist');
    // it will only appear after signIn
});

Cypress.Commands.add('logout', () => {
    cy.get('#dropdownMenu1').click();
    cy.contains('Logout').click();
});
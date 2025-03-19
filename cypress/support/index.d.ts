declare namespace Cypress {
    interface Chainable<Subject> {
        login(email:string, password:string): Chainable<any>;
        logout(): Chainable<any>;
        getText(element: JQuery): Chainable<String>;
    }

}
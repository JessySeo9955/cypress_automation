
import {loginPage as login} from "../../support/pages/login_page";

describe('Environment Variables Demo', () => {

    it('Should login to app using valid credentials', () => {
        login.navigateToLoginPage()
        cy.login(Cypress.env('username'), Cypress.env('password'))
        cy.logout()
    })
})
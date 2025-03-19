class LoginPage {
    navigateToLoginPage() {
        // cy.visit(Cypress.env('url') + '/login')
        cy.visit('/login')
    }

    enterEmailAddress(email) {
        cy.get('#email').type(email)
    }

    enterPassword(password) {
        cy.get('#login-password').type(password)
    }

    loginToApp(email, password) {
        this.enterEmailAddress(email)
        this.enterPassword(password)
        this.clickLoginButton()
    }


    title() {
        return cy.title()
    }

    clickLoginButton() {
        cy.get('#login').clock();
    }

    verifyEmailRequiredError() {
        cy.get('.error').should('have.text', 'Incorrect login details. Please try again.');
    }

    verifyInvalidCredentialError() {
        cy.get('.error').should('have.text', 'IIncorrect login details. Please try again.');
    }
}

export const loginPage = new LoginPage()
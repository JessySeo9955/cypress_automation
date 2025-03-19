import {loginPage as login} from "../../support/pages/login_page";

// npm run cy:run --spec cypress/e2e/0-7-page-object/03_page_object.cy.js --headed --browser chrome
describe('Login Page Test Suite', () => {
    let login_data = {};

    before(() => {
        cy.fixture('login_data').then(data => {
            //.data = data;
            login_data = data;
        })
    })

    beforeEach('This is beforeEach hook',() => {
        login.navigateToLoginPage()
    })

    it('Should login to app using valid credentials', () => {
        cy.login(login_data.testId1.username, login_data.testId1.password)
        cy.logout()
        cy.get('a[href="/login"]').should('have.text', 'Sign In')
    })

    it('Should not login to app using empty username', () => {
        login.loginToApp(login_data.testId2.username, login_data.testId2.password)
        login.verifyEmailRequiredError()
    })

    it('Should not login to app using invalid username/password combination', ()=>{
        login.loginToApp(login_data.testId3.username, login_data.testId3.password)
        login.verifyInvalidCredentialError()
   })
})
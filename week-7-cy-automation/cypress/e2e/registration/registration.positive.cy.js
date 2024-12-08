import { faker } from '@faker-js/faker';

import homePage from '../../page_objects/home.page';
import loginPage from '../../page_objects/login.page';
import dashboardPage from '../../page_objects/dashboard.page';
import registrationPage from '../../page_objects/registration.page';

const email = faker.internet.email();
const password = faker.internet.password();

describe('Registration', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Should register an account as new user', () => {
        
        homePage.registrBtn.click();
        registrationPage.firstNameInput.type('Anna');
        registrationPage.lastNameInput.type('An');
        registrationPage.emailInput.type(email);
        registrationPage.passwordInput.type(password);
        registrationPage.submitBtn.click();

        // Verify user role, name
        dashboardPage.roleLabel.should('have.text', 'role: user');
        dashboardPage.fullNameLabel.should('have.text', 'Anna  An');

        // Logout
        dashboardPage.userIconBtn.click();
        dashboardPage.logoutBtn.click();

        // Log in
        loginPage.loginBtn.click();
        loginPage.login(email, password);

        // Verify user role, name
        dashboardPage.roleLabel.should('have.text', 'role: user');
        dashboardPage.fullNameLabel.should('have.text', 'Anna  An');
    })
})

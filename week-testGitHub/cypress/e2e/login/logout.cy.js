import dashboardPage from "../../page_objects/dashboard.page";
import homePage from "../../page_objects/home.page";
import loginPage from "../../page_objects/login.page";
import userCredentials from "../../fixtures/testData/userCredentials.json";
import verificationText from "../../fixtures/testData/verificationText.json";

describe('Logout', () => {
    beforeEach(() => {
        cy.visit("/")
        //api login
    })

    it('Should log in with existing account as user', () => {
        // Click login button on homepage
        homePage.loginBtn.click();
        loginPage.emailInput.type(userCredentials.email);
        loginPage.passwordInput.type(userCredentials.password);
        loginPage.loginBtn.click();
        // Verify user role
        dashboardPage.roleLabel.should('have.text', verificationText.role)
        dashboardPage.fullNameLabel.should('have.text', verificationText.fullName)
        // Logout
        dashboardPage.userIconBtn.click();
        dashboardPage.logoutBtn.click();

    })
})
  
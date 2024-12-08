import dashboardPage from "../../page_objects/dashboard.page";
import homePage from "../../page_objects/home.page";
import loginPage from "../../page_objects/login.page";

describe('Logout', () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it('Should log with existing account as user', () => {
        // Click login button on homepage
        homePage.loginBtn.click();
        loginPage.emailInput.type("ana@gmail.com");
        loginPage.passwordInput.type("strongpass");
        loginPage.loginBtn.click();

        // Verify user role
        dashboardPage.roleLabel.should('have.text', 'role: user')
        dashboardPage.fullNameLabel.should('have.text', 'Ania  Ana')

        // Logout
        dashboardPage.userIconBtn.click();
        dashboardPage.logoutBtn.click();

    })


})
  
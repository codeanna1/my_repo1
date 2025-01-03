import dashboardPage from "../../page_objects/dashboard.page";
import homePage from "../../page_objects/home.page";
import loginPage from "../../page_objects/login.page";
import userCredentials from "../../fixtures/testData/userCredentials.json";
import verificationText from "../../fixtures/testData/verificationText.json";

describe('Logout', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.request('POST', '/api/users/login', {"email": userCredentials.email,
            "password": userCredentials.password }).then(
              (response) => {
                window.localStorage.setItem("accessToken", response.body.accessToken);
    });
});
    it('Should log in with existing account as user', () => {
        homePage.loginBtn.click();
        loginPage.emailInput.type(userCredentials.email);
        loginPage.passwordInput.type(userCredentials.password);
        loginPage.loginBtn.click();
        dashboardPage.roleLabel.should('have.text', verificationText.role)
        dashboardPage.fullNameLabel.should('have.text', verificationText.fullName)
        dashboardPage.userIconBtn.click();
        dashboardPage.logoutBtn.click();
        cy.contains("Sign in to Delek Homes").should("be.visible");
    })
})

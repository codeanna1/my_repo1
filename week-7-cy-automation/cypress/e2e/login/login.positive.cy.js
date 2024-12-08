import loginPage from "../../page_objects/login.page"
import homePage from "../../page_objects/home.page"
import dashboardPage from "../../page_objects/dashboard.page"

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should log with existing account as user', () => {

    homePage.loginBtn.click();
    loginPage.emailInput.type('ana@gmail.com');
    loginPage.passwordInput.type('strongpass');
    loginPage.loginBtn.click();

    // Verify user role
    dashboardPage.roleLabel.should('have.text', 'role: user')
    dashboardPage.fullNameLabel.should('have.text', 'Ania  Ana')

  })

})



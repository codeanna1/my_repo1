import loginPage from "../../page_objects/login.page"
import homePage from "../../page_objects/home.page"
import dashboardPage from "../../page_objects/dashboard.page"
import userCredentials from "../../fixtures/testData/userCredentials.json"
import verificationText from "../../fixtures/testData/verificationText.json"

let user

describe('Login', () => {
  before(() => {
    cy.fixture('testData/userCredentials.json').then((userCredentials) => {
    user = userCredentials 
  })
  })
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should log in with existing account as user', () => {

    homePage.loginBtn.click();
    loginPage.emailInput.type(user.email);
    loginPage.passwordInput.type(user.password);
    loginPage.loginBtn.click();
    // Verify user role
    dashboardPage.roleLabel.should('have.text', verificationText.role)
    dashboardPage.fullNameLabel.should('have.text', verificationText.fullName)

  })

})



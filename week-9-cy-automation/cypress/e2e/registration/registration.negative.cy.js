import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";
import userCredentials from "../../fixtures/testData/userCredentials.json"

describe
    ('Registration', () => {
        beforeEach(() => {
             cy.visit("/")
        })
        it('Should not register without email and password', () => {
            homePage.registrBtn.click();
            registrationPage.firstNameInput.type(userCredentials.firstName);
            registrationPage.lastNameInput.type(userCredentials.lastName);
            registrationPage.emailInput.clear();
            registrationPage.passwordInput.clear();
            registrationPage.submitBtn.click();
            registrationPage.errorEmailReguired.should("be.visible");
            registrationPage.errorPasswordRequired.should("be.visible");
        })
        it('Should not register with an already existing email account', () => {
            homePage.registrBtn.click();
            registrationPage.firstNameInput.type(userCredentials.firstName);
            registrationPage.lastNameInput.type(userCredentials.lastName);
            registrationPage.emailInput.type(userCredentials.email);
            registrationPage.passwordInput.type(userCredentials.password);
            registrationPage.submitBtn.click();
            registrationPage.errorDataInput.should("be.visible");
        })
    })
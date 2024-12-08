import homePage from "../../page_objects/home.page";
import registrationPage from "../../page_objects/registration.page";

describe
    ('Registration', () => {
        beforeEach(() => {
            cy.visit("/")
        })

        it('Should not register without email and password', () => {
            homePage.registrBtn.click();
            registrationPage.firstNameInput.type('Anna');
            registrationPage.lastNameInput.type('An');
            // Leave email and password fields blank
            registrationPage.emailInput.clear();
            registrationPage.passwordInput.clear();
            registrationPage.submitBtn.click();

            // Verify user cannot loggin
            registrationPage.errorEmailReguired.should("be.visible");
            registrationPage.errorPasswordRequired.should("be.visible");

        })

        it('Should not register with an already existing email account', () => {
            
            homePage.registrBtn.click();
            registrationPage.firstNameInput.type('Anna');
            registrationPage.lastNameInput.type('An');
            registrationPage.emailInput.type('ana@gmail.com');
            registrationPage.passwordInput.type('strongpass');
            registrationPage.submitBtn.click();

            // Verify user cannot be logged in
            registrationPage.errorDataInput.should("be.visible");

        })

    })








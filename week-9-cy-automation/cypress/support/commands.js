import userCredentials from "../../cypress/fixtures/testData/userCredentials.json"

Cypress.Commands.add('errorHandler', () => {
   Cypress.on('uncaught:exception', (err, runnable) => {
      console.warn('Ignoring uncaught exception:', err);
      return false;
    });
cy.request('POST', '/api/users/login', {"email": userCredentials.email,
  "password": userCredentials.password }).then(
    (response) => {
      window.localStorage.setItem("accessToken", response.body.accessToken);
    });
});



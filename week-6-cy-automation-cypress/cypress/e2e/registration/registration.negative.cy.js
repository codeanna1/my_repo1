import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = faker.internet.password();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should not register with empty fields", () => {
    cy.visit("/register");
    cy.get('[href="/auth/register"]').click();

    cy.get('[name="firstName"]');
    cy.get('[name="lastName"]');
    cy.get('[name="email"]');
    cy.get('[name="password"]');
    cy.get('[type="submit"]').click();
  });

  it("Should not register with already registered email", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type("Anna");
    cy.get('[name="lastName"]').type("An");
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();

    cy.get("a p").should("have.text", "role: user");
    cy.get("a h6").should("have.text", "Anna  An");
    cy.url().should("include", "/dashboard/user/profile");

    cy.get('button [data-testid="PersonIcon"]').click();
    cy.contains("Logout").click(); // Logout

    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type("Anna");
    cy.get('[name="lastName"]').type("An");
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();

    cy.get('[role="alert"]').should(
      "have.text",
      "Input data validation failed"
    );
  });
});


import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const password = faker.internet.password();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should register a new user account", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type("Anna");
    cy.get('[name="lastName"]').type("An");
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();

    cy.get("a p").should("have.text", "role: user");
    cy.get("a h6").should("have.text", "Anna  An");
    cy.url().should("include", "/dashboard/user/profile");

    // confirm register user can log in
    cy.get('button [data-testid="PersonIcon"]').click();
    cy.contains("Logout").click();

    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.contains("Login").click();

    cy.get("a h6").should("have.text", "Anna  An");
    cy.get("a p").should("have.text", "role: user");
  });
});


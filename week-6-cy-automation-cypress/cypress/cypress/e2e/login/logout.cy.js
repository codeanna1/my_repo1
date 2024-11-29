describe("Login", () => { 
    it("Should login and logout", () => { 
      cy.visit("/");
  
      cy.get('[href="/auth/login"]').click();
      cy.get('[name="email"]').type('ana@gmail.com');
      cy.get('[name="password"]').type('strongpass');
      cy.get('button[type="submit"]').click();
  
      
      // Verify user role and title
    cy.get('a p').should('have.text','role: user')
    // Verify name 
    cy.title().should('eq', 'User: Profile | Delek Homes')
        
      cy.get('button [data-testid="PersonIcon"]').click();
      cy.contains("Logout").click();

      cy.contains("Sign in to Delek Homes").should("be.visible");
    });
  }); 


describe('Login', () => {
  beforeEach(() => {
  cy.visit('/')
})


it('Should log in with existing account as a user', () => {
   // Click login button on homepage
  cy.get('[href="/auth/login"]').click();  // GET MEANS WE HAVE ACCESS TO AN ELEMENT
  // Type in username/password
  cy.get('[name="email"]').type('ana@gmail.com');
  cy.get ('[name="password"]').type('strongpass');
  // Click login button 
  cy.contains('Login').click();
  
  // Verify user role and title
  cy.get('a p').should('have.text','role: user')
  // Verify name as well
  cy.title().should('eq', 'User: Profile | Delek Homes')
})
})


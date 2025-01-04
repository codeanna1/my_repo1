class HomePage {
 
  get loginBtn() { return cy.get('[href="/auth/login"]'); }
  get registrBtn() { return cy.get('[href="/auth/register"]'); }
  get darkMode() { return cy.get('[type="checkbox"]'); }
  get FeaturedListing() { return cy.get('[href="/featured-listings"]'); }
  get bedroomDropdown() { return cy.get('[role="button"]'); }
  get startSearchBtn() { return cy.get('[type="button"]'); }
  get bedroomIcon() { return cy.get('[viewBox="0 0 2048 1280"]'); }

  bedroomNumber(bedroomCount) {
    return cy.contains(`${bedroomCount}+`);
  }
}
export default new HomePage();



      
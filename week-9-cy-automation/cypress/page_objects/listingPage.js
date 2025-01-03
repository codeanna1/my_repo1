class FeaturedListingsPage {

    get bedroomIcon() { return cy.contains(' Bedrooms: ')};
    get moreInfoButton() { return cy.get('[class="MuiBox-root css-xi606m"]')};
    get bedroomButton() { return cy.get('[role="button"]').eq(0)};
    get twoBedrooms() { return cy.get('[data-value="2"]')};
    get bedroomsDropdown() { return cy.get('[role="button"]').eq(0)};
    get listingLink() {return cy.get('[href="/featured-listings/12382"]');}
    }
    export default new FeaturedListingsPage();
    
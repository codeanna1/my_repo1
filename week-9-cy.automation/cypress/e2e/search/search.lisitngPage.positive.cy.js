import searchPage from "../../page_objects/search.page";
import homePage from "../../page_objects/home.page";
import verificationText from "../../fixtures/testData/verificationText.json";

Cypress.on("uncaught:exception", (err, runnable) => {
   return false;
 });

describe('Should search by keyword', () => {

beforeEach(() => {
   cy.visit("/")
   homePage.darkMode.click();
   homePage.FeaturedListing.click();
});
   it('Should search by keyword', ()  => {
      cy.get('[id=":r5:"]').click().type(verificationText.listingName);
      searchPage.FeaturedListingStartSearch.click();
      cy.contains(verificationText.listingName).click();
   });

   it('Should search by bedrooms', () => {
      searchPage.FeaturedBedrooms.click();
      cy.contains('2+').click();
      cy.contains('Start Search').click();
      searchPage.moreInfoBtn.eq(Math.floor(Math.random() * 5)).click();
      cy.get(".MuiGrid-root").contains("Bedrooms:").invoke("text").then((text) => parseInt(text.replace(/\D/g, ""), 10)).should("be.at.least", 2);
      
   });  

   it('Should search by city', () => {
      searchPage.searchCityListing.click().type(verificationText.city );
      searchPage.searchButton.click();
      cy.get('[href="/featured-listings/12382"]').click();
      cy.get('div:nth-of-type(1)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]').contains(verificationText.homePrice);
      cy.get('div:nth-of-type(2)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]').contains(verificationText.squareFeet);
      cy.get('div:nth-of-type(3)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]').contains(verificationText.lotSize);
      cy.get('div:nth-of-type(4)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]').contains(verificationText.listingDate);
      cy.get('div:nth-of-type(5)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]').contains(verificationText.garage);
      cy.get('div:nth-of-type(6)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]').contains(verificationText.bedrooms);
      cy.get('div:nth-of-type(7)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]').contains(verificationText.bathrooms);
      cy.get('div:nth-of-type(8)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]').contains(verificationText.realtor);
   });

    it('Should search by price', () => {
      cy.visit('https://dev.delekhomes.com/featured-listings?price=500000-5300000&keyword=la+jolla');
      cy.get('[href="/featured-listings/12382"]').click();
      cy.get('div:nth-of-type(1)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]').contains(verificationText.homePrice);
    })
});
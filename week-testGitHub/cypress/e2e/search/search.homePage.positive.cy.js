import searchPage from "../../page_objects/search.page";
import homePage from "../../page_objects/home.page";
import faker from "faker";  // Add the faker library for generating random data

Cypress.on("uncaught:exception", (err, runnable) => {
  return false; // Handle uncaught exceptions globally
});

describe('Search functionality tests', () => {
  beforeEach(() => {
    cy.visit("/");  // Visit the base URL defined in the Cypress config
    homePage.darkMode.click();
    homePage.FeaturedListing.click();
  });

  it('Should search by keyword', () => {
    cy.fixture('testData/searchData.json').then((searchData) => {
      cy.get('[id=":r5:"]').click().type(searchData.keyword);
      searchPage.FeaturedListingStartSearch.click();
      cy.contains(searchData.keyword).click();
    });
  });

  it('Should search by bedrooms', () => {
    cy.fixture('testData/searchData.json').then((searchData) => {
      searchPage.FeaturedBedrooms.click();
      cy.contains(searchData.bedrooms).click();
      cy.contains('Start Search').click();
      searchPage.moreInfoBtn.eq(Math.floor(Math.random() * 5)).click();
      cy.get(".MuiGrid-root")
        .contains("Bedrooms:")
        .invoke("text")
        .then((text) => parseInt(text.replace(/\D/g, ""), 10))
        .should("be.at.least", 2);
    });
  });

  it('Should search by city', () => {
    cy.fixture('testData/searchData.json').then((searchData) => {
      searchPage.FeaturedCitySearch.click().type(searchData.city);
      searchPage.searchButton.click();
      cy.get('[href="/featured-listings/12382"]').click();
      cy.fixture('testData/verificationTexts.json').then((verificationTexts) => {
        cy.get('div:nth-of-type(1)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]')
          .contains(verificationTexts.listing.price);
        cy.get('div:nth-of-type(2)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]')
          .contains(verificationTexts.listing.sqFeet);
        cy.get('div:nth-of-type(3)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]')
          .contains(verificationTexts.listing.bedrooms);
        cy.get('div:nth-of-type(4)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]')
          .contains(verificationTexts.listing.date);
        cy.get('div:nth-of-type(5)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]')
          .contains(verificationTexts.listing.bathrooms);
        cy.get('div:nth-of-type(6)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]')
          .contains(verificationTexts.listing.garage);
        cy.get('div:nth-of-type(7)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]')
          .contains(verificationTexts.listing.floors);
        cy.get('div:nth-of-type(8)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]')
          .contains(verificationTexts.listing.agent);
      });
    });
  });

  it('Should search by price', () => {
    cy.fixture('testData/searchData.json').then((searchData) => {
      const url = `/featured-listings?price=${searchData.priceRange}&keyword=la+jolla`;
      cy.visit(url);
      cy.get('[href="/featured-listings/12382"]').click();
      cy.fixture('testData/verificationTexts.json').then((verificationTexts) => {
        cy.get('div:nth-of-type(1)[class*="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"]')
          .contains(verificationTexts.listing.price);
      });
    });
  });
});





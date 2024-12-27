class SearchPage {
    get searchIcon() {return cy.get('[id=":r1:"]')};
    get searchButton() {return cy.contains('Start Search')};
    get bedroomButton() {return cy.get('[id=":r2:"]')};
    get searchCity(){return cy.get('[id=":r4:"]')};
    get FeaturedListingSearch(){return cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth  css-9znbx"]')};
    get FeaturedListingStartSearch(){return cy.contains('Start Search')};
    get FeaturedBedrooms(){return cy.get ('[id=":r6:"]')};
    get FeaturedCitySearch(){return cy.get('[id=":r8:"]')}   
    get moreInfoBtn() { return cy.get(".MuiBox-root.css-xi606m")}
    
    }
    export default new SearchPage();


   


   
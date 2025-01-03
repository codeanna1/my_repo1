class SearchPage {
    get searchIcon() {return cy.get('[id=":r1:"]')};
    get searchButton() {return cy.contains('Start Search')};
    get bedroomButton() {return cy.get('[id=":r2:"]')};
    get searchCityListing(){return cy.get('[id=":r8:"]')};
    get searchCityHome(){return cy.get('[id=":r4:"]')};
    get FeaturedListingSearch(){return cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth  css-9znbx"]')};
    get FeaturedListingStartSearch(){return cy.contains('Start Search')};
    get FeaturedBedrooms(){return cy.get ('[id=":r6:"]')};
    get FeaturedCitySearch(){return cy.get('[id=":r8:"]')}   
    get moreInfoBtn() { return cy.get(".MuiBox-root.css-xi606m")}
    selectBedroomFilter(bedroomNumber) {
        this.bedroomButton.click();
        cy.contains(bedroomNumber).click();}
        searchByKeyword(keyword) {
            this.searchIcon.click().type(keyword);
            this.searchButton.click();}
    }
    export default new SearchPage();

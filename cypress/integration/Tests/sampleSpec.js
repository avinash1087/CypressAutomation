/// <reference types="Cypress" />


describe('This is first test', function () {
    it('This is first test case', function () {

        //Navigate to Amazon.in
        cy.visit('https://www.amazon.in')

        /*
        Locate Search box
        Type "One Plus Mobile" text
        */
        cy.get('#twotabsearchtextbox')
            .type('One Plus Mobile')

        //Click on search button
        cy.get('.nav-search-submit > .nav-input').click()

        //Assert that search results has item count equal to 20
        cy.get('.s-result-list.s-search-results.sg-row > div').should('have.length.greaterThan',0)//.should('have.length',20)

        //Among the search results click on element with text 'OnePlus 7 Pro (Nebula Blue, 12GB RAM, 256GB Storage)
        cy.get('.s-result-list.s-search-results.sg-row > div').contains('OnePlus 7 Pro (Nebula Blue, 12GB RAM, 256GB Storage)').click()
        

    })


})
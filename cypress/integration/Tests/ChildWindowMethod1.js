/// <reference types="Cypress" />


describe('Automating Amazon Tests', function () {
    it('Search for a product on Amazon.in', function () {

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


        //get the redirect url from the html tag of the element
        cy.get('a[class="a-link-normal a-text-normal"][target="_blank"]').eq(7).invoke('attr', 'href').then((href) => {
            //Navigate to the new url
            cy.visit('https://www.amazon.in/'+href)
        })

        //Click on the button on the new url page
        cy.get('#add-to-cart-button').click()


    })


})
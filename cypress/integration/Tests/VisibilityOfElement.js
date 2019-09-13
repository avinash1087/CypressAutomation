describe('Visibility of an Element', function () {
    it('Visibility Test Case', function () {

        //Navigate to the test website
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Validate the visibility of the web elelemnt
        cy.get('#displayed-text').should('be.visible')

        //click on the 'Hide' button
        cy.get('#hide-textbox').click()

        //Validate the visibility of the web elelemnt
        cy.get('#displayed-text').should('not.be.visible')


        //click on the 'Show' button
        cy.get('#show-textbox').click()

        //Validate the visibility of the web elelemnt
        cy.get('#displayed-text').should('be.visible')




    })


})





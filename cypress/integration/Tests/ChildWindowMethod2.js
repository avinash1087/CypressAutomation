describe('Visibility of an Element', function () {
    it('Visibility Test Case', function () {

        //Navigate to the test website
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

       
        //get the element clicking on which new tab is opened
        //In invoke method pass 'removeAttr' parameter which will remove the required attribute
        cy.get('#opentab').invoke('removeAttr','target').click()

  




    })


})





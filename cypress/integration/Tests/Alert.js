describe('Visibility of an Element', function () {
    it('Visibility Test Case', function () {

        //Navigate to the test website
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Click on button which generates alert
        cy.get('#alertbtn').click()

        //Validate the alert text
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Hello , share this practice page and share your knowledge')
        })

        //Click on button which generates a confirmation pop-ip
        cy.get('#confirmbtn').click()


        //Validate the confirm text
        cy.on('window:confirm', (alertText) => {
            expect(alertText).to.equal('Hello , Are you sure you want to confirm?')
        })


    })


})





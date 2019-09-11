describe('Handling Check Boxes', function () {
    it('Check Box Test Case', function () {

        //Navigate to the test website
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //store checkbox element in alias variable
        cy.get('#checkBoxOption1').as('checkBox1');

        //Check a checkbox
        cy.get('@checkBox1').check();

        //uncheck a checkbox
        cy.get('@checkBox1').uncheck();
    })


})

describe('Handling Dropdowns', function () {
    it('Static DropDown Test Case', function () {

        //Navigate to the test website
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //select value 'Option2' from the drop down
        cy.get('select').select('Option2')

        //Select dynamic dropdown and type "Ind" in it
        cy.get('#autocomplete').type('Ind')

        //Iterate through the suggestion list and click on the India
        cy.get('.ui-menu-item > div').each(function (e1, index, list) {

            //Log the text of current web element
            cy.log(e1.text())

            //Click on the element if the text is "India"
            if (e1.text() === "India") {
                e1.click()
                return
            }
        })

    })


})
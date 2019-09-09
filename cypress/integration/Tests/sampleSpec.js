describe('This is first test',function(){
    it('This is first test case',function(){
        cy.visit('https://www.amazon.in')

        cy.get('#twotabsearchtextbox')
          .type('One Plus Mobile')

          cy.get('.nav-search-submit > .nav-input').click()  

          
    })

    
})
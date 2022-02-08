describe('Home page', ()=> {
    it('Launch the home page', () =>{
        cy.visit('http://opencart.abstracta.us/')
        cy.get('#logo a').should('have.text', 'Your Store')
    })
})
import * as homeElements from './elements/homeElements'
class HomePage {
    
    go(){
        cy.visit('http://opencart.abstracta.us/')
        cy.get(homeElements.titleText).should('have.text', 'Your Store')
    }

}

export default HomePage;
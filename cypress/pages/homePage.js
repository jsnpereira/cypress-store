import * as homeElements from './elements/homeElements'
class HomePage {
    
    go(){
        cy.visit('/')
        cy.get(homeElements.titleText).should('have.text', 'Your Store')
    }

}

export default new HomePage;
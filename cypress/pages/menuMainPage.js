import * as mainMenuElements from './elements/mainMenuElements'

class MenuMainPage {
    registerButton(){
        cy.get(mainMenuElements.userMenu).click()
        cy.get(mainMenuElements.listFromUserMenu).eq(0).click()
    }
}

export default MenuMainPage;
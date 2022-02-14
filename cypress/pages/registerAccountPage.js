import * as registerAccountElements from './elements/registerAccountElements'

class RegisterAccountPage {

    checkAccountPageIsDisplayed(){
        cy.get(registerAccountElements.accountTitle).should('have.text', 'Account')
    }

    fillAllFields(user){
        cy.get(registerAccountElements.firstNameInput).type(user.firstName)
        cy.get(registerAccountElements.lastNameInput).type(user.lastName)
        cy.get(registerAccountElements.emailInput).type(user.email)
        cy.get(registerAccountElements.telephoneInput).type(user.telephone)
        cy.get(registerAccountElements.passwordInput).type(user.password)
        cy.get(registerAccountElements.confirmInput).type(user.password)
    }

    agreeCheckBox(){
        cy.get(registerAccountElements.agreeCheckBox).click()
    }

    continueButton(){
        cy.get(registerAccountElements.continueButton).click()
    }

}

export default new RegisterAccountPage;
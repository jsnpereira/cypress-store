import * as accountCreatedElements from './elements/accountCreatedElements'

class AccountCreatedPage {
    checkAccountCreated(){
        cy.get(accountCreatedElements.thankTextMensage).eq(0).should('have.text', 'Thank you for registering with Your Store!');
    }

    continueButton(){
        cy.get(accountCreatedElements.continueButton).click();
    }
}

export default AccountCreatedPage;
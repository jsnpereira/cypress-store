import * as accountCreatedElements from './elements/accountCreatedElements'

class AccountCreatedPage {
    checkAccountCreated(){
        cy.url().should('include', '?route=account/success')
        //cy.get(accountCreatedElements.thankTextMensage).eq(0).should('have.text', 'Thank you for registering with Your Store!');
    }

    continueButton(){
        cy.get(accountCreatedElements.continueButton).click();
    }
}

export default new AccountCreatedPage;
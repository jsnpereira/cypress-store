import homePage from '../pages/homePage'
import menuMainPage from '../pages/menuMainPage'
import registerAccountPage from '../pages/registerAccountPage'
import accountCreatedPage from '../pages/accountCreatedPage'
import dataUtils from '../utils/dataUtils'

describe('Register', ()=> {

    beforeEach(function () {
        cy.fixture('user').then((item) => {
           this.user = item
        })
    })
    it('Create new register', function (){
        homePage.go()
        menuMainPage.registerButton()
        registerAccountPage.checkAccountPageIsDisplayed();

        this.user.signup.email = this.user.signup.email.replace("{VALUE}", dataUtils.randomString(10))

        registerAccountPage.fillAllFields(this.user.signup)
        registerAccountPage.agreeCheckBox()
        registerAccountPage.continueButton()
        accountCreatedPage.checkAccountCreated()
        accountCreatedPage.continueButton()
    })
})
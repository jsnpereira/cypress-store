import homePage from '../pages/homePage'
import menuMainPage from '../pages/menuMainPage'
import registerAccountPage from '../pages/registerAccountPage'
import accountCreatedPage from '../pages/accountCreatedPage'
import userFactory from '../factories/UserFactory'

// import dataUtils from '../utils/dataUtils'

describe('Register', ()=> {

    // beforeEach(function () {
    //     cy.fixture('user').then((item) => {
    //        this.user = item
    //     })
    // })
    it('Create new register', function (){
        homePage.go()
        menuMainPage.registerButton()
        registerAccountPage.checkAccountPageIsDisplayed();

        var user = userFactory.user()
        registerAccountPage.fillAllFields(user)
        registerAccountPage.agreeCheckBox()
        registerAccountPage.continueButton()
        accountCreatedPage.checkAccountCreated()
        accountCreatedPage.continueButton()
    })
})
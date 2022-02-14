import homePage from '../pages/homePage'
import menuMainPage from '../pages/menuMainPage'
import registerAccountPage from '../pages/registerAccountPage'
import accountCreatedPage from '../pages/accountCreatedPage'
import DataUtils from '../utils/dataUtils'

describe('Create new register', ()=> {
   
    it('Launch the home page', () =>{
        homePage.go()
    })

    it('Go to new register page', () =>{
        menuMainPage.registerButton()
        registerAccountPage.checkAccountPageIsDisplayed();
    })


    it('Type on the form fields', () =>{
        var dataUtils = new DataUtils()
        var emailRandom = dataUtils.randomString(10);

        var user = {
            firstName: 'Jeison',
            lastName: 'Pereira',
            email: emailRandom + '@yopmail.com',
            telephone : '5199999999',
            password: '@Bcd1234'
        }

        registerAccountPage.fillAllFields(user)
        registerAccountPage.agreeCheckBox()
        registerAccountPage.continueButton()
    })

    it('Check the account created', () => {
        accountCreatedPage.checkAccountCreated()
        accountCreatedPage.continueButton()
    })
})
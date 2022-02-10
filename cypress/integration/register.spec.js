import HomePage from '../pages/homePage'
import MenuMainPage from '../pages/menuMainPage'
import RegisterAccountPage from '../pages/registerAccountPage'
import AccountCreatedPage from '../pages/accountCreatedPage'
import DataUtils from '../utils/dataUtils'

describe('Create new register', ()=> {
    var homePage = new HomePage()
    var menuMainPage = new MenuMainPage()
    var registerAccountPage = new RegisterAccountPage()
    var accountCreatedPage = new AccountCreatedPage()

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
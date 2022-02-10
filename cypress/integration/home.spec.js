import HomePage from '../pages/homePage'

describe('Home page', ()=> {
    it('Launch the home page', () =>{
        var homePage = new HomePage();
        homePage.go()
    })
})
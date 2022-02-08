describe('Create new register', ()=> {
    it('Launch the home page', () =>{
        cy.visit('http://opencart.abstracta.us/')
        cy.get('#logo a').should('have.text', 'Your Store')
    })

    it('Go to new register page', () =>{
        cy.get('.list-inline .dropdown').click()
        cy.get('.list-inline li[class="dropdown open"] .dropdown-menu li').eq(0).click()
        cy.get('div[id=content] h1').should('have.text', 'Account')
    })


    it('Type on the form fields', () =>{

        var emailRandom = randomString(10);

        var user = {
            firstName: 'Jeison',
            lastName: 'Pereira',
            email: emailRandom + '@yopmail.com',
            telephone : '5199999999',
            password: '@Bcd1234'
        }

        cy.get('input[name="firstname"]').type(user.firstName)
        cy.get('input[name="lastname"]').type(user.lastName)
        cy.get('input[name="email"]').type(user.email)
        cy.get('input[name="telephone"]').type(user.telephone)
        cy.get('input[name="password"]').type(user.password)
        cy.get('input[name="confirm"]').type(user.password)

       cy.get('.buttons input[name="agree"]').click()
       cy.get('.buttons .btn-primary').click()
    })

    it('Check the account created', () => {
          cy.get('#content p').eq(0).should('have.text', 'Thank you for registering with Your Store!');
          cy.get('.buttons div').click();
    })


    function randomString(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
})
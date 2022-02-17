var faker = require('faker')

export default {

    user : function(){
        var firstName = faker.name.firstName()

       var data = {
        firstName: firstName,
        lastName: faker.name.lastName(),
        email: faker.internet.email(firstName),
        telephone: '999999999',
        password: '@Bcd1234'}
        return data;
    }

}
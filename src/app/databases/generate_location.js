module.exports = function(){
    var faker = require("faker");
    var _ = require("lodash");
    return {
        player: _.times(100, function(n){
            return {
                id: n,
                city: faker.address.city(),
                name:  faker.words(2),
                country: faker.address.country(),
                plz: faker.random.number(99999)
            }
        })
    }
}
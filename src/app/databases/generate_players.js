module.exports = function(){
    var faker = require("faker");
    var _ = require("lodash");
    return {
        player: _.times(100, function(n){
            return {
                id: n,
                name: faker.name.findName(),
                address:  faker.address.city() + faker.address.streetAddress(),
                citzenship: faker.address.country(),
                elo: faker.random.number(4000)
            }
        })
    }
}
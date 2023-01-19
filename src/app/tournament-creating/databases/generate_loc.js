module.exports = function(){
    var faker = require("faker");
    var _ = require("lodash");
    return {
        location: _.times(100, function(n){
            return {
                id: n,
                city: faker.address.city(),
                event_name:  faker.random.words(1),
                country: faker.address.country(),
                plz: faker.random.number(99999)
            }
        })
    }
}
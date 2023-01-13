module.exports = function(){
    var faker = require("faker");
    var _ = require("lodash");
    return {
        players: _.times(100, function(n){
            return {
                id: n,
                name: faker.name.findName(),
                elo: faker.number.within(range: 0..4000)
            }
        })
    }
}
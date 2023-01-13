module.exports = function(){
    var faker = require("faker");
    var _ = require("lodash");
    return {
        player: _.times(100, function(n){
            return {
                id: n,
                name: faker.name.findName(),
                elo: faker.random.number(4000)
            }
        })
    }
}
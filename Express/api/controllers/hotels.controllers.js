var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res) {
    console.log("GET Hotel Data")
    res
        .status(200)
        .json( hotelData );
}
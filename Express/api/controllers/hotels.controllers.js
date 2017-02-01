var dbConn = require('../data/dbConnection.js');
var ObjectId = require('mongodb').ObjectId;
var hotelData = require('../data/hotel-data.json');


module.exports.hotelsGetAll = function(req, res) {

    var db = dbConn.get();
    var collection = db.collection('hotels');

    var offset = 0;
    var count = 5;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10);
    }

    var returnData = hotelData.slice(offset, offset+count);

    collection
        .find()
        .skip(offset)
        .limit(count)
        .toArray(function(err, docs){
            console.log("Found Hotels", docs);
            res
                .status(200)
                .json(docs);
        });
}


module.exports.hotelsGetOne = function(req, res) {

    var db = dbConn.get();
    var collection = db.collection('hotels');

    var hotelId = req.params.hotelId;

    collection
        .findOne({
            _id : ObjectId(hotelId)
        }, function(err, doc){
            res
                .status(200)
                .json( doc );
        });


    console.log("GET hotelId: " + hotelId);

}


module.exports.hotelsAddOne = function(req, res) {
    var db = dbConn.get();

    console.log("POST new Hostel");
    console.log(req.body);
    res
        .status(200)
        .json(req.body);    
}
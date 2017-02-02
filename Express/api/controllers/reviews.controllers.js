var mongoose = require('mongoose');
var Hotel = mongoose.model('Hotel');

// TODO: Error Trapping & handling


// GET all reviews for a hotel
module.exports.reviewsGetAll = function (req, res) {

    var hotelId = req.params.hotelId;

    Hotel
        .findById(hotelId)
        .select('reviews')
        .exec(function(err, doc){
            res
                .status(200)
                .json( doc.reviews );
        });
        
    console.log("GET hotelId: " + hotelId);

};


// GET single review for a hotel
module.exports.reviewsGetOne = function (req, res) {

    var hotelId = req.params.hotelId;
    var reviewId = req.params.reviewId;    
    console.log("GET reviewId " + reviewId + " for hotelId: " + hotelId);

    Hotel
        .findById(hotelId)
        .select('reviews')
        .exec(function(err, hotel){
            var review = hotel.reviews.id(reviewId);
            res
                .status(200)
                .json( review );
        });

};


var _addReview = function(req, res, hotel) {
    hotel.reviews.push({
        name : req.body.name,
        rating : parseInt(req.body.rating, 10),
        review : req.body.review
    });

    hotel.save(function(err, hotelUpdated){
        if (err) {
            res
                .status(500)
                .json (err);
        } else {
            res
                .status(201)
                .json(hotelUpdated.reviews[hotelUpdated.reviews.length - 1]);
        }
    });
}

module.exports.reviewsAddOne = function(req, res) {


     var hotelId = req.params.hotelId;

    Hotel
        .findById(hotelId)
        .select('reviews')
        .exec(function(err, doc){
            var response = {
                status : 200,
                messsage : []
            };
            if (err) {
                console.log("Error finding hotel");
                response.status = 500;
                response.message = err;
            } else if (!doc) {
                response.status = 404;
                response.message = {
                    "message" : "Hotel ID not found"  
                };
            } 

            if (doc) {
                _addReview(req, res, doc);
            } else {
                res
                    .status(response.status)
                    .json(response.message);
            }

        });

};


module.exports.reviewsUpdateOne = function(req, res) {
};

module.exports.reviewsDeleteOne = function(req, res) {
};
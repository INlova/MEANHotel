var express = require('express');
var router = express.Router();

router
    .route('/json')
    .get(function(req, res){
        res
        .status(200)
        .json({"jsonData" : true});
    })
    .post(function(req, res){
        res
            .status(200)
            .json({"jsonData" : "POST Request Received"});
    });

    
    


module.exports = router;
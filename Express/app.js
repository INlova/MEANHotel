// Require and instantiate express application
var express = require('express');
var app = express();
var path = require('path');

// Setting global app variables. In this case it's the port
app.set('port', 3000);

// app.use - uses middleware before route response is carried out.
// Logging - has to be placed above express.static, so that you're logging EVERY single request that comes in.
app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});
app.use(express.static(path.join(__dirname, 'public')));

// GET request for /JSON
app.get('/json', function(req, res){
    res
    .status(200)
    .json({"jsonData" : true});
});

// GET request for /file
app.get('/file', function(req, res){
    res
    .status(200)
    .sendFile(path.join(__dirname, 'app.js'));
});

// Listening in on the specific port that was set.
var server = app.listen(app.get('port'), function(){
    // Grabbing the port from the server object.
    var port = server.address().port;
    console.log("Listening in on port: " + port);
});


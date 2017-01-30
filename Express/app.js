// Require and instantiate express application
var express = require('express');
var app = express();
var path = require('path');

// Setting global app variables. In this case it's the port
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

// GET request for root
// app.get('/', function(req, res){
//     res
//     .status(200)
//     .sendFile(path.join(__dirname, 'public', 'index.html'));
// });

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


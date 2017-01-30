// Require and instantiate express application
var express = require('express');
var app = express();

// Setting global app variables. In this case it's the port
app.set('port', 3000);

// Listening in on the specific port that was set.
var server = app.listen(app.get('port'), function(){
    // Grabbing the port from the server object.
    var port = server.address().port;
    console.log("Listening in on port: " + port);
});


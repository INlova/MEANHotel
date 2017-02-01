var mongoose = require('mongoose');
var dburl = '';

mongoose.connect(dburl);

mongoose.connection.on('connected', function(){
    console.log("Mongoose connected to: " + dburl);
});

mongoose.connection.on('disconnected', function(){
    console.log("Mongoose has disconnected from: " + dburl);
});

mongoose.connection.on('error', function(err){
    console.log("Mongoose Connection Error: " + err);
});

process.on('SIGINT', function(){
    mongoose.connection.close(function(){
        console.log("Mongoose has disconnected through app termination (SIGINT)");
        process.exit(0);
    });
});

process.on('SIGTERM', function(){
    mongoose.connection.close(function(){
        console.log("Mongoose has disconnected through app termination (SIGINT)");
        process.exit(0);
    });
});

process.once('SIGUSR2', function(){
    mongoose.connection.close(function(){
        console.log("Mongoose has disconnected through app termination (SIGINT)");
        process.kill(process.pid, 'SIGUSR2');
    });
});
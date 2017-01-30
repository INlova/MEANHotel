var child_process = require('child_process');

console.log(1);

// Makes it so it doesn't impact the flow of the main program
var newProcess = child_process.spawn('node', ['_fibonacci.js'], {
    stdio: 'inherit' // Makes it so the console.log of the child process will show in the command line
});

console.log(2);
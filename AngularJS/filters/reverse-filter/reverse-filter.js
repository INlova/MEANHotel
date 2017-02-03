angular.module('myApp')
    .filter('reverse', reverse);

function reverse() {
    return function(str) {
        if (str) {
            return str.split('').reverse().join('');
        }
    }
}    
var q = require('q');
var defer = q.defer();

setTimeout(defer.resolve, 300);

defer.promise.then(function() {
    console.log("RESOLVED!");
});

var q = require('q');
var defer = q.defer();

setTimeout(defer.reject, 300, new Error("REJECTED!"));

defer.promise.then(
    null,
    function(err) {console.log(err.message);}
);

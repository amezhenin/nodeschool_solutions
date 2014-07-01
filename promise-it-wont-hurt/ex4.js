var defer = require('q').defer();

defer.promise.then(console.log);
defer.resolve('SECOND');
console.log("FIRST");
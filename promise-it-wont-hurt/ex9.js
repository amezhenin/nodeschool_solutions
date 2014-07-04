var q = require('q');

var promiseOne = q.defer();
var promiseTwo = q.defer();

q.all([promiseOne.promise, promiseTwo.promise]).then(console.log);

//q.spread([promiseOne.promise, promiseTwo.promise], console.log)

setTimeout(function(){
    promiseOne.resolve("PROMISES");
    promiseTwo.resolve("FTW");
}, 200);

/*
 function all(a, b) {
 var c = q.defer(),
 cnt = 0,
 values = [];

 a.then(function(arg) {
 values.push(arg);
 if ( ++cnt === 2 ) {
 c.resolve(values);
 }
 });

 b.then(function(arg){
 values.push(arg);
 if ( ++cnt === 2 ) {
 c.resolve(values);
 }
 });

 return c.promise;
 }*/
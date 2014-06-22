var http = require('http');
var async = require('async');
var bl = require('bl');

var myGet = function(url, callback) {
    http.get(url, function (response) {
        response.pipe(bl(callback));
    });
};

async.map(process.argv.slice(2), myGet, function(err, results){
    if (err)
        return console.error(err);
    async.each(results, function(res){
        console.log(res.toString());
    });
});
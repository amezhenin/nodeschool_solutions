var http = require('http');

http.get(process.argv[2], function (response) {
    var result = "";
    response.setEncoding("utf8");
    response.on("data", function(data) {
        result += data;
    });
    response.on('error', console.error);
    response.on("end", function() {
        console.log(result.length);
        console.log(result);
    });

});
/*
var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err)
            return console.error(err)-
        console.log(data.length);
        console.log(data.toString());
    }))

});
 */


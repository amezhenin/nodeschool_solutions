var duplexer = require('duplexer');
var through = require('through');

module.exports = function (counter) {
    var counts = {};
    var input = through(write, end);
    return duplexer(input, counter);

    function write (data) {
        /* data = {"short":"OH","name":"Ohio","country":"US"} */
        counts[data.country] = (counts[data.country] || 0) + 1;
    }
    function end () { counter.setCounts(counts) }

};
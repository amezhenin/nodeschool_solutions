var combine = require('stream-combiner');
var split = require('split');
var through = require('through');
var zlib = require('zlib');

module.exports = function () {
    var result = {};
    var firstGenre = true;

    var tr = through(function (line) {
        console.log(line.type);

        if (line.type === 'genre') {
            if (!firstGenre)
                this.queue(JSON.stringify(result) + '\n');
            firstGenre = false;

            result = {'name': line.name, 'books': []};
        } else if (line.type === 'book') {
            result.books.push(line.name);
        }
    }, function () {
        if (result && !firstGenre)
            this.queue(JSON.stringify(result) + '\n');
        this.queue(null);
    });
    return combine(
        // read newline-separated json,
        // group books into genres,
        // then gzip the output
        split(),
        through(function (text) {
            if (text.length > 0) this.queue(JSON.parse(text))
        }),
        tr,
        zlib.createGzip()
    )
};
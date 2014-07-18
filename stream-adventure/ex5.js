var split = require('split');
var through = require('through');

var num = 0;

process.stdin
    .pipe(split())
    .pipe(through(function (line) {
        if (num % 2) {
            this.queue(line.toString().toUpperCase() + '\n')
        } else {
            this.queue(line.toString().toLowerCase() + '\n')
        }
        num++;
    }))
    .pipe(process.stdout);

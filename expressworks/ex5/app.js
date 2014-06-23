var express = require('express'),
    path = require('path');

var pubpath = path.join(process.argv[3] || __dirname, 'public');

var app = express()
    .use(express.static(pubpath))
    .use(require('stylus').middleware(pubpath));

app.listen(Number(process.argv[2]));

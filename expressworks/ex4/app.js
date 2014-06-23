var express = require('express'),
    path = require('path');
var app = express()
    .use(express.static(path.join(process.argv[3] || __dirname, 'public')));

app.listen(Number(process.argv[2]));

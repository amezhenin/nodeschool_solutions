var express = require('express'),
    bodyParser = require('body-parser');

var app = express().
    use(bodyParser.urlencoded());

app.post('/form', function(req, res) {
    res.send(req.body.str.split('').reverse().join(''))
});

app.listen(process.argv[2]);
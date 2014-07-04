var qhttp = require('q-io/http');

qhttp.read("http://localhost:7000")
    .then(function(id) {return "http://localhost:7001/" + id})
    .then(qhttp.read)
    .then(JSON.parse)
    .then(console.log)
    .then(null, console.error)
    .done();

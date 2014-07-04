var qhttp = require('q-io/http')
    , _ = require('lodash')
    , cache = "http://localhost:7000/"
    , db = "http://localhost:7001/";

var userUrl = _.bind(String.prototype.concat, db);

qhttp.read(cache)
    .then(_.compose(qhttp.read, userUrl))
    .then(_.compose(console.log, JSON.parse))
    .then(null, console.error)
    .done();

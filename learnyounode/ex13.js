var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    if (req.method != 'GET') {
        res.writeHead(403, { 'content-type': 'text/plain' });
        return res.end("Not allowed");
    }


    var reqUrl = url.parse(req.url, true);
    var date = new Date(reqUrl.query.iso);
    switch (reqUrl.pathname){
        case '/api/unixtime':
            res.writeHead(200, {'Content-Type': 'application/json' });
            d = {
                "unixtime": date.getTime()
            };
            return res.end(JSON.stringify(d));
        case '/api/parsetime':
            res.writeHead(200, {'Content-Type': 'application/json' });
            d = {
                "hour": date.getHours(),
                "minute": date.getMinutes(),
                "second": date.getSeconds()
            };
            return res.end(JSON.stringify(d));
        default:
            res.writeHead(403, {'content-type': 'text/plain' });
            return res.end("Wrong method");

    }
});

server.listen(Number(process.argv[2]));

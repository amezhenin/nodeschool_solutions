var net = require('net');


var server = net.createServer(function (socket) {
    socket.end(formatDate(new Date()));
});

function pad(i) {
    return (i < 10 ? '0' : '') + i
}

function formatDate(d) {
    // 2013-07-06 07:42

    return d.getFullYear() + "-"
        + pad(d.getMonth() + 1) + "-"
        + pad(d.getDate()) + " "
        + pad(d.getHours()) + ":"
        + pad(d.getMinutes()) + "\n";
}


server.listen(Number(process.argv[2]));

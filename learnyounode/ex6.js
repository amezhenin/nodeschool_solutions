var ex6_module = require('./ex6_module');

var printList = function (err, files) {
    if (err) throw err;
    for(var i in files) {
        console.log(files[i]);
    }
};

ex6_module(process.argv[2], process.argv[3], printList);

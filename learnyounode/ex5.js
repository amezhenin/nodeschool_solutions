var fs = require('fs');

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

fs.readdir(process.argv[2], function (err, files) {
    var ext = '.' + process.argv[3];
    for(var i in files) {
        if (files[i].endsWith(ext))
            console.log(files[i]);
    }
});


var fs = require('fs');
var path = require('path');

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function (err, files) {
        if (err) return callback(err, null);

        return callback(null, files.filter(function(file){
            return path.extname(file) === '.' + ext;
        }));
    });
};

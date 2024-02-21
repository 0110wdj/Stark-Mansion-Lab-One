// copy file module

var fs = require('fs');

function copy(src, dist, callbsack) {
    fs.readFile(src, function (err, data) {
        if (err) {
            return callbsack(err);
        }
        fs.writeFile(dist, data.toString(), function (err) {
            if (err) {
                return callbsack(err);
            }
            callbsack(null);
        });
    });
}
module.exports = copy;
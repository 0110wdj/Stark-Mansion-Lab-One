// read directory
var fs = require('fs');
console.log('read directory:');
fs.readdir('./Files/mkdir', function (err, files) {
    if (err) {
        return console.log(err);
    }
    files.forEach(element => {
        console.log(element);
    });
});
// file copy 
var fs = require('fs');

fs.readFile('./Files/writeTest.txt', function (err, data) {
    if (err) {
        return console.log('read error');
    }
    fs.writeFile('./Files/copy.txt', data.toString(), function (err) {
        if (err) {
            return console.log('read error');
        }
    });
    console.log('copy success');
});
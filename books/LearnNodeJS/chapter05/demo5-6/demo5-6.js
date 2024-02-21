// copy file by stream

var fs = require('fs');

var readableStream = fs.createReadStream('./demo5-6/input.txt');
var writeableStream = fs.createWriteStream('./demo5-6/output.txt');

readableStream.setEncoding('UTF-8');

readableStream.on('data', function (chunk) {
    writeableStream.write(chunk);
});

readableStream.on('end', function () {
    writeableStream.end();
});

readableStream.on('error', function (err) {
    console.log(err.stack);
});


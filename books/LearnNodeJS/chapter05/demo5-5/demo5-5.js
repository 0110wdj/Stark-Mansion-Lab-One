// read from stream

var fs = require('fs');
var total = '';
var readableStream = fs.createReadStream('./demo5-5/input.txt');

readableStream.setEncoding('UTF-8');

readableStream.on('data', function (chunk) {
    total += chunk;
});
readableStream.on('end', function () {
    console.log(new Date());
    console.log(total);
});
readableStream.on('error', function (err) {
    console.log(err.stack);
});

console.log(new Date());
console.log('programmer end');


// copy file by stream pip()

var fs = require('fs');

var srcPath = './demo5-7/input.txt';
var dist = './demo5-7/output.txt';

var readableStream = fs.createReadStream(srcPath);
var writeableStream = fs.createWriteStream(dist);

if (readableStream.pipe(writeableStream)) {
    console.log('success');
} else {
    console.log('failed');
}


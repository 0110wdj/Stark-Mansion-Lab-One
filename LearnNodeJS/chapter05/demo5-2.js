// write into buffer
var buf = new Buffer(5);

console.log(buf.length);

buf.write('a');

console.log(buf);

buf.write('b', 1, 1, 'ascii');

console.log(buf);
var fs = require('fs')
const iconv = require('iconv-lite')

var rs = fs.createReadStream('test.md', { highWaterMark: 11 })

var chunks = [];
var size = 0;

rs.on('data', (chunk) => {
  chunks.push(chunk);
  size += chunk.length;
})

rs.on('end', () => {
  var buf = Buffer.concat(chunks, size);
  var str = iconv.decode(buf, 'utf-8')
  console.log(str);
})

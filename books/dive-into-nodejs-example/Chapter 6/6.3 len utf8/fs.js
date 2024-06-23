var fs = require('fs')

var rs = fs.createReadStream('test.md', { highWaterMark: 11 })
rs.setEncoding('utf-8')

var data = '';

rs.on('data', (chunk) => {
  data += chunk
})

rs.on('end', () => {
  console.log(data);
})

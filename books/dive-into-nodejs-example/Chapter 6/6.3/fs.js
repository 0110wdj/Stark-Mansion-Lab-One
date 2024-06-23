var fs = require('fs')

var rs = fs.createReadStream('test.md')
var data = '';

rs.on('data', (chunk) => {
  data += chunk
})

rs.on('end', () => {
  console.log(data);
})

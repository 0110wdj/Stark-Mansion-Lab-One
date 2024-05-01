var fs = require('fs');

fs.readFile('./test.txt', (err, file) => {
  if (err) {
    console.error(err);
  } else {
    console.log('read complete:', file.toString());
  }
})

console.log('start read');
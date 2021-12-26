// read file
var fs = require('fs');

fs.readFile('./Files/appendWriteTest.txt', function (err, data) {
    if (err) {
        console.log("read error");
    }
    console.log(data);
    console.log(data.toString());
});

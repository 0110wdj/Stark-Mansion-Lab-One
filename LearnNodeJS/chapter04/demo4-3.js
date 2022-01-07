// append content to file
var fs = require('fs');
var data = 'appendText';

fs.appendFile('./Files/appendWriteTest.txt', data, function (err) {
    if (err) {
        console.log("appendWriteTest error");
    }
    console.log("appendWriteTest success");
});

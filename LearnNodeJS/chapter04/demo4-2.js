// 异步方式写入文
var fs = require('fs');
console.log(1);
fs.writeFile('./Files/writeTest.txt', 'writeTest', function (err) {
    if (err) {
        console.log("error");
    }
    console.log(2);
});
console.log(3);

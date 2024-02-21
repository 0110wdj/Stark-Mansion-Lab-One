// 同步方式写入文件
var fs = require('fs');

try {
    console.log('写入文件...');
    fs.writeFileSync('./Files/syncWriteTest.txt','syncWriteTest');
} catch (e) {
    console.log('write error');
}
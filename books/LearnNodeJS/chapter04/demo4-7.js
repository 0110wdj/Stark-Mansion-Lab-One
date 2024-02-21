var fs = require('fs');

fs.stat('./Files/writeTest.txt', function (err, stats) {
    if (err) {
        console.log('error');
    }
    console.log(stats.isFile());
    console.log(stats);
});  
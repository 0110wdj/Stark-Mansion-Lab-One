var fs = require('fs');

// 写法 'lrc.txt' 报错
fs.readFile('./lrc-scroll/lrc.txt', function (err, data) {
    if (err) {
        console.log('read error');
        console.log(err);
    }
    data = data.toString();
    var lines = data.split('\n');
    // console.log(lines);
    var reg = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s*(.+)/;
    for (var i = 0; i < lines.length; i++) {
        (function (index) {
            var line = lines[index];
            // console.log(line);
            var matches = reg.exec(line);
            if (matches) {
                var m = parseFloat(matches[1]);
                var s = parseFloat(matches[2]);
                var ms = parseFloat(matches[3]);
                var content = matches[4];
                var time = m * 60 * 1000 + s * 1000 + ms;
                setTimeout(function () { console.log(content); }, time);
            }
        })(i);
    }
});


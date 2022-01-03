// provide static file by http dynamic url
var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer();
server.on('request', function(request, response) {

    var url = request.url;
    console.log(url);
    var fullPath = path.join(__dirname, 'static', url);

    if (url === '/') {
        fullPath = path.join(__dirname, 'static/index.html');

    }
    fs.readFile(fullPath, function(err, data) {
        if (err) {
            return response.end(err.message);
        }
        response.end(data);
    });
});

server.listen(3000, function() {
    console.log('server is listening at port 3000');
});
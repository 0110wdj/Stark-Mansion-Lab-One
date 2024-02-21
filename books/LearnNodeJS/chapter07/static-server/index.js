// Server code
var http = require('http');
var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var server = http.createServer();
server.on('request', function(request, response) {
    var url = request.url;
    if (url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', function(err, data) {
            if (err) {
                console.log('====0');
                return response.end(err.message);
            }
            console.log('====1');
            var compiled = _.template(data);
            console.log('====2');
            var htmlStr = compiled({
                title: 'hello world',
                arr: [
                    { name: 'Jack' },
                    { name: 'rose' },
                    { name: 'mike' },
                ],
            });
            response.end(htmlStr);
        });
    }
});

server.listen(3000, function() {
    console.log('server is listening at port 3000');
});
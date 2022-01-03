// provide static file by http
var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer();
server.on('request', function(request, response) {

    var url = request.url;

    if (url === '/') {
        fs.readFile(path.join(__dirname, 'static/index.html'), 'utf-8', function(err, data) {
            if (err) {
                throw err;
            }
            response.end(data);
        });
    } else if (url === '/login') {
        fs.readFile(path.join(__dirname, 'static/register.html'), 'utf-8', function(err, data) {
            if (err) {
                throw err;
            }
            response.end(data);
        });
    } else if (url === '/register') {
        fs.readFile(path.join(__dirname, 'static/register.html'), 'utf-8', function(err, data) {
            if (err) {
                throw err;
            }
            response.end(data);
        });
    } else if (url === '/login.html') {
        fs.readFile(path.join(__dirname, 'static/login.html'), 'utf-8', function(err, data) {
            if (err) {
                throw err;
            }
            response.end(data);
        });
    } else if (url === '/css/main.css') {
        fs.readFile(path.join(__dirname, 'static/css/main.css'), 'utf-8', function(err, data) {
            if (err) {
                throw err;
            }
            response.end(data);
        });
    } else if (url === '/images/01.gif') {
        fs.readFile(path.join(__dirname, 'static/images/01.gif'), function(err, data) {
            if (err) {
                throw err;
            }
            response.end(data);
        });
    } else {
        fs.readFile(path.join(__dirname, 'static/404.html'), 'utf-8', function(err, data) {
            if (err) {
                throw err;
            }
            response.end(data);
        });
    }
});

server.listen(3000, function() {
    console.log('server is listening at port 3000');
});
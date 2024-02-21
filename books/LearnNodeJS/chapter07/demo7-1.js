// create Server by Http

var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {

    response.write('hello world');

    response.write('hello Alita');

    response.end();
});

server.listen(3000, function () {
    console.log('server is listening at port 3000');
});
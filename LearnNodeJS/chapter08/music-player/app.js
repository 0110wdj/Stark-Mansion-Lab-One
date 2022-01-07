var http = require('http');
var config = require('./config')
var router = require('./router')
var render = require('./common/render')

var server = http.createServer();
server.on('request', function(req, res) {
    render(res);
    router(req, res);
});

server.listen(config.port, config.host, function() {
    console.log('server is linstening at port ' + config.port);
    console.log('please visit http://' + config.host + ':' + config.port);
});
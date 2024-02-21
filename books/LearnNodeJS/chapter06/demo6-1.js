// Net.Servet create
var net = require('net');

var server = net.createServer();

server.on('connection', function () {
    console.log('client connected');
});

server.on('listening', function () {
    console.log('listening for waiting client');
});

server.listen(3000, '127.0.0.1')


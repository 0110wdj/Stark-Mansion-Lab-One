// use Socket in Server

var net = require('net');

var server = net.createServer();

server.on('connection', function (socket) {
    console.log('new client connect');
    console.log('client IP:' + socket.remoteAddress + ' connected');
    socket.write('hello world');
});

server.on('listening', function () {
    console.log('listening clent connect');
});

server.listen(3000, '192.168.1.20');
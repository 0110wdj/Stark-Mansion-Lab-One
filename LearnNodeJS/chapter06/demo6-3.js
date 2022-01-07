// counting online people
var net = require('net');

var server = net.createServer();
var count = 0;
server.on('connection', function (socket) {
    count++;
    console.log('connected people:' + count);
    socket.write('IP:' + socket.remoteAddress + '\n');
    socket.write('port:' + socket.remotePort);
    console.log('IP:' + socket.remoteAddress + '\n');
    console.log('port:' + socket.remotePort);
});

server.listen(3000, '192.168.1.20', function () {
    console.log('listening at port 3000');
});
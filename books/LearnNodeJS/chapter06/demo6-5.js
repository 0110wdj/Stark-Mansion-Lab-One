// duplex communication server
var net = require('net');

var server = net.createServer();

server.on('connection', function (socket) {
    socket.on('data', function (data) {
        console.log(data.toString());
        socket.write('yes. I eat you, my dear.');
    });
});

server.listen(3000, '::1', function () {
    console.log('listening at port 3000');
});
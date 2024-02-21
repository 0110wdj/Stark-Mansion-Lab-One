// Multiplayer broadcast chat Server
var net = require('net');
var server = net.createServer();

var users = [];

// 链接之后，将具有唯一性的socket记录下来
server.on('connection', function (socket) {
    users.push(socket);
    socket.on('data', function (data) {
        data = data.toString().trim();
        users.forEach(function (client) {
            if (client !== socket) {
                client.write(client.remotePort + ': ' + data);
            }
        });
    });

    socket.on('error', function () {
        console.log('client exist exception');
    });
});

server.listen(3000, '127.0.0.1', function () {
    console.log('server listening at port 3000');
});
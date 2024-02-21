// terminal chat room server

var net = require('net');

var config = require('./config');

var broadcast = require('./broadcast.js');

var p2p = require('./p2p.js');

var signup = require('./signup.js');

var server = net.createServer();

var users = {};

server.on('connection', function (socket) {
    socket.on('data', function (data) {
        data = JSON.parse(data);
        switch (data.protocal) {
            case 'signup':
                signup.signup(socket, data, users);
                break;
            case 'broadcast':
                broadcast.broadcast(data, users);
                break;
            case 'p2p':
                p2p.p2p(socket, data, users);
                break;
            default:
                break;
        }
    });
    socket.on('error', function () {
        console.log('client exist exception');
    });
});

server.listen(config.port, config.host, function () {
    console.log('server listening at port ' + config.port);
});
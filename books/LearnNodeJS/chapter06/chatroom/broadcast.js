exports.broadcast = function (data, users) {
    var from = data.from;
    var message = data.message;
    message = from + 'say: ' + message;
    var send = {
        protocal: 'broadcast',
        message: message,
    }
    send = new Buffer(JSON.stringify(send));
    for (var username in users) {
        var tmpSocket = users[username];
        tmpSocket.write(send);
    }
}
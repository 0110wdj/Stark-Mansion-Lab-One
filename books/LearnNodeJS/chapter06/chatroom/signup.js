exports.signup = function (socket, data, users) {
    var username = data.username;

    if (!users[username]) {
        users[username] = socket;
        var send = {
            protocal: 'signup',
            code: 1000,
            username: username,
            message:'sing up success'
        }
        socket.write(JSON.stringify(send));
    } else {
        var send = {
            protocal: 'signup',
            code: 1001,
            message:'sing up failed: user name exist',
        }
        socket.write(JSON.stringify(send));
    }
}
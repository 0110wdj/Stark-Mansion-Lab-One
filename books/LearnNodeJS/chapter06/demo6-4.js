// duplex communication client
var net = require('net');

try {
    var client = net.createConnection({
        port: 3000,
    });
    client.on('connect', function () {
        console.log('connect success');
        client.write('Did you eat ?');
    });

    client.on('data', function (data) {
        console.log(data.toString());
    });
} catch (error) {
    console.log(error);
}



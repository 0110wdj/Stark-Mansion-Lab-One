// Multiplayer broadcast chat Client
var net = require('net')

var client = net.createConnection({
    port:3000,
    host:'127.0.0.1'
});

// 链接之后就进行，等待控制台输入数据，然后写入服务器
client.on('connect',function(data){
    process.stdin.on('data',function(data){
        data = data.toString().trim();
        client.write(data);
    });
});

// 监听到服务器的发送的数据
client.on('data',function(data){
    console.log(data.toString());
})
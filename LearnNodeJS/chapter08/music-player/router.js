/**
 * 路由模块：负责把具体的请求路径分发给具体的请求处理函数
 * 分发到具体的业务处理逻辑
 */

var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var musicController = require('./controllers/music');
var url = require('url');

module.exports = function(req, res) {
    var urlObj = url.parse(req.url, true);
    req.query = urlObj.query;
    console.log('urlObj.query: ');
    console.log(urlObj.query);
    var pathname = urlObj.pathname;
    var method = req.method;
    console.log('method: ' + method + ' pathname: ' + pathname);
    if (method === 'GET' && pathname === '/') {
        musicController.showIndex(req, res);
    } else if (method === 'GET' && pathname === '/index.html') {
        musicController.showIndex(req, res);
    } else if (method === 'GET' && pathname.startsWith('/node_modules/')) {
        var staticPath = path.join(__dirname, pathname);
        fs.readFile(staticPath, 'utf-8', function(err, data) {
            if (err) {
                return res.end(err.message);
            }
            res.end(data);
        });
    } else if (method === 'GET' && pathname.startsWith('/add')) {
        musicController.showAdd(req, res);
    } else if (method === 'GET' && pathname.startsWith('/edit')) {
        musicController.showEdit(req, res);
    } else if (method === 'POST' && pathname.startsWith('/add')) {
        musicController.doAdd(req, res);
    } else if (method === 'GET' && pathname.startsWith('/remove')) {
        musicController.doRemove(req, res);
    } else if (method === 'POST' && pathname.startsWith('/edit')) {
        musicController.doEdit(req, res);
    } else {
        console.log("without method or pathname");
    }
}
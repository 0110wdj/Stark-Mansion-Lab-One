const formidable = require("formidable")
const config = require("../config")

var storage = [
    { id: 1, title: 'test1', singer: 'cyx', music: 'bala.mp3', poster: 'cyx.jpg' },
    { id: 2, title: 'test1', singer: 'cyx', music: 'bala.mp3', poster: 'cyx.jpg' },
    { id: 3, title: 'test1', singer: 'cyx', music: 'bala.mp3', poster: 'cyx.jpg' },
    { id: 4, title: 'test1', singer: 'cyx', music: 'bala.mp3', poster: 'cyx.jpg' },
    { id: 5, title: 'test1', singer: 'cyx', music: 'bala.mp3', poster: 'cyx.jpg' },
    { id: 6, title: 'test1', singer: 'cyx', music: 'bala.mp3', poster: 'cyx.jpg' },
    { id: 7, title: 'test1', singer: 'cyx', music: 'bala.mp3', poster: 'cyx.jpg' },
    { id: 8, title: 'test1', singer: 'cyx', music: 'bala.mp3', poster: 'cyx.jpg' },
    { id: 9, title: 'test1', singer: 'cyx', music: 'bala.mp3', poster: 'cyx.jpg' },
]

exports.showIndex = function(req, res) {
    res.render('index', {
        title: '首页',
        musicList: storage,
    })
}

exports.showAdd = function(req, res) {
    res.render('add', {
        title: '添加音乐',
    })
}

exports.showEdit = function(req, res) {
    var id = req.query.id;
    var music = {}
    storage.forEach(function(item, index) {
        if (item.id == id) {
            music = item;
        }
    });
    res.render('edit', {
        title: '编辑音乐',
        music: music,
    })
}

exports.doAdd = function(req, res) {
    var form = new formidable.IncomingForm();
    form.uploadDir = config.uploadPath;
    form.keepExtensions = true;
    form.parse(req, function(err, fields, files) {
        if (err) {
            return res.end(err.message);
        }
        var title = fields.title;
        var singer = fields.singer;
        // var music = path.basename(files.music.path);
        // var poster = path.basename(files.poster.path);
        var id = 0;
        storage.forEach(function(item) {
            if (item.id > id) {
                id = item.id;
            }
        })
        storage.push({
            id: id + 1,
            title: title,
            singer: singer,
            music: 'music',
            poster: 'poster',
        })
        res.writeHead(302, {
            'Loaction': 'http://127.0.0.1:3000'
        })
        res.end();
    })
}

exports.doRemove = function(req, res) {
    var id = req.query.id;
    var music_index = 0;
    storage.forEach(function(item, index) {
        if (item.id == id) {
            music_index = index;
        }
    });
    storage.splice(music_index, 1);
    res.writeHead(302, {
        'Location': 'http://127.0.0.1:3000'
    });
    res.end();
}

exports.doEdit = function(req, res) {
    var id = req.query.id;
    var data = ''
    req.on('data', function(chunk) {
        data += chunk
        setTimeout(function() { console.log(data); }, 2000)
    })
    req.on('end', function() {
        // 此处解析有问题，所以用常量表示
        // var postBody = qstring.parse(data)
        var postBody = { title: 'test', singer: 'test' }
        var music_index = 0;
        storage.forEach(function(item, index) {
            if (item.id == id) {
                music_index = index;
            }
        });
        storage[music_index].title = postBody.title;
        storage[music_index].singer = postBody.singer;
    })
    res.writeHead(302, {
        'Location': 'http://127.0.0.1:3000'
    });
    res.end();
}
exports.showIndex = function(req, res) {
    res.render('index', {
        title: 'Index',
    })
}

exports.showAdd = function(req, res) {
    res.render('add', {
        title: '添加音乐',
    })
}

exports.showEdit = function(req, res) {
    res.render('edit', {
        title: '编辑音乐',
    })
}
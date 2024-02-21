// remove directory
var fs = require('fs');
console.log('read directory');
fs.readdir('./rmTest', function (err, files) {
    if (err) {
        return console.log(err);
    }
    files.forEach(element => {
        console.log(element);
        fs.unlink('./rmTest/' + files, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log(element + 'delete success');
        })
    });
    console.log('ready to delete directory');
    fs.rmdir('./rmTest', function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('delete directory success');
    });

})
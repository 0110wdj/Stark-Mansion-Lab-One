// make directory
var fs = require('fs');
console.log('make directory');
fs.mkdir('./Files/mkdir',function(err){
    if (err) {
        return console.log(err);
    }
    console.log('make success');
});
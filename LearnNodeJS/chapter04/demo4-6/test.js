var copy = require('./demo4-6');

copy ('./Files/writeTest.txt','./Files/copyModelTest.txt',function(err) {
    if (err) {
        console.log('copy faild');
    }
    console.log('copy successed');
});
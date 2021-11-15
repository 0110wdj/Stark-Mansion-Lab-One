/* 回调函数接收异步代码执行结果 */
function parseJsonStrToObj(str, callback) {
    setTimeout(function () {
        try {
            var obj = JSON.parse(str);
            callback(null, obj);
        } catch (e) {
            // console.log('falie to transfer');
            callback(e, null);
        }
    }, 0)
}
parseJsonStrToObj('foo', function (err, result) {
    if (err) {
        return console.log("transfer error");
    }
    console.log("ok " + result);
});

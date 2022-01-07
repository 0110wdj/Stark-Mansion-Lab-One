/* 同步代码异常处理 */
function parseJsonStrToObj(str) {
    return JSON.parse(str);
}
// 同步代码，用try catch 来捕获异常
try {
    var obj = parseJsonStrToObj('foo');
    console.log(obj);
} catch (e) {
    console.log('falie to transfer');
}
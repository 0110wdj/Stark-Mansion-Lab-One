/* try catch 写在异步代码中 */
function parseJsonStrToObj(str) {
    setTimeout(function () {
        try {
            return JSON.parse(str);
        } catch (e) {
            console.log('falie to transfer');
        }
    }, 0)
}
var obj = parseJsonStrToObj('foo');
console.log(obj);

/* 异步代码，try catch 无效 */
function parseJsonStrToObj(str){
    setTimeout(function(){
        return JSON.parse(str);
    },0)
}
// 测试
try {
    var obj = parseJsonStrToObj('foo');
    console.log(obj);
} catch (e) {
    console.log('falie to transfer');
}
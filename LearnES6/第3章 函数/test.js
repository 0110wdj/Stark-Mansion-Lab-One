/* function testParams(param1, param2) {
    console.log(param1);
    console.log(param2);
    console.log(arguments.length);
    console.log(arguments);
}
function testParams2(param1, param2 = 'm') {
    console.log(param1);
    console.log(param2);
    console.log(arguments.length);
    console.log(arguments);
}

testParams('a', 'b')
testParams2('n') */

// 带有不定参数的函数的length
/* function pick(object, ...keys) {
    console.log('pick.length:' + pick.length);
    console.log('arguments.length:' + arguments.length);
    console.log('keys.length:' + keys.length);
}
function pick2(params, a, b, ...p3) {

}
function pick3(params, a, b, p3) {

}
pick({ 'a': 1, 'b': 2 }, 'a', 'b', 'c');
console.log('pick2.length:' + pick2.length);
console.log('pick3.length:' + pick3.length); */

let values = [1, 2, 3, 4, 5]
console.log(Math.max(...values));
console.log(Math.max(1, 2, 3));
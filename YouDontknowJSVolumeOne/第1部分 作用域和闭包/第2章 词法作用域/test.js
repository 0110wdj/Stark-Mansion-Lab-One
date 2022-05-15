/* function foo(a) {
    var b = a * 2;

    function bar(c) {
        var b = 2
        console.log(a, b, c);
    }

    bar(b * 3);
}

foo(2); */

let i = 0;
setInterval(() => { i += 1; eval("console.log(`第${i}秒`)"); }, 1000)
// setInterval(() => { }, 1000)
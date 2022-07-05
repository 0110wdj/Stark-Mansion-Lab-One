/*
 * @description: 
 * @RGX/RBX: 
 * @Authored: LiuJie
 * @Date: 2022-06-09 11:18:06
 * @LastEditors: LiuJie
 * @LastEditTime: 2022-07-05 21:36:08
 */
/* function foo(a) {
    var b = 2;

    function bar() {
    }

    var c = 3;
} */
// console.log(b,c);

/** 倒置代码顺讯 */

/* var a = 2;

(function IIFE(def) {
    console.log('1');
    def({ a: 'test' });
    console.log('2');
})(
    function (global) {
        var a = 3;
        console.log(a);
        console.log(global.a);
    }
) */

let b = 3;

{
    let a = 2;
    console.log(a);
    console.log(b);
    b = 4;
}

// console.log(a);
console.log(b);
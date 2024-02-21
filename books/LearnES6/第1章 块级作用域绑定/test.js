/* 临时死区 */
// if (true) {
//     console.log(typeof value);
//     let value = 'blue';
// }

// console.log(typeof value);
// if (true) {
//     let value = 'blue';
// }

/* 循环中的块作用域绑定 */
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);

/* 立即调用函数表达式 */
// var funcs = [];

// for (var i = 0; i < 10; i++) {
//     funcs.push(
//         (function(value) {
//             return function() {
//                 console.log(value);
//             }
//         }(i))
//     );
// }

// funcs.forEach(
//     function(func) { func(); }
// );
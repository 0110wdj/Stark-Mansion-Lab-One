// let text = '吉'

// console.log(text.length);
// console.log(/^.$/.test(text));
// console.log(/^.$/u.test(text));
// console.log(text.charAt(0));
// console.log(text.charAt(1));
// console.log(text.charCodeAt(0));
// console.log(text.charCodeAt(1));

// let str = `ddd 
//  dd`
// console.log(str);

// function tag(val, ...uid) {
// // function tag(val, uid) {
//     console.log(val);
//     console.log(uid);
//     let res = '';
//     console.log(uid.length);
//     for (let i = 0; i < uid.length; i++) {
//         res += val[i];
//         if (uid[i] === '87') {
//             res += '冰上飞熊';
//         } else if (uid[i] === '01') {
//             res += '管理员';
//         }
//         else {
//             res += uid[i];
//         }
//     }
//     return res;
// }
// let uid = '87'
// let uid2 = '01'
// let result = tag`用户名为:${uid}测试而${uid2}.`
// let result2 = `用户名为:${uid}测试而${uid2}.`
// console.log(result);
// console.log(result2);
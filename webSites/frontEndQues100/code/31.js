// 改造下面的代码，使之输出 0 - 9，写出你能想到的所有解法。
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000)
// }

console.log("methed 1:");

// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000)
// }

console.log("methed 2:");

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

console.log("methed 3:");

// for (var i = 0; i < 10; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000)
//   })(i);
// } 

console.log("methed 4:");

// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function printNumbers() {
//   for (let i = 0; i < 10; i++) {
//     await delay(100);
//     console.log(i);
//   }
// }

// printNumbers();

console.log("methed 5:");

// for (var i = 0; i < 10; i++) {
//   setTimeout(i => {
//     console.log(i);
//   }, 1000, i)
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(console.log, 1000, i)
// }

// for (var i = 0; i < 10; i++) {
//   setTimeout(console.log.bind(Object.create(null), i), 1000)
// }

console.log("methed 6:");

// for (var i = 0; i < 10; i++) {
//   try {
//     throw new Error(i);
//   } catch ({
//     message: i
//   }) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000)
//   }
// }

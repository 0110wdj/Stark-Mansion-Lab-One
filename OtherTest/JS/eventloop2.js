async function async1() {
  console.log('async1 start')//2
  await async2()
  console.log('async1 end')//6
}
async function async2() {
  console.log('async2')//3
}
console.log('script start')//1
setTimeout(function () {
  console.log('setTimeout')//9
}, 0)
async1();
new Promise(function (resolve) {
  console.log('promise1')//4
  resolve();
}).then(function () {
  console.log('promise2')//7
}).then(function () {
  console.log('promise3')//8
})
console.log('script end')//5
/*
 * @description: 
 * @RGX/RBX: 
 * @Authored: LiuJie
 * @Date: 2022-09-24 19:47:12
 * @LastEditors: LiuJie
 * @LastEditTime: 2022-09-24 19:50:22
 */
var x = 1;
function* foo() {
  x++;
  yield;
  console.log('x:', x);
}
function bar() {
  x++;
}

var it = foo()

console.log(x);
it.next()
console.log(x);
bar()
console.log(x);
it.next()
console.log(x);
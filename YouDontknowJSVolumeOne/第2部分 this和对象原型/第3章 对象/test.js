/*
 * @description: 
 * @RGX/RBX: 
 * @Authored: LiuJie
 * @Date: 2022-07-28 21:28:02
 * @LastEditors: LiuJie
 * @LastEditTime: 2022-07-28 22:08:56
 */
// console.log(typeof null);
// console.log("I am a string".length);
// console.log(42.359.toFixed(2));
// var myObject = {
//   a: 2,
// }
// console.log(myObject.a);
// console.log(myObject["a"]);
var myArray = ['foo', 42, 'baz']
myArray['3'] = 'baz'
console.log(myArray.length)
console.log(myArray[3]);
myArray['6'] = 'baz'
console.log(myArray.length)
console.log(myArray[5]);
console.log(myArray[6]);
console.log(myArray);
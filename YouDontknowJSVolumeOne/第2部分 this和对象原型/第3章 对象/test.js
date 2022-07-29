/*
 * @description: 
 * @RGX/RBX: 
 * @Authored: LiuJie
 * @Date: 2022-07-28 21:28:02
 * @LastEditors: LiuJie
 * @LastEditTime: 2022-07-29 22:09:52
 */
// console.log(typeof null);
// console.log("I am a string".length);
// console.log(42.359.toFixed(2));
// var myObject = {
//   a: 2,
// }
// console.log(myObject.a);
// console.log(myObject["a"]);
// var myArray = ['foo', 42, 'baz']
// myArray['3'] = 'baz'
// console.log(myArray.length)
// console.log(myArray[3]);
// myArray['6'] = 'baz'
// console.log(myArray.length)
// console.log(myArray[5]);
// console.log(myArray[6]);
// console.log(myArray);
// var myObject = {
//   a: 2,
// }
// console.log(Object.getOwnPropertyDescriptor(myObject, 'a'));

// Object.defineProperty(myObject, 'b', {
//   value: 3,
//   writable: true,
//   enumerable: true,
//   configurable: true
// });

// console.log(Object.getOwnPropertyDescriptor(myObject, 'b'));

// Object.defineProperty(myObject, 'b', {
//   value: 3,
//   writable: true,
//   enumerable: true,
//   configurable: false
// });

// console.log(Object.getOwnPropertyDescriptor(myObject, 'b'));

// Object.defineProperty(myObject, 'b', {
//   value: 3,
//   writable: false,
//   enumerable: true,
//   configurable: false
// });

// console.log(Object.getOwnPropertyDescriptor(myObject, 'b'));

// Object.defineProperty(myObject, 'b', {
//   value: 3,
//   writable: false,
//   enumerable: false,
//   configurable: false
// });

// console.log(Object.getOwnPropertyDescriptor(myObject, 'b'));

/* var myObject = {
  get a() {
    return this._a_;
  },
  set a(value) {
    this._a_ = value * 2;
  }
};

myObject.a = 2
console.log(myObject.a); */

/* var myObject = {
  a: 2
}

console.log(4 in [2, 4, 6]);
console.log('a' in myObject); */

var myArray = [1, 2, 3];
for (var v of myArray) {
  console.log(v);
}

var it = myArray[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

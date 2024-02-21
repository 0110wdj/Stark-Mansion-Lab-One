// let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// numbers.copyWithin(3,0)
// console.log(numbers.toString());
// let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8]
// numbers1.copyWithin(3,1,2)
// console.log(numbers1.toString());

/* let buffer = new ArrayBuffer(10),
    view = new DataView(buffer),
    view2 = new DataView(buffer,2,5);

console.log(buffer);
console.log(view);
console.log(view2); */

// let buffer = new ArrayBuffer(2),
//     view = new DataView(buffer);

// view.setInt8(0, 5);
// view.setInt8(1, -1);

// console.log(view);
// console.log(view.getInt8(0));
// console.log(view.getInt8(1));
// console.log(view.getInt16(0));
// console.log(view.getUint8(1));

let ints = new Int16Array(4);
ints.set([25, 50]);
ints.set([26], 3);
console.log(ints);
console.log(ints.toString());

// 第六类型
/* let firstName = Symbol('first name');
let person = {}

person[firstName] = 'snofly';
console.log(person[firstName]);
console.log(firstName); */

/* let uid = Symbol.for('uid');
let object = {}
object[uid] = '12345'
object['test'] = 'test'
console.log(object[uid]);
console.log(object);
console.log(uid);
console.log(object['test']);
// console.log(test ? 'te' : 'wu'); */

// var uid = Symbol.for('uid'),
//     desc = String(uid);
// console.log(desc);
// console.log(uid);
// console.log(typeof desc);

/* function MyObject() {
    // nothing
}
let obj0 = new MyObject();
console.log(obj0 instanceof MyObject);
console.log(obj0 instanceof MyObject);

Object.defineProperty(MyObject, Symbol.hasInstance, {
    value: function (v) {
        return false;
    }
})
let obj = new MyObject();
console.log(obj instanceof MyObject);
console.log(obj instanceof MyObject); */

/* var one = new Number(2),
    two = 2;
console.log(one === two);
console.log(one == two);
console.log(typeof one);
console.log(typeof two);
console.log(one instanceof Number);
console.log(two instanceof Number); */

/* let mm = { 0: 'c', 1: 'd' }
let nn = { 0: 'c', 1: 'd', length: 2, [Symbol.isConcatSpreadable]: true }
let aa = ['a', 'b'],
    bb = aa.concat(['c', 'd'], 'e'),
    cc = aa.concat('c', 'd', 'e'),
    dd = aa.concat(mm, 'e'),
    ee = aa.concat(nn, 'e');
console.log(bb);
console.log(cc);
console.log(dd);
console.log(ee); */

function Temperature(degrees) {
    this.degrees = degrees;
}

Temperature.prototype[Symbol.toPrimitive] = function (hint) {
    switch (hint) {
        case 'string':
            return this.degrees + '\u00b0';
        case 'number':
            return this.degrees;
        case 'default':
            return this.degrees + ' degrees';
    }
}

var freezing = new Temperature(32);

console.log(freezing + '!');
console.log(freezing / 2);
console.log(String(freezing));
console.log(freezing);
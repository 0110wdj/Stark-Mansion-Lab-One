/* function testParams(param1, param2) {
    console.log(param1);
    console.log(param2);
    console.log(arguments.length);
    console.log(arguments);
}
function testParams2(param1, param2 = 'm') {
    console.log(param1);
    console.log(param2);
    console.log(arguments.length);
    console.log(arguments);
}

testParams('a', 'b')
testParams2('n') */

// 带有不定参数的函数的length
/* function pick(object, ...keys) {
    console.log('pick.length:' + pick.length);
    console.log('arguments.length:' + arguments.length);
    console.log('keys.length:' + keys.length);
}
function pick2(params, a, b, ...p3) {

}
function pick3(params, a, b, p3) {

}
pick({ 'a': 1, 'b': 2 }, 'a', 'b', 'c');
console.log('pick2.length:' + pick2.length);
console.log('pick3.length:' + pick3.length); */

/* let values = [1, 2, 3, 4, 5]
console.log(Math.max(...values));
console.log(Math.max(1, 2, 3)); */

// function Person(name) {
//     if (this instanceof Person) {
//         this.name = name;
//         console.log('inside');
//     } /* else {
//         throw new Error('invoke Person by newKey')
//     } */
// }

// var person = new Person('Nicholas');
// var notAPerson = Person('Nicholas');
// var notAPersonCall = Person.call(person, 'Nicholas');

// console.log(person);
// console.log(notAPerson);
// console.log(notAPersonCall);

// function pp(params) {
//     console.log(new.target);
// }
// var person = new pp('Nicholas');
// var person = pp.call(this, 'Nicholas');

// if (true) {
//     console.log(typeof test);
//     function test(params) {
//         console.log('test');
//     }
//     test();
// }
// console.log(typeof test);

/* let test = value => value;
console.log(test('bala'));
let sum = (num1, num2) => num1 + num2;
console.log(sum(2, 5));
let getName = () => 'Nicholas';
console.log(getName()); */

/* let person = function (name) {
    return {
        getName: function () {
            return name;
        }
    }
}("Nicholas");
console.log(person.getName()); */

/* let person = ((name) => {
    return {
        getName: function () {
            return name;
        }
    }
})('Nicholas');
console.log(person.getName()); */

var values = [3, 2, 1];
var result = values.sort((a, b) => a - b);
console.log(result);
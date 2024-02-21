/* function test(name) {
    return {
        name,
    }
}
console.log(test('dd')); */

/* console.log(+0 == -0);
console.log(+0 === -0);
console.log(Object.is(+0, -0));

console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN)); */

var obj = {
    a: 1,
    0: 1,
    c: 1,
    2: 1,
    b: 1,
    1: 1,
};
obj.d = 1;
obj[4] = 4;
console.log(Object.getOwnPropertyNames(obj).join(""));
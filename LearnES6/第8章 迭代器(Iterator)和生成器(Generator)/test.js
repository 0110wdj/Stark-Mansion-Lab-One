/* function* createiterator() {
    console.log(-1);
    console.log(0);
    yield 100;
    console.log(1);
    yield 200;
    console.log(2);
    yield 300;
    console.log(3);
    console.log(4);
}

let iterator = createiterator();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value); */

var first = 0;
function* createIterator() {
    // console.log(first);
    first = yield 1;
    // console.log(first);
    let second = yield first + 2;
    // console.log(second);
    yield second + 3;
    yield second + 3;
}

let iterator = createIterator();

console.log(iterator.next());
// console.log(first);
console.log(iterator.next(4));
// console.log(first);
console.log(iterator.next(5));
console.log(iterator.next(2));
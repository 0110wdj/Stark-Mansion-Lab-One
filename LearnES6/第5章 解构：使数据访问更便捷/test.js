let node = {
    loc: {
        start: {
            line: 1
        }
    }
}

// let { loc: { start } } = node

// console.log(start);

let arr = [node, 'test'];

let [a, b] = arr;

a.loc.start.line = 2;

console.log(a);
console.log(b);

console.log(node);
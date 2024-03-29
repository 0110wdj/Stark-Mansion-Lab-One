Object.prototype[Symbol.iterator] = function () {
  return Object.keys(this)[Symbol.iterator]()
}
const [a, b] = { a: 1, b: 2 }

console.log(a, b);

for (const c of { a: 1, b: 2, c: 3 }) {
  console.log(c);
}
// 新增文件
/* var testObject = {}
var otherObject = {}

console.log(testObject);
console.log(otherObject);

var map = Object.create(null);
map[testObject] = 'foo';

console.log(map);
console.log(map[testObject]);
console.log(map[otherObject]);
console.log(map['[object Object]']);

var otherObjectWithContext = {'a':'1'}
console.log(otherObjectWithContext);
map[otherObjectWithContext] = 'otherObjectWithContext';
console.log(map[otherObjectWithContext]);
console.log(map['[object Object]']); */

let map = new Map(),
    key1 = {},
    key2 = {};

map.set(key1, 5);
map.set(key2, 25);

console.log(map);
console.log(map.get({}));
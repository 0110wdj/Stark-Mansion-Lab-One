var myModule = require('./test');
console.log(myModule);
console.log('length:' + myModule.length);

console.log("===============");

var myModule2 = require('./test2');
console.log(myModule2);
console.log('length:' + myModule2.length);

console.log("===============");

var myModule3 = require('./test3');
console.log(myModule3);
console.log('length:' + myModule3.length);
console.log('something:' + myModule3.something);
console.log('something.length:' + myModule3.something.length);
var foo = 'bar';
console.log(foo);
console.log('global:foo ' + global.foo);
global.foo = foo;
console.log('global:foo ' + global.foo);
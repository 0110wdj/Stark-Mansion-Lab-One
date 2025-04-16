function _new(fn, ...arg) {
  // 1. 创建一个空对象，并设置该对象的原型为构造函数的 prototype
  const obj = Object.create(fn.prototype);

  // 2. 使用 fn.apply 调用构造函数，并绑定 this 为 obj，传入参数 arg
  const ret = fn.apply(obj, arg);

  // 3. 如果构造函数返回的是一个对象，返回该对象；否则返回新创建的 obj
  return ret instanceof Object ? ret : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = _new(Person, 'Bob', 25);

console.log(person1.name);  // Bob
console.log(person1.age);   // 25
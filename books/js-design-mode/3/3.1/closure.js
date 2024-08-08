var Type = {};

for (var i = 0, type; ;) {
  type = ['String', 'Array', 'Number'][i++];
  if (type === undefined) break;
  ; (function (type) {
    Type['is' + type] = function (obj) {
      return Object.prototype.toString.call(obj) == '[object ' + type + ']';
    }
  }
  )(type)
}

console.log(Type);

console.log(Type.isArray([]));
console.log(Type.isString(''));
console.log(Type.isNumber(1));
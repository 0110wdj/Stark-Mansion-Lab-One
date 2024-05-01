var math = require('./math');

console.log(math.add(1, 2, 3));

exports.increment = function (val) {
  return math.add(val, 1);
};
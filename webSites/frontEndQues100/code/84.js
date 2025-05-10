// 请实现一个 add 函数，满足以下功能。
// 实现一个可以连续调用的加法函数，支持多种参数形式：
// add(1) => 1
// add(1)(2) => 3
// add(1)(2)(3) => 6
// add(1)(2, 3) => 6
// add(1, 2)(3) => 6
// add(1, 2, 3) => 6

function add(...args) {
  // 使用 reduce 计算当前传入参数的总和
  // 例如：add(1, 2) 时，sum = 1 + 2 = 3
  const sum = args.reduce((acc, cur) => acc + cur, 0);

  // 创建一个新函数，用于处理后续的参数
  // 这个函数可以继续接收参数，实现连续调用的效果
  function fn(...moreArgs) {
    // 如果还有新的参数传入，则递归调用 add 函数
    // 将当前的和作为第一个参数，新参数作为后续参数
    if (moreArgs.length > 0) {
      return add(sum, ...moreArgs);
    }
    // 如果没有新参数，返回当前计算的和
    return sum;
  }

  // 重写 toString 方法
  // 当函数需要转换为字符串时（如 console.log），会调用此方法
  fn.toString = () => sum;

  // 重写 valueOf 方法
  // 当函数需要转换为数值时（如使用 + 操作符），会调用此方法
  fn.valueOf = () => sum;

  return fn;
}

// 测试用例
// 使用 + 操作符强制将函数转换为数值
console.log(add(1).toString());            // 1
console.log(add(1)(2).toString());         // 3
console.log(add(1)(2)(3).toString());      // 6
console.log(add(1)(2, 3).toString());      // 6
console.log(add(1, 2)(3).toString());      // 6
console.log(add(1, 2, 3).toString());      // 6
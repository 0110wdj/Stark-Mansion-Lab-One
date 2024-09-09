const calculate = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return +num1 + +num2;
    case '-':
      return +num1 - +num2;
    case '*':
      return +num1 * +num2;
    case '/':
      return +num1 / +num2;
    default:
      break;
  }
}

const myEval = (str) => {
  const numArr = str.split(/[+|-|*|/]/);
  const calStack = [];// 只有两种情况：1、空；2、形如 [a,+] [b,-]
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '+':
      case '-':
        if (calStack.length === 0) {
          calStack.push(numArr.shift());
        } else {
          calStack.push(calculate(calStack.pop(), calStack.pop(), numArr.shift()));
        }
        calStack.push(str[i]);
        break;
      case '*':
      case '/':
        numArr.unshift(calculate(str[i], numArr.shift(), numArr.shift()));
        break;
      default:
        break;
    }
  }
  if (calStack.length === 0) {
    // 说明没有加减符号
    return numArr[0];
  }
  return calculate(calStack.pop(), calStack.pop(), numArr[0]);
}

console.log(eval('1+52+33+2*3* 6 / 3'));
console.log(myEval('1+52+33+2*3* 6 / 3'));
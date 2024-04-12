// 同 leetcode 946

function validateBookSequences(putIn: number[], takeOut: number[]): boolean {
  const stack: number[] = []
  let ip = 0, op = 0;
  while (ip < putIn.length && op < takeOut.length) {
    if (stack.at(-1) === takeOut[op]) {
      stack.pop()
      op++
    } else {
      stack.push(putIn[ip])
      ip++
    }
  }
  for (let i = op; i < takeOut.length; i++) {
    if (takeOut[i] === stack.at(-1)) {
      stack.pop()
    } else {
      return false
    }
  }
  return stack.length === 0
};

console.log(validateBookSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
console.log(validateBookSequences([1, 2, 3, 4, 5], [4, 5, 3, 1, 2]));
console.log(validateBookSequences([2, 1, 0], [1, 2, 0]));


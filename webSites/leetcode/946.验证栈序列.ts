/*
 * @lc app=leetcode.cn id=946 lang=typescript
 *
 * [946] 验证栈序列
 */

// @lc code=start
function validateStackSequences(pushed: number[], popped: number[]): boolean {
  let i = 0, j = 0, stack: number[] = [];
  while (true) {
    if (i === pushed.length && j === popped.length) {
      return stack.length === 0
    }
    if (i === pushed.length && (stack.at(-1) !== popped[j])) {
      return false
    }
    if (stack.at(-1) === undefined || stack.at(-1) !== popped[j]) {
      stack.push(pushed[i])
      i++
      continue
    } else {
      stack.pop()
      j++
    }
  }
};
// @lc code=end
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 1, 2]));
console.log(validateStackSequences([2, 1, 0], [1, 2, 0]));


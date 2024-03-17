/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  const stack: string[] = []
  const dct = {
    ['}'.charCodeAt(0) + '']: '{',
    [']'.charCodeAt(0) + '']: '[',
    [')'.charCodeAt(0) + '']: '(',
  }
  const sarr = s.split('')
  for (let c of sarr) {
    if (['}', ']', ')'].includes(c)) {
      const top = stack.pop()
      if (top !== dct[c.charCodeAt(0)]) {
        return false
      }
    } else {
      stack.push(c)
    }
  }
  return stack.length === 0
};
// @lc code=end

console.log(isValid('(]'));

/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let p = -1
  let res = ''
  let carry = 0
  while ((-p <= num1.length) || (-p <= num2.length)) {
    const sum = +(num1.at(p) || 0) + +(num2.at(p) || 0) + carry
    num1.at(p)
    if (sum >= 10) {
      carry = 1
    } else {
      carry = 0
    }
    res = sum % 10 + res
    p--
  }
  return carry === 0 ? res : '1' + res
};
// @lc code=end

console.log(addStrings('456', '77'));


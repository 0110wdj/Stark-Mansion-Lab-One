/*
 * @lc app=leetcode.cn id=371 lang=typescript
 *
 * [371] 两整数之和
 */

// @lc code=start
function getSum(a: number, b: number): number {
  while (b != 0) {
    let c = (a & b) << 1
    a ^= b
    b = c
  }
  return a
};
// @lc code=end

console.log(getSum(1, 2));

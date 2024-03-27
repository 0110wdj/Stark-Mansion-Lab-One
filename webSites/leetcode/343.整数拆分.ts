/*
 * @lc app=leetcode.cn id=343 lang=typescript
 *
 * [343] 整数拆分
 */

// @lc code=start
function integerBreak(n: number): number {
  if (n === 2) return 1
  if (n === 3) return 2
  const last = n % 3
  const count_3 = (n - last) / 3

  switch (last) {
    case 0:
      return 3 ** count_3
    case 1:
      return 3 ** (count_3 - 1) * 4
    case 2:
      return 3 ** count_3 * 2
    default:
      break;
  }
  return NaN
};
// @lc code=end

console.log(integerBreak(3));
console.log(integerBreak(2));
console.log(integerBreak(10));

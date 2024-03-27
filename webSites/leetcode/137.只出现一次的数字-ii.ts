/*
 * @lc app=leetcode.cn id=137 lang=typescript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  let ones = 0, twos = 0;
  for (const num of nums) {
    ones = ones ^ num & ~twos
    twos = twos ^ num & ~ones
  }
  return ones
};
// @lc code=end

console.log(singleNumber([2, 2, 3, 2]));

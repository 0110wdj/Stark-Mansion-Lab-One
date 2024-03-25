/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(...nums)
  const dp: number[] = [nums[0], Math.max(nums[0], nums[1])]
  let max = 0
  for (let i = 2; i < nums.length; i++) {
    dp[i % 2] = Math.max(dp[(i - 1) % 2], dp[(i - 2) % 2] + nums[i])
    max = Math.max(max, ...dp)
  }
  return max
};
// @lc code=end

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));

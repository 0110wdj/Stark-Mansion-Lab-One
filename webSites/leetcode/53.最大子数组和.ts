/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  const dp: number[] = [nums[0], -Infinity]
  let max = -Infinity
  for (let i = 1; i < nums.length; i++) {
    dp[i % 2] = nums[i] + Math.max(0, dp[(i - 1) % 2])
    max = Math.max(max, ...dp)
  }
  return max
};
// @lc code=end

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));

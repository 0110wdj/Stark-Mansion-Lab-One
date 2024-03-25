/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
  const dp: number[] = [1]
  let max = 1
  for (let i = 1; i < nums.length; i++) {
    let base = 1
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        base = Math.max(base, dp[j] + 1)
      }
    }
    dp[i] = base
    max = Math.max(max, ...dp)
  }
  return max
};
// @lc code=end

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]));


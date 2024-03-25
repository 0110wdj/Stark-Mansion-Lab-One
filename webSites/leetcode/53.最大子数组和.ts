/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  if (nums.length === 0) return -Infinity
  if (nums.length === 1) return nums[0]
  const mid = Math.floor(nums.length / 2)
  const leftMax = maxSubArray(nums.slice(0, mid))
  const rightMax = maxSubArray(nums.slice(mid))
  let corssMidLeftMax = -Infinity;
  let corssMidRightMax = -Infinity;
  let tmp = 0
  for (let i = mid; i < nums.length; i++) {
    tmp += nums[i]
    corssMidRightMax = Math.max(corssMidRightMax, tmp)
  }
  tmp = 0
  for (let i = mid; i >= 0; i--) {
    tmp += nums[i]
    corssMidLeftMax = Math.max(corssMidLeftMax, tmp)
  }
  let corssMidMax = corssMidLeftMax + corssMidRightMax - nums[mid];
  return Math.max(leftMax, rightMax, corssMidMax)
};
// @lc code=end

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([5, 4, -1, 7, 8]));

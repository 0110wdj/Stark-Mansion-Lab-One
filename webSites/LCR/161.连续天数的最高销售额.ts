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
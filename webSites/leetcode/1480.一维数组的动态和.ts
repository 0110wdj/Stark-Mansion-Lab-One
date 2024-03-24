/*
 * @lc app=leetcode.cn id=1480 lang=typescript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
function runningSum(nums: number[]): number[] {
  const res: number[] = []
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    res.push((res[i - 1] ?? 0) + element)
  }
  return res
};
// @lc code=end

console.log(runningSum([1, 2, 3, 4]));

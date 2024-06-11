/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  if (nums.length <= 1) return
  const mink = k % nums.length
  for (let i = 0; i < mink; i++) {
    nums.unshift(nums.pop() ?? Number.NaN)
  }
};
// @lc code=end

const nums = [1, 2, 3, 4, 5, 6, 7]
rotate(nums, 3)
console.log(nums);

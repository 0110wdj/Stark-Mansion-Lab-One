/*
 * @lc app=leetcode.cn id=75 lang=typescript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  const counts = [0, 0, 0];
  for (const n of nums) {
    counts[n]++;
  }
  for (let i = 0; i < nums.length; i++) {
    let tmp = 1
    if (i < counts[0]) {
      tmp = 0
    }
    if (i >= counts[1] + counts[0]) {
      tmp = 2
    }
    nums[i] = tmp
  }
};
// @lc code=end

// const arr = [2, 0, 2, 1, 1, 0]
const arr = [2, 0, 1]
sortColors(arr)
console.log(arr);

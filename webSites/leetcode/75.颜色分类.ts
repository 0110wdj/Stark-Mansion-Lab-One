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
  let p0 = 0;
  let p1 = 0;
  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    if (nums[i] === 1) {
      const temp = nums[i];
      nums[i] = nums[p1];
      nums[p1] = temp;
      ++p1;
    } else if (nums[i] === 0) {
      let temp = nums[i];
      nums[i] = nums[p0];
      nums[p0] = temp;
      if (p0 < p1) {
        temp = nums[i];
        nums[i] = nums[p1];
        nums[p1] = temp;
      }
      ++p0;
      ++p1;
    }
  }
};
// @lc code=end

const arr = [2, 0, 2, 1, 1, 0]
// const arr = [2, 0, 1]
sortColors(arr)
console.log(arr);

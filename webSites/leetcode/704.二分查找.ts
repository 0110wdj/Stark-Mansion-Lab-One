/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let i = 0, j = nums.length - 1;
  while (i <= j) {
    const m = Math.floor(i + (j - i) / 2)
    if (nums[m] === target) {
      return m
    }
    if (nums[m] > target) {
      j = m - 1
    } else {
      i = m + 1
    }
  }
  return -1
};
// @lc code=end

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([5], 5));

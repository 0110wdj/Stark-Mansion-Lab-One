/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  if (nums.length === 0) return 0
  let i = 0;
  let j = nums.length - 1;
  let mid: number;
  while (i <= j) {
    mid = Math.floor(i + (j - i) / 2)
    if (nums[mid] === target) return mid
    if (nums[mid] > target) {
      j = mid - 1
    }
    if (nums[mid] < target) {
      i = mid + 1
    }
  }
  return i
};
// @lc code=end

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));

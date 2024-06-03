/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let i = 0;
  let j = 0;

  while (j < nums.length && i < nums.length) {
    if (nums[i] !== 0) {
      i++;
      continue;
    }
    if (j <= i || nums[j] === 0) {
      j++
      continue;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]]
    i++
  }
};
// @lc code=end

const nums = [0, 1, 0, 3, 12]
// const nums = [1]
moveZeroes(nums)
console.log(nums);

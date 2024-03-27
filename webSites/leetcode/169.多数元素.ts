/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  let x = nums[0], count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      count++;
      x = nums[i]
      continue
    }
    if (nums[i] !== x) {
      count--
    } else {
      count++
    }
  }
  return x
};
// @lc code=end

console.log(majorityElement([6, 6, 6, 7, 7]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

/*
 * @lc app=leetcode.cn id=41 lang=typescript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
function firstMissingPositive(nums: number[]): number {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0 && nums[i] <= len) {
      const tar = nums[i]
      nums[i] = nums[tar - 1]
      nums[tar - 1] = tar
      if (nums[i] !== i + 1 && nums[i] !== nums[tar - 1]) {
        i--;
      }
    }
    // console.log(nums);

  }

  for (let i = 0; i < len; i++) {
    if (i + 1 !== nums[i]) return i + 1
  }
  return len + 1
};
// @lc code=end

console.log(firstMissingPositive([3, 4, -1, 1]));
console.log(firstMissingPositive([1, 1]));

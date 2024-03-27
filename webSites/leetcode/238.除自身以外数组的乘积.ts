/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  const len = nums.length;
  let res: number[] = new Array(len).fill(1)
  res[0] = 1
  for (let i = 1; i < len; i++) {
    res[i] = res[i - 1] * nums[i - 1]
  }

  let tmp = 1
  for (let i = len - 2; i >= 0; i--) {
    tmp *= nums[i + 1]
    res[i] *= tmp
  }
  return res
};
// @lc code=end

console.log(productExceptSelf([1, 2, 3, 4]));

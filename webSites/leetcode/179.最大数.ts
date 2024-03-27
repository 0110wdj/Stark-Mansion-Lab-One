/*
 * @lc app=leetcode.cn id=179 lang=typescript
 *
 * [179] 最大数
 */

// @lc code=start
function largestNumber(nums: number[]): string {
  if (Math.max(...nums) === 0) return '0'
  return nums.sort((a, b) => {
    return +`${b}${a}` - +`${a}${b}`
  }).join('')
};
// @lc code=end

console.log(largestNumber([0, 0]));
console.log(largestNumber([10, 2]));
console.log(largestNumber([3, 30, 34, 5, 9]));

/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  let i = 0, j = numbers.length - 1;
  while (i < j) {
    const cur = numbers[i] + numbers[j]
    if (cur === target) {
      return [i + 1, j + 1]
    }
    if (cur > target) {
      j--
    } else {
      i++
    }
  }
  return i < j ? [i + 1, j + 1] : []
};
// @lc code=end
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));


/*
 * @lc app=leetcode.cn id=154 lang=typescript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
function findMin(nums: number[]): number {
  let i = 0, j = nums.length - 1;
  while (i < j) {
    const m = Math.floor(i + (j - i) / 2)
    if (nums[i] < nums[j]) return nums[i]
    if (nums[m] < nums[m - 1]) return nums[m]

    // 相等的情况无法判断最小值在哪半边
    if (nums[m] === nums[i]) {
      for (let x = i + 1; x <= m; x++) {
        if (nums[x] < nums[x - 1]) {
          return nums[x]
        }
      }
      for (let x = m + 1; x <= j; x++) {
        if (nums[x] < nums[x - 1]) {
          return nums[x]
        }
      }
      i++
    } else {
      if (nums[m] > nums[i]) {
        i = m + 1
      } else {
        j = m - 1
      }
    }
  }
  return nums[j]
};
// @lc code=end

console.log(findMin([1, 3, 5]));
console.log(findMin([2, 2, 2, 0, 1]));
console.log(findMin([3, 1, 1]));
console.log(findMin([10, 1, 10, 10, 10]));
console.log(findMin([1, 1]));

/*
 * @lc app=leetcode.cn id=724 lang=typescript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
  let i = 0, j = nums.length - 1;
  let sumLeft = 0, sumRight = 0;
  nums.map(v => sumRight += v)

  // console.log('init:', { sumLeft, sumRight });

  while (i < nums.length) {
    sumRight -= nums[i]
    // console.log({ sumLeft, sumRight });
    if (sumLeft === sumRight) return i
    sumLeft += nums[i]
    i++
  }
  return -1
};
// @lc code=end

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
console.log(pivotIndex([-1, -1, -1, -1, -1, 0]));

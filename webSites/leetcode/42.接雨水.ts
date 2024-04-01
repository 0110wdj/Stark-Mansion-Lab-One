/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
  let maxSum = 0, lp = 0, rp = height.length - 1, lmax = height[lp], rmax = height[rp];
  while (lp < rp) {
    lmax = Math.max(lmax, height[lp])
    rmax = Math.max(rmax, height[rp])
    if (lmax > rmax) {
      maxSum += rmax - height[rp]
      rp--
    } else {
      maxSum += lmax - height[lp]
      lp++
    }
  } 4
  return maxSum
};
// @lc code=end

console.log(6, '==>', trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(9, '==>', trap([4, 2, 0, 3, 2, 5]));

/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
function maxArea(height: number[]): number {
  let max = 0, left = 0, right = height.length - 1;
  max = right * Math.min(height[left], height[right])

  while (left < right) {
    if (height[left] <= height[right]) {
      left++
      max = Math.max(max, (right - left) * Math.min(height[left], height[right]))
    } else {
      right--
      max = Math.max(max, (right - left) * Math.min(height[left], height[right]))
    }
  }

  return max
};
// @lc code=end

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));


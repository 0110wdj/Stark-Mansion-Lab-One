/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0
  let maxLong = 1;
  const numSet = new Set(nums)
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let curMaxLong = 1;
      let curNum = num;
      while (numSet.has(++curNum)) {
        curMaxLong++;
      }
      maxLong = Math.max(maxLong, curMaxLong)
    }
  }
  return maxLong
};
// @lc code=end

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
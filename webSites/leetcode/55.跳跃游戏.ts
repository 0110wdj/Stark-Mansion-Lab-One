/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
  const last = nums.length - 1;
  let arrivelast = 0;
  for (let i = 0; i < last; i++) {
    const cur = nums[i];
    arrivelast = Math.max(arrivelast, cur + i)
    if (arrivelast <= i) {
      return false
    }
  }
  return arrivelast >= last
};
// @lc code=end

console.log(canJump([2, 3, 1, 1, 0]));
// console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([0, 2, 3]));

/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  let state = [1, 2, 3], i = 2;
  for (; i <= n; i++) {
    state[i % 3] = state[(i - 1) % 3] + state[(i - 2) % 3]
  }
  return state[(n - 1) % 3]
};
// @lc code=end

console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));

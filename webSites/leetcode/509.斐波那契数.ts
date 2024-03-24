/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
function fib(n: number): number {
  if (n === 0 || n === 1) return n;
  let state = [0, 1, 2], i = 3;
  for (; i <= n; i++) {
    state[i % 3] = state[(i - 1) % 3] + state[(i - 2) % 3]
  }
  return state[n % 3]
};
// @lc code=end

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));

/*
 * @lc app=leetcode.cn id=264 lang=typescript
 *
 * [264] 丑数 II
 */

// @lc code=start
function nthUglyNumber(n: number): number {
  if (n === 1) return n
  const stack = [1]
  let p2 = 0, p3 = 0, p5 = 0;
  while (stack.length < n) {
    const next_p2 = stack[p2] * 2
    const next_p3 = stack[p3] * 3
    const next_p5 = stack[p5] * 5
    const min = Math.min(next_p2, next_p3, next_p5)
    stack.push(min)
    if (min === next_p2) p2++
    if (min === next_p3) p3++
    if (min === next_p5) p5++
  }
  return stack.at(-1) || NaN
};
// @lc code=end

console.log(nthUglyNumber(10));
console.log(nthUglyNumber(1));

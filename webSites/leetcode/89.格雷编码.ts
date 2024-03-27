/*
 * @lc app=leetcode.cn id=89 lang=typescript
 *
 * [89] 格雷编码
 */

// @lc code=start
function grayCode(n: number): number[] {
  let res = [0, 1]
  for (let i = 2; i <= n; i++) {
    res = [...res, ...res.reverse().map(v => v + 2 ** (i - 1))]
  }
  return res
};
// @lc code=end

console.log(grayCode(1));
console.log(grayCode(2));
console.log(grayCode(3));
console.log(grayCode(4));


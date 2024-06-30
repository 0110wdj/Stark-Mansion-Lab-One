/*
 * @lc app=leetcode.cn id=118 lang=typescript
 *
 * [118] 杨辉三角
 */

// @lc code=start
function generate(numRows: number): number[][] {
  if (numRows === 0) return [];
  const res: number[][] = [[1]];

  for (let i = 1; i < numRows; i++) {
    const cur: number[] = []
    const pre = res[i - 1];
    cur.push(1);
    for (let j = 1; j < i; j++) {
      cur.push(pre[j - 1] + pre[j]);
    }
    cur.push(1);
    res.push(cur);
  }
  return res;
};
// @lc code=end

console.log(generate(5));

/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  const m = grid[0].length
  const n = grid.length
  const resLine: number[] = new Array(m).fill(Infinity)
  grid[0].forEach((v, i) => {
    resLine[i] = (resLine[i - 1] ?? 0) + grid[0][i]
  })
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      resLine[j] = Math.min(resLine[j - 1] ?? Infinity, resLine[j]) + grid[i][j]
    }
  }
  return resLine.at(-1) ?? NaN
};
// @lc code=end

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
console.log(minPathSum([[1, 2], [1, 1]]))

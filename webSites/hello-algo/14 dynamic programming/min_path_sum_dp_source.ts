/* 最小路径和：动态规划 */
function minPathSumDP(grid: Array<Array<number>>): number {
  const n = grid.length,
    m = grid[0].length;
  // 初始化 dp 表
  const dp = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => 0)
  );
  dp[0][0] = grid[0][0];
  // 状态转移：首行
  for (let j = 1; j < m; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  // 状态转移：首列
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  // 状态转移：其余行和列
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j];
    }
  }
  return dp[n - 1][m - 1];
}

const testArrDp = [
  [1, 3, 1, 5],
  [2, 2, 4, 2],
  [5, 3, 2, 1],
  [4, 3, 5, 2]
]

console.log(minPathSumDP(testArrDp));

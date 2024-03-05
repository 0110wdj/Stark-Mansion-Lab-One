/* 最小路径和：状态压缩后的动态规划 */
function minPathSumDPComp(grid: Array<Array<number>>): number {
  const n = grid.length,
    m = grid[0].length;
  // 初始化 dp 表
  const dp = new Array(m);
  // 状态转移：首行
  dp[0] = grid[0][0];
  for (let j = 1; j < m; j++) {
    dp[j] = dp[j - 1] + grid[0][j];
  }
  // 状态转移：其余行
  for (let i = 1; i < n; i++) {
    // 状态转移：首列
    dp[0] = dp[0] + grid[i][0];
    // 状态转移：其余列
    for (let j = 1; j < m; j++) {
      dp[j] = Math.min(dp[j - 1], dp[j]) + grid[i][j];
    }
  }
  return dp[m - 1];
}

const testArrDpSpace = [
  [1, 3, 1, 5],
  [2, 2, 4, 2],
  [5, 3, 2, 1],
  [4, 3, 5, 2]
]

console.log(minPathSumDPComp(testArrDpSpace));

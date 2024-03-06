/* 最小路径和：动态规划 */
function minPathSumDPSource(grid: Array<Array<number>>): number {
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

const minPathSumDPSnofly = (nums: number[][], targetX: number, targetY: number): number => {
  const stateMatrix = nums.map(line => line.map(v => -1))
  stateMatrix[0][0] = nums[0][0]
  for (let i = 1; i < nums.length; i++) {
    stateMatrix[i][0] = stateMatrix[i - 1][0] + nums[i][0]
  }
  for (let i = 1; i < nums[0].length; i++) {
    stateMatrix[0][i] = stateMatrix[0][i - 1] + nums[0][i]
  }
  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j < nums[0].length; j++) {
      stateMatrix[i][j] = Math.min(stateMatrix[i - 1][j], stateMatrix[i][j - 1]) + nums[i][j]
    }
  }
  console.log(stateMatrix);

  return stateMatrix[targetX][targetY]
}
const testArrDpSnofly = [
  [1, 3, 1, 5],
  [2, 2, 4, 2],
  [5, 3, 2, 1],
  [4, 3, 5, 2]
]

console.log(minPathSumDPSnofly(testArrDpSnofly, 3, 3));

/* 0-1 背包：动态规划 */
function knapsackDP(
  wgt: Array<number>,
  val: Array<number>,
  cap: number
): number {
  const n = wgt.length;
  // 初始化 dp 表
  const dp = Array.from({ length: n + 1 }, () =>
    Array.from({ length: cap + 1 }, () => 0)
  );
  // 状态转移
  for (let i = 1; i <= n; i++) {
    for (let c = 1; c <= cap; c++) {
      if (wgt[i - 1] > c) {
        // 若超过背包容量，则不选物品 i
        dp[i][c] = dp[i - 1][c];
      } else {
        // 不选和选物品 i 这两种方案的较大值
        dp[i][c] = Math.max(
          dp[i - 1][c],
          dp[i - 1][c - wgt[i - 1]] + val[i - 1]
        );
      }
    }
  }
  return dp[n][cap];
}

console.log(knapsackDP([10, 20, 30, 40, 50], [50, 120, 150, 210, 240], 50));

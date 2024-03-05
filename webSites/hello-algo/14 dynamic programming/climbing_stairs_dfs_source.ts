/* 搜索 */
function dfs(i: number): number {
  // 已知 dp[1] 和 dp[2] ，返回之
  if (i === 1 || i === 2) return i;
  // dp[i] = dp[i-1] + dp[i-2]
  const count = dfs(i - 1) + dfs(i - 2);
  return count;
}

/* 爬楼梯：搜索 */
function climbingStairsDFS(n: number): number {
  return dfs(n);
}

console.log(climbingStairsDFS(3));

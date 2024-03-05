/* 记忆化搜索 */
function dfsMen(i: number, mem: number[]): number {
  // 已知 dp[1] 和 dp[2] ，返回之
  if (i === 1 || i === 2) return i;
  // 若存在记录 dp[i] ，则直接返回之
  if (mem[i] != -1) return mem[i];
  // dp[i] = dp[i-1] + dp[i-2]
  const count = dfsMen(i - 1, mem) + dfsMen(i - 2, mem);
  // 记录 dp[i]
  mem[i] = count;
  return count;
}

/* 爬楼梯：记忆化搜索 */
function climbingStairsDFSMem(n: number): number {
  // mem[i] 记录爬到第 i 阶的方案总数，-1 代表无记录
  const mem = new Array(n + 1).fill(-1);
  return dfsMen(n, mem);
}
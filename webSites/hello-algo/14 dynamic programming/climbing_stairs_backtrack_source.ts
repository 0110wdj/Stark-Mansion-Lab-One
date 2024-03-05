/* 回溯 */
function backtrack(
  choices: number[],
  state: number,
  n: number,
  res: Map<0, any>
): void {
  // 当爬到第 n 阶时，方案数量加 1
  if (state === n) res.set(0, res.get(0) + 1);
  // 遍历所有选择
  for (const choice of choices) {
    // 剪枝：不允许越过第 n 阶
    if (state + choice > n) continue;
    // 尝试：做出选择，更新状态
    backtrack(choices, state + choice, n, res);
    // 回退
  }
}

/* 爬楼梯：回溯 */
function climbingStairsBacktrack(n: number): number {
  const choices = [1, 2]; // 可选择向上爬 1 阶或 2 阶
  const state = 0; // 从第 0 阶开始爬
  const res = new Map();
  res.set(0, 0); // 使用 res[0] 记录方案数量
  backtrack(choices, state, n, res);
  return res.get(0);
}

console.log(climbingStairsBacktrack(3));

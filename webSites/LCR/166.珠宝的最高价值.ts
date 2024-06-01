function jewelleryValue(frame: number[][]): number {
  const dp: number[] = [];
  for (const line of frame) {
    for (let i = 0; i < frame[0].length; i++) {
      dp[i] = Math.max(dp[i] || 0, dp[i - 1] || 0) + line[i]
    }
  }
  return dp.at(-1) ?? NaN
}

const res = jewelleryValue([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
])

console.log(res);

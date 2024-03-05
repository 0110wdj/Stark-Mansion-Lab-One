const climbing_stairs_dp = (n: number): number => {
  const res: number[] = new Array(n + 1).fill(null)
  if (n === 1 || n === 2) return n
  res[1] = 1
  res[2] = 2
  for (let i = 3; i <= n; i++) {
    res[i] = res[i - 1] + res[i - 2]
  }
  return res[n]
}

console.log(climbing_stairs_dp(3));

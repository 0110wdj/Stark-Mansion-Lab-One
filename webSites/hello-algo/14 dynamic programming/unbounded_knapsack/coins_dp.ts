(() => {
  const coins = [
    [1, 1],
    [2, 1],
    [5, 1],
  ]

  const cap = 11
  const dp: number[][] = Array.from({ length: coins.length + 1 }, (a, i) => {
    if (i === 0) {
      let tmp = Array(cap + 1).fill(Infinity)
      tmp[0] = 0
      return tmp
    }
    return Array(cap + 1).fill(0)
  })

  for (let i = 1; i <= coins.length; i++) {
    for (let j = 1; j <= cap; j++) {
      const currentCoin = coins[i - 1]
      if (currentCoin[0] > j) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j],
          (dp[i][j - currentCoin[0]] + currentCoin[1])
        )
      }
    }
  }

  console.log(dp, '\n', dp[3][11]);
})()
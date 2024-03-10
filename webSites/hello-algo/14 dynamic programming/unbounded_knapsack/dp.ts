(() => {
  const fruits = [
    [10, 50],
    [20, 120],
    [30, 150],
    [40, 210],
    [50, 240],
  ]

  const cap = 50
  const dp: number[][] = Array.from({ length: fruits.length + 1 }, () => Array(cap + 1).fill(0))

  for (let i = 1; i <= fruits.length; i++) {
    for (let j = 1; j <= cap; j++) {
      const currentFruit = fruits[i - 1]
      if (currentFruit[0] > j) {
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          (dp[i][j - currentFruit[0]] + currentFruit[1])
        )
      }
    }
  }

  console.log(dp);
})()
(() => {
  const coins = [
    [1, 1],
    [2, 1],
    [5, 1],
  ]

  const cap = 11
  const dpLine: number[] = Array.from({ length: cap + 1 }, (v, i) => {
    if (i === 0) {
      return 0
    }
    return Infinity
  })

  for (let i = 1; i <= coins.length; i++) {
    for (let j = 1; j <= cap; j++) {
      const currentCoin = coins[i - 1]
      if (currentCoin[0] <= j) {
        dpLine[j] = Math.min(
          dpLine[j],
          (dpLine[j - currentCoin[0]] + currentCoin[1])
        )
      }
    }
  }

  console.log(dpLine);
})()
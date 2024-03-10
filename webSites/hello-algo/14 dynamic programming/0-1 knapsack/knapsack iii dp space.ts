(() => {
  const fruits = [
    [10, 50],
    [20, 120],
    [30, 150],
    [40, 210],
    [50, 240],
  ]

  const cap = 50
  const dpLine: number[] = Array.from({ length: cap + 1 }, () => 0)

  for (let i = 1; i <= fruits.length; i++) {
    for (let j = cap; j >= 1; j--) {
      const currentFruit = fruits[i - 1]
      if (currentFruit[0] <= j) {
        dpLine[j] = Math.max(
          dpLine[j],
          dpLine[j - currentFruit[0]] + currentFruit[1]
        )
      }
    }
  }

  console.log(dpLine, '\n', dpLine[cap]);
})()
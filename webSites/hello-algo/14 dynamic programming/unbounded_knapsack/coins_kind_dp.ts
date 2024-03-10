(() => {
  const sum = 5
  const coinskind = [1, 2, 5]
  const dpArr = Array.from({ length: coinskind.length + 1 }, (v, i) => {
    if (i === 0) {
      return Array(sum + 1).fill(0)
    }
    let tmp = Array(sum + 1).fill(0)
    tmp[0] = 1
    return tmp
  })

  for (let i = 1; i <= coinskind.length; i++) {
    for (let j = 1; j <= sum; j++) {
      const currentCoin = coinskind[i - 1]
      if (currentCoin > j) {
        dpArr[i][j] = dpArr[i - 1][j]
      } else {
        dpArr[i][j] = dpArr[i - 1][j] + dpArr[i][j - currentCoin]
      }
    }
  }

  console.log(dpArr, '\n', dpArr[3][5]);
})()
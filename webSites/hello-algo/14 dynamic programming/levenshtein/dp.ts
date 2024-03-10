const findStep = (source = 'bag', target = 'pack'): number => {
  const dp: number[][] = Array.from({ length: source.length + 1 }, () => new Array(target.length + 1).fill(0))
  for (let i = 0; i <= source.length; i++) {
    dp[i][0] = i
  }
  for (let i = 0; i <= target.length; i++) {
    dp[0][i] = i
  }

  for (let i = 1; i <= source.length; i++) {
    for (let j = 1; j <= target.length; j++) {
      if (source.charAt(i - 1) === target.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
      }
    }
    console.log(dp);
  }

  return dp[dp.length - 1][dp[0].length - 1]
}

console.log(findStep());

function maxProfit(prices: number[]): number {
  let max = 0, min = prices[0]
  prices.forEach(v => {
    if (v < min) { min = v }
    if (v - min > max) {
      max = v - min
    }
  })
  return max
};
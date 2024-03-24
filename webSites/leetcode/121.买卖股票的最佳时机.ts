/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
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
// @lc code=end

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));


/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let max = 0, start = 0, i = 1;
  for (; i < prices.length; i++) {
    if (prices[i] < prices[i - 1]) {
      max += prices[i - 1] - prices[start]
      start = i
    }
  }
  max += prices[i - 1] - prices[start]
  return max
};
// @lc code=end

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));

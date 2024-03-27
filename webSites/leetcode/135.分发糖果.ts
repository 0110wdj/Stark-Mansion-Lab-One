/*
 * @lc app=leetcode.cn id=135 lang=typescript
 *
 * [135] 分发糖果
 */

// @lc code=start
function candy(ratings: number[]): number {
  const len = ratings.length
  let left: number[] = new Array(len).fill(1)
  let right: number[] = new Array(len).fill(1)
  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1
    }
  }
  for (let i = len - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      right[i] = right[i + 1] + 1
    }
  }
  let sum = 0
  for (let i = 0; i < len; i++) {
    sum += Math.max(left[i], right[i])
  }
  return sum
};
// @lc code=end

console.log(candy([1, 0, 2]));
console.log(candy([1, 2, 2]));

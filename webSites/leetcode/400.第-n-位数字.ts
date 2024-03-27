/*
 * @lc app=leetcode.cn id=400 lang=typescript
 *
 * [400] 第 N 位数字
 */

// @lc code=start
function findNthDigit(n: number): number {
  let digit = 1;
  let start = 1;
  let count = 9;
  while (n > count) { // 1.
    n -= count;
    start *= 10;
    digit += 1;
    count = digit * start * 9;
  }
  let num = start + (n - 1) / digit; // 2.
  let numstr = num + ''
  return +(numstr.charAt((n - 1) % digit)); // 3.
};
// @lc code=end

console.log(findNthDigit(3));
console.log(findNthDigit(11));
console.log(findNthDigit(15));

/*
 * @lc app=leetcode.cn id=8 lang=typescript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
  let res = ''
  let isStart = false
  for (const c of s) {
    if (isStart) {
      if (/[0-9.]/.test(c)) {
        res += c
        if (res.length > 9) {
          if (+res > (2 ** 31 - 1)) return 2 ** 31 - 1
          if (+res < - (2 ** 31)) return - (2 ** 31)
        }
      } else {
        return +res || 0
      }
    } else {
      if (/[0-9|+|-]/.test(c)) {
        res += c
        isStart = true
      } else if (/[a-z.]/.test(c)) {
        return 0
      }
    }
  }
  return +res || 0
};
// @lc code=end

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi(".1"));
console.log(myAtoi("+-12"));
console.log(myAtoi("+"));
console.log(myAtoi("00000-42a1234"));

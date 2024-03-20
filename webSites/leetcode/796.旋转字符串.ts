/*
 * @lc app=leetcode.cn id=796 lang=typescript
 *
 * [796] 旋转字符串
 */

// @lc code=start
function rotateString(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false
  let p = 0
  while (p < s.length) {
    // console.log({ p });
    if (s.charAt(p) !== goal.charAt(0)) {
      p++
    } else {
      let right = p + 1
      let flag = true
      // console.log({ s, goal, pe: p, lv: s.charAt(right % s.length), rv: goal.charAt(right - p) });
      while (right < (p + s.length)) {
        if (s.charAt(right % s.length) === goal.charAt(right - p)) {
          right++
        } else {
          // console.log('??');
          p = right
          flag = false
          break
        }
      }
      if (flag) return true
    }
  }
  return false
};
// @lc code=end

console.log(rotateString('abcde', 'cdeab'));
console.log(rotateString('abcde', 'cmcde'));


/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0) return true
  if (t.length === 0) return false
  let tp = 0;
  for (const c of s) {
    if (tp === t.length) return false
    while (true) {
      if (t.charAt(tp) === c) {
        tp++;
        break
      } else {
        tp++
        if (tp === t.length) return false
      }
    }
  }
  return true
};
// @lc code=end

console.log(isSubsequence('acb', 'ahbgdc'));
console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));

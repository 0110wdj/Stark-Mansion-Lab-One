/*
 * @lc app=leetcode.cn id=266 lang=typescript
 *
 * [206] 给定一个字符串，判断该字符串中是否可以通过重新排列组合，形成一个回文字符串。
 */

// @lc code=start
function palindromePermutation(s: string): boolean {
  const map = new Map()
  for (const c of s) {
    if (map.has(c)) {
      map.delete(c)
    } else {
      map.set(c, 1)
    }
  }
  return map.size <= 1
};
// @lc code=end

console.log(palindromePermutation('code'));
console.log(palindromePermutation('aaaab'));
console.log(palindromePermutation('carerac'));

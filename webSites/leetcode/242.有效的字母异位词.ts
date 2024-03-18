/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const map = new Map()
  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1)
  }
  for (const c of t) {
    if (!map.get(c)) return false
    map.set(c, map.get(c) - 1)
  }
  return true
};
// @lc code=end
console.log(isAnagram("aacc", "ccac"));


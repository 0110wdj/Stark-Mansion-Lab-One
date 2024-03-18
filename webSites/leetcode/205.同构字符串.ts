/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false
  const map_s2t = new Map()
  const map_t2s = new Map()
  let i = 0
  for (const c of s) {
    const tar = t.charAt(i)
    if (map_s2t.get(c) === undefined) {
      map_s2t.set(c, tar)
    } else {
      if (map_s2t.get(c) !== tar) {
        return false
      }
    }
    i++
  }
  i = 0
  for (const c of t) {
    const tar = s.charAt(i)
    if (map_t2s.get(c) === undefined) {
      map_t2s.set(c, tar)
    } else {
      if (map_t2s.get(c) !== tar) {
        return false
      }
    }
    i++
  }
  return true
};
// @lc code=end

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('paper', 'title'));

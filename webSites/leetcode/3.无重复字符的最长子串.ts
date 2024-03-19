/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0
  if (s.length === 1) return 1
  let max = 0, start = 0, end = 1;
  const map = new Map()
  map.set(s.charAt(0), 0)
  while (end < s.length) {
    const c = s.charAt(end)
    if (map.has(c)) {
      max = Math.max(end - start, max)
      for (let index = start; index < map.get(c); index++) {
        map.delete(s.charAt(index))
      }
      start = map.get(c) + 1
      map.set(c, end)
      end++
    } else {
      map.set(c, end)
      end++
    }
  }
  return max = Math.max(end - start, max)
};
// @lc code=end

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring('au'));
console.log(lengthOfLongestSubstring('dvdf'));
console.log(lengthOfLongestSubstring('abba'));

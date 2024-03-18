/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
function firstUniqChar(s: string): number {
  const map = new Map()
  let res = Infinity
  s.split('').forEach((c, i) => {
    if (map.get(c) === undefined) {
      map.set(c, i)
    } else {
      map.set(c, Infinity)
    }
  })
  for (const i of map.values()) {
    if (i < res) {
      res = i
    }
  }
  return res === Infinity ? -1 : res
};
// @lc code=end

console.log(firstUniqChar("loveleetcode"));


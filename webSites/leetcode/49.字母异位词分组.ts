/*
 * @lc app=leetcode.cn id=49 lang=typescript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map()
  let count = 0;
  const res: string[][] = []
  for (const str of strs) {
    const cmap = new Map();
    for (const c of str) {
      cmap.set(c, (cmap.get(c) ?? 0) + 1)
    }
    const keyArr: string[] = []
    cmap.forEach((k, v) => {
      keyArr.push(`${k}->${v}`)
    })
    const key = keyArr.sort().join(',')

    if (map.has(key)) {
      res[map.get(key) - 1].push(str)
    } else {
      res.push([])
      count++;
      map.set(key, count)
      res[count - 1].push(str)
    }
  }
  return res
};
// @lc code=end

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));

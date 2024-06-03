/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  if (p.length > s.length) return []
  const res: number[] = []
  let i = 0;
  let j = p.length - 1;
  const diff = new Map();
  for (let k = 0; k <= j; k++) {
    diff.set(p[k], (diff.get(p[k]) || 0) - 1)
  }
  for (let k = 0; k <= j; k++) {
    if (diff.has(s[k])) {
      diff.set(s[k], diff.get(s[k]) + 1)
    }
  }

  // console.log(diff, i, j);

  function areAllValuesZero(map: Map<string, number>) {
    for (const value of map.values()) {
      if (value !== 0) {
        return false;
      }
    }
    return true;
  }

  while (j < s.length) {
    if (areAllValuesZero(diff)) {
      res.push(i)
    }
    if (diff.has(s[i])) {
      diff.set(s[i], diff.get(s[i]) - 1)
    }
    if (diff.has(s[j + 1])) {
      diff.set(s[j + 1], diff.get(s[j + 1]) + 1)
    }
    i++;
    j++;
    // console.log(diff, i, j);
  }
  return res
};
// @lc code=end

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('baa', 'aa'));
console.log(findAnagrams('abacbabc', 'abc'));

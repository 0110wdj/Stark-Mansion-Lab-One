/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  if (s.length < t.length) return '';
  let i = 0;
  let j = 0;
  let minLen = Number.MAX_VALUE;
  let minStr = '';
  const tarMap = new Map();
  for (const c of t) {
    tarMap.set(c, (tarMap.get(c) ?? 0) + 1)
  }
  for (const c of s) {
    if (!tarMap.has(c)) { }
  }

  function checkGetAll(i: number, j: number): boolean {
    const curMap = new Map();
    const tarMap = new Map();
    for (const c of t) {
      tarMap.set(c, (tarMap.get(c) ?? 0) + 1)
    }
    for (let k = i; k <= j; k++) {
      const c = s.charAt(k)
      if (tarMap.has(c)) {
        curMap.set(c, (curMap.get(c) ?? 0) + 1)
      }
    }
    // console.log(curMap, tarMap);

    if (curMap.size !== tarMap.size) {
      return false;
    }
    let flag = true;
    curMap.forEach((value, key) => {
      if (tarMap.get(key) > value) {
        flag = false
      }
    });
    return flag;
  }

  while (j <= s.length) {
    if (checkGetAll(i, j)) {
      // console.log('inside', i, j);
      if (j - i < minLen) {
        minLen = j - i;
        minStr = s.slice(i, j + 1)
      }
      i++;
    } else {
      // console.log('false:', i, j);
      j++
    }
  }
  return minStr
};
// @lc code=end

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("aa", "aa"));

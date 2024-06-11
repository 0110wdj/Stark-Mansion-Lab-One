/*
 * @lc app=leetcode.cn id=76 lang=typescript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
function minWindow(s: string, t: string): string {
  const m = s.length;
  let ansLeft = -1;
  let ansRight = m;
  let left = 0;
  let less = 0;
  const cntS: number[] = Array(128).fill(0); // s 子串字母的出现次数
  const cntT: number[] = Array(128).fill(0); // t 中字母的出现次数
  for (const c of t) {
    if (cntT[c.codePointAt(0) ?? 0]++ === 0) {
      less++; // 有 less 种字母的出现次数 < t 中的字母出现次数
    }
  }
  for (let right = 0; right < m; right++) { // 移动子串右端点
    const c = s[right].codePointAt(0) ?? 0; // 右端点字母（移入子串）
    if (++cntS[c] === cntT[c]) {
      less--; // c 的出现次数从 < 变成 >=
    }
    while (less === 0) { // 涵盖：所有字母的出现次数都是 >=
      if (right - left < ansRight - ansLeft) { // 找到更短的子串
        ansLeft = left; // 记录此时的左右端点
        ansRight = right;
      }
      const x = s[left++].codePointAt(0) ?? 0; // 左端点字母（移出子串）
      if (cntS[x]-- === cntT[x]) {
        less++; // x 的出现次数从 >= 变成 <
      }
    }
  }
  return ansLeft < 0 ? "" : s.substring(ansLeft, ansRight + 1);
};

function isCovered(cntS: number[], cntT: number[]) {
  for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
    if (cntS[i] < cntT[i]) {
      return false;
    }
  }
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    if (cntS[i] < cntT[i]) {
      return false;
    }
  }
  return true;
}
// @lc code=end

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("aa", "aa"));

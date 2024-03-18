/*
 * @lc app=leetcode.cn id=409 lang=typescript
 *
 * [409] 最长回文串
 */

// @lc code=start
function longestPalindrome(s: string): number {
  let maxLen = 0;
  const map = new Map();
  for (const c of s) {
    if (map.has(c)) {
      map.delete(c);
      maxLen++;
    } else {
      map.set(c, 1)
    }
  }
  return 2 * maxLen + (map.size !== 0 ? 1 : 0)
};
// @lc code=end

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("aaaaaccc"));


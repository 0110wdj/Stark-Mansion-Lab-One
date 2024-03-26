/*
 * @lc app=leetcode.cn id=10 lang=typescript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  const m = s.length, n = p.length;
  const dp: boolean[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false))
  dp[0][0] = true
  for (let i = 2; i <= n; i += 2) {
    dp[0][i] = dp[0][i - 2] && (p.charAt(i - 1) === '*')
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p.charAt(j - 1) === '*') {
        dp[i][j] = dp[i][j - 2] || (dp[i - 1][j] && (p[j - 2] === '.' || p[j - 2] === s[i - 1]))
      } else {
        dp[i][j] = dp[i - 1][j - 1] && (s.charAt(i - 1) === p.charAt(j - 1) || '.' === p.charAt(j - 1))
      }
    }
  }
  return dp[m][n]
};
// @lc code=end

console.log(isMatch('aaa', 'ab*.*'));
console.log(isMatch("ab", ".*c"));

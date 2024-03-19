/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
function reverseWords(s: string): string {
  // return s.trim().split(/\s+/).reverse().join(' ')
  let i = s.length, p = i;
  const res: string[] = []
  while (i >= 0) {
    if (s.charAt(i) === ' ' || s.charAt(i) === '') {
      i--
      continue
    }
    p = i
    while (p >= 0 && s.charAt(p) !== ' ' && s.charAt(p) !== '') {
      p--
    }
    res.push(s.slice(p + 1, i + 1))
    i = p
  }
  return res.join(' ')
};
// @lc code=end

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));

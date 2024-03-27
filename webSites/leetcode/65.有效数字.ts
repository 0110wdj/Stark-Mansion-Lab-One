/*
 * @lc app=leetcode.cn id=65 lang=typescript
 *
 * [65] 有效数字
 */

// @lc code=start
function isNumber(s: string): boolean {
  const states: any[] = [
    { ' ': 0, 's': 1, 'd': 2, '.': 4 }, // 0. start with 'blank'
    { 'd': 2, '.': 4 },                // 1. 'sign' before 'e'
    { 'd': 2, '.': 3, 'e': 5, ' ': 8 }, // 2. 'digit' before 'dot'
    { 'd': 3, 'e': 5, ' ': 8 },         // 3. 'digit' after 'dot'
    { 'd': 3 },                         // 4. 'digit' after 'dot' (‘blank’ before 'dot')
    { 's': 6, 'd': 7 },                 // 5. 'e'
    { 'd': 7 },                         // 6. 'sign' after 'e'
    { 'd': 7, ' ': 8 },                 // 7. 'digit' after 'e'
    { ' ': 8 }                          // 8. end with 'blank'
  ]
  let p = 0, t;
  for (const c of s) {
    if (c >= '0' && c <= '9') t = 'd';
    else if (c == '+' || c == '-') t = 's';
    else if (c == 'e' || c == 'E') t = 'e';
    else if (c == '.' || c == ' ') t = c;
    else t = '?';
    if (!Object.keys(states[p]).includes(t)) return false;
    p = +states[p][t];
  }
  return p == 2 || p == 3 || p == 7 || p == 8;
};
// @lc code=end

console.log(isNumber("0"));
console.log(isNumber("e"));
console.log(isNumber("."));

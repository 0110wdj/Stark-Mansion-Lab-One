/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const stack: string[][] = Array.from({ length: numRows }, () => [])

  let i = 0
  let direction: 'top2down' | 'down2top' = 'top2down'
  for (const c of s) {
    stack[i].push(c)

    if (i % (2 * (numRows - 1)) === 0) {
      direction = 'top2down'
    }
    if ((i - (numRows - 1)) % (2 * (numRows - 1)) === 0) {
      direction = 'down2top'
    }
    if (direction === 'top2down') {
      i++
    } else {
      i--
    }
  }
  return stack.map(arr => arr.join('')).join('')
};
// @lc code=end

console.log('PAYPALISHIRING->PAHNAPLSIIGYIR\n', convert('PAYPALISHIRING', 3));
console.log('AB->AB\n', convert('AB', 1));

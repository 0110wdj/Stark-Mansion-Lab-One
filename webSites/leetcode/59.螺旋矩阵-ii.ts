/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
function generateMatrix(n: number): number[][] {
  const res: number[][] = Array.from({ length: n }, () => [])
  let l = 0, r = n - 1, t = 0, b = n - 1;
  let state: 'l2r' | 't2b' | 'r2l' | 'b2t' = 'l2r'
  let val = 1;
  while (l <= r && t <= b) {
    switch (state) {
      case 'l2r':
        for (let i = l; i <= r; i++) {
          res[t][i] = val++
        }
        t++
        state = 't2b'
        break;
      case 't2b':
        for (let i = t; i <= b; i++) {
          res[i][r] = val++
        }
        r--
        state = 'r2l'
        break
      case 'r2l':
        for (let i = r; i >= l; i--) {
          res[b][i] = val++
        }
        b--
        state = 'b2t'
        break
      case 'b2t':
        for (let i = b; i >= t; i--) {
          res[i][l] = val++
        }
        l++
        state = 'l2r'
        break
      default:
        break;
    }
  }
  return res
};
// @lc code=end

console.log(generateMatrix(4));

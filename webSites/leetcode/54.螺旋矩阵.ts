/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) { return [] }
  const res: number[] = []
  let l = 0, r = matrix[0].length - 1, t = 0, b = matrix.length - 1;
  let state: 'l2r' | 't2b' | 'r2l' | 'b2t' = 'l2r'
  // console.log('init:', { state, l, t, r, b });

  while (l <= r && t <= b) {
    switch (state) {
      case 'l2r':
        for (let i = l; i <= r; i++) {
          res.push(matrix[t][i])
        }
        t++
        state = 't2b'
        break;
      case 't2b':
        for (let i = t; i <= b; i++) {
          res.push(matrix[i][r])
        }
        r--
        state = 'r2l'
        break
      case 'r2l':
        for (let i = r; i >= l; i--) {
          res.push(matrix[b][i])
        }
        b--
        state = 'b2t'
        break
      case 'b2t':
        for (let i = b; i >= t; i--) {
          res.push(matrix[i][l])
        }
        l++
        state = 'l2r'
        break
      default:
        break;
    }
    // console.log('then:', { state, l, t, r, b });
  }
  return res
};
// @lc code=end

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));

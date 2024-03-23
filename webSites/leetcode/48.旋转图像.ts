/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const len = matrix.length
  let line = (len % 2 === 0) ? (len / 2) : ((len - 1) / 2);
  let column = ((len % 2 === 0) ? ((len - 1) / 2) : ((len + 1) / 2));

  for (let i = 0; i < line; i++) {
    for (let j = 0; j < column; j++) {
      // console.log(matrix[i][j]);
      const temp = matrix[i][j]
      matrix[i][j] = matrix[len - 1 - j][i]
      matrix[len - 1 - j][i] = matrix[len - 1 - i][len - 1 - j]
      matrix[len - 1 - i][len - 1 - j] = matrix[len - 1 - (len - 1 - j)][len - 1 - i]
      matrix[len - 1 - (len - 1 - j)][len - 1 - i] = temp
    }
  }
  // console.log(matrix);

};
// @lc code=end
console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]));


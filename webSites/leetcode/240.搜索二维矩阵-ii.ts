/*
 * @lc app=leetcode.cn id=240 lang=typescript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  // console.log({ matrix });

  const m = matrix.length
  if (m === 0) return false
  const n = matrix[0].length
  if (n === 0) return false
  if (m <= 2 && n <= 2) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === target) return true
      }
    }
    return false
  }
  // 分成四份，递归
  const mid_m = Math.floor(m / 2)
  const mid_n = Math.floor(n / 2)
  // console.log({ mid_m, mid_n });

  if (matrix[mid_m][mid_n] === target) return true
  if (matrix[mid_m][mid_n] > target) {
    const rt = searchMatrix(matrix.slice(0, mid_m + 1).map(v => v.slice(mid_n + 1)), target);
    const lb = searchMatrix(matrix.slice(mid_m + 1).map(v => v.slice(0, mid_n + 1)), target);
    const ll = searchMatrix(matrix.slice(0, mid_m + 1).map(v => v.slice(0, mid_n + 1)), target)
    return rt || lb || ll
  }
  if ((matrix[mid_m][mid_n] < target)) {
    const rt = searchMatrix(matrix.slice(0, mid_m + 1).map(v => v.slice(mid_n + 1)), target);
    const lb = searchMatrix(matrix.slice(mid_m + 1).map(v => v.slice(0, mid_n + 1)), target);
    const rb = searchMatrix(matrix.slice(mid_m + 1).map(v => v.slice(mid_n + 1)), target);
    return rt || lb || rb
  }
  return false
};
// @lc code=end

console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5));
console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 20));
console.log(searchMatrix([[1, 2, 3, 4, 5]], 2));
console.log(searchMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]], 5));

/*
 * @lc app=leetcode.cn id=240 lang=typescript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  let i = 0, j = matrix[0].length - 1;
  while (j >= 0 && i < matrix.length) {
    // console.log({ i, j, v: matrix[i][j] });
    if (matrix[i][j] === target) return true;
    if (matrix[i][j] > target) j--;
    if (matrix[i][j] < target) i++;
  }
  return false
};
// @lc code=end

console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5));
console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 20));
console.log(searchMatrix([[1, 2, 3, 4, 5]], 2));
console.log(searchMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]], 5));

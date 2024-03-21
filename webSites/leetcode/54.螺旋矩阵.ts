/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  let res: number[] = []
  
  const trsf = (matrix: number[][]): number[][] => {
    const res: number[][] = Array.from({ length: matrix[0].length }, () => [])
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        res[j][i] = matrix[i][j]
      }
    }
    return res.reverse()
  }

  while (true) {
    res = res.concat(matrix[0])
    matrix.shift()
    if (matrix.length === 0) return res
    matrix = trsf(matrix)
  }
};
// @lc code=end

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));

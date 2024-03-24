/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  function searchWord(board: string[][], i: number, j: number, word: string, map: Map<string, number>): boolean {
    if (!word) return true
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false
    if (word.charAt(0) !== board[i][j]) return false
    if (map.has(`${i}->${j}`)) return false

    map.set(`${i}->${j}`, 1);
    // console.log('then:', { i, j, word });

    const res = searchWord(board, i - 1, j, word.slice(1), map) ||
      searchWord(board, i + 1, j, word.slice(1), map) ||
      searchWord(board, i, j - 1, word.slice(1), map) ||
      searchWord(board, i, j + 1, word.slice(1), map);

    map.delete(`${i}->${j}`);
    return res
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word.charAt(0)) {
        const map = new Map()
        // console.log('init:', { board, i, j, word, map });
        if (searchWord(board, i, j, word, map)) {
          return true
        }
      }
    }
  }
  return false
};
// @lc code=end

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
], word = "ABCCED";

console.log(exist(board, word));
console.log(exist([["a"]], "a"));

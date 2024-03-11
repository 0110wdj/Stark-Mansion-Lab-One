(() => {
  const max_capacity = (board = [3, 8, 5, 2, 7, 7, 3, 4]) => {
    let i = 0;
    let j = board.length - 1;
    let max = [i, j, (j - i) * Math.min(board[j], board[i])]
    while (i < j) {
      const curVal = (j - i) * Math.min(board[j], board[i])
      if (curVal > max[2]) {
        max = [i, j, curVal]
      }
      if (board[i] < board[j]) {
        i++
      } else {
        j--
      }
    }
    return max
  }
  console.log(max_capacity());
})()
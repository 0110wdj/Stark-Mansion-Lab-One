const n_queens = (n: number): number[][][] => {
  const res: number[][][] = []
  const state: number[][] = []

  const mainDiagonal: number[] = []
  const secondaryDiagonal: number[] = []
  const column: number[] = []

  const isValid = (i: number, j: number) => {
    return !column.includes(j) && !secondaryDiagonal.includes(i + j) && !mainDiagonal.includes(i - j)
  }

  const requr = (i: number = 0) => {

    if (state.length === n) {
      res.push([...state])
      return
    }

    for (let j = 0; j < n; j++) {
      if (isValid(i, j)) {
        state.push([i, j])
        mainDiagonal.push(i - j)
        secondaryDiagonal.push(i + j)
        column.push(j)
        i++
        requr(i)
        i--
        state.pop()
        mainDiagonal.pop()
        secondaryDiagonal.pop()
        column.pop()
      }
    }
  }

  requr()
  return res
}

console.log(n_queens(4));

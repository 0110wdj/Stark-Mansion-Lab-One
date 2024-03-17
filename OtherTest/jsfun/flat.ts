
type TestArr = number | number[] | TestArr[]

const flat = (arr: TestArr): number[] => {
  const res: number[] = []
  const recur = (arr: TestArr, res: number[]): void => {
    if (typeof arr === 'number') {
      res.push(arr)
      return
    }
    for (let i = 0; i < arr.length; i++) {
      recur(arr[i], res)
    }
  }
  recur(arr, res)
  return res
}


console.log(flat([1, 2, [3, 4], [5, [6, 7]]]));

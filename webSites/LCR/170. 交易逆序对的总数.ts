function reversePairs(record: number[]): number {
  if (record.length < 2) return 0;
  const crossMid = (start: number, end: number, mid: number): number => {
    const rightSort = record.slice(mid + 1, end + 1).sort();
    // console.log({ rightSort });

    let res = 0;
    for (let i = start; i <= mid; i++) {
      const num = record[i];
      for (let j = 0; j < rightSort.length; j++) {
        if (num > rightSort[j]) {
          res++;
        }
      }
    }
    return res
  }

  const recur = (i: number, j: number): number => {
    if (j - i < 1) return 0

    const mid = i + Math.floor((j - i) / 2);
    const left = recur(i, mid);
    const cross = crossMid(i, j, mid)
    const right = recur(mid + 1, j);
    console.log({ i, j, mid, left, cross, right });
    return left + cross + right
  }
  return recur(0, record.length - 1)
};

// console.log(reversePairs([9,]));
// console.log(reversePairs([9, 7]));
// console.log(reversePairs([9, 7, 5]));
// console.log(reversePairs([7, 5, 6, 4]));
// console.log(reversePairs([9, 7, 5, 4, 6]));
console.log([233, 2000000001, 234, 2000000006, 235, 2000000003, 236, 2000000007, 237, 2000000002, 2000000005, 233, 233, 233, 233, 233, 2000000004]);
console.log(reversePairs([233, 2000000001, 234, 2000000006, 235, 2000000003, 236, 2000000007, 237, 2000000002, 2000000005, 233, 233, 233, 233, 233, 2000000004]));

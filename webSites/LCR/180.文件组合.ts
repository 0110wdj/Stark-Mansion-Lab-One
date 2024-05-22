function fileCombination(target: number): number[][] {
  let i = 1;
  let j = 2;
  let s = 3;
  const res: number[][] = []
  while (i < j) {
    if (s === target) {
      const ans: number[] = []
      for (let k = i; k <= j; k++) {
        ans.push(k)
      }
      res.push(ans);
    }
    if (s >= target) {
      s -= i;
      i++;
    } else {
      j++;
      s += j;
    }
  }
  return res;
};

console.log(fileCombination(18));

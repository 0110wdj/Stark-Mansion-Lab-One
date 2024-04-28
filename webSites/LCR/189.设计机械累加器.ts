function mechanicalAccumulator(target: number): number {
  let res: number = target;
  const recur = (cur: number): number => {
    const now = ((cur > 0) ? recur(cur - 1) : 0)
    res += now;
    // console.log({ cur, res, now });
    return cur
  }
  recur(target)
  return res;
};


console.log(mechanicalAccumulator(5));
console.log(mechanicalAccumulator(7));

function statisticalResult(arrayA: number[]): number[] {
  let zeroCount = 0;
  arrayA.map(i => i === 0 ? zeroCount++ : 0)

  if (zeroCount === 0) {
    let sum = 1;
    for (const num of arrayA) {
      sum *= num
    }
    return arrayA.map(i => sum / i)
  }
  if (zeroCount === 1) {
    let sum = 1;
    for (const num of arrayA) {
      if (num !== 0) {
        sum *= num
      }
    }
    return arrayA.map(i => i === 0 ? sum : 0)
  }
  return new Array(arrayA.length).fill(0)
};

console.log(statisticalResult([2, 4, 6, 8, 10]));
console.log(statisticalResult([1, 2, 0, 4, 5]));

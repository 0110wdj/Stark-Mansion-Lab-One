function countNumbers(cnt: number): number[] {
  return Array.from({ length: 10 ** cnt - 1 }, (v, i) => { return i + 1 })
};

console.log(countNumbers(2));

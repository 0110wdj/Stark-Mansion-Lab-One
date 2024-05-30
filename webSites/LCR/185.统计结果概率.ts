function statisticsProbability(num: number): number[] {
  const res: number[] = new Array(6 * num - 2).fill(0);
  
  return res
};

console.log(statisticsProbability(3));

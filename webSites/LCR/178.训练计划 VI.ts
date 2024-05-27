function trainingPlan(actions: number[]): number {
  let ones = 0;
  let twos = 0;
  for (const action of actions) {
    ones = ones ^ action & ~twos;
    twos = twos ^ action & ~ones;
  }
  return ones;
};

console.log(trainingPlan([5, 7, 5, 5]));
console.log(trainingPlan([12, 1, 6, 12, 6, 12, 6]));

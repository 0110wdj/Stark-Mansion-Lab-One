function trainingPlan(actions: number[]): number[] {
  let i = 0, j = actions.length - 1;
  while (i < j) {
    if (actions[i] % 2 !== 0) {
      i++
      continue
    }
    if (actions[j] % 2 === 0) {
      j--
      continue
    }
    [actions[i], actions[j]] = [actions[j], actions[i]]
    i++;
    j--;
  }
  return actions
};

console.log(trainingPlan([1, 2, 3, 4, 5]));

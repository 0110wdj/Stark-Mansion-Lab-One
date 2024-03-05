const minCostClimbingStairsDP = (cost: number[]): number => {
  const len = cost.length
  if (len === 1 || len === 2) return cost[len - 1]
  let first = cost[0]
  let last = cost[0]
  for (let i = 3 - 1; i < len; i++) {
    const temp = last
    last = Math.min(first, last) + cost[i]
    first = temp
  }

  return last
}


console.log(minCostClimbingStairsDP([1, 10, 1]));
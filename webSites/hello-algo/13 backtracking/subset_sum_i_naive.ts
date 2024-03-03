const findSubSet = (nums: number[], target: number): number[][] => {
  const res: number[][] = []
  const state: number[] = []
  let total: number = 0
  const findRequr = () => {
    if (total === target) {
      res.push([...state])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      total += nums[i]
      if (total > target) {
        total -= nums[i]
        continue;
      }
      state.push(nums[i])
      findRequr()
      total -= state.pop() || 0
    }
  }
  findRequr()
  return res
}

console.log(findSubSet([3, 4, 5], 9));


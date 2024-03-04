const findSubArr = (nums: number[], target: number): number[][] => {
  const res: number[][] = []
  const state: number[] = []
  let total: number = 0

  const requr = (init: number = 0) => {
    if (total === target) {
      res.push([...state])
      return
    }
    for (let i = init; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
        continue
      }
      total += nums[i]
      if (total > target) {
        total -= nums[i]
        break
      }
      state.push(nums[i])
      requr(i)
      total -= nums[i]
      state.pop()
    }
  }
  requr()

  return res
}

console.log(findSubArr([4, 4, 5], 9));

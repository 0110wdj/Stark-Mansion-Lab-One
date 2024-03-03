const generatePermutation = (nums: number[]): number[][] => {
  const res: number[][] = []
  const choiceRequr = (state: number[], isSelected: boolean[], res: number[][]) => {
    if (state.length === isSelected.length) {
      res.push([...state])
      return
    }
    isSelected.forEach((curSelected, cur) => {
      if (!curSelected) {
        state.push(nums[cur])
        isSelected[cur] = true
        choiceRequr(state, isSelected, res)
        state.pop()
        isSelected[cur] = false
      }
    })
  }
  choiceRequr([], new Array(nums.length).fill(false), res)
  return res
}

console.log(generatePermutation([1, 2, 3]));

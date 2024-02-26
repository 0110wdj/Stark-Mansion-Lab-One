const selectionSort = (nums: number[]) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let key = i + 1
    for (let k = i + 1; k < nums.length; k++) {
      const cur = nums[k];
      if (cur < nums[key]) {
        key = k
      }
    }
    [nums[i], nums[key]] = [nums[key], nums[i]]
  }
  return nums
}

console.log(selectionSort([4, 1, 3, 1, 5, 2]));

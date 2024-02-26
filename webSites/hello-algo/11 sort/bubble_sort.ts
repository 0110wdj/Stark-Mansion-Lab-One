const bubble_sort = (nums: number[]) => {
  for (let i = 0; i < nums.length - 1; i++) {
    let hadSwap = false
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        hadSwap = true
      }
    }
    if (!hadSwap) {
      return nums
    }
  }
  return nums
}

console.log(bubble_sort([4, 1, 3, 1, 5, 2]));
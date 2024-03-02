const countSort = (nums: number[]): number[] => {
  const m = Math.max(...nums)
  const arr = new Array(m + 1).fill(0);
  for (const num of nums) {
    arr[num]++
  }
  arr.map((count, index) => {
    for (let i = 0; i < count; i++) {
      nums.shift()
      nums.push(index)
    }
  })
  return nums
}

console.log(countSort([1, 0, 1, 2, 0, 4, 0, 2, 2, 4]));

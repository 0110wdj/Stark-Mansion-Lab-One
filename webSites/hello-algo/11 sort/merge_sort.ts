function mergeSort(nums: number[]): number[] {
  function merge(nums: number[], ll: number, lr: number, rl: number, rr: number): void {
    const mergedArr: number[] = []
    let i = ll, j = rl;
    while (i <= lr && j <= rr) {
      if (nums[i] <= nums[j]) {
        mergedArr.push(nums[i])
        i++
      } else {
        mergedArr.push(nums[j])
        j++
      }
    }
    // 可能还剩一点
    while (i <= lr) {
      mergedArr.push(nums[i])
      i++
    }
    while (j <= rr) {
      mergedArr.push(nums[j])
      j++
    }
    // 最后赋值
    mergedArr.map((num, index) => {
      nums[ll + index] = num
    })
  }

  const sort = (nums: number[], left: number, right: number) => {
    if (right <= left) {
      return
    }
    const midIndex = left + Math.floor((right - left) / 2)
    sort(nums, left, midIndex)
    sort(nums, midIndex + 1, right)
    merge(nums, left, midIndex, midIndex + 1, right)
  }

  sort(nums, 0, nums.length - 1)

  return nums
}

console.log(mergeSort([7, 3, 2, 6, 0, 1, 5, 4]));

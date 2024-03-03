const binarySearch = (nums: number[], target: number) => {
  const requr = (nums: number[], target: number, left: number, right: number): number => {
    if (left > right) {
      return -1
    }
    const mid = left + ((right - left) >> 1)
    console.log(mid, left, right);

    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      return requr(nums, target, left, mid - 1)
    } else {
      return requr(nums, target, mid + 1, right)
    }
  }
  return requr(nums, target, 0, nums.length - 1)
}

console.log(binarySearch([1, 3, 6, 8, 12, 15, 23, 26, 31, 35], 6));

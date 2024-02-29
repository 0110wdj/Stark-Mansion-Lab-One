const quickSort = (nums: number[], left: number, right: number): void => {
  switch (right - left) {
    case 0:
      break;
    case 1:
      if (nums[left] > nums[right]) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
      }
      break;
    default:
      const base = left
      const baseRight = right
      left++
      while (right > left) {
        if (nums[left] > nums[base]) {
          if (nums[right] < nums[base]) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
          } else {
            right--
          }
        } else {
          left++
        }
      }
      [nums[base], nums[right - 1]] = [nums[right - 1], nums[base]]
      quickSort(nums, base, right - 2)
      quickSort(nums, right, baseRight)
      break;
  }
}

function quick_sort(nums: number[]): number[] {
  if (nums.length === 1) {
    return nums
  } else if (nums.length === 2) {
    if (nums[0] > nums[1]) {
      return [nums[1], nums[0]]
    } else {
      return nums
    }
  } else {
    quickSort(nums, 0, nums.length - 1)
  }
  return nums
}

const testArr = [2, 4, 1, 0, 3, 5]
console.log(quick_sort(testArr));

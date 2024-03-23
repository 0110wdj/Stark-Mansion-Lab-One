/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// 用堆排序 温习一下

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  const len = nums.length;
  const quickSort = (nums: number[], i: number, j: number) => {
    let left = i + 1, right = j;
    while (left <= right) {
      if (nums[left] <= nums[i]) {
        left++
        continue
      }
      if (nums[right] >= nums[i]) {
        right--
        continue
      }
      [nums[left], nums[right]] = [nums[right], nums[left]]
    }
    [nums[i], nums[right]] = [nums[right], nums[i]]
    if (right === len - k) {
      return
    }
    if (right < len - k) {
      quickSort(nums, right + 1, j)
    } else {
      quickSort(nums, i, right - 1)
    }
  }
  quickSort(nums, 0, len - 1)
  return nums.at(-k) ?? NaN;
};

// @lc code=end

// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
console.log(findKthLargest([-1, 2, 0], 2));
console.log(findKthLargest([1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 5));

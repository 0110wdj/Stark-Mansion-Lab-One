const quickSortSource = (nums: number[]): number[] => {
  /* 元素交换 */
  function swap(nums: number[], i: number, j: number): void {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }

  /* 哨兵划分 */
  function partition(nums: number[], left: number, right: number): number {
    // 以 nums[left] 为基准数
    let i = left,
      j = right;
    while (i < j) {
      while (i < j && nums[j] >= nums[left]) {
        j--; // 从右向左找首个小于基准数的元素
      }
      while (i < j && nums[i] <= nums[left]) {
        i++; // 从左向右找首个大于基准数的元素
      }
      // 元素交换
      swap(nums, i, j); // 交换这两个元素
    }
    swap(nums, i, left); // 将基准数交换至两子数组的分界线
    return i; // 返回基准数的索引
  }

  /* 快速排序 */
  function quickSort(nums: number[], left: number, right: number): void {
    // 子数组长度为 1 时终止递归
    if (right <= left) {
      return;
    }
    // 哨兵划分
    const pivot = partition(nums, left, right);

    // 递归左子数组、右子数组
    quickSort(nums, left, pivot - 1);
    quickSort(nums, pivot + 1, right);
  }

  quickSort(nums, 0, nums.length - 1)

  return nums
}

console.log(quickSortSource([2, 4, 1, 0, 3, 5]));
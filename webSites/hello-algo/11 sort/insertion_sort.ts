const insertionSort = (nums: number[]) => {
  for (let i = 1; i < nums.length; i++) {
    // 可以用二分法找到插入点
    let base = nums[i]
    let k = i - 1
    for (; k >= 0; k--) {
      if (base < nums[k]) {
        nums[k + 1] = nums[k]
      } else {
        break
      }
    }
    nums[k + 1] = base
  }
  return nums
}

function insertionSortSourct(nums: number[]) {
  // 外循环：已排序元素数量为 1, 2, ..., n
  for (let i = 1; i < nums.length; i++) {
    const base = nums[i];
    let j = i - 1;
    // 内循环：将 base 插入到已排序部分的正确位置
    while (j >= 0 && nums[j] > base) {
      nums[j + 1] = nums[j]; // 将 nums[j] 向右移动一位
      j--;
    }
    nums[j + 1] = base; // 将 base 赋值到正确位置
  }
  return nums
}

console.log(insertionSort([4, 1, 3, 1, 5, 2]));
console.log(insertionSortSourct([4, 1, 3, 1, 5, 2]));

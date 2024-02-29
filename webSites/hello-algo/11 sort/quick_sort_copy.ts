const quickSortCopy = (nums: number[], left: number, right: number) => {
  if (left >= right) {
    return
  }
  // 不用 left + 1 ，是为了保证 i 最后能够指向
  // 考虑 [1,2] 这种情况，会在 while 外发生一次交换，显然错误
  // 而如果使用 i=left，则会产生两次交换，仍为正确结果
  let i = left + 1;
  let j = right;
  while (i < j) {
    // 这个顺序有意义，为了得到 i
    while (i < j && nums[j] >= nums[left]) {
      j--
    }
    while (i < j && nums[i] <= nums[left]) {
      i++
    }
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  [nums[i], nums[left]] = [nums[left], nums[i]]
  // 非常关键：此时得到的 i 指向最后一个小于基准数的元素
  quickSortCopy(nums, left, i - 1)
  quickSortCopy(nums, i + 1, right)
}

const testArrCopy = [2, 4, 1, 0, 3, 5]
// const testArrCopy = [2, 1]
quickSortCopy(testArrCopy, 0, testArrCopy.length - 1)
console.log(testArrCopy);


const heapSortBySnofly = (nums: number[]) => {
  // 1、先堆化输入数组
  // 2、交换堆顶与堆低元素
  // 3、重新堆化
  // 4、重复 2-3 步骤

  function siftDown(nums: number[], n: number, i: number): void {
    while (true) {
      // 判断节点 i, l, r 中值最大的节点，记为 ma
      let l = 2 * i + 1;
      let r = 2 * i + 2;
      let ma = i;
      if (l < n && nums[l] > nums[ma]) {
        ma = l;
      }
      if (r < n && nums[r] > nums[ma]) {
        ma = r;
      }
      // 若节点 i 最大或索引 l, r 越界，则无须继续堆化，跳出
      if (ma === i) {
        break;
      }
      // 交换两节点
      [nums[i], nums[ma]] = [nums[ma], nums[i]];
      // 循环向下堆化
      i = ma;
    }
  }

  const createHeapBySnofly = (nums: number[], borderIndex: number, topIndex: number) => {
    let i = topIndex
    while (true) {
      const leftChildIndex = 2 * i + 1
      const rightChildIndex = 2 * i + 2
      let nextCheck = i
      if (leftChildIndex < borderIndex && nums[nextCheck] < nums[leftChildIndex]) {
        nextCheck = leftChildIndex
      }
      if (rightChildIndex < borderIndex && nums[nextCheck] < nums[rightChildIndex]) {
        nextCheck = rightChildIndex
      }
      if (nextCheck === i) {
        break
      } else {
        [nums[i], nums[nextCheck]] = [nums[nextCheck], nums[i]]
        i = nextCheck
      }
    }
  }
  // 堆化原来的数组
  for (let i = Math.floor(nums.length / 2) - 1; i > 0; i--) {
    createHeapBySnofly(nums, nums.length - 1, i)
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    [nums[0], nums[j]] = [nums[j], nums[0]]
    createHeapBySnofly(nums, j, 0)
  }

  return nums
}

console.log(heapSortBySnofly([7, 3, 2, 6, 0, 1, 5, 4]));

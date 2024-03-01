/* 堆的长度为 n ，从节点 i 开始，从顶至底堆化 */
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

/* 堆排序 */
function heapSort(nums: number[]): number[] {
  // 建堆操作：堆化除叶节点以外的其他所有节点
  console.log(nums);
  for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
    siftDown(nums, nums.length, i);
  }

  // 从堆中提取最大元素，循环 n-1 轮
  for (let i = nums.length - 1; i > 0; i--) {
    // 交换根节点与最右叶节点（交换首元素与尾元素）
    [nums[0], nums[i]] = [nums[i], nums[0]];
    // 以根节点为起点，从顶至底进行堆化
    siftDown(nums, i, 0);
  }
  return nums
}

console.log(heapSort([7, 3, 2, 6, 0, 1, 5, 4]));
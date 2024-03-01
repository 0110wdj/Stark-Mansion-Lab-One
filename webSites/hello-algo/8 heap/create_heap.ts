// 给定一个数组，将其改造为大顶堆数组

// 当前节点为 i，则其左子节点为 2i+1，右子节点为 2i+2，其父节点为 floor((i-1)/2)

// 输入 [7, 3, 2, 6, 0, 1, 5, 4]

// 输出 [7, 6, 5, 4, 0, 1, 2, 3]

const createHeap = (nums: number[]) => {
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

  for (let i = Math.floor(nums.length / 2) - 1; i >= 0; i--) {
    siftDown(nums, nums.length, i);
  }

  return nums
}

console.log(createHeap([7, 3, 2, 6, 0, 1, 5, 4]));

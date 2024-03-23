/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// 用堆排序 温习一下

// @lc code=start

function swap(arr: number[], i: number, j: number) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function maxHeapify(a: number[], i: number, heapSize: number) {
  let l = i * 2 + 1, r = i * 2 + 2, largest = i;
  if (l < heapSize && a[l] > a[largest]) {
    largest = l;
  }
  if (r < heapSize && a[r] > a[largest]) {
    largest = r;
  }
  if (largest != i) {
    swap(a, i, largest);
    maxHeapify(a, largest, heapSize);
  }
}

function buildMaxHeap(nums: number[], heapSize: number) {
  for (let i = Math.ceil(heapSize / 2); i >= 0; i--) {
    maxHeapify(nums, i, heapSize);
  }
}

function findKthLargest(nums: number[], k: number): number {
  let heapSize = nums.length;
  buildMaxHeap(nums, heapSize);
  for (let i = nums.length - 1; i >= nums.length - k + 1; --i) {
    swap(nums, 0, i);
    --heapSize;
    maxHeapify(nums, 0, heapSize);
  }
  return nums[0];
};

// @lc code=end
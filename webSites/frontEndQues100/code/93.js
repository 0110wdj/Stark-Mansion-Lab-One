// 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log(m+n))。

// nums1 = [1, 3]
// nums2 = [2]

// 中位数是 2.0

// nums1 = [1, 2]
// nums2 = [3, 4]

// 中位数是 (2 + 3) / 2 = 2.5

/**
 * 寻找两个有序数组的中位数
 * 时间复杂度：O(log(m+n))
 * 空间复杂度：O(1)
 * @param {number[]} nums1 第一个有序数组
 * @param {number[]} nums2 第二个有序数组
 * @return {number} 中位数
 */
function findMedianSortedArrays(nums1, nums2) {
  // 确保较短的数组始终是 nums1，这样可以减少二分查找的范围
  let shorter = nums1;
  let longer = nums2;
  if (nums1.length > nums2.length) {
    [shorter, longer] = [nums2, nums1];
  }

  const m = shorter.length;
  const n = longer.length;
  const totalLength = m + n;
  // 计算左半部分应该包含的元素个数
  // 如果总长度为奇数，左半部分会多一个元素
  const halfLength = Math.floor((totalLength + 1) / 2);

  // 在较短的数组上进行二分查找
  let left = 0;
  let right = m;

  while (left <= right) {
    // i 表示在较短数组中的分割点
    const i = Math.floor((left + right) / 2);
    // j 表示在较长数组中的分割点
    // 确保左右两部分的元素个数满足要求
    const j = halfLength - i;

    // 获取分割点两侧的元素值
    // 处理边界情况：当分割点在数组边界时，使用无穷大/无穷小
    const maxLeft1 = i === 0 ? Number.NEGATIVE_INFINITY : shorter[i - 1];  // 较短数组左半部分的最大值
    const minRight1 = i === m ? Number.POSITIVE_INFINITY : shorter[i];     // 较短数组右半部分的最小值
    const maxLeft2 = j === 0 ? Number.NEGATIVE_INFINITY : longer[j - 1];   // 较长数组左半部分的最大值
    const minRight2 = j === n ? Number.POSITIVE_INFINITY : longer[j];      // 较长数组右半部分的最小值

    // 检查是否找到正确的分割点
    // 正确的分割点应该满足：左半部分的所有元素都小于等于右半部分的所有元素
    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      // 找到正确的分割点，计算中位数
      const maxLeft = Math.max(maxLeft1, maxLeft2);   // 左半部分的最大值
      const minRight = Math.min(minRight1, minRight2); // 右半部分的最小值

      // 如果总长度为偶数，中位数是左半部分最大值和右半部分最小值的平均值
      if (totalLength % 2 === 0) {
        return (maxLeft + minRight) / 2;
      }
      // 如果总长度为奇数，中位数是左半部分的最大值
      return maxLeft;
    }

    // 如果较短数组左半部分的最大值大于较长数组右半部分的最小值
    // 说明分割点太靠右，需要向左移动
    if (maxLeft1 > minRight2) {
      right = i - 1;
      continue;
    }
    // 否则分割点太靠左，需要向右移动
    left = i + 1;
  }

  return 0; // 不会执行到这里
}

// 测试用例
console.log(findMedianSortedArrays([1, 3], [2])); // 输出: 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 输出: 2.5

// 时间复杂度	 O(log(min(m, n)))
// 空间复杂度	 O(1)
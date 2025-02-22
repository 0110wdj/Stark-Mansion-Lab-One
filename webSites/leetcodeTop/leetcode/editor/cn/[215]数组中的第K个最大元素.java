//给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。 
//
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。 
//
// 你必须设计并实现时间复杂度为 O(n) 的算法解决此问题。 
//
// 
//
// 示例 1: 
//
// 
//输入: [3,2,1,5,6,4], k = 2
//输出: 5
// 
//
// 示例 2: 
//
// 
//输入: [3,2,3,1,2,4,5,5,6], k = 4
//输出: 4 
//
// 
//
// 提示： 
//
// 
// 1 <= k <= nums.length <= 10⁵ 
// -10⁴ <= nums[i] <= 10⁴ 
// 
//
// Related Topics 数组 分治 快速选择 排序 堆（优先队列） 👍 2640 👎 0


import java.util.ArrayList;
import java.util.Arrays;

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    // k 表示：假设排序完成后，目标数值的下标
//    static int quickSelect(int[] nums, int l, int r, int k) {
//        if (l == r) return nums[l];
//        int x = nums[l], i = l - 1, j = r + 1;
//        // 正常的快速排序：将数组移动顺序，使得左边部分全部小于 x，使得右边部分全部大于 x；找到中间点，放置 x ，这个点也是最终结果的点。
//        while (i < j) {
//            do i++; while (nums[i] < x);
//            do j--; while (nums[j] > x);
//            if (i < j) {
//                int tmp = nums[i];
//                nums[i] = nums[j];
//                nums[j] = tmp;
//            }
//        }
//        // 目标下标能够确定在左半部分时，排序范围缩小到左半部分；反之亦然
//        if (k <= j) return quickSelect(nums, l, j, k);
//        return quickSelect(nums, j + 1, r, k);
//    }
//
//    public int findKthLargest(int[] nums, int k) {
//        int n = nums.length;
//        return quickSelect(nums, 0, n - 1, n - k);
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

import java.util.Arrays;

class Solution215 {
    // k 表示：假设排序完成后，目标数值的下标
    static int quickSelect(int[] nums, int l, int r, int k) {
        if (l == r) return nums[l];
        int x = nums[l], i = l - 1, j = r + 1;
        // 正常的快速排序：将数组移动顺序，使得左边部分全部小于 x，使得右边部分全部大于 x；找到中间点，放置 x ，这个点也是最终结果的点。
        while (i < j) {
            do i++; while (nums[i] < x);
            do j--; while (nums[j] > x);
            if (i < j) {
                int tmp = nums[i];
                nums[i] = nums[j];
                nums[j] = tmp;
            }
        }
        // 目标下标能够确定在左半部分时，排序范围缩小到左半部分；反之亦然
        if (k <= j) return quickSelect(nums, l, j, k);
        return quickSelect(nums, j + 1, r, k);
    }

    static public int findKthLargest(int[] nums, int k) {
        int n = nums.length;
        return quickSelect(nums, 0, n - 1, n - k);
    }

    public static void main(String[] args) {
        System.out.println(findKthLargest(new int[]{2, 1}, 2));
        System.out.println(findKthLargest(new int[]{3, 2, 1, 5, 6, 4}, 2));
        System.out.println(findKthLargest(new int[]{3, 2, 3, 1, 2, 4, 5, 5, 6}, 4));
        System.out.println(findKthLargest(new int[]{5, 2, 4, 1, 3, 6, 0}, 4));
    }
}
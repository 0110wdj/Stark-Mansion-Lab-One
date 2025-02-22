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
//    public int findKthLargest(int[] nums, int k) {
//        int[] buckets = new int[20001]; //10 ^ 4 + 10 ^ 4 + 1
//        for (int i = 0; i < nums.length; i++) {
//            buckets[nums[i] + 10000]++;
//        }
//        for (int i = 20000; i >= 0; i--) {
//            k -= buckets[i];
//            if (k <= 0) {
//                return i - 10000;
//            }
//        }
//        return -1;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

import java.util.Arrays;

class Solution215 {
    static public int findKthLargest(int[] nums, int k) {
        int[] buckets = new int[20001]; //10 ^ 4 + 10 ^ 4 + 1
        for (int i = 0; i < nums.length; i++) {
            buckets[nums[i] + 10000]++;
        }
        for (int i = 20000; i >= 0; i--) {
            k -= buckets[i];
            if (k <= 0) {
                return i - 10000;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
        System.out.println(findKthLargest(new int[]{2, 1}, 2));
        System.out.println(findKthLargest(new int[]{3, 2, 1, 5, 6, 4}, 2));
        System.out.println(findKthLargest(new int[]{3, 2, 3, 1, 2, 4, 5, 5, 6}, 4));
        System.out.println(findKthLargest(new int[]{5, 2, 4, 1, 3, 6, 0}, 4));
    }
}
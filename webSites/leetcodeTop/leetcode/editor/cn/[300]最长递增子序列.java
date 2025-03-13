// 300 最长递增子序列

import java.util.Arrays;
import java.util.Map;

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static public void binarySearchAndReplace(int[] arr, int left, int right, int target) {
//        while (left <= right) {
//            int mid = left + (right - left) / 2;
//            if (arr[mid] >= target) {
//                right = mid - 1;
//            } else {
//                left = mid + 1;
//            }
//        }
//        arr[left] = target;
//    }
//
//    static public int lengthOfLIS(int[] nums) {
//        if (nums.length <= 1) return nums.length;
//
//        int[] arr = new int[nums.length];
//        arr[0] = nums[0];
//        int last = 0;
//
//        for (int i = 1; i < nums.length; i++) {
//            if (nums[i] > arr[last]) {
//                last++;
//                arr[last] = nums[i];
//            } else if (nums[i] < arr[last]) {
//                binarySearchAndReplace(arr, 0, last, nums[i]);
//            }
//        }
//
//        return last + 1;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

class Solution300 {

    static public void binarySearchAndReplace(int[] arr, int left, int right, int target) {
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        arr[left] = target;
    }

    static public int lengthOfLIS(int[] nums) {
        if (nums.length <= 1) return nums.length;

        int[] arr = new int[nums.length];
        arr[0] = nums[0];
        int last = 0;

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > arr[last]) {
                last++;
                arr[last] = nums[i];
            } else if (nums[i] < arr[last]) {
                binarySearchAndReplace(arr, 0, last, nums[i]);
            }
        }

        return last + 1;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLIS(new int[]{10, 9, 2, 5, 3, 7, 101, 18}) + "\t==4");
        System.out.println(lengthOfLIS(new int[]{0, 1, 0, 3, 2, 3}) + "\t==4");
        System.out.println(lengthOfLIS(new int[]{7, 7, 7, 7, 7, 7, 7}) + "\t==1");
        System.out.println(lengthOfLIS(new int[]{3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12}) + "\t==6");
    }
}
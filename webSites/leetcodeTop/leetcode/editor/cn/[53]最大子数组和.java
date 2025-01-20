// 53 最大子数组和

import java.util.Arrays;

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static public int searchFromMid(int[] nums, int mid) {
//        int toLeft = mid - 1;
//        int toRight = mid + 1;
//        int currentLeftSum = 0;
//        int leftMax = 0;
//        int currentRightSum = 0;
//        int rightMax = 0;
//
//        while (toLeft >= 0) {
//            int cur = nums[toLeft];
//            currentLeftSum += cur;
//            leftMax = Math.max(leftMax, currentLeftSum);
//            toLeft--;
//        }
//
//        while (toRight < nums.length) {
//            int cur = nums[toRight];
//            currentRightSum += cur;
//            rightMax = Math.max(rightMax, currentRightSum);
//            toRight++;
//        }
//
//        return leftMax + nums[mid] + rightMax;
//    }
//
//    static public int maxSubArray(int[] nums) {
//        int len = nums.length;
//        if (len == 0) return 0;
//        if (len == 1) return nums[0];
//        int mid = len / 2;
//        int maxLeft = maxSubArray(Arrays.copyOfRange(nums, 0, mid));
//        int maxMid = searchFromMid(nums, mid);
//        int maxRight = maxSubArray(Arrays.copyOfRange(nums, mid, len));
//        return Math.max(Math.max(maxLeft, maxRight), maxMid);
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)
class Solution53 {
    static public int searchFromMid(int[] nums, int mid) {
        int toLeft = mid - 1;
        int toRight = mid + 1;
        int currentLeftSum = 0;
        int leftMax = 0;
        int currentRightSum = 0;
        int rightMax = 0;

        while (toLeft >= 0) {
            int cur = nums[toLeft];
            currentLeftSum += cur;
            leftMax = Math.max(leftMax, currentLeftSum);
            toLeft--;
        }

        while (toRight < nums.length) {
            int cur = nums[toRight];
            currentRightSum += cur;
            rightMax = Math.max(rightMax, currentRightSum);
            toRight++;
        }

        return leftMax + nums[mid] + rightMax;
    }

    static public int maxSubArray(int[] nums) {
        int len = nums.length;
        if (len == 0) return 0;
        if (len == 1) return nums[0];
        int mid = len / 2;
        int maxLeft = maxSubArray(Arrays.copyOfRange(nums, 0, mid));
        int maxMid = searchFromMid(nums, mid);
        int maxRight = maxSubArray(Arrays.copyOfRange(nums, mid, len));
        return Math.max(Math.max(maxLeft, maxRight), maxMid);
    }

    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-1, 2, 1, -5, 4}) == 4);
        System.out.println(maxSubArray(new int[]{-2, 1, -3, 4, -1, 2, 1, -5, 4}) == 6);
        System.out.println(maxSubArray(new int[]{1}) == 1);
        System.out.println(maxSubArray(new int[]{5, 4, -1, 7, 8}) == 23);
    }
}
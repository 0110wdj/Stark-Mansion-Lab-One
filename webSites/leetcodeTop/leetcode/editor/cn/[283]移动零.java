// 283 移动零

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static public void moveZeroes(int[] nums) {
//        int n = nums.length;
//        if (n == 0 || n == 1) return;
//
//        int left = 0;
//        int right = 0;
//        while (right < n) {
//            if (nums[right] != 0 && nums[left] == 0) {
//                nums[left] = nums[right];
//                left++;
//                nums[right] = 0;
//                right++;
//            } else if (nums[right] == 0 && nums[left] != 0) {
//                left = right;
//                right++;
//            } else {
//                right++;
//            }
//        }
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

import java.util.Arrays;

class Solution283 {
    static public void moveZeroes(int[] nums) {
        int n = nums.length;
        if (n == 0 || n == 1) return;

        int left = 0;
        int right = 0;
        while (right < n) {
            if (nums[right] != 0 && nums[left] == 0) {
                nums[left] = nums[right];
                left++;
                nums[right] = 0;
                right++;
            } else if (nums[right] == 0 && nums[left] != 0) {
                left = right;
                right++;
            } else {
                right++;
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = new int[]{0, 1, 0, 3, 12};
        moveZeroes(arr);
        System.out.println(Arrays.toString(arr));
    }
}
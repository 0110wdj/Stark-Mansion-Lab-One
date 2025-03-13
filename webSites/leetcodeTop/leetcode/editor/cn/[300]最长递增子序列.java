// 300 最长递增子序列

import java.util.Arrays;

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public int lengthOfLIS(int[] nums) {
//        int minLeft = 0;
//        int max = 0;
//        // 排除头部无用子序列
//        for (int i = 1; i < nums.length; i++) {
//            if (i == minLeft + 1 && nums[i] <= nums[minLeft]) {
//                minLeft = i;
//            } else {
//                break;
//            }
//        }
//        // 动态规划表格
//        int[] dp = new int[nums.length];
//        dp[minLeft] = 1;
//
//        for (int i = minLeft; i < nums.length; i++) {
//            int base = 1;
//            for (int j = i - 1; j >= minLeft; j--) {
//                if (nums[i] > nums[j]) {
//                    base = Math.max(base, dp[j] + 1);
//                }
//            }
//            dp[i] = base;
//            max = Arrays.stream(dp).max().getAsInt();
//        }
//        return max;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution300 {
    static public int lengthOfLIS(int[] nums) {
        int minLeft = 0;
        int max = 0;
        // 排除头部无用子序列
        for (int i = 1; i < nums.length; i++) {
            if (i == minLeft + 1 && nums[i] <= nums[minLeft]) {
                minLeft = i;
            } else {
                break;
            }
        }
        // 动态规划表格
        int[] dp = new int[nums.length];
        dp[minLeft] = 1;

        for (int i = minLeft; i < nums.length; i++) {
            int base = 1;
            for (int j = i - 1; j >= minLeft; j--) {
                if (nums[i] > nums[j]) {
                    base = Math.max(base, dp[j] + 1);
                }
            }
            dp[i] = base;
            max = Arrays.stream(dp).max().getAsInt();
        }
        return max;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLIS(new int[]{10, 9, 2, 5, 3, 7, 101, 18}) + "\t==4");
        System.out.println(lengthOfLIS(new int[]{0, 1, 0, 3, 2, 3}) + "\t==4");
        System.out.println(lengthOfLIS(new int[]{7, 7, 7, 7, 7, 7, 7}) + "\t==1");
    }
}

//function lengthOfLIS(nums: number[]): number {
//  const dp: number[] = [1]
//    let max = 1
//    for (let i = 1; i < nums.length; i++) {
//        let base = 1
//        for (let j = i - 1; j >= 0; j--) {
//            if (nums[i] > nums[j]) {
//                base = Math.max(base, dp[j] + 1)
//            }
//        }
//        dp[i] = base
//        max = Math.max(max, ...dp)
//    }
//    return max
//};
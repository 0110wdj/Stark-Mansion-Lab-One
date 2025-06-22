// 209 长度最小的子数组

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static public int minSubArrayLen(int target, int[] nums) {
//        int ans = Integer.MAX_VALUE;
//        int start = 0;
//        int end = 0;
//        int sum = 0;
//        while (end < nums.length) {
//            sum += nums[end];
//            while (sum >= target) {
//                ans = Math.min(ans, end - start + 1);
//                sum -= nums[start];
//                start++;
//            }
//            end++;
//        }
//        return ans == Integer.MAX_VALUE ? 0 : ans;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

class Solution209 {
    static public int minSubArrayLen(int target, int[] nums) {
        int ans = Integer.MAX_VALUE;
        int start = 0;
        int end = 0;
        int sum = 0;
        while (end < nums.length) {
            sum += nums[end];
            while (sum >= target) {
                ans = Math.min(ans, end - start + 1);
                sum -= nums[start];
                start++;
            }
            end++;
        }
        return ans == Integer.MAX_VALUE ? 0 : ans;
    }

    public static void main(String[] args) {
        System.out.println(minSubArrayLen(11, new int[]{1, 2, 3, 4, 5}));
        System.out.println(minSubArrayLen(7, new int[]{2, 3, 1, 2, 4, 3}));
        System.out.println(minSubArrayLen(4, new int[]{1, 4, 4}));
        System.out.println(minSubArrayLen(11, new int[]{1, 1, 1, 1, 1, 1, 1, 1}));
    }
}
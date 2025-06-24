// 198 打家劫舍

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public int rob(int[] nums) {
//        int n = nums.length;
//        if (n == 0) return 0;
//
//        int[] state = new int[n];
//        for (int i = 0; i < n; i++) {
//            int notSelectCurrent = (i - 1) >= 0 ? state[i - 1] : 0;
//            int selectCurrent = ((i - 2) >= 0 ? state[i - 2] : 0) + nums[i];
//            state[i] = Math.max(notSelectCurrent, selectCurrent);
//        }
//        return state[n - 1];
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

// 718 最长重复子数组

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public int findLength(int[] A, int[] B) {
//        int n = A.length, m = B.length;
//        int[] dp = new int[m + 1];
//        int ans = 0;
//
//        // 外层从 A 的尾部向前
//        for (int i = n - 1; i >= 0; i--) {
//            // 新的一行暂存，防止覆盖 dp[j+1]
//            int[] newDp = new int[m + 1];
//            for (int j = m - 1; j >= 0; j--) {
//                if (A[i] == B[j]) {
//                    newDp[j] = dp[j + 1] + 1;
//                    ans = Math.max(ans, newDp[j]);
//                } else {
//                    newDp[j] = 0;
//                }
//            }
//            dp = newDp;
//        }
//
//        return ans;
//    }
//}

//leetcode submit region end(Prohibit modification and deletion)

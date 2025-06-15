// 1143 最长公共子序列

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static public int longestCommonSubsequence(String text1, String text2) {
//        int m = text1.length();
//        int n = text2.length();
//        int[][] dp = new int[m + 1][n + 1];
//        for (int i = 1; i < m + 1; i++) {
//            char cur = text1.charAt(i - 1);
//            for (int j = 1; j < n + 1; j++) {
//                char oth = text2.charAt(j - 1);
//                if (cur == oth) {
//                    dp[i][j] = dp[i - 1][j - 1] + 1;
//                } else {
//                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
//                }
//            }
//        }
//        return dp[m][n];
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

class Solution1143 {
    static public int longestCommonSubsequence(String text1, String text2) {
        int m = text1.length();
        int n = text2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 1; i < m + 1; i++) {
            char cur = text1.charAt(i - 1);
            for (int j = 1; j < n + 1; j++) {
                char oth = text2.charAt(j - 1);
                if (cur == oth) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[m][n];
    }

    public static void main(String[] args) {
        System.out.println(longestCommonSubsequence("abcde", "ace"));
    }
}
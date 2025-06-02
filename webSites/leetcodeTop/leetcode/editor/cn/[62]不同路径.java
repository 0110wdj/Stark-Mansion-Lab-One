// 62 不同路径

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public int uniquePaths(int m, int n) {
//        int[] linePath = new int[n];
//        // init
//        for (int i = 0; i < n; i++) {
//            linePath[i] = 1;
//        }
//        // refresh line
//        for (int i = 1; i < m; i++) {
//            for (int j = 1; j < n; j++) {
//                linePath[j] = linePath[j - 1] + linePath[j];
//            }
//        }
//        return linePath[n - 1];
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

class Solution62 {
    static public int uniquePaths(int m, int n) {
        int[] linePath = new int[n];
        // init
        for (int i = 0; i < n; i++) {
            linePath[i] = 1;
        }
        // refresh line
        for (int i = 1; i < m; i++) {
            for (int j = 1; j < n; j++) {
                linePath[j] = linePath[j - 1] + linePath[j];
            }
        }
        return linePath[n - 1];
    }

    public static void main(String[] args) {
        System.out.println(uniquePaths(3, 7));
    }
}
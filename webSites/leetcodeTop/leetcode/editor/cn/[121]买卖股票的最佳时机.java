// 121 买卖股票的最佳时机

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public int maxProfit(int[] prices) {
//        if (prices.length < 2) return 0;
//        int max = 0;
//        int minNum = prices[0];
//        for (int k = 1; k < prices.length; k++) {
//            int cur = prices[k];
//            max = Math.max(max, cur - minNum);
//            if (cur < minNum) {
//                minNum = cur;
//            }
//        }
//        return max;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

class Solution121 {
    static public int maxProfit(int[] prices) {
        if (prices.length < 2) return 0;
        int max = 0;
        int minNum = prices[0];
        for (int k = 1; k < prices.length; k++) {
            int cur = prices[k];
            max = Math.max(max, cur - minNum);
            if (cur < minNum) {
                minNum = cur;
            }
        }
        return max;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7, 1, 5, 3, 6, 4}) == 5);
        System.out.println(maxProfit(new int[]{7, 6, 4, 3, 1}) == 0);
    }
}
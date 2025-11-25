// 12 整数转罗马数字

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public String intToRoman(int num) {
//        // 罗马数字与对应整数值（从大到小，包括减法形式）
//        int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
//        String[] symbols = {"M", "CM", "D", "CD", "C", "XC",
//                "L", "XL", "X", "IX", "V", "IV", "I"};
//
//        StringBuilder sb = new StringBuilder();
//
//        for (int i = 0; i < values.length; i++) {
//            while (num >= values[i]) {
//                sb.append(symbols[i]);
//                num -= values[i];
//            }
//        }
//
//        return sb.toString();
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

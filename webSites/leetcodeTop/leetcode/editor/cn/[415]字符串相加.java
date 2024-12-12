// 415 字符串相加

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public String addStrings(String num1, String num2) {
//        int len1 = num1.length();
//        int len2 = num2.length();
//        int i = len1 - 1, j = len2 - 1, k = 0;
//        String res = "";
//        while (i >= 0 || j >= 0) {
//            int cur1 = i >= 0 ? num1.charAt(i) - '0' : 0;
//            int cur2 = j >= 0 ? num2.charAt(j) - '0' : 0;
//            int curRes = cur1 + cur2 + k;
//            res = curRes % 10 + res;
//            k = curRes / 10;
//            i--;
//            j--;
//        }
//        if (k > 0) {
//            res = k + res;
//        }
//        return res;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

class Solution415 {
    public String addStrings(String num1, String num2) {
        int len1 = num1.length();
        int len2 = num2.length();
        int i = len1 - 1, j = len2 - 1, k = 0;
        String res = "";
        while (i >= 0 || j >= 0) {
            int cur1 = i >= 0 ? num1.charAt(i) - '0' : 0;
            int cur2 = j >= 0 ? num2.charAt(j) - '0' : 0;
            int curRes = cur1 + cur2 + k;
            res = curRes % 10 + res;
            k = curRes / 10;
            i--;
            j--;
        }
        if (k > 0) {
            res = k + res;
        }
        return res;
    }

    public static void main(String[] args) {
        Solution415 solution415 = new Solution415();
        System.out.println(solution415.addStrings("11", "123").equals("134"));
        System.out.println(solution415.addStrings("456", "77").equals("533"));
        System.out.println(solution415.addStrings("0", "0").equals("0"));
        System.out.println(solution415.addStrings("1", "9").equals("10"));
        System.out.println(solution415.addStrings("6", "501").equals("507"));
    }
}
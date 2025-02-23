// 5 最长回文子串

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static int expendFromMid(String s, int i, int j) {
//        while (i >= 0 && j < s.length() && s.charAt(i) == s.charAt(j)) {
//            i--;
//            j++;
//        }
//        return j - i - 1;
//    }
//
//    public String longestPalindrome(String s) {
//        if (s.length() < 2) return s;
//
//        int max = 0, start = 0, end = 0;
//        for (int i = 0; i < s.length(); i++) {
//            int singleMidLength = expendFromMid(s, i, i + 0);
//            int doubleMidLength = expendFromMid(s, i, i + 1);
//
//            if (singleMidLength > max || doubleMidLength > max) {
//                max = Math.max(singleMidLength, doubleMidLength);
//                start = i - (int) ((max - 1) / 2);
//                end = i + (int) (max / 2);
//            }
//        }
//        return s.substring(start, end + 1);
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

class Solution5 {
    static int expendFromMid(String s, int i, int j) {
        while (i >= 0 && j < s.length() && s.charAt(i) == s.charAt(j)) {
            i--;
            j++;
        }
        return j - i - 1;
    }

    static public String longestPalindrome(String s) {
        if (s.length() < 2) return s;

        int max = 0, start = 0, end = 0;
        for (int i = 0; i < s.length(); i++) {
            int singleMidLength = expendFromMid(s, i, i + 0);
            int doubleMidLength = expendFromMid(s, i, i + 1);

            if (singleMidLength > max || doubleMidLength > max) {
                max = Math.max(singleMidLength, doubleMidLength);
                start = i - (int) ((max - 1) / 2);
                end = i + (int) (max / 2);
            }
        }
        return s.substring(start, end + 1);
    }

    public static void main(String[] args) {
        System.out.println(longestPalindrome("babad"));
        System.out.println(longestPalindrome("cbbd"));
    }
}


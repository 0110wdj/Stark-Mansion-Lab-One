// 165 比较版本号

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public int compareVersion(String version1, String version2) {
//        int len1 = version1.length();
//        int len2 = version2.length();
//        int i = 0, j = 0;
//        int curNum1 = 0;
//        int curNum2 = 0;
//        while (i <= len1 || j <= len2) {
//            while (i < len1 && version1.charAt(i) != '.') {
//                curNum1 = curNum1 * 10 + (int) (version1.charAt(i)) - 48;
//                i++;
//            }
//            while (j < len2 && version2.charAt(j) != '.') {
//                curNum2 = curNum2 * 10 + (int) (version2.charAt(j)) - 48;
//                j++;
//            }
//            if (curNum1 > curNum2) {
//                return 1;
//            }
//            if (curNum1 < curNum2) {
//                return -1;
//            }
//            i++;
//            j++;
//            curNum1 = 0;
//            curNum2 = 0;
//        }
//        return 0;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

// "123" 3 2 1 0
//  "46" 6 2 0 0
//  tmp  t t f f

// "123" 3
// "132" 2

class Solution165 {
    public int compareVersion(String version1, String version2) {
        int len1 = version1.length();
        int len2 = version2.length();
        int i = 0, j = 0;
        int curNum1 = 0;
        int curNum2 = 0;
        while (i <= len1 || j <= len2) {
            while (i < len1 && version1.charAt(i) != '.') {
                curNum1 = curNum1 * 10 + (int) (version1.charAt(i)) - 48;
                i++;
            }
            while (j < len2 && version2.charAt(j) != '.') {
                curNum2 = curNum2 * 10 + (int) (version2.charAt(j)) - 48;
                j++;
            }
            if (curNum1 > curNum2) {
                return 1;
            }
            if (curNum1 < curNum2) {
                return -1;
            }
            i++;
            j++;
            curNum1 = 0;
            curNum2 = 0;
        }
        return 0;
    }

    public static void main(String[] args) {
        Solution165 sol165 = new Solution165();
        System.out.println(sol165.compareVersion("1.2", "1.10") == -1);
        System.out.println(sol165.compareVersion("1.01", "1.001") == 0);
        System.out.println(sol165.compareVersion("1.0", "1.0.0.0") == 0);
        System.out.println(sol165.compareVersion("1.0", "1.0.0.0.1") == -1);
    }
}
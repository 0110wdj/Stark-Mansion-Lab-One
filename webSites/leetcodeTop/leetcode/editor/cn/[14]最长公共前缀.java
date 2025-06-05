// 14 最长公共前缀

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public static String longestCommonPrefix(String[] strs) {
//        if (strs == null || strs.length == 0) return "";
//
//        // 找到最短字符串的长度，作为二分查找的右边界
//        int minLen = Integer.MAX_VALUE;
//        for (String s : strs) {
//            minLen = Math.min(minLen, s.length());
//        }
//
//        int low = 0, high = minLen;
//        while (low < high) {
//            // 取中间偏右值，避免死循环（也可以写为 low + (high - low + 1) / 2）
//            int mid = (low + high + 1) / 2;
//            if (isCommonPrefix(strs, mid)) {
//                low = mid; // 前缀长度合法，尝试更长的
//            } else {
//                high = mid - 1; // 前缀长度不合法，缩短
//            }
//        }
//
//        return strs[0].substring(0, low);
//    }
//
//    // 判断所有字符串是否拥有长度为 len 的公共前缀
//    private static boolean isCommonPrefix(String[] strs, int len) {
//        String prefix = strs[0].substring(0, len);
//        for (int i = 1; i < strs.length; i++) {
//            if (!strs[i].startsWith(prefix)) {
//                return false;
//            }
//        }
//        return true;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

class Solution14 {
    public static String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";

        // 找到最短字符串的长度，作为二分查找的右边界
        int minLen = Integer.MAX_VALUE;
        for (String s : strs) {
            minLen = Math.min(minLen, s.length());
        }

        int low = 0, high = minLen;
        while (low < high) {
            // 取中间偏右值，避免死循环（也可以写为 low + (high - low + 1) / 2）
            int mid = (low + high + 1) / 2;
            if (isCommonPrefix(strs, mid)) {
                low = mid; // 前缀长度合法，尝试更长的
            } else {
                high = mid - 1; // 前缀长度不合法，缩短
            }
        }

        return strs[0].substring(0, low);
    }

    // 判断所有字符串是否拥有长度为 len 的公共前缀
    private static boolean isCommonPrefix(String[] strs, int len) {
        String prefix = strs[0].substring(0, len);
        for (int i = 1; i < strs.length; i++) {
            if (!strs[i].startsWith(prefix)) {
                return false;
            }
        }
        return true;
    }

    // 示例测试
    public static void main(String[] args) {
        String[] strs1 = {"flower", "flow", "flight"};
        String[] strs2 = {"dog", "racecar", "car"};

        System.out.println(longestCommonPrefix(strs1)); // 输出 "fl"
        System.out.println(longestCommonPrefix(strs2)); // 输出 ""
    }
}
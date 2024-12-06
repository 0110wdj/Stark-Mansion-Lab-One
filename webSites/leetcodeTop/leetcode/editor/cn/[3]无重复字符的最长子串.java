// 3 无重复字符的最长子串

import java.util.HashSet;
import java.util.Set;

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public static int lengthOfLongestSubstring(String s) {
//        int len = s.length();
//        if (len == 0) return 0;
//        if (len == 1) return 1;
//
//        Set<Character> cur = new HashSet<>();
//        int left = 0, right = 0, maxLen = 0;
//        while (right < len) {
//            // 如果存在相同的值，则说明需要移动左侧了
//            if (cur.contains(s.charAt(right))) {
//                cur.remove(s.charAt(left));
//                left++;
//            } else {
//                cur.add(s.charAt(right));
//                maxLen = Math.max(maxLen, right - left + 1);
//                right++;
//            }
//        }
//        return maxLen;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

class Solution {
    public static int lengthOfLongestSubstring(String s) {
        int len = s.length();
        if (len < 2) return len;
        int maxLen = 0;
        int i = 0, j = 0;
        Set<Character> set = new HashSet<>();
        while (j < len) {
            if (set.contains(s.charAt(j))) {
                set.remove(s.charAt(i));
                i++;
            } else {
                set.add(s.charAt(j));
                j++;
                maxLen = Math.max(maxLen, j - i);
            }
        }
        return maxLen;
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb") == 3);
        System.out.println(lengthOfLongestSubstring("bbbbb") == 1);
        System.out.println(lengthOfLongestSubstring("pwwkew") == 3);
        System.out.println(lengthOfLongestSubstring(" ") == 1);
        System.out.println(lengthOfLongestSubstring("au") == 2);
    }
}
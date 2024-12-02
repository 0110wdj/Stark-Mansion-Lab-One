// 3 无重复字符的最长子串

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public int lengthOfLongestSubstring(String s) {
//
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

import java.util.HashMap;
import java.util.Map;

class Solution {
    public static int lengthOfLongestSubstring(String s) {
        int i = 0;
        int j = 0;
        int maxLen = 0;
        final int STRING_LENGTH = s.length();
        Map charMap = new HashMap<>();
        while (i < STRING_LENGTH && j < STRING_LENGTH) {
            if (j == i) {
                j++;
                continue;
            }
            char nowRight = s.charAt(j);
            int pre = charMap.size();
            charMap.put(nowRight, 1);
            if (charMap.size() == pre) {
                maxLen = Math.max(maxLen, j - i - 1);
                while (i < j) {
                    char nowLeft = s.charAt(i);
                    charMap.remove(nowLeft);
                    if (nowLeft == nowRight) {
                        i++;
                        break;
                    }
                    i++;
                }
            } else {
                j++;
            }
        }
        return Math.max(maxLen, j - i - 1);
    }

    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb"));
        System.out.println(lengthOfLongestSubstring("bbbbb"));
        System.out.println(lengthOfLongestSubstring("pwwkew"));
    }
}
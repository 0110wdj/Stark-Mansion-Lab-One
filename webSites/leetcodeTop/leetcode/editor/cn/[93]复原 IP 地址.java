// 93 复原 IP 地址

import java.util.ArrayList;
import java.util.List;

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static public List<String> restoreIpAddresses(String s) {
//        List<String> result = new ArrayList<>();
//        backtrack(s, 0, new ArrayList<>(), result);
//        return result;
//    }
//
//    static private void backtrack(String s, int start, List<String> current, List<String> result) {
//        // 如果已经有4段且用完所有字符，则是有效的IP地址
//        if (current.size() == 4 && start == s.length()) {
//            result.add(String.join(".", current));
//            return;
//        }
//
//        // 如果已经有4段但还有剩余字符，或者剩余字符不够剩余的段数，直接返回
//        if (current.size() == 4 || start == s.length()) {
//            return;
//        }
//
//        // 剪枝：剩余字符数不能小于剩余段数，也不能大于剩余段数*3
//        int remainSegments = 4 - current.size();
//        int remainLength = s.length() - start;
//        if (remainLength < remainSegments || remainLength > remainSegments * 3) {
//            return;
//        }
//
//        // 尝试截取1到3个字符作为IP地址的一段
//        for (int len = 1; len <= 3 && start + len <= s.length(); len++) {
//            String segment = s.substring(start, start + len);
//
//            // 检查是否是有效的IP段：不能有前导零且数值在0-255之间
//            if (isValidSegment(segment)) {
//                current.add(segment);
//                backtrack(s, start + len, current, result);
//                current.remove(current.size() - 1);
//            }
//        }
//    }
//
//    static private boolean isValidSegment(String segment) {
//        // 大于1位的数字不能以0开头
//        if (segment.length() > 1 && segment.charAt(0) == '0') {
//            return false;
//        }
//
//        // 转换为整数并检查范围
//        int value = Integer.parseInt(segment);
//        return value >= 0 && value <= 255;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

class Solution93 {
    static public List<String> restoreIpAddresses(String s) {
        List<String> result = new ArrayList<>();
        backtrack(s, 0, new ArrayList<>(), result);
        return result;
    }

    static private void backtrack(String s, int start, List<String> current, List<String> result) {
        // 如果已经有4段且用完所有字符，则是有效的IP地址
        if (current.size() == 4 && start == s.length()) {
            result.add(String.join(".", current));
            return;
        }

        // 如果已经有4段但还有剩余字符，或者剩余字符不够剩余的段数，直接返回
        if (current.size() == 4 || start == s.length()) {
            return;
        }

        // 剪枝：剩余字符数不能小于剩余段数，也不能大于剩余段数*3
        int remainSegments = 4 - current.size();
        int remainLength = s.length() - start;
        if (remainLength < remainSegments || remainLength > remainSegments * 3) {
            return;
        }

        // 尝试截取1到3个字符作为IP地址的一段
        for (int len = 1; len <= 3 && start + len <= s.length(); len++) {
            String segment = s.substring(start, start + len);

            // 检查是否是有效的IP段：不能有前导零且数值在0-255之间
            if (isValidSegment(segment)) {
                current.add(segment);
                backtrack(s, start + len, current, result);
                current.remove(current.size() - 1);
            }
        }
    }

    static private boolean isValidSegment(String segment) {
        // 大于1位的数字不能以0开头
        if (segment.length() > 1 && segment.charAt(0) == '0') {
            return false;
        }

        // 转换为整数并检查范围
        int value = Integer.parseInt(segment);
        return value >= 0 && value <= 255;
    }

    public static void main(String[] args) {
        System.out.println(restoreIpAddresses("25525511135"));
        System.out.println(restoreIpAddresses("0000"));
        System.out.println(restoreIpAddresses("101023"));
    }
}

// 22 括号生成

import java.util.*;

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static public void recur(int left, int right, List<String> result, StringBuffer sb) {
//        if (left == 0 && right == 0) {
//            result.add(sb.toString());
//            return;
//        }
//
//        if (left > 0) {
//            sb.append("(");
//            recur(left - 1, right, result, sb);
//            sb.deleteCharAt(sb.length() - 1); // 回溯
//        }
//
//        if (right > left) {
//            sb.append(")");
//            recur(left, right - 1, result, sb);
//            sb.deleteCharAt(sb.length() - 1); // 回溯
//        }
//    }
//
//    static public List<String> generateParenthesis(int n) {
//        List<String> result = new ArrayList<>();
//        recur(n, n, result, new StringBuffer());
//        return result;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Solution22 {

    static public void recur(int left, int right, List<String> result, StringBuffer sb) {
        if (left == 0 && right == 0) {
            result.add(sb.toString());
            return;
        }

        if (left > 0) {
            sb.append("(");
            recur(left - 1, right, result, sb);
            sb.deleteCharAt(sb.length() - 1); // 回溯
        }

        if (right > left) {
            sb.append(")");
            recur(left, right - 1, result, sb);
            sb.deleteCharAt(sb.length() - 1); // 回溯
        }
    }

    static public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();
        recur(n, n, result, new StringBuffer());
        return result;
    }

    public static void main(String[] args) {
        System.out.println(generateParenthesis(1).toString());
        System.out.println(generateParenthesis(3).toString());
        System.out.println(generateParenthesis(4).toString());
//        System.out.println(generateParenthesis(8).toString());
    }
}
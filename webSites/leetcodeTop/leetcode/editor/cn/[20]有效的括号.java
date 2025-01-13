// 20 有效的括号

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Stack;

//leetcode submit region begin(Prohibit modification and deletion)
class Solution {
    public boolean isValid(String s) {
        HashMap<Character, Character> map = new HashMap<>();
        map.put(')', '(');
        map.put('}', '{');
        map.put(']', '[');

        int len = s.length();
        if (len % 2 == 1) return false;

        ArrayList<Character> arr = new ArrayList<>();
        // 使用 Stack 替代 ArrayList
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < len; i++) {
            char c = s.charAt(i);
            if (map.containsKey(c)) { // 当前字符是右括号
                if (!stack.isEmpty() && stack.peek() == map.get(c)) {
                    stack.pop(); // 匹配成功，弹出栈顶
                } else {
                    return false; // 匹配失败
                }
            } else {
                stack.push(c); // 左括号入栈
            }
        }

        return stack.isEmpty(); // 栈为空表示完全匹配
    }
}
//leetcode submit region end(Prohibit modification and deletion)

class Solution20 {
    static public boolean isValid(String s) {
        HashMap<Character, Character> map = new HashMap<>();
        map.put(')', '(');
        map.put('}', '{');
        map.put(']', '[');

        int len = s.length();
        if (len % 2 == 1) return false;

        ArrayList<Character> arr = new ArrayList<>();
        // 使用 Stack 替代 ArrayList
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < len; i++) {
            char c = s.charAt(i);
            if (map.containsKey(c)) { // 当前字符是右括号
                if (!stack.isEmpty() && stack.peek() == map.get(c)) {
                    stack.pop(); // 匹配成功，弹出栈顶
                } else {
                    return false; // 匹配失败
                }
            } else {
                stack.push(c); // 左括号入栈
            }
        }

        return stack.isEmpty(); // 栈为空表示完全匹配
    }

    public static void main(String[] args) {
        System.out.println(isValid("()") == true);
        System.out.println(isValid("()[]{}") == true);
        System.out.println(isValid("(]") == false);
        System.out.println(isValid("([])") == true);
    }
}
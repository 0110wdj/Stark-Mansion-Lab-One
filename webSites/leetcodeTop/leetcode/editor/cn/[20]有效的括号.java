// 20 有效的括号

import java.util.ArrayList;
import java.util.HashMap;

//leetcode submit region begin(Prohibit modification and deletion)
class Solution {
    public boolean isValid(String s) {
        HashMap map = new HashMap<Character, Character>();
        map.put(')', '(');
        map.put('}', '{');
        map.put(']', '[');

        int len = s.length();
        if (len % 2 == 1) return false;

        ArrayList arr = new ArrayList<Character>();
        for (int i = 0; i < len; i++) {
            if (map.containsKey(s.charAt(i))) {
                if (arr.size() > 0) {
                    if (arr.get(arr.size() - 1).equals(map.get(s.charAt(i)))) {
                        arr.remove(arr.size() - 1);
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                arr.add(s.charAt(i));
            }
        }

        return arr.size() == 0;
    }
}
//leetcode submit region end(Prohibit modification and deletion)

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

class Solution20 {
    static public boolean isValid(String s) {
        HashMap map = new HashMap<Character, Character>();
        map.put(')', '(');
        map.put('}', '{');
        map.put(']', '[');

        int len = s.length();
        if (len % 2 == 1) return false;

        ArrayList arr = new ArrayList<Character>();
        for (int i = 0; i < len; i++) {
            if (map.containsKey(s.charAt(i))) {
                if (arr.size() > 0) {
                    if (arr.get(arr.size() - 1).equals(map.get(s.charAt(i)))) {
                        arr.remove(arr.size() - 1);
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                arr.add(s.charAt(i));
            }
        }

        return arr.size() == 0;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()") == true);
        System.out.println(isValid("()[]{}") == true);
        System.out.println(isValid("(]") == false);
        System.out.println(isValid("([])") == true);
    }
}
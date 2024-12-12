// 415 字符串相加

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    // 获取两个正数字符串的和
//    public String addStringsAbs(String num1, String num2) {
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
//
//    // 取得十进制补码
//    public String getDecCode(String num) {
//        StringBuffer reverCode = new StringBuffer();
//        StringBuffer addCode = new StringBuffer();
//        for (int i = 0; i < num.length(); i++) {
//            reverCode.append(9 - (num.charAt(i) - '0'));
//        }
//        reverCode.reverse();
//        int carry = 1, cur = 0;
//        for (int i = 0; i < reverCode.length(); i++) {
//            cur = reverCode.charAt(i) - '0' + carry;
//            carry = cur / 10;
//            addCode.append(cur % 10);
//        }
//        addCode.reverse();
//        return addCode.toString();
//    }
//
//    // 获取一正一负数字符串的和（不处理 "-0" 这种值）
//    public String addStringsDif(String num1, String num2) {
//        Solution  solution415 = new Solution();
//        Boolean num1isNav = num1.charAt(0) == '-';
//        Boolean num2isNav = num2.charAt(0) == '-';
//        if (num1isNav) {
//            num1 = num1.substring(1);
//        }
//        if (num2isNav) {
//            num2 = num2.substring(1);
//        }
//        // 短数补 0 方便最后符号判断
//        int maxLen = Math.max(num1.length(), num2.length());
//        while (num1.length() < maxLen) {
//            num1 = "0" + num1;
//        }
//        while (num2.length() < maxLen) {
//            num2 = "0" + num2;
//        }
//
//        if (num1isNav) {
//            num1 = solution415.getDecCode(num1);
//        }
//        if (num2isNav) {
//            num2 = solution415.getDecCode(num2);
//        }
//
//        String sum = solution415.addStringsAbs(num1, num2);
//        // 如果进位，结果为正
//        if (sum.length() > maxLen) {
//            return sum.substring(1);
//        }
//        return "-" + solution415.getDecCode(sum);
//    }
//
//    // 判断输入数据的符号，走不同的代码分支
//    public String addStrings(String num1, String num2) {
//        Solution  solution415 = new Solution();
//
//        char z1 = num1.charAt(0);
//        char z2 = num2.charAt(0);
//        if (z1 != '-' && z2 != '-') {
//            return solution415.addStringsAbs(num1, num2);
//        }
//        if (z1 == '-' && z2 == '-') {
//            return "-" + solution415.addStringsAbs(num1, num2);
//        }
//
//        return solution415.addStringsDif(num1, num2);
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

//class Solution415 {
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
//
//    public static void main(String[] args) {
//        Solution415 solution415 = new Solution415();
//        System.out.println(solution415.addStrings("11", "123").equals("134"));
//        System.out.println(solution415.addStrings("456", "77").equals("533"));
//        System.out.println(solution415.addStrings("0", "0").equals("0"));
//        System.out.println(solution415.addStrings("1", "9").equals("10"));
//        System.out.println(solution415.addStrings("6", "501").equals("507"));
//    }
//}

// 变形：如果输入数据存在 一正一负

class Solution415Extend {

    // 获取两个正数字符串的和
    public String addStringsAbs(String num1, String num2) {
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

    // 取得十进制补码
    public String getDecCode(String num) {
        StringBuffer reverCode = new StringBuffer();
        StringBuffer addCode = new StringBuffer();
        for (int i = 0; i < num.length(); i++) {
            reverCode.append(9 - (num.charAt(i) - '0'));
        }
        reverCode.reverse();
        int carry = 1, cur = 0;
        for (int i = 0; i < reverCode.length(); i++) {
            cur = reverCode.charAt(i) - '0' + carry;
            carry = cur / 10;
            addCode.append(cur % 10);
        }
        addCode.reverse();
        return addCode.toString();
    }

    // 获取一正一负数字符串的和（不处理 "-0" 这种值）
    public String addStringsDif(String num1, String num2) {
        Solution415Extend solution415 = new Solution415Extend();
        Boolean num1isNav = num1.charAt(0) == '-';
        Boolean num2isNav = num2.charAt(0) == '-';
        if (num1isNav) {
            num1 = num1.substring(1);
        }
        if (num2isNav) {
            num2 = num2.substring(1);
        }
        // 短数补 0 方便最后符号判断
        int maxLen = Math.max(num1.length(), num2.length());
        while (num1.length() < maxLen) {
            num1 = "0" + num1;
        }
        while (num2.length() < maxLen) {
            num2 = "0" + num2;
        }

        if (num1isNav) {
            num1 = solution415.getDecCode(num1);
        }
        if (num2isNav) {
            num2 = solution415.getDecCode(num2);
        }

        String sum = solution415.addStringsAbs(num1, num2);
        // 如果进位，结果为正
        if (sum.length() > maxLen) {
            return sum.substring(1);
        }
        return "-" + solution415.getDecCode(sum);
    }

    // 判断输入数据的符号，走不同的代码分支
    public String addStrings(String num1, String num2) {
        Solution415Extend solution415 = new Solution415Extend();

        char z1 = num1.charAt(0);
        char z2 = num2.charAt(0);
        if (z1 != '-' && z2 != '-') {
            return solution415.addStringsAbs(num1, num2);
        }
        if (z1 == '-' && z2 == '-') {
            return "-" + solution415.addStringsAbs(num1, num2);
        }

        return solution415.addStringsDif(num1, num2);
    }

    public static void main(String[] args) {
        Solution415Extend solution415 = new Solution415Extend();

        System.out.println(solution415.addStrings("-111", "222").equals("111"));
        System.out.println(solution415.addStrings("111", "-222").equals("-111"));
        System.out.println(solution415.addStrings("-11", "123").equals("112"));
        System.out.println(solution415.addStrings("-456", "77").equals("-379"));
        System.out.println(solution415.addStrings("0", "0").equals("0"));
        System.out.println(solution415.addStrings("-1", "9").equals("8"));
        System.out.println(solution415.addStrings("1", "-9").equals("-8"));
        System.out.println(solution415.addStrings("11", "123").equals("134"));
        System.out.println(solution415.addStrings("456", "77").equals("533"));
        System.out.println(solution415.addStrings("0", "0").equals("0"));
        System.out.println(solution415.addStrings("1", "9").equals("10"));
        System.out.println(solution415.addStrings("6", "501").equals("507"));
    }
}
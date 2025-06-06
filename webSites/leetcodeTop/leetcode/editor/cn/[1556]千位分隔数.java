// 1556 千位分隔数

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static public String thousandSeparator(int n) {
//        if (n == 0) return "0";
//
//        StringBuilder res = new StringBuilder();
//        int count = 0;
//
//        while (n > 0) {
//            if (count != 0 && count % 3 == 0) {
//                res.insert(0, '.'); // 在前面插入分隔符
//            }
//            res.insert(0, n % 10); // 插入当前个位数字
//            n /= 10;
//            count++;
//        }
//
//        return res.toString();
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)


class Solution1556 {
    static public String thousandSeparator(int n) {
        if (n == 0) return "0";

        StringBuilder res = new StringBuilder();
        int count = 0;

        while (n > 0) {
            if (count != 0 && count % 3 == 0) {
                res.insert(0, '.'); // 在前面插入分隔符
            }
            res.insert(0, n % 10); // 插入当前个位数字
            n /= 10;
            count++;
        }

        return res.toString();
    }

    public static void main(String[] args) {
        System.out.println(thousandSeparator(987));
        System.out.println(thousandSeparator(1234));
        System.out.println(thousandSeparator(123456789));
        System.out.println(thousandSeparator(0));
    }
}
// 7 整数反转

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public int reverse(int x) {
//        int reversNumber = 0;
//        int currentNumber;
//        while (x != 0) {
//            currentNumber = x % 10;
//            // [-2^31, 2^31 - 1] = [-2147483648, 2147483647]
//            if (reversNumber > 2147483647 / 10) return 0;
//            if (reversNumber == 2147483647 / 10 && currentNumber > 7) return 0;
//            if (reversNumber < -2147483648 / 10) return 0;
//            if (reversNumber == -2147483648 / 10 && currentNumber < -8) return 0;
//            reversNumber = reversNumber * 10 + currentNumber;
//            x = x / 10;
//        }
//        return reversNumber;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

class Solution7 {
    public int reverse(int x) {
        int reversNumber = 0;
        int currentNumber;
        while (x != 0) {
            currentNumber = x % 10;
            // [-2^31, 2^31 - 1] = [-2147483648, 2147483647]
            if (reversNumber > 2147483647 / 10) return 0;
            if (reversNumber == 2147483647 / 10 && currentNumber > 7) return 0;
            if (reversNumber < -2147483648 / 10) return 0;
            if (reversNumber == -2147483648 / 10 && currentNumber < -8) return 0;
            reversNumber = reversNumber * 10 + currentNumber;
            x = x / 10;
        }
        return reversNumber;
    }


    public static void main(String[] args) {
        Solution7 solution7 = new Solution7();
        System.out.println(solution7.reverse(1534236469) == 0);
        System.out.println(solution7.reverse(123) == 321);
        System.out.println(solution7.reverse(-123) == -321);
        System.out.println(solution7.reverse(-1234) == -4321);
        System.out.println(solution7.reverse(120) == 21);
        System.out.println(solution7.reverse(0) == 0);
    }
}
// LCR 126 斐波那契数

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static public int fib(int n) {
//        int[] state = new int[]{0, 1};
//        for (int i = 2; i <= n; i++) {
//            state[i % 2] = (state[0] + state[1]) % 1_000_000_007;
//        }
//        return state[n % 2];
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

class SolutionLcr126 {
    static public int fib(int n) {
        int[] state = new int[]{0, 1};
        for (int i = 2; i <= n; i++) {
            state[i % 2] = (state[0] + state[1]) % 1_000_000_007;
        }
        return state[n % 2];
    }

    public static void main(String[] args) {
        System.out.println(fib(2) == 1);
        System.out.println(fib(3) == 2);
        System.out.println(fib(4) == 3);
    }
}
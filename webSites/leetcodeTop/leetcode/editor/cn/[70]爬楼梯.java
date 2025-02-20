// 70 爬楼梯

//leetcode submit region begin(Prohibit modification and deletion)
class Solution {
    public int climbStairs(int n) {
        if (n <= 2) return n;
//        return climbStairs(n - 1) + climbStairs(n - 2);
        int[] res = new int[]{1, 2};
        int tmp = 1;
        for (int i = 3; i <= n; i++) {
            tmp = res[1];
            res[1] = res[0] + res[1];
            res[0] = tmp;
        }
        return res[1];
    }
}
//leetcode submit region end(Prohibit modification and deletion)

class Solution70 {
    static public int climbStairs(int n) {
        if (n <= 2) return n;
//        return climbStairs(n - 1) + climbStairs(n - 2);
        int[] res = new int[]{1, 2};
        int tmp = 1;
        for (int i = 3; i <= n; i++) {
            tmp = res[1];
            res[1] = res[0] + res[1];
            res[0] = tmp;
        }
        return res[1];
    }

    public static void main(String[] args) {
        System.out.println(climbStairs(1));
        System.out.println(climbStairs(2));
        System.out.println(climbStairs(3));
        System.out.println(climbStairs(4));
        System.out.println(climbStairs(45));
    }
}
// 322 零钱兑换

import java.util.*;

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static public int coinChange(int[] coins, int amount) {
//        if (amount < 1) {
//            return 0;
//        }
//        return coinChange(coins, amount, new int[amount]);
//    }
//
//    static private int coinChange(int[] coins, int rem, int[] count) {
//        if (rem < 0) {
//            return -1;
//        }
//        if (rem == 0) {
//            return 0;
//        }
//        if (count[rem - 1] != 0) {
//            return count[rem - 1];
//        }
//        int min = Integer.MAX_VALUE;
//        for (int coin : coins) {
//            int res = coinChange(coins, rem - coin, count);
//            if (res >= 0 && res < min) {
//                min = 1 + res;
//            }
//        }
//        count[rem - 1] = (min == Integer.MAX_VALUE) ? -1 : min;
//        return count[rem - 1];
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)


class Solutino322 {
    static public int coinChange(int[] coins, int amount) {
        if (amount < 1) {
            return 0;
        }
        return coinChange(coins, amount, new int[amount]);
    }

    static private int coinChange(int[] coins, int rem, int[] count) {
        if (rem < 0) {
            return -1;
        }
        if (rem == 0) {
            return 0;
        }
        if (count[rem - 1] != 0) {
            return count[rem - 1];
        }
        int min = Integer.MAX_VALUE;
        for (int coin : coins) {
            int res = coinChange(coins, rem - coin, count);
            if (res >= 0 && res < min) {
                min = 1 + res;
            }
        }
        count[rem - 1] = (min == Integer.MAX_VALUE) ? -1 : min;
        return count[rem - 1];
    }


    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1, 2, 5}, 100) == 20);
        System.out.println(coinChange(new int[]{2, 5, 10, 1}, 27) == 4);
        System.out.println(coinChange(new int[]{186, 419, 83, 408}, 6249) == 20);
        System.out.println(coinChange(new int[]{1, 2, 5}, 11) == 3);
        System.out.println(coinChange(new int[]{2}, 3) == -1);
        System.out.println(coinChange(new int[]{1}, 0) == 0);
    }
}
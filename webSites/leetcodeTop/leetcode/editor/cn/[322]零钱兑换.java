// 322 零钱兑换

import java.util.*;

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static public int coinChange(int[] coins, int target) {
//        if (target < 1) {
//            return 0;
//        }
//        return searchSteps(coins, target, new int[target + 1]);
//    }
//
//    /**
//     * @param cache 缓存的 cache[target] 的含义为：达到 target 的最小硬币数量
//     */
//    static public int searchSteps(int[] coins, int currentTarget, int[] cache) {
//        if (currentTarget < 0) {
//            return -1;
//        }
//        if (currentTarget == 0) {
//            return 0;
//        }
//        if (cache[currentTarget] != 0) {
//            return cache[currentTarget];
//        }
//        int min = Integer.MAX_VALUE;
//        for (int coin : coins) {
//            int lastStep = searchSteps(coins, currentTarget - coin, cache);
//            if (lastStep != -1) {
//                min = Math.min(1 + lastStep, min);
//            }
//        }
//        cache[currentTarget] = min == Integer.MAX_VALUE ? -1 : min;
//        return cache[currentTarget];
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)


class Solutino322 {
    static public int coinChange(int[] coins, int target) {
        if (target < 1) {
            return 0;
        }
        return searchSteps(coins, target, new int[target + 1]);
    }

    /**
     * @param cache 缓存的 cache[target] 的含义为：达到 target 的最小硬币数量
     */
    static public int searchSteps(int[] coins, int currentTarget, int[] cache) {
        if (currentTarget < 0) {
            return -1;
        }
        if (currentTarget == 0) {
            return 0;
        }
        if (cache[currentTarget] != 0) {
            return cache[currentTarget];
        }
        int min = Integer.MAX_VALUE;
        for (int coin : coins) {
            int lastStep = searchSteps(coins, currentTarget - coin, cache);
            if (lastStep != -1) {
                min = Math.min(1 + lastStep, min);
            }
        }
        cache[currentTarget] = min == Integer.MAX_VALUE ? -1 : min;
        return cache[currentTarget];
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
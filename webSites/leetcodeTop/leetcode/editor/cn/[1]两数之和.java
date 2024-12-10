// 1 两数之和

import java.util.HashMap;
import java.util.Map;

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public int[] twoSum(int[] nums, int target) {
//        int[] res = {0, 0};
//        Map<Integer, Integer> map = new HashMap<>();
//        for (int i = 0; i < nums.length; i++) {
//            int key = target - nums[i];
//            if (map.containsKey(key)) {
//                res[0] = map.get(key);
//                res[1] = i;
//                break;
//            } else {
//                map.put(nums[i], i);
//            }
//        }
//        return res;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

import java.util.*;

class Solution1 {
    public int[] twoSum(int[] nums, int target) {
        int[] res = {0, 0};
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int key = target - nums[i];
            if (map.containsKey(key)) {
                res[0] = map.get(key);
                res[1] = i;
                break;
            } else {
                map.put(nums[i], i);
            }
        }
        return res;
    }

    public static void main(String[] args) {
        Solution1 solution1 = new Solution1();
        System.out.println(Arrays.toString(solution1.twoSum(new int[]{2, 7, 11, 15}, 9)).equals("[0, 1]"));
        System.out.println(Arrays.toString(solution1.twoSum(new int[]{3, 2, 4}, 6)).equals("[1, 2]"));
        System.out.println(Arrays.toString(solution1.twoSum(new int[]{3, 3}, 6)).equals("[0, 1]"));
    }
}
// 15 三数之和

import java.util.*;

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public static List<List<Integer>> removeDuplicates(List<List<Integer>> inputList) {
//        // 使用 LinkedHashSet 来保留插入顺序并去重
//        Set<String> set = new LinkedHashSet<>();
//        List<List<Integer>> resultList = new ArrayList<>();
//
//        for (List<Integer> list : inputList) {
//            // 将每个 List 排序，并转为字符串形式，便于比较
//            List<Integer> sortedList = new ArrayList<>(list);
//            Collections.sort(sortedList);
//            String key = sortedList.toString();
//
//            // 如果该排序后的 List 没有出现过，则加入结果集合
//            if (!set.contains(key)) {
//                set.add(key);
//                resultList.add(list);
//            }
//        }
//
//        return resultList;
//    }
//
//    public static void threeSumRecur(int[] nums, List<List<Integer>> res, List<Integer> state, int deep) {
//        if (state.size() == 3) {
//
//            if (state.get(0) + state.get(1) + state.get(2) == 0) {
//                res.add(new ArrayList<>(state));
//                return;
//            }
//        }
//
//        int j = deep;
//        while (j < nums.length) {
//            state.add(nums[j]);
//            j = j + 1;
//            threeSumRecur(nums, res, state, j);
//            state.remove(state.size() - 1);
//        }
//    }
//
//    public List<List<Integer>> threeSum(int[] nums) {
//        List<List<Integer>> res = new ArrayList<>();
//        List<Integer> state = new ArrayList<>();
//        threeSumRecur(nums, res, state, 0);
//        return removeDuplicates(res);
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

import java.util.*;

class Solution15 {

    public static List<List<Integer>> removeDuplicates(List<List<Integer>> inputList) {
        // 使用 LinkedHashSet 来保留插入顺序并去重
        Set<String> set = new LinkedHashSet<>();
        List<List<Integer>> resultList = new ArrayList<>();

        for (List<Integer> list : inputList) {
            // 将每个 List 排序，并转为字符串形式，便于比较
            List<Integer> sortedList = new ArrayList<>(list);
            Collections.sort(sortedList);
            String key = sortedList.toString();

            // 如果该排序后的 List 没有出现过，则加入结果集合
            if (!set.contains(key)) {
                set.add(key);
                resultList.add(list);
            }
        }

        return resultList;
    }

    public static void threeSumRecur(int[] nums, List<List<Integer>> res, List<Integer> state, int deep) {
        if (state.size() == 3) {

            if (state.get(0) + state.get(1) + state.get(2) == 0) {
                res.add(new ArrayList<>(state));
                return;
            }
        }

        int j = deep;
        while (j < nums.length) {
            state.add(nums[j]);
            j = j + 1;
            threeSumRecur(nums, res, state, j);
            state.remove(state.size() - 1);
        }
    }

    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        List<Integer> state = new ArrayList<>();
        threeSumRecur(nums, res, state, 0);
        return removeDuplicates(res);
    }

    public static void main(String[] args) {
        Solution15 solution15 = new Solution15();
        System.out.println(solution15.threeSum(new int[]{-1, 0, 1, 2, -1, -4}).toString());
        System.out.println(solution15.threeSum(new int[]{0, 0, 0}).toString());
    }
}
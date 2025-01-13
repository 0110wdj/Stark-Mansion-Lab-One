// 46 全排列

import java.util.ArrayList;
import java.util.List;

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public List<List<Integer>> permute(int[] nums) {
//        List<List<Integer>> res = new ArrayList<>(); // 使用 ArrayList 实例化 List
//        backtrack(res, new ArrayList<>(), nums);
//        return res;
//    }
//
//    private static void backtrack(List<List<Integer>> res, List<Integer> tempList, int[] nums) {
//        if (tempList.size() == nums.length) {
//            res.add(new ArrayList<>(tempList)); // 添加 tempList 的一个拷贝
//        } else {
//            for (int num : nums) {
//                if (tempList.contains(num)) continue; // 如果 tempList 已包含当前数字，跳过
//                tempList.add(num);
//                backtrack(res, tempList, nums);
//                tempList.remove(tempList.size() - 1); // 回溯，移除最后一个元素
//            }
//        }
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

class Solution46 {
    static public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> res = new ArrayList<>(); // 使用 ArrayList 实例化 List
        backtrack(res, new ArrayList<>(), nums);
        return res;
    }

    private static void backtrack(List<List<Integer>> res, List<Integer> tempList, int[] nums) {
        if (tempList.size() == nums.length) {
            res.add(new ArrayList<>(tempList)); // 添加 tempList 的一个拷贝
        } else {
            for (int num : nums) {
                if (tempList.contains(num)) continue; // 如果 tempList 已包含当前数字，跳过
                tempList.add(num);
                backtrack(res, tempList, nums);
                tempList.remove(tempList.size() - 1); // 回溯，移除最后一个元素
            }
        }
    }

    public static void main(String[] args) {
        System.out.println(permute(new int[]{1, 2, 3}).toString().equals("[[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]"));
        System.out.println(permute(new int[]{0, 1}).toString().equals("[[0, 1], [1, 0]]"));
        System.out.println(permute(new int[]{1}).toString().equals("[[1]]"));
    }
}
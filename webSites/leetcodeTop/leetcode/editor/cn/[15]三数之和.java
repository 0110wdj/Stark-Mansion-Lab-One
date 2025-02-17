// 15 三数之和

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    public List<List<Integer>> threeSum(int[] nums) {
//
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

import java.util.ArrayList;
import java.util.List;

class Solution15 {

    public static void threeSumRecur(int[] nums, List<List<Integer>> res, List<Integer> state, int i) {
        if (i >= nums.length) return;
        if (state.size() == 3) {
            if (state.get(0) + state.get(1) + state.get(3) == 0) {
                res.add(new ArrayList<>(state));
                return;
            }
        }

        state.add(nums[i]);
        threeSumRecur(nums, res, state, i + 1);
        state.remove(state.size() - 1);
    }

    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> res = new ArrayList<>();
        List<Integer> state = new ArrayList<>();
        threeSumRecur(nums, res, state, 0);
        return res;
    }

    public static void main(String[] args) {
        Solution15 solution15 = new Solution15();
        System.out.println(solution15.threeSum(new int[]{-1, 0, 1, 2, -1, -4}).toString());
    }
}
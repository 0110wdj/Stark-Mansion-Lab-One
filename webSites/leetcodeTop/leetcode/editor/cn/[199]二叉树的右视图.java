// 199 二叉树的右视图

//leetcode submit region begin(Prohibit modification and deletion)

import java.util.ArrayList;
import java.util.List;

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
//class Solution {
//    private void dfs(TreeNode root, List<Integer> ans, int dep) {
//        if (root == null) return;
//        if (ans.size() < dep + 1) {
//            ans.add(root.val);
//        }
//        dfs(root.right, ans, dep + 1);
//        dfs(root.left, ans, dep + 1);
//    }
//
//    public List<Integer> rightSideView(TreeNode root) {
//        List<Integer> ans = new ArrayList<>();
//        dfs(root, ans, 0);
//        return ans;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

// 112 路径总和

//leetcode submit region begin(Prohibit modification and deletion)


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
//    public boolean hasPathSum(TreeNode root, int targetSum) {
//        if (root == null) return false;
//        if (root.val == targetSum) {
//            if (root.left == null && root.right == null) return true;
//        }
//        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)


class Solution112 {
    public boolean hasPathSum(Solution102.TreeNode root, int targetSum) {
        if (root == null) return false;
        if (root.val == targetSum) {
            if (root.left == null && root.right == null) return true;
        }
        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
    }
}
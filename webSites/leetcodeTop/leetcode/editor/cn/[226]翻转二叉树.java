// 226 翻转二叉树

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
//    public TreeNode invertTree(TreeNode root) {
//        if (root == null) return null;
//        TreeNode left = root.left;
//        TreeNode right = root.right;
//        if (left != null) {
//            left = this.invertTree(left);
//        }
//        if (right != null) {
//            right = this.invertTree(right);
//        }
//        root.left = right;
//        root.right = left;
//        return root;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

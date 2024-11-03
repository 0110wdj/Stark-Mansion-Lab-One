/*
 * @lc app=leetcode.cn id=98 lang=java
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
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
class Solution {
    // public class TreeNode {
    // int val;
    // TreeNode left;
    // TreeNode right;

    // TreeNode() {
    // }

    // TreeNode(int val) {
    // this.val = val;
    // }

    // TreeNode(int val, TreeNode left, TreeNode right) {
    // this.val = val;
    // this.left = left;
    // this.right = right;
    // }
    // }

    public boolean isValidLeftBST(TreeNode root, int lower, int upper) {
        if (root == null) {
            return true;
        }
        if (root.left != null) {
            if (root.left.val >= root.val) {
                return false;
            }
            if (root.left.val <= lower) {
                return false;
            }
            if (root.left.val >= upper) {
                return false;
            }
        }

        if (root.right != null) {
            if (root.right.val <= root.val) {
                return false;
            }
            if (root.right.val <= lower) {
                return false;
            }
            if (root.right.val >= upper) {
                return false;
            }
        }

        if (!isValidLeftBST(root.left, lower, root.val)) {
            return false;
        }
        if (!isValidLeftBST(root.right, root.val, upper)) {
            return false;
        }
        return true;
    }

    public boolean isValidBST(TreeNode root) {
        return isValidLeftBST(root, Integer.MIN_VALUE, Integer.MAX_VALUE);
    }
}
// @lc code=end

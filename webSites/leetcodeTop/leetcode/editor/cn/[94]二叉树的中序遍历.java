// 94 二叉树的中序遍历

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
//    static public void reCur(TreeNode root, List<Integer> list) {
//        if (root == null) return;
//        if (root.left != null) {
//            reCur(root.left,list);
//        }
//        list.add(root.val);
//        if (root.right != null) {
//            reCur(root.right,list);
//        }
//    }
//
//    public List<Integer> inorderTraversal(TreeNode root) {
//        List<Integer> list = new ArrayList<>();
//        reCur(root, list);
//        return list;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

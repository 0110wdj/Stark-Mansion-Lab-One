// 236 二叉树的最近公共祖先

//leetcode submit region begin(Prohibit modification and deletion)

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode(int x) { val = x; }
 * }
 */
//class Solution {
//    private TreeNode ans = null;
//
//    private boolean dfs(TreeNode root, TreeNode p, TreeNode q) {
//        if (root == null) return false;
//        Boolean lson = dfs(root.left, p, q);
//        Boolean rson = dfs(root.right, p, q);
//        if ((lson && rson) || ((root.val == p.val || root.val == q.val) && (lson || rson))) {
//            this.ans = root;
//        }
//        return (lson || rson || root.val == p.val || root.val == q.val);
//    }
//
//    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
//        dfs(root, p, q);
//        return this.ans;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

// 102 二叉树的层序遍历

//leetcode submit region begin(Prohibit modification and deletion)

import com.sun.source.tree.Tree;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static public void levelOrderDeep(TreeNode root, List<List<Integer>> res, int deep) {
//        if (root == null) return;
//        if (res.size() <= deep) {
//            res.add(new ArrayList<>());
//        }
//        res.get(deep).add(root.val);
//        levelOrderDeep(root.left, res, deep + 1);
//        levelOrderDeep(root.right, res, deep + 1);
//    }
//
//    public List<List<Integer>> levelOrder(TreeNode root) {
//        List<List<Integer>> res = new ArrayList<>();
//        levelOrderDeep(root, res, 0);
//        return res;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

class Solution102 {
    static public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    static public void levelOrderDeep(TreeNode root, List<List<Integer>> res, int deep) {
        if (root == null) return;
        if (res.size() <= deep) {
            res.add(new ArrayList<>());
        }
        res.get(deep).add(root.val);
        levelOrderDeep(root.left, res, deep + 1);
        levelOrderDeep(root.right, res, deep + 1);
    }

    static public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> res = new ArrayList<>();
        levelOrderDeep(root, res, 0);
        return res;
    }

    public static void main(String[] args) {
        TreeNode root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
        System.out.println(Arrays.toString(levelOrder(root).toArray()));
    }
}
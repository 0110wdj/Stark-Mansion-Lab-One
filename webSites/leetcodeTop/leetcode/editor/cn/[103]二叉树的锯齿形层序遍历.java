// 103 二叉树的锯齿形层序遍历

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
//
//    static private void bfs(TreeNode root, Boolean isLeftToRight, int depth, List<List<Integer>> list) {
//        if (root == null) return;
//
//        while (list.size() < depth + 1) {
//            list.add(new ArrayList<>());
//        }
//
//        if (isLeftToRight) {
//            list.get(depth).add(root.val);
//            bfs(root.left, false, depth + 1, list);
//            bfs(root.right, false, depth + 1, list);
//        } else {
//            list.get(depth).add(0, root.val);
//            bfs(root.left, true, depth + 1, list);
//            bfs(root.right, true, depth + 1, list);
//        }
//    }
//
//    static public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
//        List<List<Integer>> list = new ArrayList<>();
//        bfs(root, true, 0, list);
//        return list;
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)
class Solution103 {

    static private void bfs(TreeNode root, Boolean isLeftToRight, int depth, List<List<Integer>> list) {
        if (root == null) return;

        while (list.size() < depth + 1) {
            list.add(new ArrayList<>());
        }

        if (isLeftToRight) {
            list.get(depth).add(root.val);
            bfs(root.left, false, depth + 1, list);
            bfs(root.right, false, depth + 1, list);
        } else {
            list.get(depth).add(0, root.val);
            bfs(root.left, true, depth + 1, list);
            bfs(root.right, true, depth + 1, list);
        }
    }

    static public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> list = new ArrayList<>();
        bfs(root, true, 0, list);
        return list;
    }

    public static void main(String[] args) {
        List<List<Integer>> list = zigzagLevelOrder(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))));
        System.out.println(list.toString());
        List<List<Integer>> list2 = zigzagLevelOrder(new TreeNode(1, new TreeNode(2, new TreeNode(4), null), new TreeNode(3, null, new TreeNode(5))));
        System.out.println(list2.toString());
    }
}
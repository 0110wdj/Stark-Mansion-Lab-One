// 129 求根节点到叶节点数字之和

class TreeNode {
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

//leetcode submit region begin(Prohibit modification and deletion)
//class Solution {
//    static public int sumNumbersTop(TreeNode root, int top) {
//        if (root.left == null && root.right == null) return top;
//
//        int sum = 0;
//        if (root.left != null) {
//            sum += sumNumbersTop(root.left, top * 10 + root.left.val);
//        }
//        if (root.right != null) {
//            sum += sumNumbersTop(root.right, top * 10 + root.right.val);
//        }
//        return sum;
//    }
//
//    public int sumNumbers(TreeNode root) {
//        return sumNumbersTop(root, root.val);
//    }
//}
//leetcode submit region end(Prohibit modification and deletion)

class Solution129 {

    static public int sumNumbersTop(TreeNode root, int top) {
        if (root.left == null && root.right == null) return top;

        int sum = 0;
        if (root.left != null) {
            sum += sumNumbersTop(root.left, top * 10 + root.left.val);
        }
        if (root.right != null) {
            sum += sumNumbersTop(root.right, top * 10 + root.right.val);
        }
        return sum;
    }

    static public int sumNumbers(TreeNode root) {
        return sumNumbersTop(root, root.val);
    }

    public static void main(String[] args) {
        TreeNode root1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        System.out.println(sumNumbers(root1));
        TreeNode root2 = new TreeNode(4, new TreeNode(9, new TreeNode(5), new TreeNode(1)), new TreeNode(0));
        System.out.println(sumNumbers(root2));
        TreeNode root3 = new TreeNode(1, null, new TreeNode(5));
        System.out.println(sumNumbers(root3));
    }
}
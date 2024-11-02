/*
 * @lc app=leetcode.cn id=108 lang=java
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start

class Solution {
    // public class TreeNode {
    //     int val;
    //     TreeNode left;
    //     TreeNode right;

    //     TreeNode() {
    //     }

    //     TreeNode(int val) {
    //         this.val = val;
    //     }

    //     TreeNode(int val, TreeNode left, TreeNode right) {
    //         this.val = val;
    //         this.left = left;
    //         this.right = right;
    //     }
    // }

    public TreeNode createNode(int[] nums, int start, int end) {
        if (start > end) {
            return null;
        }
        int mid = (start + end) / 2;
        TreeNode node = new TreeNode(nums[mid]);
        node.left = createNode(nums, start, mid - 1);
        node.right = createNode(nums, mid + 1, end);
        return node;
    }

    public TreeNode sortedArrayToBST(int[] nums) {
        if (nums.length > 0) {
            return createNode(nums, 0, nums.length - 1);
        }
        return null;
    }

    // public static void main(String[] args) {
    //     TreeNode res = new Solution().sortedArrayToBST(new int[] { -10, -3, 0, 5, 9 });
    //     System.out.println(res.val);
    // }
}
// @lc code=end

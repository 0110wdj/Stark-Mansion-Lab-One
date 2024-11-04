/*
 * @lc app=leetcode.cn id=437 lang=java
 *
 * [437] 路径总和 III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int getSubTreeSum(TreeNode root, long targetSum){
        if(root == null){
            return 0;
        }
        int count = 0;
        if(root.val == targetSum){
            count++;
        }
        count += getSubTreeSum(root.left, targetSum - root.val);
        count += getSubTreeSum(root.right, targetSum - root.val);
        return count;
    }

    public int pathSum(TreeNode root, long targetSum) {
        if(root == null){
            return 0;
        }
        int ret = getSubTreeSum(root, targetSum);
        ret += pathSum(root.left, targetSum);
        ret += pathSum(root.right, targetSum);
        return ret;
    }
}
// @lc code=end


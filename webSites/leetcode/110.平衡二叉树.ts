/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) return true

  const recur = (node: TreeNode | null): number => {
    if (node === null) return 0
    const left = recur(node.left)
    const right = recur(node.right)
    if (left === -1 || right === -1) return -1
    if (Math.abs(left - right) > 1) return -1
    return Math.max(left, right) + 1
  }

  const left = recur(root.left)
  const right = recur(root.right)

  if (left === -1 || right === -1) return false
  return Math.abs(left - right) <= 1
};
// @lc code=end


/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) return null
  if (preorder.length === 1) return { val: preorder[0], left: null, right: null }
  const rootVal = preorder[0]
  let rootIndex = 0
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === rootVal) {
      rootIndex = i;
      break;
    }
  }
  const left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex))
  const right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1))
  return { val: rootVal, left, right }
};
// @lc code=end


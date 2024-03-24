/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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
const isSymmetricInTwo = (left: TreeNode | null, right: TreeNode | null): boolean => {
  if (left === null && right === null) return true
  if (left === null) return false
  if (right === null) return false
  if (left.val !== right.val) return false
  return isSymmetricInTwo(left.right, right.left) && isSymmetricInTwo(left.left, right.right)
}

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true
  return isSymmetricInTwo(root.left, root.right)
};
// @lc code=end

const root: TreeNode = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 1,
      left: null,
      right: null,
    },
  },
}

console.log(isSymmetric(root));
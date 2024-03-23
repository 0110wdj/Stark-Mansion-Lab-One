/*
 * @lc app=leetcode.cn id=236 lang=typescript
 *
 * [236] 二叉树的最近公共祖先
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null || root === p || root === q) {
    return root
  } else {
    const targetLeft = lowestCommonAncestor(root.left, p, q)
    const targetRight = lowestCommonAncestor(root.right, p, q)
    if (targetRight === null) {
      return targetLeft
    }
    if (targetLeft === null) {
      return targetRight
    }
    return root
  }
};
// @lc code=end

const root: TreeNode = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 2,
      left: {
        val: 7,
        left: null,
        right: null
      },
      right: {
        val: 4,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 1,
    left: {
      val: 0,
      left: null,
      right: null
    },
    right: {
      val: 8,
      left: null,
      right: null
    }
  },
}

console.log(lowestCommonAncestor(root, root.left, root.right || null));

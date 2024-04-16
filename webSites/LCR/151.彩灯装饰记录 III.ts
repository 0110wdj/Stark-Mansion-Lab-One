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


function decorateRecord(root: TreeNode | null): number[][] {
  const res: number[][] = []
  const recur = (head: TreeNode | null, deep: number): void => {
    if (head === null) {
      return
    }
    if (!res[deep]) { res[deep] = [] }
    if (deep % 2 === 0) {
      res[deep].push(head.val)
    } else {
      res[deep].unshift(head.val)
    }
    recur(head.left, deep + 1)
    recur(head.right, deep + 1)
  }
  recur(root, 0)
  return res
};


const root: TreeNode = {
  val: 8,
  left: {
    val: 17,
    left: {
      val: 18,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    val: 21,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null
    },
  },
}

console.log(decorateRecord(root));

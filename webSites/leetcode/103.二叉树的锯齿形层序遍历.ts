/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// class TreeNode {
//   val: number
//   left: TreeNode | null
//   right: TreeNode | null
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
//   }
// }

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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
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
// @lc code=end

console.log(zigzagLevelOrder({ val: 3, left: { val: 9, left: null, right: null }, right: { val: 20, left: { val: 15, left: null, right: null }, right: { val: 7, left: null, right: null } } }));
console.log(zigzagLevelOrder({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: { val: 4, left: null, right: null }, right: { val: 5, left: null, right: null } } }));

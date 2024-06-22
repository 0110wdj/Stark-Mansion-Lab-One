/*
 * @lc app=leetcode.cn id=543 lang=typescript
 *
 * [543] 二叉树的直径
 */

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

function generateNodeDepthMap(root: TreeNode | null, map: Map<TreeNode, number>): number {
  if (root === null) return 0
  if (map.has(root)) return map.get(root) ?? Number.NaN
  map.set(root, Math.max(generateNodeDepthMap(root.left, map), generateNodeDepthMap(root.right, map)) + 1)
  return map.get(root) ?? Number.NaN
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (root === null) return 0
  const nodeDepthMap: Map<TreeNode, number> = new Map()
  generateNodeDepthMap(root, nodeDepthMap)

  const recur = (root: TreeNode | null) => {
    if (root === null) return 0
    // 如果经过 root
    const maxRoot = (nodeDepthMap.get(root.left) ?? 0) + (nodeDepthMap.get(root.right) ?? 0)
    // 如果不经过 root
    const maxLeft = recur(root.left)
    const maxRight = recur(root.right)

    return Math.max(maxRoot, maxLeft, maxRight)
  }

  return recur(root)
};
// @lc code=end


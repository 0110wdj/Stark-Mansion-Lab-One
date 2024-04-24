// same as leetcode 113
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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (root === null) return []
  if (root.val === targetSum && root.left === null && root.right === null) {
    return [[targetSum]]
  }
  const left = pathSum(root.left, targetSum - root.val)
  const right = pathSum(root.right, targetSum - root.val)
  const res: number[][] = []
  left.map(v => { res.push([root.val, ...v]) })
  right.map(v => { res.push([root.val, ...v]) })
  return res
};
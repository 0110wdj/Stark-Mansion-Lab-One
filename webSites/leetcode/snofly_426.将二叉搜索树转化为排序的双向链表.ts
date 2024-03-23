/*
 * @lc app=leetcode.cn id=426 lang=typescript
 *
 * [426] 将二叉搜索树转化为排序的双向链表
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

function treeToDoublyList(root: TreeNode | null): TreeNode | null {
  if (root == null) {
    return root
  }
  let prev: TreeNode | null = null, head: TreeNode | null = null;

  const dfs = (root: TreeNode | null) => {
    if (root === null) {
      return root
    }
    dfs(root.left)
    if (prev !== null) {
      prev.right = root;
      root.left = prev;
    } else {
      head = root
    }
    prev = root
    dfs(root.right)
  }

  dfs(root)
  
  prev.right = head
  head.left = prev
  return head
}
// @lc code=end

const root: TreeNode = {
  val: 3,
  left: {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: {
    val: 4,
    left: null,
    right: null
  }
}
console.log(treeToDoublyList(root));
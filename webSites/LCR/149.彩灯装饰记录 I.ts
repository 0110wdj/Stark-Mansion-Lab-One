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

function decorateRecord(root: TreeNode | null): number[] {
  if (root === null) return []
  const res: number[] = []
  const queue: TreeNode[] = [root]
  while (queue.length !== 0) {
    const frist = queue.shift()
    if (!frist) {
      break;
    }
    if (frist.left) queue.push(frist.left)
    if (frist.right) queue.push(frist.right)
    res.push(frist.val)
  }
  return res
};


console.log(decorateRecord(root));

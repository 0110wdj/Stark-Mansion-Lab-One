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



function findTargetNode(root: TreeNode | null, cnt: number): number {
  let target: number = 0;

  function recur(root: TreeNode | null) {
    if (root === null) return;
    recur(root.right);
    if (cnt == 0) return;
    if (--cnt === 0) target = root.val;
    recur(root.left);
  }

  recur(root)
  return target
};

const root1: TreeNode = {
  val: 7,
  left: {
    val: 3,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 9,
    left: null,
    right: null,
  },
}

const root2: TreeNode = {
  val: 7,
  left: {
    val: 3,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 9,
    left: null,
    right: null,
  },
}

console.log(findTargetNode(root1, 2));
// console.log(findTargetNode(root2, 2));

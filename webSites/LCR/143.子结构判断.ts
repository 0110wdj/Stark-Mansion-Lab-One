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

const recur = (A: TreeNode | null, B: TreeNode | null): boolean => {
  if (B === null) return true;
  if (A === null) return false;
  if (A.val !== B.val) return false;
  return recur(A.left, B.left) && recur(A.right, B.right)
}
function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  return (A !== null && B !== null) && (recur(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
};

const A: TreeNode = {
  val: 4,
  left: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 8,
        left: null,
        right: null,
      },
      right: {
        val: 9,
        left: null,
        right: null,
      },
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
}

const B: TreeNode = {
  val: 4,
  left: {
    val: 8,
    left: null,
    right: null,
  },
  right: {
    val: 9,
    left: null,
    right: null,
  },
}

console.log(isSubStructure(A, B));

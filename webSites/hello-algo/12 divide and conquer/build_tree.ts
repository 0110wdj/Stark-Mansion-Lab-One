const preorder = [3, 9, 2, 1, 7]
const inorder = [9, 3, 1, 2, 7]

interface TreeNode {
  value: number;
  leftChild: TreeNode | null;
  rightChild: TreeNode | null;
}

const buildTreeByPreAndIn = (preorder: number[], inorder: number[]): TreeNode | null => {
  if (preorder.length < 1) {
    return null
  }
  let curNode: TreeNode = {
    value: preorder[0],
    leftChild: null,
    rightChild: null,
  }
  const midIndex = inorder.indexOf(preorder[0])
  curNode.leftChild = buildTreeByPreAndIn(preorder.slice(1, midIndex + 1), inorder.slice(0, midIndex))
  curNode.rightChild = buildTreeByPreAndIn(preorder.slice(midIndex + 1), inorder.slice(midIndex + 1))
  return curNode
}
console.log(buildTreeByPreAndIn(preorder, inorder));

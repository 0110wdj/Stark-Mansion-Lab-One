// 1 二叉树层序遍历
// 2 实现一个事件发射器
// 3 实现防抖函数
// 4 大数相加

function treeToArr(root) {
  if (root === null) return [];

  const res = [];
  const queue = [root];
  let i = 0;

  while (i < queue.length) {
    const node = queue[i++];
    res.push(node.value);
    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }
  return res;
}
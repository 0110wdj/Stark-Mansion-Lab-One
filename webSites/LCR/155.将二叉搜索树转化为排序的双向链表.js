// same as leetcode 426

/** 
 * @typedef {
 * val:number,
 * left:TreeNode|null,
 * right:TreeNode|null
 * } TreeNode
 *  */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 定义一个函数，将二叉搜索树转换为双向循环链表
var treeToDoublyList = function (root) {
  // 如果根节点为空，直接返回 null
  if (root === null) return null;
  // 定义变量 pre 和 head，用于记录前一个节点和链表头节点
  let pre, head;

  // 定义深度优先搜索函数，用于遍历二叉搜索树
  function dfs(cur) {
    // 如果当前节点为空，直接返回 null
    if (cur === null) return null;
    // 递归遍历左子树
    dfs(cur.left);
    // 将当前节点连接到前一个节点的右侧
    if (pre != null) pre.right = cur;
    else head = cur; // 如果前一个节点为空，当前节点即为链表头节点
    // 将前一个节点连接到当前节点的左侧
    cur.left = pre;
    // 更新前一个节点为当前节点
    pre = cur;
    // 递归遍历右子树
    dfs(cur.right);
  }

  // 调用深度优先搜索函数
  dfs(root);
  // 将链表头节点的左指针指向链表尾节点
  head.left = pre;
  // 将链表尾节点的右指针指向链表头节点，完成双向循环链表的连接
  pre.right = head;
  // 返回链表头节点
  return head;
};

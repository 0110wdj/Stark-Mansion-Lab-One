/*
 * @lc app=leetcode.cn id=237 lang=typescript
 *
 * [237] 删除链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

interface ListNode {
  val: number,
  next: null | ListNode
}

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
  while (node) {
    if (node.next !== null) {
      if (node.next.next === null) {
        node.val = node.next.val
        node.next = null
        break
      } else {
        node.val = node.next.val
        node.next = node.next
        node = node.next
      }
    } else {
      break
    }
  }
};
// @lc code=end


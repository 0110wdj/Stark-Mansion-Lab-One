/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
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

function hasCycle(head: ListNode | null): boolean {
  if (!head?.next) return false
  let fast = head;
  let slow = head;
  while (fast !== null && slow !== null) {
    slow = slow.next
    fast = fast.next?.next ?? null
    if (fast === slow) {
      return true
    }
  }
  return false
};
// @lc code=end


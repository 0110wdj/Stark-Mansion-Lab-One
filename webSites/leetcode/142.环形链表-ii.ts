/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
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

function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head, fast = head;
  while (true) {
    if (!fast?.next) return null
    fast = fast.next.next
    slow = slow.next
    if (fast === slow) break
  }
  fast = head
  while (true) {
    if (fast === slow) return slow
    fast = fast.next
    slow = slow.next
  }
};
// @lc code=end


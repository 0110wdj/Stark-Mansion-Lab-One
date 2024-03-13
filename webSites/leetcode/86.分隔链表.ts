/*
 * @lc app=leetcode.cn id=86 lang=typescript
 *
 * [86] 分隔链表
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

function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head?.next) {
    return head
  }
  let smaller: ListNode | null = null
  let greater: ListNode | null = null
  let smallerHead: ListNode | null = null
  let greaterHead: ListNode | null = null
  while (head !== null) {
    if (head.val < x) {
      if (!smallerHead) {
        smallerHead = { val: head.val, next: null }
        smaller = smallerHead
      } else {
        if (!smaller) break
        smaller.next = { val: head.val, next: null }
        smaller = smaller.next
      }
    } else {
      if (!greaterHead) {
        greaterHead = { val: head.val, next: null }
        greater = greaterHead
      } else {
        if (!greater) break
        greater.next = { val: head.val, next: null }
        greater = greater.next
      }
    }
    head = head.next
  }

  if (smallerHead) {
    smaller && (smaller.next = greaterHead)
    greater && (greater.next = null)
    return smallerHead
  } else {
    return greaterHead
  }
};
// @lc code=end

// const res = partition({ val: 1, next: { val: 4, next: { val: 3, next: { val: 2, next: { val: 5, next: { val: 2, next: null } } } } } }, 3)
// console.log(JSON.stringify(res));

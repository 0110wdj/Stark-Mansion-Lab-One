/*
 * @lc app=leetcode.cn id=148 lang=typescript
 *
 * [148] 排序链表
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

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

function sortList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head
  const sortHead = sortList(head.next)
  if (sortHead === null) return head
  if (head.val <= sortHead.val) {
    head.next = sortHead
    return head
  }
  let sortInsert: ListNode | null = sortHead
  while (sortInsert) {
    if (sortInsert.next === null) {
      sortInsert.next = head
      head.next = null
      break
    }
    if (sortInsert.next.val >= head.val) {
      head.next = sortInsert.next
      sortInsert.next = head
      break
    }
    sortInsert = sortInsert.next
  }
  return sortHead
};
// @lc code=end

const root: ListNode = {
  val: 4,
  next: {
    val: 2,
    next: {
      val: 1,
      next: {
        val: 3,
        next: null
      }
    }
  }
}

const newRoot = sortList(root)
console.log(JSON.stringify(newRoot));
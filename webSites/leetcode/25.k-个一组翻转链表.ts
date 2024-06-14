/*
 * @lc app=leetcode.cn id=25 lang=typescript
 *
 * [25] K 个一组翻转链表
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

function justRevers(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head
  const newHead = justRevers(head.next)
  head.next.next = head
  head.next = null
  return newHead
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  // 判断当前为最后一段
  let nextHead = head
  for (let i = 0; i < k; i++) {
    if (nextHead === null) return head
    nextHead = nextHead.next
  }
  // 不是最后一段，则表明至少存在 k 个 node 需要反转
  // 1、剩下部分反转
  nextHead = reverseKGroup(nextHead, k);
  // 前 k 项的反转
  let tmp = head
  for (let i = 0; i < k - 1; i++) {
    if (tmp) {
      tmp = tmp.next
    }
  }
  if (tmp) {
    tmp.next = null
  }
  const newHead = justRevers(head)
  if (head !== null) {
    head.next = nextHead
  }
  return newHead
};
// @lc code=end

const root: ListNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

const newRoot = reverseKGroup(root, 3)
console.log(newRoot);
console.log(JSON.stringify(newRoot));

// console.log(JSON.stringify(root));s);

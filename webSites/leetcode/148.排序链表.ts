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

  const recur = (head: ListNode | null): ListNode | null => {
    // 基本情况：零个节点、一个节点、两个节点
    if (head === null || head.next === null) return head
    if (head.next.next === null) {
      if (head.val > head.next.val) {
        const sortHead = head.next
        head.next.next = head
        head.next = null
        return sortHead
      }
      return head
    }
    // 用快慢指针做分段
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    while (true) {
      if (slow === null) return null;
      if (fast.next === null) {
        break;
      }
      if (fast.next.next === null) {
        break;
      }
      if (slow) {
        slow = slow.next
        fast = fast.next.next
      }
    }
    let right = recur(slow.next)
    slow.next = null
    let left = recur(head)
    // 合并
    if (right === null) return left
    if (left === null) return right
    let minListHead = left
    if (left.val > right.val) {
      minListHead = right
      right = right.next
    } else {
      left = left.next
    }
    let minListPoint = minListHead
    while (true) {
      if (left === null) { minListPoint.next = right; break; }
      if (right === null) { minListPoint.next = left; break; }

      if (left.val < right.val) {
        minListPoint.next = left
        minListPoint = minListPoint.next
        left = left.next
      } else {
        minListPoint.next = right
        minListPoint = minListPoint.next
        right = right.next
      }
    }
    return minListHead
  }
  return recur(head)
};
// @lc code=end

const root: ListNode = {
  val: -1,
  next: {
    val: 5,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 0,
          next: null
        }
      }
    }
  }
}

const newRoot = sortList(root)
console.log(JSON.stringify(newRoot));
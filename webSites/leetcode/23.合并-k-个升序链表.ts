/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并 K 个升序链表
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]
  if (lists.length === 2) {
    let left = lists[0];
    let right = lists[1];
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
  const mid = Math.floor(lists.length / 2)
  const mergedLeft = mergeKLists(lists.splice(0, mid))
  const mergedRight = mergeKLists(lists)
  return mergeKLists([mergedLeft, mergedRight])
};
// @lc code=end

const root1: ListNode = {
  val: 1,
  next: {
    val: 4,
    next: {
      val: 5,
      next: null
    }
  }
}

const root2: ListNode = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}

const root3: ListNode = {
  val: 2,
  next: {
    val: 6,
    next: null
  }
}

const newRoot = mergeKLists([root1, root2, root3])
console.log(JSON.stringify(newRoot));
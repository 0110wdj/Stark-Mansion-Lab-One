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

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseBookList(head: ListNode | null): number[] {
  if (head === null) return []
  const res: number[] = []
  const recur = (head: ListNode | null, res: number[]) => {
    if (head === null) {
      return
    }
    if (head.next === null) {
      res.push(head.val)
      return
    }
    recur(head.next, res)
    res.push(head.val)
  }
  recur(head, res)
  return res
};

const head: ListNode = {
  val: 1,
  next: {
    val: 2,
    next: null
  }
}
console.log(reverseBookList(head));

/*
 * @lc app=leetcode.cn id=19 lang=typescript
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) return null
  const curDel = (cur: ListNode | null): number => {
    if (cur === null) {
      return 0
    }
    const count = curDel(cur.next) + 1
    if (count === n + 1) {
      cur.next = cur.next?.next ?? null
    }
    return count
  }

  const count = curDel(head)
  if (count === n) {
    if (head.next === null) return null
    head.val = head.next.val
    head.next = head.next.next
  }

  return head
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

removeNthFromEnd(root, 2)

console.log(JSON.stringify(root));

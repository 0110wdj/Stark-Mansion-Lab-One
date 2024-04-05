class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  if (head === null) {
    return head
  }
  if (head.val === val) return head.next
  let parent: ListNode | null = head
  let p = head.next
  while (p && parent) {
    if (p.val === val) {
      parent.next = p.next
      break
    } else {
      p = p.next
      parent = parent.next
    }
  }
  return head
};
const head: ListNode = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
}
console.log(deleteNode(head, 1));
// console.log(deleteNode(head, 2));
// console.log(deleteNode(head, 3));

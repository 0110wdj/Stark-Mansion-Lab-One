class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function trainingPlan(head: ListNode | null, cnt: number): ListNode | null {
  let right = head, left = head;
  for (let i = 0; i < cnt; i++) {
    right = right?.next || null
  }
  while (right) {
    left = left?.next || null
    right = right.next
  }
  return left
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

console.log(trainingPlan(head, 1));
console.log(trainingPlan(head, 2));
console.log(trainingPlan(head, 3));

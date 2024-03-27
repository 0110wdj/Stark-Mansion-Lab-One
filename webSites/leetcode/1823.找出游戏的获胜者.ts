/*
 * @lc app=leetcode.cn id=1823 lang=typescript
 *
 * [1823] 找出游戏的获胜者
 */

// @lc code=start
type MyNode = {
  val: number,
  next: MyNode | null,
}

function findTheWinner(n: number, k: number): number {
  if (n === 1) return 1
  let node: MyNode = {
    val: 1,
    next: null
  }
  let head = node
  for (let i = 2; i <= n + 1; i++) {
    if (i === n + 1) {
      head.next = node
    } else {
      head.next = { val: i, next: null }
      head = head.next
    }
  }
  // console.log(node);
  // console.log(node.next);
  // console.log(node.next?.next);
  // console.log(node.next?.next?.next);

  while (head.next !== null && head.next !== head) {
    for (let i = 1; i < k; i++) {
      if (head.next) {
        head = head.next
      }
    }
    if (head.next) {
      head.next = head.next.next
    }
  }
  return head.val
};
// @lc code=end

console.log(findTheWinner(5, 2));
console.log(findTheWinner(6, 5));

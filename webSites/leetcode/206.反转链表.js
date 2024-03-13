/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) {
    return head
  }
  let next = head.next
  const recur = (head, next) => {
    if (next === null) {
      return head
    }
    const nextHead = recur(next, next.next)
    head.next.next = head
    head.next = null
    return nextHead
  }
  return recur(head, next)
};
// @lc code=end
// const res = reverseList({ val: 1, next: { val: 2, next: { val: 3, next: null } } })
// console.log(res);
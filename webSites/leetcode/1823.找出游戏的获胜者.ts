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
  let x = 0;
  for (let i = 2; i < n + 1; i++) {
    x = (x + k) % i
  }
  return x + 1
};
// @lc code=end

console.log(findTheWinner(5, 2));
console.log(findTheWinner(6, 5));

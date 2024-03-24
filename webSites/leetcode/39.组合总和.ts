/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const backtrack = (state: number[], target: number, candidates: number[], start: number, res: number[][]) => {
    if (target === 0) {
      res.push([...state])
      return
    }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > target) {
        return
      }
      state.push(candidates[i])
      backtrack(state, target - candidates[i], candidates, i, res)
      state.pop()
    }
  }
  const res: number[][] = []
  const state: number[] = []
  let candidatesSort = candidates.sort((a, b) => a - b)
  let start: number = 0
  backtrack(state, target, candidatesSort, start, res)
  return res
};
// @lc code=end
console.log(combinationSum([2, 3, 6, 7], 7));


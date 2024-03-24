/*
 * @lc app=leetcode.cn id=40 lang=typescript
 *
 * [40] 组合总和 II
 */

// @lc code=start
function combinationSum2(candidates: number[], target: number): number[][] {
  const backtrack = (state: number[], target: number, candidates: number[], start: number, res: number[][]) => {
    if (target === 0) {
      res.push([...state])
      return
    }
    for (let i = start; i < candidates.length; i++) {
      if (candidates[i] > target) {
        return
      }
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue
      }
      state.push(candidates[i])
      backtrack(state, target - candidates[i], candidates.slice(1), i, res)
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
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));


/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {

  const res: number[][] = []
  intervals.sort((a, b) => a[0] - b[0])
  for (const cur of intervals) {
    const state: number[] = [cur[0], cur[cur.length - 1]];
    if (res.length === 0) {
      res.push(state)
      continue;
    }
    if (cur[0] <= res[res.length - 1][1]) {
      if (cur[cur.length - 1] > res[res.length - 1][1]) {
        res[res.length - 1][1] = cur[cur.length - 1];
      }
      continue;
    }
    res.push(state)
  }
  return res
};
// @lc code=end

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
console.log(merge([[1, 4], [0, 4]]));
console.log(merge([[1, 4], [2, 3]]));

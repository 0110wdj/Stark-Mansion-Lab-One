/*
 * @lc app=leetcode.cn id=207 lang=typescript
 *
 * [207] 课程表
 */

// @lc code=start

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const indegrees: number[] = new Array(numCourses).fill(0)
  const adjacency: number[][] = Array.from({ length: numCourses }, () => [])
  const queue: number[] = []
  for (const dp of prerequisites) {
    indegrees[dp[0]]++
    adjacency[dp[1]].push(dp[0])
  }
  indegrees.map((v, i) => v === 0 && queue.push(i))
  // console.log({ indegrees, adjacency, queue });
  while (queue.length !== 0) {
    const frist = queue.pop() ?? NaN;
    // console.log({ frist });
    numCourses--;
    adjacency[frist].map(p => --indegrees[p] === 0 && queue.push(p))
  }
  return numCourses === 0
};
// @lc code=end

console.log(canFinish(2, [[1, 0]]));
console.log(canFinish(2, [[1, 0], [0, 1]]));
console.log(canFinish(5, [[4, 3], [4, 2], [3, 0], [3, 1], [2, 1], [1, 0]]));

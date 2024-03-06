const minPathSumDPSnoflySpace = (nums: number[][], targetX: number, targetY: number): number => {
  const stateLine = new Array(nums.length).fill(-1)
  stateLine[0] = nums[0][0]
  for (let i = 1; i < nums.length; i++) {
    stateLine[i] = stateLine[i - 1] + nums[i][0]
  }
  for (let i = 1; i <= targetX; i++) {
    for (let j = 0; j <= targetY; j++) {
      if (j === 0) {
        stateLine[0] = stateLine[0] + nums[i][0]
      } else {
        stateLine[j] = Math.min(stateLine[j - 1], stateLine[j]) + nums[i][j]
      }
    }
  }
  return stateLine[targetY]
}

const testArrDpSnoflySpace = [
  [1, 3, 1, 5],
  [2, 2, 4, 2],
  [5, 3, 2, 1],
  [4, 3, 5, 2]
]

console.log(minPathSumDPSnoflySpace(testArrDpSnoflySpace, 3, 3));

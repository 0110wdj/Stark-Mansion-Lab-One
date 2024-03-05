const minPathSumDFS = (nums: number[][], targetX: number, targetY: number): number => {
  if (targetX === 0 && targetY === 0) {
    return nums[0][0]
  }

  if (targetX < 0 || targetY < 0) {
    return Infinity;
  }

  const fromUp = minPathSumDFS(nums, targetX, targetY - 1)
  const fromLeft = minPathSumDFS(nums, targetX - 1, targetY)

  return Math.min(fromLeft, fromUp) + nums[targetX][targetY]
}

const testArr = [
  [1, 3, 1, 5],
  [2, 2, 4, 2],
  [5, 3, 2, 1],
  [4, 3, 5, 2]
]

console.log(minPathSumDFS(testArr, testArr[0].length - 1, testArr.length - 1));

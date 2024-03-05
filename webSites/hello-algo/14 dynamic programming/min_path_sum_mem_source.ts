const minPathSumDFSMem = (nums: number[][], men: number[][], targetX: number, targetY: number): number => {
  if (targetX === 0 && targetY === 0) {
    return nums[0][0]
  }

  if (targetX < 0 || targetY < 0) {
    return Infinity;
  }

  if (men[targetX][targetY] !== -1) {
    return men[targetX][targetY]
  }

  const fromUp = minPathSumDFSMem(nums, men, targetX, targetY - 1);
  const fromLeft = minPathSumDFSMem(nums, men, targetX - 1, targetY);

  men[targetX][targetY] = Math.min(fromLeft, fromUp) + nums[targetX][targetY];

  return men[targetX][targetY]
}

const testArrMen = [
  [1, 3, 1, 5],
  [2, 2, 4, 2],
  [5, 3, 2, 1],
  [4, 3, 5, 2]
]

const memArr = new Array(testArrMen.length).fill([])
memArr.map((v, index) => {
  memArr[index] = new Array(testArrMen[0].length).fill(-1)
})

console.log(minPathSumDFSMem(testArrMen, memArr, testArrMen[0].length - 1, testArrMen.length - 1));

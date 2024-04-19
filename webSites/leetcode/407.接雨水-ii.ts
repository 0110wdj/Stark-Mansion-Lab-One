/*
 * @lc app=leetcode.cn id=407 lang=typescript
 *
 * [407] 接雨水 II
 */

// @lc code=start

let minQueue: { val: number, i: number, j: number }[] = []

function insertNum(arr: { val: number, i: number, j: number }[], target: number, ui: number, uj: number) {
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    if (cur.val > target) {
      arr = [...arr.slice(0, i), { val: target, i: ui, j: uj }, ...arr.slice(i)]
      return arr
    }
  }
  arr.push({ val: target, i: ui, j: uj })
  return arr
}

function pushMinQueue(target: number, i: number, j: number) {
  if (minQueue.length === 0) {
    minQueue.push({ val: target, i, j })
  } else {
    minQueue = insertNum(minQueue, target, i, j)
  }
}

function minIndex(waterHeightMap: (number | null)[][]): number[] {
  let first: { val: number; i: number; j: number; } | undefined = minQueue[0]

  while (true) {
    if (first === undefined) return []
    if (waterHeightMap[first.i][first.j] === null) {
      first = minQueue.shift()
    } else {
      return [first.i, first.j]
    }
  }
}

// console.log(minIndex([
//   [null, 4, 3, null, 3, 2],
//   [3, Infinity, Infinity, 3, Infinity, 4],
//   [2, 3, 3, 2, 3, 1]
// ]));

function trapRainWater(heightMap: number[][]): number {
  // 用最小堆记录边界的最小值，但是我不会，所以每次需要查询边界的最小值
  const x = heightMap[0].length, y = heightMap.length;
  const waterHeightMap: (number | null)[][] = Array.from({ length: y }, () => new Array(x).fill(Infinity));
  let res = 0;
  // init
  for (let i = 0; i < y; i++) {
    waterHeightMap[i][0] = heightMap[i][0]
    waterHeightMap[i][x - 1] = heightMap[i][x - 1]
    pushMinQueue(heightMap[i][0], i, 0)
    pushMinQueue(heightMap[i][x - 1], i, x - 1)
  }
  for (let i = 1; i < x - 1; i++) {
    waterHeightMap[0][i] = heightMap[0][i];
    waterHeightMap[y - 1][i] = heightMap[y - 1][i];
    pushMinQueue(heightMap[0][i], 0, i)
    pushMinQueue(heightMap[y - 1][i], y - 1, i)
  }

  // console.log(minQueue, waterHeightMap);
  // return 0

  while (true) {
    const minij = minIndex(waterHeightMap);
    // console.log(minQueue.length);

    if (minij.length === 0) break;
    let [i, j] = minij;
    if (waterHeightMap[i - 1]?.[j] === Infinity) {
      res += Math.max(((waterHeightMap[i][j] || 0)) - heightMap[i - 1][j], 0)
      waterHeightMap[i - 1][j] = Math.max(heightMap[i - 1][j], waterHeightMap[i][j] || 0)
      pushMinQueue(waterHeightMap[i - 1][j] || NaN, i - 1, j)
    } else if (waterHeightMap[i + 1]?.[j] === Infinity) {
      res += Math.max(((waterHeightMap[i][j] || 0)) - heightMap[i + 1][j], 0)
      waterHeightMap[i + 1][j] = Math.max(heightMap[i + 1][j], waterHeightMap[i][j] || 0)
      pushMinQueue(waterHeightMap[i + 1][j] || NaN, i + 1, j)
    } else if (waterHeightMap[i]?.[j - 1] === Infinity) {
      res += Math.max(((waterHeightMap[i][j] || 0)) - heightMap[i][j - 1], 0)
      waterHeightMap[i][j - 1] = Math.max(heightMap[i][j - 1], waterHeightMap[i][j] || 0)
      pushMinQueue(waterHeightMap[i][j - 1] || NaN, i, j - 1)
    } else if (waterHeightMap[i]?.[j + 1] === Infinity) {
      res += Math.max(((waterHeightMap[i][j] || 0)) - heightMap[i][j + 1], 0)
      waterHeightMap[i][j + 1] = Math.max(heightMap[i]?.[j + 1], waterHeightMap[i][j] || 0)
      pushMinQueue(waterHeightMap[i][j + 1] || NaN, i, j + 1)
    } else {
      waterHeightMap[i][j] = null;
      minQueue.shift()
    }
  }
  return res
};
// @lc code=end

console.log(trapRainWater([
  [1, 4, 3, 1, 3, 2],
  [3, 2, 1, 3, 2, 4],
  [2, 3, 3, 2, 3, 1]
]));

console.log(trapRainWater([
  [3, 3, 3, 3, 3],
  [3, 2, 2, 2, 3],
  [3, 2, 1, 2, 3],
  [3, 2, 2, 2, 3],
  [3, 3, 3, 3, 3]]
));

console.log(trapRainWater([
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
  [11, 12, 13],
  [14, 15, 16]
]));

console.log(trapRainWater([
  [9, 9, 9, 9, 9, 9, 8, 9, 9, 9, 9],
  [9, 0, 0, 0, 0, 0, 1, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
]));

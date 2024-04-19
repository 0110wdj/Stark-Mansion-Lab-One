/*
 * @lc app=leetcode.cn id=407 lang=typescript
 *
 * [407] 接雨水 II
 */

// @lc code=start
function minIndex(heightMap: (number | null)[][]): number[] {
  let i = 0, j = 0, res: number[] = [], min = Infinity;
  for (; i < heightMap.length; i++) {
    j = 0
    for (; j < heightMap[0].length; j++) {
      // console.log(heightMap[i][j]);
      if (heightMap[i][j] === null) {
        continue;
      }
      if (heightMap[i][j] as number < min) {
        res = [i, j];
        min = heightMap[i][j] as number
      }
    }

  }
  return min === Infinity ? [] : res
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
  for (let i = 0; i < y; i++) {
    waterHeightMap[i][0] = heightMap[i][0]
    waterHeightMap[i][x - 1] = heightMap[i][x - 1]
  }
  for (let i = 0; i < x; i++) {
    waterHeightMap[0][i] = heightMap[0][i];
    waterHeightMap[y - 1][i] = heightMap[y - 1][i];
  }
  while (true) {
    const minij = minIndex(waterHeightMap);
    // console.log({ waterHeightMap, res, minij });

    if (minij.length === 0) break;
    let [i, j] = minij;
    if (waterHeightMap[i - 1]?.[j] === Infinity) {
      res += Math.max(((waterHeightMap[i][j] || 0)) - heightMap[i - 1][j], 0)
      waterHeightMap[i - 1][j] = Math.max(heightMap[i - 1][j], waterHeightMap[i][j] || 0)
    } else if (waterHeightMap[i + 1]?.[j] === Infinity) {
      res += Math.max(((waterHeightMap[i][j] || 0)) - heightMap[i + 1][j], 0)
      waterHeightMap[i + 1][j] = Math.max(heightMap[i + 1][j], waterHeightMap[i][j] || 0)
    } else if (waterHeightMap[i]?.[j - 1] === Infinity) {
      res += Math.max(((waterHeightMap[i][j] || 0)) - heightMap[i][j - 1], 0)
      waterHeightMap[i][j - 1] = Math.max(heightMap[i][j - 1], waterHeightMap[i][j] || 0)
    } else if (waterHeightMap[i]?.[j + 1] === Infinity) {
      res += Math.max(((waterHeightMap[i][j] || 0)) - heightMap[i][j + 1], 0)
      waterHeightMap[i][j + 1] = Math.max(heightMap[i]?.[j + 1], waterHeightMap[i][j] || 0)
    } else {
      waterHeightMap[i][j] = null;
    }
  }
  return res
};
// @lc code=end

// console.log(trapRainWater([
//   [1, 4, 3, 1, 3, 2],
//   [3, 2, 1, 3, 2, 4],
//   [2, 3, 3, 2, 3, 1]
// ]));

// console.log(trapRainWater([
//   [3, 3, 3, 3, 3],
//   [3, 2, 2, 2, 3],
//   [3, 2, 1, 2, 3],
//   [3, 2, 2, 2, 3],
//   [3, 3, 3, 3, 3]]
// ));

// console.log(trapRainWater([
//   [2, 3, 4],
//   [5, 6, 7],
//   [8, 9, 10],
//   [11, 12, 13],
//   [14, 15, 16]
// ]));

console.log(trapRainWater([
  [9, 9, 9, 9, 9, 9, 8, 9, 9, 9, 9],
  [9, 0, 0, 0, 0, 0, 1, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9],
  [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
]));

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 返回最大的试玩玩家数量
 * @param playerCount int整型 试玩玩家数量
 * @param playerTimeRange int整型二维数组 [[玩家1游戏开始时间, 玩家1游戏结束时间]...[玩家n游戏开始时间, 玩家n游戏结束时间]]
 * @return int整型
 */
function MaxPlayers(playerCount, playerTimeRange) {
  if (playerCount === 1) return 1;

  function insertArea(blockArea, curArea, blockAreaIndex, resultBlockArea) {
    if (curArea[1] <= blockArea[0][0]) {
      blockArea.unshift(curArea);
      return;
    }

    if (curArea[0] >= blockArea.at(-1)[1]) {
      blockArea.push(curArea);
      return;
    }

    for (let i = 0; i < blockArea.length; i++) {
      const area = blockArea[i];
      if (area[1] <= curArea[0]) {
        if (blockArea[i + 1][0] <= curArea[1]) {
          blockArea = [...blockArea.slice(0, i + 1), curArea, ...blockArea.slice(i + 1)]
          resultBlockArea[blockAreaIndex] = blockArea
        } else {
          return;
        }
      }
    }
  }

  function insertBlock(resultBlockArea, curArea) {
    resultBlockArea.forEach((blockArea, blockAreaIndex) => {
      insertArea(blockArea, curArea, blockAreaIndex, resultBlockArea);
    })
    resultBlockArea.push([curArea]);
  }

  let resultBlockArea = [[playerTimeRange[0]]];

  for (let i = 1; i < playerCount; i++) {
    const curArea = playerTimeRange[i];
    insertBlock(resultBlockArea, curArea);
  }

  let maxPlayer = 0;
  resultBlockArea.forEach(blockArea => {
    maxPlayer = Math.max(maxPlayer, blockArea.length);
  })

  return maxPlayer;
}


// console.log(MaxPlayers(3, [[1, 5], [2, 3], [4, 6]]))
// console.log(MaxPlayers(3, [[2, 3], [4, 6], [3, 4]]))
// console.log(MaxPlayers(1, [[2, 3]]))
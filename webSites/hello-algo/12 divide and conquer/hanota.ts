const initHanota = (n: number): number[][] => {
  const initArr: number[] = []
  while (n > 0) {
    initArr.push(n--)
  }
  return [initArr, [], []]
}

let step = 0
const moveHanota = (cur: number[], buf: number[], tar: number[], deep: number) => {
  if (deep === 0) {
    return
  }
  moveHanota(cur, tar, buf, deep - 1)
  tar.push(cur.pop() || -1)
  console.log(`move step ${step++} deep ${deep}:\t\t[${curInit}],\t\t[${bufInit}],\t\t[${tarInit}]`);
  moveHanota(buf, cur, tar, deep - 1)
}

const [curInit, bufInit, tarInit] = initHanota(3)
console.log({ curInit, bufInit, tarInit });
moveHanota(curInit, bufInit, tarInit, curInit.length)
console.log({ curInit, bufInit, tarInit });
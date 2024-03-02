const countSortComplete = <T extends { [key: string]: any }>(objList: T[], sort: keyof T): T[] => {
  const m = Math.max(...objList.map(i => i[sort]))

  const arr = new Array(m + 1).fill(0);
  for (const item of objList) {
    arr[item.level]++
  }

  for (let i = 0; i < m; i++) {
    arr[i + 1] += arr[i]
  }

  const res: T[] = []
  for (let i = objList.length - 1; i >= 0; i--) {
    const curObj = objList[i];
    const curNum = curObj.level;
    // 找到当前元素在结果列表中的位置
    res[arr[curNum] - 1] = curObj;
    // 占用了一格，数字减小，给前面的相同级别的对象留位置
    arr[curNum]--;
  }

  for (let i = 0; i < objList.length; i++) {
    objList[i] = res[i];
  }

  return objList
}

const sortObj = [
  { name: 'name0', level: 1 },
  { name: 'name1', level: 0 },
  { name: 'name2', level: 1 },
  { name: 'name3', level: 2 },
  { name: 'name4', level: 0 },
  { name: 'name5', level: 4 },
  { name: 'name6', level: 0 },
  { name: 'name7', level: 2 },
  { name: 'name8', level: 2 },
  { name: 'name9', level: 4 }
]

console.log(countSortComplete(sortObj, 'level'));
